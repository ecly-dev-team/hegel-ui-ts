<script setup lang="ts">
import { defineProps } from 'vue';
import { NCard } from 'naive-ui';
import { PostCard } from '@/interface/post-card.interface';

interface Props {
  postCardDto: PostCard;
}

const props = defineProps<Props>();
</script>

<template>
  <n-card>
    {{ props.postCardDto }}
  </n-card>
</template>
