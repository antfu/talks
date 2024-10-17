<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import seedrandom from 'seedrandom'

const rng = seedrandom('11213343')
const { $clicks } = useSlideContext()

const icons = [...new Set([
  'ph-check-circle-duotone text-green',
  'i-tabler-chart-candle',
  // Some random icons from Iconify
  'i-mdi-lightbulb-on-outline text-yellow',
  'i-tabler-campfire text-orange',
  'i-catppuccin-nuxt',
  'i-catppuccin-vue',
  'i-catppuccin-typescript-def',
  'i-ri-at-line text-violet',
  'i-svg-spinners-clock text-blue',
  'i-ph:fork-knife-duotone',
  'i-twemoji-smiling-face',
  'i-twemoji-smiling-cat-with-heart-eyes',
  'i-twemoji-sparkles',
  'i-twemoji-sparkling-heart',
  'i-twemoji-flushed-face',
  'i-svg-spinners-3-dots-move',
  'i-ph:racquet-duotone',
  'i-tabler:stairs-down',
  'i-ri:list-ordered',
  'i-ph:identification-badge-duotone',
  'i-tabler:camera-bolt',
  'i-carbon:hashtag',
  'i-catppuccin:folder-api',
  'i-catppuccin:folder-debug-open',
  'i-carbon:phone-outgoing',
  'i-ri:progress-3-line',
  'i-tabler:adjustments-filled',
  'i-ph:exclude-duotone',
  'i-ph:umbrella-duotone',
  'i-carbon:chart-network',
  'i-ph:shopping-cart',
  'i-carbon:hanging-protocol',
  'i-catppuccin:vitest',
  'i-carbon:cloud-upload',
  'i-ri:git-pr-draft-line',
  'i-tabler:square-root-2',
  'i-tabler:transform-point-bottom-right',
  'i-ri:layout-top-line',
  'i-carbon:ibm-cloud-pak-applications',
  'i-ri:menu-fold-4-line',
  'i-catppuccin:folder-assets-open',
  'i-tabler:currency-peso',
  'i-tabler:plug-connected-x',
  'i-carbon:new-tab',
  'i-ph:arrows-clockwise',
  'i-ri:oil-line',
  'i-ri:underline',
  'i-ri:emotion-line text-amber',
  'i-ph:queue',
  'i-ph:bell-simple-slash',
  'i-ri:speaker-line',
  'i-carbon:send-backward',
  'i-carbon:increase-level',
  'i-ri:layout-3-line',
  'i-ph:browser',
  'i-carbon:calculation',
  'i-ph:user-circle-check',
  'i-tabler:cone',
  'i-ph:drone-duotone',
  'i-uim-check-circle text-green',
  'i-ic-baseline-blur-on',
  'i-uim-rocket text-orange',
  'i-uim-circle-layer',
  'i-uim-object-group',
  'i-tabler:triangle',
  'i-ph:image-duotone',
  'i-tabler:player-track-prev',
  'i-ph:scribble-loop-duotone',
  'i-ph:flying-saucer-duotone text-cyan',
  'i-ri:memories-line',
  'i-ri:swap-2-line',
  'i-tabler:database-edit text-purple',
  'i-ph:cell-signal-x-duotone',
  'i-carbon:ai-results text-yellow-1',
  'i-carbon:network-2',
  'i-tabler:timeline-event',
  'i-tabler:irregular-polyhedron',
  'i-tabler:cards',
  'i-ph:house text-violet',
  'i-ph:toolbox',
  'i-tabler:square-rotated',
  'i-ph:envelope-open-duotone text-blue',
  'i-tabler:message-filled',
  'i-ri:square-line',
  'i-tabler:circle-arrow-right-filled',
  'i-ri:expand-left-line',
  'i-carbon:camera',
  'i-ph:picture-in-picture-duotone',
  'i-tabler:cast-off',
  'i-ph:thumbs-down',
  'i-carbon:distribute-vertical-center',
  'i-ri:chat-thread-line',
  'i-carbon:bookmark',
  'i-carbon:cloud-satellite',
  'i-carbon:delete',
  'i-carbon:text-indent-less',
  'i-catppuccin:xml',
  'i-catppuccin:sass',
  'i-tabler:message-circle-pause',
  'i-ri:reset-left-line',
  'i-tabler:git-branch',
  'i-catppuccin:postcss',
  'i-carbon:ibm-cloud-bare-metal-server',
  'i-carbon:cube',
  'i-carbon:result',
  'i-catppuccin:key',
  'i-tabler:user-pentagon',
  'i-ph:graduation-cap-duotone',
  'i-ri:user-line',
  'i-catppuccin:vite',
  'i-ph:git-diff',
  'i-catppuccin:unocss',
  'i-ri:hashtag',
  'i-tabler:mail-opened',
  'i-carbon:play-filled-alt',
  'i-catppuccin:file',
  'i-ph:cloud-duotone',
  'i-catppuccin:rollup',
  'i-catppuccin:webpack',
  'i-svg-spinners-blocks-shuffle-3',
  'i-ri:login-circle-line',
  'i-catppuccin:eslint',
  'i-catppuccin:stackblitz',
  'i-twemoji-laptop',
  'i-carbon:pentagon-left-solid',
  'i-ph:wifi-slash-duotone',
  'i-ph:phone-x',
  'i-ri:sketching',
  'i-ri:route-line',
  'i-ph:star-four',
])]

function getPos() {
  const length = rng() * 70
  const angle = rng() * Math.PI * 2
  return {
    x: Math.cos(angle) * length,
    y: Math.sin(angle) * length,
    rotate: (rng() - 0.5) * 30,
    size: rng() + 1,
    opacity: Math.min(1, rng() * 0.3 + ((length - 10) / 60)),
    delay: rng() * 1000,
  }
}

function distance(a: { x: number, y: number }, b: { x: number, y: number }) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
}

const target: { x: number, y: number, rotate: number, size: number, opacity: number, delay: number }[] = []

function hasCollision(pos: { x: number, y: number }) {
  // Title area
  if (Math.abs(pos.x) < 17 && pos.y > -20 && pos.y < 10)
    return true
  // Subtitle area
  if (Math.abs(pos.x) < 32 && pos.y > 5 && pos.y < 21)
    return true
  // Outbound
  if (Math.abs(pos.x) > 55 || Math.abs(pos.y) > 55)
    return true
  const d = distance(pos, { x: 0, y: 0 })
  if (d > 62 || d < 10)
    return true
  return target.some(t => Math.abs(distance(t, pos)) < 6.5)
}

const MAX_ITER = 500
for (let i = 0; i < icons.length; i++) {
  const pos = getPos()
  let iter = 0
  while (hasCollision(pos) && iter++ < MAX_ITER) {
    Object.assign(pos, getPos())
  }
  if (iter >= MAX_ITER) {
    console.error('Failed to find a position for icon', i)
    continue
  }
  target.push(pos)
}
</script>

<template>
  <div absolute inset-0 z--1>
    <div
      v-for="(t, i) in target"
      :key="icons[i]"
      transition-all duration-600
      :style="
        [
          $clicks < 2 ? {
            left: `${t.x * 0.2 + 50}%`,
            top: `${t.y * 0.2 + 50}%`,
            opacity: 0,
          } : {
            left: `${t.x + 50}%`,
            top: `${t.y + 50}%`,
            transform: `rotate(${t.rotate}deg) scale(${t.size})`,
            opacity: t.opacity,
          },
          {
            transitionDelay: `${t.delay}ms`,
          },
        ]"
      class="absolute origin-center"
    >
      <div :class="icons[i]" />
    </div>
  </div>
</template>
