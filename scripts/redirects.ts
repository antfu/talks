import fs from 'node:fs/promises'
import fg from 'fast-glob'

const packageFiles = (await fg('*/src/package.json', {
  onlyFiles: true,
})).sort()

const bases = await Promise.all(
  packageFiles.map(async (file) => {
    const json = JSON.parse(await fs.readFile(file, 'utf-8'))
    const command = json.scripts?.build
    if (!command)
      return
    const base = command.match(/ --base (.*?)\s/)?.[1]
    if (!base)
      return
    return base
  }),
)

const redirects = bases
  .filter(base => base)
  .map(base => `
[[redirects]]
  from = "${base}*"
  to = "${base}index.html"
  status = 200`)
  .join('\n')

const content = `
[build.environment]
  NODE_VERSION = "20"
  PLAYWRIGHT_BROWSERS_PATH = "0"

[build]
  publish = "dist"
  command = "pnpm run build"

${redirects}

[[redirects]]
  from = "/"
  to = "https://antfu.me/talks"
  status = 302
`

await fs.writeFile('netlify.toml', content, 'utf-8')
