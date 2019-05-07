import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
  focused: false,
  mouseIn: false,
  searchInfoList: [],
  currentPage: 1,
  totalPage: 1,
});

const reducer = (state = defaultStore, action) => {

  switch(action.type) {
    case actionTypes.SEARCH_FOCUS: {
      return state.set('focused', true);
    }
    case actionTypes.SEARCH_BLUR: {
      return state.set('focused', false);
    }
    case actionTypes.SET_SEARCH_INFO_LIST: {
      return state.set('searchInfoList', fromJS(action.data));
    }
    case actionTypes.SET_TOTAL_PAGE: {
      return state.set('totalPage', fromJS(action.data));
    }
    case actionTypes.MOUSE_ENTER: {
      return state.set('mouseIn', true);
    }
    case actionTypes.MOUSE_LEAVE: {
      return state.set('mouseIn', false);
    }
    case actionTypes.SWITCH_PAGE: {
      return state.set('currentPage', action.page)
    }
    default:
      return state;
  }

};

export default reducer;