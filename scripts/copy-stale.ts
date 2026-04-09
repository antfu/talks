import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const staleDir = path.join(root, 'dist-stale')
const distDir = path.join(root, 'dist')

if (!fs.existsSync(staleDir)) {
  console.log('No dist-stale directory found, skipping cache restore')
  process.exit(0)
}

fs.mkdirSync(distDir, { recursive: true })

let copied = 0
for (const year of fs.readdirSync(staleDir)) {
  const yearDir = path.join(staleDir, year)
  if (!fs.statSync(yearDir).isDirectory()) continue

  for (const talk of fs.readdirSync(yearDir)) {
    const src = path.join(yearDir, talk)
    const dest = path.join(distDir, year, talk)
    if (!fs.statSync(src).isDirectory()) continue
    if (!fs.existsSync(path.join(src, 'index.html'))) continue

    fs.cpSync(src, dest, { recursive: true })
    copied++
  }
}

console.log(`Restored ${copied} cached builds from dist-stale/`)
