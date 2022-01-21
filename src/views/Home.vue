<script setup lang="ts">
import { NSpace } from 'naive-ui';
import PostCard from '@/components/common/PostCard.vue';
import { PostCardDto } from '@/dto/post-card.dto';

const postCardDto: PostCardDto = {
  title: 'Test',
  abstract: 'Test Abstract',
  id: 2,
  tags: [{ id: 1, name: 'Vue' }],
};

let postCardList: Array<PostCardDto>;
</script>

<template>
  <n-space vertical>
    <PostCard :postCardDto="postCardDto"></PostCard>
  </n-space>
</template>

<style scoped>
.n-space {
  padding: 20px;
  background-color: blue;
}
</style>
