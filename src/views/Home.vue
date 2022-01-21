<script setup lang="ts">
import { NSpace } from 'naive-ui';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed, defineProps, Ref, ref, watch, withDefaults } from 'vue';
import { GlobalConfig } from '@/interface/global-config.interface';
import PostCard from '@/components/common/PostCard.vue';

interface Props {
  page?: string;
}

const props = withDefaults(defineProps<Props>(), {
  page: '1',
});

const store = useStore(key);
const loading = ref(true);
const displayError: Ref<null | string> = ref(null);

watch(
  () => props.page,
  async () => {
    try {
      loading.value = true;
      displayError.value = null;
      await store.dispatch('fetchPostCardListAtHome', +props.page);
    } catch (e) {
      if (e === 'Invalid Page') {
        displayError.value = 'Invalid Page';
      } else {
        displayError.value = 'Network Error';
      }
    } finally {
      loading.value = false;
    }
  },
  {
    immediate: true,
  }
);

const postCardListAtHome = computed(
  () => store.getters['getPostCardListAtHome']
);
</script>

<template>
  <n-space v-if="loading"> loading </n-space>
  <n-space v-else-if="displayError"> {{ displayError }} </n-space>
  <n-space vertical v-else>
    <PostCard
      v-for="postCard in postCardListAtHome"
      :key="postCard.id"
      :postCardDto="postCard"
    ></PostCard>
  </n-space>
</template>

<style scoped>
.n-space {
  padding: 20px;
  background-color: rgb(0, 255, 213);
}
</style>
