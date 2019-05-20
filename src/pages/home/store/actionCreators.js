import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAndStoreHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res)=>{
        dispatch(setHomeData(res));
      })
      .catch((err)=>{
        throw new Error(err);
      });
  };
};

export const setHomeData = (data) => ({
  type: actionTypes.SET_HOME_DATA,
  topicList: data.data.topicList,
  articleList: data.data.articleList,
  recommendList: data.data.recommendList
});

export const setTopicList = (listData) => ({
  type: actionTypes.SET_TOPIC_LIST,
  data: listData
});

export const setArticleList = (listData) => ({
  type: actionTypes.SET_ARTICLE_LIST,
  data: listData
});

export const setRecommendList = (listData) => ({
  type: actionTypes.SET_RECOMMEND_LIST,
  data: listData
});
