import fs from 'node:fs'
import fsp from 'node:fs/promises'
import { $, execa } from 'execa'

if (!fs.existsSync('yak-shaving-map')) {
  await $`git clone https://github.com/antfu/yak-shaving-map --depth=1`
}
else {
  await execa(`git`, ['pull'], {
    cwd: './yak-shaving-map',
    stdio: 'inherit',
  })
}

await fsp.rm('yak-shaving-map/tsconfig.json', { force: true, recursive: true })
