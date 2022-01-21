import { fetchGlobalConfig } from '@/api/config.service';
import { fetchPostCardListAtHome, fetchPostCount } from '@/api/posts.service';
import { PostCard } from '@/interface/post-card.interface';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { GlobalConfig } from '../interface/global-config.interface';
import { State } from '../interface/state.interface';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state(): State {
    return {
      globalConfig: null,
      postCardListAtHome: null,
    };
  },
  mutations: {
    SET_GLOBAL_CONFIG(state: State, globalConfig: GlobalConfig) {
      state.globalConfig = globalConfig;
    },
    SET_POST_CARD_LIST_AT_HOME(
      state: State,
      postCardListAtHome: Array<PostCard>
    ) {
      state.postCardListAtHome = postCardListAtHome;
    },
  },
  actions: {
    async fetchGlobalConfig({ state, commit }) {
      if (state.globalConfig) return;
      const globalConfig = await fetchGlobalConfig();
      commit('SET_GLOBAL_CONFIG', globalConfig);
    },
    async fetchPostCardListAtHome({ commit, getters, dispatch }, page: number) {
      await dispatch('fetchGlobalConfig');
      const { postsPerPage } = getters['getGlobalConfig'];
      const postCount = await fetchPostCount();
      if (page * postsPerPage > postCount) {
        throw 'Invalid Page';
      }
      const offset = (page - 1) * postsPerPage;
      const postCardListAtHome = await fetchPostCardListAtHome(
        postsPerPage,
        offset
      );
      commit('SET_POST_CARD_LIST_AT_HOME', postCardListAtHome);
    },
  },
  getters: {
    getGlobalConfig(state: State) {
      return state.globalConfig;
    },
    getPostCardListAtHome(state: State) {
      return state.postCardListAtHome;
    },
  },
  modules: {},
});
