import axios from 'axios';

// 1, HTTP Request & Response 관련된 기본 설정
const config = {
  baseUrl: `https://api.hnpwa.com/v0`,
};

// 2. API 함수 범위들을 정리
const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

export default {
  fetchNewsList,
};
