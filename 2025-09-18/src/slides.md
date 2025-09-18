---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Make Tools That People Love
remoteAssets: true
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
Good morning everyone! How are you doing?

It's my great honor to be here giving the talk and meeting you all.
-->

---
layout: intro
class: pl-25
glowSeed: 14
---

<h1 font-serif>Anthony Fu</h1>

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {Vite} {Vue} and {Nuxt}<br>
Creator of {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
Maintainer of {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs} / {Vercel}<br>
Base in 🇯🇵 Tokyo

</div>

<div mt-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://m.webtoo.ls/@antfu" target="_blank" class="border-none! font-300">antfu@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full absolute top-38 right-15 w-40 />


---
clicks: 7
zoom: 0.75
layout: none
class: 'flex h-full w-full'
glow: topmost
glowSeed: 18
---

<RenderWhen context="visible">
  <YakMap />
</RenderWhen>

<div flex="~ items-center gap-3" fixed right-0 top-0 rounded-bl-2rem p5 backdrop-blur-md>
  <div text-5xl>
    🐃
  </div>
  <div flex="~ col">
    <a href="https://antfu.me" text-sm op50 hover:underline target="_blank">Anthony Fu's</a>
    <a text-2xl href="https://github.com/antfu/yak-shaving-map" target="_blank" hover:underline>
      Yak Map
    </a>
  </div>
</div>

<!--
For a little bit more about my story, I started my journey in Open Source with a personal project called BreadSplit in college.

[click] From that, I created a VS Code extension called i18n-ally and then made VueUse, the utilities library for Vue. Since then, I've started contributing much more to open source projects, [click] like Vue and Vite. I've built tools like [click] Slidev, joined [click] the Nuxt team, and then created [click] Vitest, etc. And I kinda ended up with [click] probably too many projects. [click]

This is the graph I made to show the relationships of the projects I worked on. Perhaps some of you are already familiar with or have used some of those projects. What I want to say is that I feel extremely lucky to be able to work on these projects, make them useful for the community, and eventually get this great opportunity to stand here and give this talk to you.
-->

---
layout: cover
---

# Make Tools People Love {.font-400!.font-serif!}

<div text-2xl mt--1 op50>From Anthony's Experience on Open Source</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <img src="/logo-squiggleconf.png" h-10 alt="SquiggleConf" />
  <div text-sm opacity-50>Sep. 18th 2025</div>
</div>

<!--
So, for today's topic, although I might be a bit overreaching to take this ambitious topic, I'd like to share with you my experience and thoughts on how we could make tools that people love.

I hope it can give you some insights or inspiration on your own journey.
-->

---
layout: center
class: 'text-center'
---

<TipTitle title="I Don't Know" number="1" description="We can't Know without Trying" />

<!--
So, let's dive straight into the topic. When it comes to making tools that people love, the very first tip I would give is - [click] I don't know. (pause)

Well, I mean, I really don't know. We genuinely don't know.

There's no such thing as "10 tips to success," and there's no formula to guarantee that we can definitely make people love our tools.

[click] What we have to do is try and error, work with the community, hear their feedback, verify, evaluate, and iterate.
-->

---
class: 'text-center h-full'
---

<div grid="~ rows-3 gap-2" h-full py20>
  <div ma text-2em font-serif v-click>Try & Error</div>
  <div ma text-2em font-serif v-click>Lower Your Expectations</div>
  <div ma text-2em font-serif v-click>Verify with the Community</div>
</div>

<!--
The real tip [click] I would emphasize here is to try more and don't be afraid to fail.

Even though I've made quite a lot of tools people use, I actually have way more tools that were discontinued or didn't work out.

And that's totally fine for me as I consider them as a learning and experimenting process.

[click] For that, I would also say, don't set too high expectations. It's easy for us to get excited about the idea we are working on, but they might not necessarily be the best fit for the community.

[click] Then I would suggest establishing a mechanism to verify your idea with the community. Then we can know where to improve and iterate.

So for the following tips, I'll share some practical tips that I learned from my own experience.
-->

---
layout: center
class: 'text-center'
---

<TipTitle 
  title="Solve Your Own Problems"
  description="Build from your own pain points. Eat your own dogfood."
  number="2" 
/>

<!--
The second tip I would give is to [click] solve your own problems first. You should be your first user of your tool, or you should be the reason why you made the tool in the first place.

[click] Build from your own pain points and eat your own dogfood.
-->

---
glowSeed: 10
---

# Build from your own pain points. {.font-serif}

<div v-click op75 mt1 text-sm>It can be a great way to come up with ideas and provide strong motivation</div>

<div flex="~ col gap-4" py4>

<span v-click>
  <div flex="~ inline" text-blue font-bold font-serif>Demand</div><br>
  <span text-blue2>Start from your own needs, with a deeper <br>understanding of the problem</span>
</span>
<span v-click>
  <div flex="~ inline" text-rose font-bold font-serif>Motivation</div><br>
  <span text-rose2>Solve your own problems, and maybe help others</span>
</span>
<span v-click>
  <div flex="~ inline" text-yellow font-bold font-serif>Validation</div><br>
  <span text-yellow1>Your needs are likely to be others' needs,<br>validate your ideas through the community</span>
</span>
<span v-click>
  <div flex="~ inline" text-green font-bold font-serif>Iterating</div><br>
  <span text-green2>Refine the design with discussion and <br>contributions from community</span>
</span>

</div>

<div absolute left-150 top-20>
  <div
    absolute w-50 h-50 left-0 top-28 border="~ blue rounded-full"
    bg-blue:20 text-xl text-blue flex="~ items-center justify-center"
    v-click="2"
  >
    <div :class="{pr15: $clicks>2, pt8: $clicks>3}" transition-all duration-400 text-center>Your<br>Strength</div>
  </div>
  <div
    absolute w-50 h-50 left-34 top-28 border="~ rose rounded-full"
    bg-rose:20 text-xl text-rose flex="~ items-center justify-center"
    v-click="3"
  >
    <div pl15 :class="{pt8: $clicks>3}" transition-all duration-400 text-center>Your<br>Passion</div>
  </div>
  <div
    absolute w-50 h-50 left-17 top-0 border="~ amber rounded-full"
    bg-amber:20 text-xl text-amber flex="~ items-center justify-center"
    v-click="4"
  >
    <div pb10 text-center>Community<br>Needs</div>
  </div>
  <Arrow v-click="5" x1="160" y1="340" x2="170" y2="175" color-green  />
  <div
    v-click="5"
    absolute top-85 left-10 ws-nowrap
    border="~ green rounded-12px" px3 py1
    bg-green:20 text-lg text-green text-center
  >Practical and<br>Sustainable Projects</div>
</div>

<!--
I'd say that building from your own pain points is [click] a great way to come up with ideas and provide you with strong motivation to work on it.

[click] From the perspective of needs, because it comes from the problems we encounter ourselves, starting from our own needs allows us to have a deeper understanding of the problem and potential solutions.

[click] And our motivation comes from solving our own problems, with the possibility that it might also help others.

[click] Furthermore, our needs are likely to be shared by others, and we can validate our ideas with the community.

[click] Finally, through community discussions and contributions, we can iterate on our designs and improve our solutions to serve even broader scenarios.

By doing so, we can gather the essential elements for the continuous development of projects - what we are skilled at and enjoy, and what the community needs.

Hopefully this can help to make the project practical and sustainable. 
-->

---
layout: center
class: 'text-center'
---

<TipTitle
  title="Progressive!"
  description="Reduce the friction."
  number="3"
/>

<!--
Then the third tip I would give is to be [click] progressive.

[click] Progressive means we should reduce the friction for people to onboard and use our tools.

It's meaningless to craft a great tool that no one knows how to use, right?
-->

---
glow: right
---

# Progressive On {.font-serif}

<div grid="~ cols-[max-content_1fr] gap-4 gap-y-8" pt10 ml10>

<div text-1.2em text-white:50 text-right v-click>
  <span flex="inline gap-1 items-center" text-lime font-serif><div i-ph-book-bookmark-duotone />Onboarding</span>
</div>
<div>
  <div text-1.2em flex="~ gap-2 items-center" text-lime2 v-click>
    Making it easy to understand and get started
  </div>
  <div op75 v-click>Describe your tool clearly within one sentence</div>
</div>

<div text-1.2em text-white:50 text-right v-click>
  <span flex="inline gap-1 items-center" text-yellow font-serif><div i-ph-lightbulb-filament-duotone />Features</span>
</div>
<div>
  <div text-1.2em flex="~ gap-2 items-center" text-yellow2 v-click>
    Starts minimal and grows with users
  </div>
  <div op75 v-click>Make your tool useful even in the simplest case</div>
</div>

<div text-1.2em text-white:50 text-right v-click>
  <span flex="inline gap-1 items-center" text-purple font-serif><div i-ph-puzzle-piece-duotone />Extensible</span>
</div>
<div>
  <div text-1.2em flex="~ gap-2 items-center" text-purple2 v-click>
    Allows community to enhance the tool and the ecosystem
  </div>
  <div op75 v-click>Make a plugin system for your tool</div>
</div>

<div text-1.2em text-white:50 text-right v-click>
  <span flex="inline gap-1 items-center" text-rose font-serif><div i-ph-warning-octagon-duotone />Breaking Changes</span>
</div>
<div>
  <div text-1.2em flex="~ gap-2 items-center" text-rose2 v-click>
    Provide middle stages for migration
  </div>
  <div op75 v-click>Deprecate & Warning → Forward/Backward Compatibility → Remove</div>
</div>

</div>

<!--
Specifically, I think we should be progressive on the following aspects:

[click] The first would be onboarding, [click] we should make it easy to understand and get started. [click] The tip I would give is to see if you can describe your tool clearly within one sentence. If you can't, you might have made the tool too complicated.

[click] Then we should be progressive on features, [click] start minimal and grow with users. [click] We should make the tool useful even in the simplest cases. For example, Vite can start with a single `index.html` file and no more. Nuxt can start with a single `app.vue` file, etc. It's easy to pack as many features as possible into our tool to make it more useful, but it could be overwhelming for users to start with a lot of features. We need to find a way to reveal features as users need them.

[click] Then it's about extensibility, [click] to allow the community to enhance the tool and enrich the ecosystem. [click] We should make a plugin system for users to extend it with their needs.

[click] Finally, we should be progressive on breaking changes, [click] to provide middle stages for migration. This is probably the most important one to me in software development. Breaking changes are necessary for software to improve, but how we do that is also crucial. [click] A common practice is to deprecate the old features and provide a warning for users to migrate to the new features. Then we could provide forward/backward compatibility for users to opt-in to the new behavior in legacy versions, or stay on the old behavior in the new versions, for them to migrate at their own pace. And finally, we could remove the old features after a certain period of time. Each of these steps would deserve a major version and should be taken slowly.
-->

---
layout: center
class: 'text-center'
---

<TipTitle
  title="Extensible"
  description="Plugins system. Community driven."
  number="4"
/>

<!--
So we have mentioned a bit about extensibility in the previous slide.

So the fourth tip I would give is [click] to be extensible, [click] to make a plugin system for your tool and allow the community to enhance it.
-->

---
layout: center
class: 'text-center'
---

<div font-serif text-3em>All Software</div>
<div text-1.6em text-lime>should provide <span v-mark="1">a Plugin System</span></div>

<!--
I am going to give a very bold statement here,

that in my opinion,

all software,

[click] should provide some kind of plugin system. (pause)
-->

---
layout: center
class: 'text-center'
---

<div font-serif text-3.5em mt--10>Scripts <span text-2rem op50>vs</span> Software</div>

<div v-click absolute top-75 left-71 text-orange3 text-1.4em>
  One-off
</div>

<div v-click absolute top-75 left-148 text-lime3 text-1.4em>
  Tools
</div>

<div v-click absolute left-0 right-0 bottom-20 italic font-serif text-center>
  "Software is logic that adapts"
</div>

<!--
Before I explain it, I wanted to first give my understanding of the definition of the words "Scripts" and "Software".

How do you feel about these words? (pause)

Even though Scripts and Software are technically the same thing under the hood, they are also different when you look at them from the perspective of users.

[click] I would describe Scripts as a one-off tool that you use to solve a specific problem, and most of the time, you throw them away after you use them. They can still be very useful and save you a lot of time, but the code itself is usually not reusable.

[click] Software, on the other hand, is a tool that you use to solve a general problem, and you can use it for a long time. You can have it adapt to different scenarios for others with different needs.

[click] So I would say, Software is logic that adapts. The adaptability gives life to the code we wrote and benefits others in the long run. When we want to build tools for people to use, we would want to try to make our tools less scripts but more software.

Why are we talking about this? I think extensibility is one of the very important ways to make software have more adaptability. For extensibility, we usually mean a plugin system.
-->

---

# Benefits {.font-serif}

of Having a Plugins System

<div h-15 />

<v-clicks>

- Allow community to build features without being blocked.

- Verify ideas without breaking changes to core.

- Better architecture.

- Maximizing the value of being a tool.

</v-clicks>

<!--
Talking about the benefits of having a plugin system,

[click] I would say, it allows you to build a community around your tool. And it would give the community power to build extensible features without being blocked by you or the maintainers. This also means it will scale better with the power of the community.

[click] Then, as the author or the maintainer, you can also leverage the plugin system to experiment and verify your ideas without breaking changes to the core. You can implement an experimental feature as an opt-in plugin for people to try it and iterate it freely. Once it's stable enough, you can then consider if you want to merge it to the core, etc.

[click] Then, making a plugin system, especially a powerful one, would also help you design a better architecture for your tool. You can have a more flexible and extensible architecture, which might also be more maintainable in the long run.

[click] Finally, as we mentioned before, having a plugin system would help your tool to be more extensible and cover more use cases, which would benefit more people and maximizing the value.
-->

---
layout: center
class: 'text-center'
---

<TipTitle
  title="Make Core Feature Plugins" 
  description="To verify you have a powerful plugin API."
  number="4.1"
/>

<!--
With that in mind, I would say a good way to build a powerful plugin system is to [click] make your core features as plugins.

[click] This would put you in the position of both API designer and API consumer at the same time, which would help you design a more powerful plugin system.
-->

---

<div 
  absolute left-0 right-0 top-0 bottom-0 grid="~ cols-[1fr_max-content_1fr] gap-2" px10 items-center
  transition-all duration-400
  :class="$clicks >= 2 ? 'pr-80' : ''"
>
  <div text-center>
    <div relative w-max ma p2 mb4>
      <div i-twemoji:high-voltage text-4em />
      <div i-logos-vue absolute text-1.5rem right-0 bottom-0 />
    </div>
    <div font-serif text-2rem>Vite v0.x</div>
    <span text-green>Opinionated Dev Server <b font-bold underline>for Vue</b></span>
  </div>

  <div i-ph:arrow-fat-lines-right-duotone text-2em op50 v-click />

  <div text-center v-after>
    <div relative w-max ma p2 mb4>
      <div i-logos-vitejs text-4em />
    </div>
    <div font-serif text-2rem>Vite v2.0+</div>
    <span text-purple>Next Generation Frontend Tooling</span>
  </div>
</div>

 <div absolute right-10 top-42 flex="~ gap-2 col" >
  <div border="~ green:50 rounded-lg" bg-green:15 px2 text-green flex="~ items-center gap-2" v-click>
    <div i-logos-vue w-1em />
    Vue as a plugin
  </div>
  <div border="~ blue:50 rounded-lg" bg-blue:15 px2 text-blue flex="~ items-center gap-2" v-click>
    <div i-logos-react w-1em />
    React as a plugin
  </div>
  <div border="~ red:50 rounded-lg" bg-red:15 px2 text-red flex="~ items-center gap-2" v-click>
    <div i-logos-svelte-icon w-1em />
    Svelte as a plugin
  </div>
  <div border="~ yellow:50 rounded-lg" bg-yellow:15 px2 text-yellow flex="~ items-center gap-2" v-click>
    <div i-logos-vitest w-1em />
    Test runner for Vite
  </div>
  <div border="~ gray:50 rounded-lg" bg-gray:15 px2 text-gray flex="~ items-center gap-1" v-click>
    <div i-logos-nuxt-icon w-1em />
    <div i-logos-solidjs-icon w-1em />
    <div i-logos-slidev w-1em />
    <div i-logos-storybook-icon w-1em />
    Meta-frameworks...
  </div>
  <div border="~ gray:20 rounded-lg" bg-gray:5 px2 text-gray flex="~ items-center gap-2" op50 text-center v-after>
    <span>...</span>
  </div>
</div>

<!--
Let's take Vite as an example.

I don't know how many of you are familiar with the history of Vite. Vite as of today is almost the default choice for web development for almost any project, but at the very beginning, it was an experiment on development tooling specifically for Vue.

As the idea of having a native-ESM dev server seemed to work pretty well, Evan You started to think that we could have this great dev server experience for other frameworks as well. [click] Starting from Vite v2.0+, Vite became a framework-agnostic frontend tooling that is not bound to Vue anymore. [click] Instead, Evan extracted the hard-coded Vue-specific logic into a plugin, which also helps to ensure Vite has a very powerful plugin system to support complex cases like Vue.

[click] Then we have a plugin to support React, [click] the community built the plugin for Svelte which later became official, [click] then we could have some crazy ideas like running a test runner for Vite with the same plugin pipeline which ends up to be Vitest, [click] and by now we have almost every meta-framework built on top of Vite and sharing the great plugin ecosystem of Vite together.

This is just one of the examples, but we can see that without this move of extracting Vue as a plugin, we wouldn't have all these great tools that empower our daily development.
-->

---
layout: center
class: 'text-center'
---

<TipTitle
  title="Work with the Community"
  description="Work with people, get them engaged, build together."
  number="5"
/>

<!--
Then, the final tip I would give today is [click] to work with the community. Or work with the users, depending on what type of tools you are building.

[click] We can't just build a great tool out of nowhere. We need to work with people, get them engaged, and build together.
-->

---

<div flex="~ col gap-10 justify-center" w-full h-full px20>
  <div text-orange flex="~ items-center gap-4" v-click>
    <div i-ph-user-circle-gear-duotone text-3em />
    <div flex="~ col">
      <div text-2xl>Build Your Own Identify</div>
      <div text-orange2>People need to know who is behind the project.</div>
    </div>
  </div>
  <div text-lime flex="~ items-center gap-4" v-click>
    <div i-ph:users-duotone text-3em />
    <div flex="~ col">
      <div text-2xl>Work with Your Users</div>
      <div text-lime2>Listen to their feedback and iterate.</div>
    </div>
  </div>
  <div text-violet flex="~ items-center gap-4" v-click>
    <div i-ph-git-pull-request-duotone text-3em />
    <div flex="~ col">
      <div text-2xl>Maintains Good Feedback-loop for Contributors</div>
      <div text-violet2>Reply and review the PR in time. Keep them engaged. Build your team.</div>
    </div>
  </div>
  <div text-blue flex="~ items-center gap-4" v-click>
    <div i-ph-globe-duotone text-3em />
    <div flex="~ col">
      <div text-2xl>Collaborate with Other Projects/Authors/Maintainers</div>
      <div text-blue2>Extend the ecosystem by introducing new integrations.</div>
    </div>
  </div>
</div>

<!--
The first thing I would suggest is to [click] build your own identity. People need to know who is behind the tool, especially in open source. Software as tools is a bit different from physical tools - software evolves and needs maintenance, so knowing and trusting the authors or maintainers behind a certain tool is important for you to get the adoption.

[click] Then, of course, we should work with our users. Listen to their feedback and iterate.

[click] Building a software tool, especially dev tools, is interesting, as your users are usually also developers, meaning they could potentially contribute to the tool themselves. 

Making a good environment for contributions and maintaining a good feedback loop for them is important to get your tool started. For example, like replying to comments or reviewing PRs in time, to make people feel they are part of the community, which potentially you could gather people with the same passion about the tool and maybe build a team to scale the project further.

[click] Finally, we should collaborate with other projects' authors or maintainers, outside of our project. Not only could we extend the ecosystem by introducing new integrations, but we could also learn from each other, spark new ideas, and build a stronger community together.
-->

---

# Recap

<div grid="~ cols-2 gap-4 gap-y-10" mt10>
<div>
  <div op50 mb--2>Tip #1</div>
  <div font-serif text-1.8em>I Don't Know</div>
  <div op50>Try and Error; Verify with the users.</div>
</div>

<div>
  <div op50 mb--2>Tip #2</div>
  <div font-serif text-1.8em>Solve your own Problems</div>
  <div op50>Build from your pain points. Eat your own dogfood.</div>
</div>

<div>
  <div op50 mb--2>Tip #3</div>
  <div font-serif text-1.8em>Progressive!</div>
  <div op50>Reduce the friction.</div>
</div>

<div>
  <div op50 mb--2>Tip #4</div>
  <div font-serif text-1.8em>Extensible</div>
  <div op50>Plugins system. Community driven.</div>
</div>

<div>
  <div op50 mb--2>Tip #5</div>
  <div font-serif text-1.8em>Work with the Community</div>
  <div op50>Work with people, get them engaged, build together.</div>
</div>

</div>

<!--
So a quick recap of the tips I gave today.

There are many more things I wanted to go into in more detail, but due to the time limit, I couldn't cover them all.

Reach out to me if you are interested in hearing more about them. You can also find the slides on my website antfu.me afterward.
-->


---
layout: center
---

<div text-center text-1.5em italic op75>Anthony's Road to Open Source</div>

<div grid="~ cols-3 gap-6" mt10>

<div>
<div op50 font-serif italic mb--1>Part I</div>
<h3><span op75>The Set Theory</span></h3>
<img src="/part1-the-set-theory.png" rounded-lg shadow-xl border="~ gray/25" mt4 />
</div>

<div>
<div op50 font-serif italic mb--1>Part II</div>
<h3><span op75>The Progressive Path</span></h3>
<img src="/part2-progressive.png" rounded-lg shadow-xl border="~ gray/25" mt4 />
</div>

<div>
<div op50 font-serif italic mb--1>Part III</div>
<h3><span op75>Yak Shaving</span></h3>
<img src="/part3-yak-shaving.png" rounded-lg shadow-xl border="~ gray/25" mt4 />
</div>

</div>

<div mt-14 text-xl text-center>

Recordings on [antfu.me](https://antfu.me)

</div>

<!--
I also actually gave a few related talks before,

The Set Theory about how we can expand the scopes of our projects; The Progressive path about how we can reduce the friction for people to use our tools. And then Yak Shaving about how to come up with ideas and execute them.  

If you are interested, you can also find the recordings and slides on my website.
-->

---
layout: center
class: 'text-center'
---

<div font-serif text-2.5em v-click>To Make Tools that People Love</div>
<div text-2em text-rose v-click>is to Put Love into the Tools We Make 🤍</div>

<!--
In a word, 

Needless to say, but [click] to make tools that people love,

I think the only true tip is [click] "to put love and great care into the tools we make". (pause)

That's all for my talk today. [click] Thank you! (pause)
-->

---
layout: center
class: 'text-center pb-5'
---

<h1 font-serif important-text-4em pb8>Thank You!</h1>

Slides can be found on [antfu.me](https://antfu.me)
