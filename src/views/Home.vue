<script setup lang="ts">
import { NSpace, NPagination } from 'naive-ui';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed, defineProps, Ref, ref, watch, withDefaults } from 'vue';
import PostCard from '@/components/common/PostCard.vue';
import { fetchPostCount } from '@/api/posts.service';
import { useRouter } from 'vue-router';

interface Props {
  page?: string;
}

const props = withDefaults(defineProps<Props>(), {
  page: '1',
});

const store = useStore(key);
const router = useRouter();
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

const pageCount = ref(0);
const currentPage = ref(+props.page);
let postsPerPage = 1;

store
  .dispatch('fetchGlobalConfig')
  .then(() => {
    postsPerPage = store.getters['getGlobalConfig'].postsPerPage;
  })
  .then(() => fetchPostCount())
  .then((cnt) => {
    console.log('cnt=' + cnt);
    if (cnt % postsPerPage === 0) {
      pageCount.value = Math.floor(cnt / postsPerPage);
    } else {
      pageCount.value = Math.ceil(cnt / postsPerPage);
    }
  })
  .catch(() => {
    displayError.value = 'Network Error';
  });

watch(currentPage, () => {
  console.log(currentPage.value);
  router.push({ name: 'HomeWithPage', params: { page: currentPage.value } });
});
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
    <n-card>
      <n-pagination
        v-model:page="currentPage"
        :page-count="pageCount"
      ></n-pagination>
    </n-card>
  </n-space>
</template>

<style scoped>
.n-space {
  padding: 20px;
  background-color: rgb(0, 255, 213);
}
</style>
