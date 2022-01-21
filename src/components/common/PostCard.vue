<script setup lang="ts">
import { defineProps } from 'vue';
import { PostCardDto } from '@/dto/post-card.dto';
import { NCard } from 'naive-ui';

interface Props {
  postCardDto: PostCardDto;
}

const props = defineProps<Props>();
</script>

<template>
  <n-card>
    {{ props.postCardDto }}
  </n-card>
</template>
