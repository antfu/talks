const take = ['carbon', 'ri', 'ph', 'tabler', 'catppuccin']

const icons = (await Promise.all(take.map(async (name) => {
  const collection = await import(`@iconify/json/json/${name}.json`).then(r => r.default)
  const list = Object.keys(collection.icons)
    .map(i => `i-${name}:${i}`)
    .filter(i => !i.match(/-(bold|fill|outline|light|thin)$/) && !i.match(/brand|logo|folder/))

  shuffle(list)
  return list.slice(0, 100)
})))
  .flat()

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

shuffle(icons)

console.log(icons.slice(0, 100))
