<template>
  <div py4>
    <div grid="~ cols-4 rows-3 gap1" text-center items-center justify-center h-full class="group">
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-green">
        <div i-tabler-icons text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>core</div>
        <div text-sm op80>Core functions of VueUse</div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-lime">
        <div i-tabler-artboard text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>shared</div>
        <div text-sm op80>Internal functions of VueUse</div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-fuchsia">
        <div i-tabler-puzzle text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>components</div>
        <div text-sm op80>Renderless components</div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-violet">
        <div i-tabler-math text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>math</div>
        <div text-sm op80>Reactive Math Utilities</div>
      </a>
      <a href="https://github.com/vueuse/head" target="_blank" class="box !hover:text-rose">
        <div i-tabler-affiliate text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>head</div>
        <div text-sm op80>Document head manager</div>
        <div text-sm op80>by <a href="https://github.com/egoist">@egoist</a></div>
      </a>
      <a href="https://github.com/vueuse/sound" target="_blank" class="box !hover:text-amber">
        <div i-tabler-volume text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>sound</div>
        <div text-sm op80>Composable for playing sound</div>
        <div text-sm op80>by <a href="https://github.com/Tahul">@Tahul</a></div>
      </a>
      <a href="https://github.com/vueuse/motion" target="_blank" class="box !hover:text-blue">
        <div i-tabler-arrows-random text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>motion</div>
        <div text-sm op80>Vue components in motion</div>
        <div text-sm op80>by <a href="https://github.com/Tahul">@Tahul</a></div>
      </a>
      <a href="https://github.com/vueuse/gesture" target="_blank" class="box !hover:text-red">
        <div i-tabler-hand-move text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>guesture</div>
        <div text-sm op80>Composables for interactive</div>
        <div text-sm op80>by <a href="https://github.com/Tahul">@Tahul</a></div>
      </a>
      <a href="https://github.com/vueuse/schema-org" target="_blank" class="box !hover:text-teal">
        <div i-tabler-schema text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>schema-org</div>
        <div text-sm op80>Schema.org graphs for Vue</div>
        <div text-sm op80>by <a href="https://github.com/harlan-zw">@harlan-zw</a></div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-pink">
        <div i-tabler-apps text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>integrations</div>
        <div text-sm op80>Integrations for popular packages</div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-yellow">
        <div i-tabler-brand-firebase text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>firebase</div>
        <div text-sm op80>Firebase integrations</div>
      </a>
      <a href="https://github.com/vueuse/vueuse" target="_blank" class="box !hover:text-purple">
        <div i-tabler-brand-javascript text-4xl mxa mb1 />
        <div font-mono><span op40 text-sm>@vueuse/</span>rxjs</div>
        <div text-sm op80>RxJS integrations</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.box {
  --at-apply: '!border-none px2 py4 transition-all duration-600 rounded !hover:op100 group-hover:op50';
}
</style>
