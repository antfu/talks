---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
growSize: 1.5
---

<div mt--2>
<h1 flex="~ col">
<div>How do I manage</div>
<div flex="~ gap3" items-center><div i-simple-icons-github />GitHub Notifications</div>
</h1>

<div uppercase tracking-widest op50>
Anthony Fu
</div>
</div>

<div abs-bl mx-13 my-12 flex="~ col" text-sm text-left>
  <div>GitHub Maintainer Summit</div>
  <div text-sm opacity-50>May 17th, 2023</div>
</div>

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Anthony Fu

<div class="leading-10 opacity-80">
Core team member of Vue, Vite and Nuxt.<br>
Creator of VueUse, Vitest, UnoCSS, Slidev and Elk.<br>
Working at NuxtLabs.<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4/>
  <div><a href="https://m.webtoo.ls/@antfu" target="_blank" class="border-none! font-300">antfu@webtoo.ls</a></div>
  <div i-ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-40/>

<div flex="~ gap2">

</div>

---
layout: quote
class: text-center
---

# Notification-driven Development

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

<h1 class="text-5xl!" w-200>I Get</h1>
<h1 class="text-5xl!">A Lot of Notifications</h1>
<h1 class="text-5xl! font-bold">Everyday</h1>

---
layout: center
growX: -10
growY: 50
growSize: 0.75
---

<img src="/notifications-count.png" w-100 mix-blend-lighten filter-contrast-120 />

---
layout: center
growX: 50
growY: 0
growSize: 1.5
clicks: 4
---

<h1 class="text-5xl!" v-click="1" w-200>I <span transition-all duration-300 :class="$slidev.nav.clicks === 4 ? 'line-through op50' : ''">do</span> <span v-click="4">try to</span></h1>
<h1 class="text-5xl! font-bold" v-click="2">Inbox-Zero</h1>
<h1 class="text-5xl!" v-click="3">Everyday</h1>


---
layout: fact
growX: 0
growY: 50
---

<h1 class="text-4xl!">What Does Empty Inbox Looks Like?</h1>

---
layout: center
growX: -10
growY: -10
class: text-center
---

<img src="https://github.githubassets.com/images/modules/notifications/inbox-zero-dark.svg" />

<h4 mt-6 mb--4 font-bold>All caught up!</h4>
<p op50 text-sm>
Take a break, write some code, do what you do best.
</p>

---
layout: center
growX: 50
growY: 0
---

# Why Inbox-Zero?

<v-clicks>

- Being responsive
- Keep maintenance work in control
- Don't accumulate work
- Know what to focus on

</v-clicks>

---
layout: fact
growX: 50
growY: 0
growSize: 1.5
---

# Reduce Notifications Created
contribution guide, issue form/templates, etc

<div class="number-bg">0</div>

---

# <span font-mono>.github</span> Magic Repo

<img src="/dot-github-repo.png" w-100 rounded-md border="~ main" />


---
layout: fact
growX: 50
growY: 120
growSize: 1.5
clicks: 1
---

<h1 :class="$slidev.nav.clicks === 1 ? 'line-through op50!' : ''"><span text-transparent text-8xl bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600>TURN OFF</span> Notifications</h1>

<p :class="$slidev.nav.clicks === 1 ? 'line-through op20!' : ''">and call it a day</p>

---
layout: fact
growX: 50
growY: 0
growSize: 1.5
---

# Seek for Notifications
don't let them seek for you

<div class="number-bg">1</div>

---
layout: center
---

<v-clicks depth="2">

- Turn off Email & App **Push** notifications

- Look for notifications **proactively**

  - Use GitHub Notifications Inbox

  - Or try [volta.net](https://volta.net) <Volta h-4 inline-block ml1 />

</v-clicks>


---
layout: fact
growX: 0
growY: 50
growSize: 1.5
---

# Group your Notifications
by repository, instead of time

<div class="number-bg">2</div>

---
growX: 110
growY: -10
clicks: 2
---

<img absolute left-10 top-10 v-click="0" src="/notifications-raw.png" w-150 mix-blend-plus-lighter />
<Arrow x1="600" y1="200" x2="550" y2="75" text-lime shadow v-if="$slidev.nav.clicks === 1" />
<img absolute left-10 top-10 v-click="2" src="/notifications-grouped.png" w-150 />


---
layout: fact
growX: 90
growY: 90
growSize: 1.5
---

# What to Focus
filter out the noise, prioritize

<div class="number-bg">3</div>


---
layout: center
---

<v-clicks depth="2">

- Dismiss issues/PRs that are **closed/merged**<br><span op50 translate-y--10px inline-block>(when not participant in; trust your team)</span>
- Dismiss notifications of
  - Bots 🤖
  - New commits pushed to PRs
  - GitHub Actions cancelled
  - etc.

</v-clicks>

---
layout: center
growX: 50
growY: 100
growSize: 1.1
---

<div text-center mt4 op50 italic font-serif mb2>I wrote a userscript:</div>
<div flex="~ gap-2 items-center" text-3xl font-mono>
<div i-simple-icons-github/> <a href="https://github.com/antfu/refined-github-notifications">antfu/refined-github-notifications</a>
</div>
<div text-center mt4 op50 italic font-serif v-click>It's hacky and opinionated!</div>

---
growX: 110
growY: 110
---

<img absolute left-10 top-10 src="/notifications-grouped.png" w-150 />
<img absolute left-10 top-10 v-click src="/notifications-refined.png" w-150 />

<div absolute left-165 right-5 top-20>
<v-clicks>

- Automatically dismiss unrelated notifications
- <b text-hex-a371f7>Colorize</b> notifications type
- Single-instance notifications tab
- Auto refresh

</v-clicks>
</div>


---
layout: center
---

# Wishlist to GitHub

<v-clicks depth="2">

- GitHub Notifications API, **Please**!
- Fine-grained notifications filter
  - Bots, type of notifications, random ping, etc.
- More interactive notifications inbox
  - Live updates
  - Avoid hard refreshes

</v-clicks>

---
layout: center
---

<div w-100>

<h1 mb-2>Warping up</h1>

<v-clicks>

- Keep maintenance scope manageable, don't let it grow out of control.

- **Reply and forget** - new notifications will come up once you get replies.

- Use tools to help you focus.

- **Enjoy it!**

</v-clicks>

</div>

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [antfu.me](https://antfu.me)
