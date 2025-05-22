import fs from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import fg from 'fast-glob'

const packageFiles = (await fg('*/src/package.json', {
  onlyFiles: true,
})).sort()

const bases = (await Promise.all(
  packageFiles.map(async (file) => {
    const talkRoot = dirname(dirname(file))
    const json = JSON.parse(await fs.readFile(file, 'utf-8'))
    const pdfFile = (await fg('*.pdf', {
      cwd: resolve(process.cwd(), talkRoot),
      onlyFiles: true,
    }))[0]
    const command = json.scripts?.build
    if (!command)
      return
    const base = command.match(/ --base (.*?)\s/)?.[1]
    if (!base)
      return
    return {
      dir: talkRoot,
      base,
      pdfFile,
    }
  }),
))
  .filter(Boolean)

const redirects = bases
  .flatMap(({ base, pdfFile, dir }) => {
    const parts: string[] = []

    if (pdfFile) {
      parts.push(`
[[redirects]]
from = "${base}pdf"
to = "https://github.com/antfu/talks/blob/main/${dir}/${pdfFile}?raw=true"
status = 302

[[redirects]]
from = "/${dir}/pdf"
to = "https://github.com/antfu/talks/blob/main/${dir}/${pdfFile}?raw=true"
status = 302`)
    }

    parts.push(`
[[redirects]]
from = "${base}src"
to = "https://github.com/antfu/talks/tree/main/${dir}"
status = 302`)

    parts.push(`
[[redirects]]
from = "${dir}"
to = "https://talks.antfu.me${base}"
status = 301

[[redirects]]
from = "${base}*"
to = "${base}index.html"
status = 200`)

    return parts
  })
  .join('\n')

const content = `
[build]
publish = "dist"
command = "pnpm run build"

[build.environment]
NODE_VERSION = "22"
PLAYWRIGHT_BROWSERS_PATH = "0"

${redirects}

[[redirects]]
from = "/"
to = "https://antfu.me/talks"
status = 302
`

await fs.writeFile('netlify.toml', content, 'utf-8')
