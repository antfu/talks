<template>
  <iframe
    :src="__DEV__ ? 'http://localhost:7777' : 'https://eslint-config.antfu.me/configs'"
    onload="this.style.visibility = 'visible';"
    scale-60 origin-top-right absolute right-0 top-0 bottom-0 w="95%" h="167%"
    border="l main"
    style="filter:contrast(1.15);visibility:hidden;"
  />
</template>
