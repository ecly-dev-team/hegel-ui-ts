<script setup lang="ts">
import { MenuOption, NMenu } from 'naive-ui';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

function renderRouterLink(link: string, target: string) {
  return () => h(RouterLink, { to: { name: target } }, link);
}

const menuOptions: Array<MenuOption> = [
  {
    label: renderRouterLink('Home', 'Home'),
    key: 'home',
  },
  {
    label: renderRouterLink('About', 'About'),
    key: 'about',
  },
];
</script>

<template>
  <n-menu mode="horizontal" :options="menuOptions" value=""></n-menu>
</template>
