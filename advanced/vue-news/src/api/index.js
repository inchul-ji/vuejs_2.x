import axios from 'axios';

// 1, HTTP Request & Response 관련된 기본 설정
const config = {
  baseUrl: `https://api.hnpwa.com/v0`,
};

// 2. API 함수 범위들을 정리
export const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

export const fetchAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
};

export const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
};

export const fetchList = pageName => {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`);
};

export const fetchUserInfo = username => {
  return axios.get(`${config.baseUrl}/user/${username}.json`);
};

export const fetchItem = itemId => {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`);
};
