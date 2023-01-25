import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItem,
} from '@/api';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        console.log(response);
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(response => {
        console.log(response);
        commit('SET_ASKS', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        console.log('FETCH_USER', data);
        commit('SET_USERINFO', data);
      })
      .catch(error => {
        console.error(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItem(itemId)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.error(error);
      });
  },
};
