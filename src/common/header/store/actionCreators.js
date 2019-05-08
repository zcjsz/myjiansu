import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const fetchSearchInfoList = () => {
  return (dispatch) => {
    axios.get('/api/searchInfoList.json')
      .then((res)=>{
        const totalPage = Math.ceil(res.data.items.length / 10);
        dispatch(setSearchInfoList(res.data.items));
        dispatch(setTotalPage(totalPage));
      })
      .catch((err)=>{
        throw new Error(err);
      });
  }
};

export const setSearchInfoList = (data) => ({
  type: actionTypes.SET_SEARCH_INFO_LIST,
  data: data
});

export const setTotalPage = (totalPage) => ({
  type: actionTypes.SET_TOTAL_PAGE,
  data: totalPage
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});

export const switchPage = (page) => ({
  type: actionTypes.SWITCH_PAGE,
  page: page
});

export const iconRotate = (rotate) => ({
  type: actionTypes.SET_ICON_ROTATE,
  rotate: rotate
});