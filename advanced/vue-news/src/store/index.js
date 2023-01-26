import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    userInfo: {},
    item: {},
    list: [],
  },
  getters: {
    // computed 와 같은 속성
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations: mutations,
  // {
  //   SET_NEWS(state, news) {
  //     state.news = news;
  //   },
  //   SET_JOBS(state, jobs) {
  //     state.jobs = jobs;
  //   },
  //   SET_ASKS(state, asks) {
  //     state.asks = asks;
  //   },
  // },
  actions: actions,
  // {
  //   FETCH_NEWS(context) {
  //     fetchNewsList()
  //       .then(response => {
  //         console.log(response);
  //         context.commit('SET_NEWS', response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_JOBS({ commit }) {
  //     fetchJobsList()
  //       .then(({ data }) => {
  //         commit('SET_JOBS', data);
  //       })
  //       .catch(error => console.log(error));
  //   },
  //   FETCH_ASKS({ commit }) {
  //     fetchAskList()
  //       .then(response => {
  //         console.log(response);
  //         commit('SET_ASKS', response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   },
  // },
});
