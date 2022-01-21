<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from 'naive-ui';
import Menu from './components/menu/Menu.vue';
import Sider from './components/sider/Sider.vue';
</script>

<template>
  <n-layout>
    <n-layout-header>
      <Menu></Menu>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider> <Sider></Sider> </n-layout-sider>
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
