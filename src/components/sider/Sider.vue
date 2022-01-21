<script setup lang="ts">
import { NSpace } from 'naive-ui';
import WidgetAbout from './WidgetAbout.vue';
import WidgetTags from './WidgetTags.vue';
</script>

<template>
  <n-space vertical>
    <WidgetAbout></WidgetAbout>
    <WidgetTags></WidgetTags>
  </n-space>
</template>

<style scoped>
.n-space {
  padding: 20px;
  background-color: red;
}
</style>
