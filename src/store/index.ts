import { createStore } from 'vuex';
import { GlobalConfig } from './interface/global-config.interface';
import { State } from './interface/state.interface';

export default createStore({
  state(): State {
    return {
      globalConfig: null,
    };
  },
  mutations: {
    SET_GLOBAL_CONFIG(state: State, globalConfig: GlobalConfig) {
      state.globalConfig = globalConfig;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
