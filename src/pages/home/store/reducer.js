// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
  topicList: [{
    id: 1,
    title: "生活方式",
    imgUrl: "https://pic2.zhimg.com/v2-b79da6d4d51b9c889cf9e2e7c392697f_xs.jpg"
  },{
    id: 2,
    title: "旅游",
    imgUrl: "https://pic3.zhimg.com/d8426d43e_xs.jpg"
  },{
    id: 3,
    title: "美食",
    imgUrl: "https://pic4.zhimg.com/975baaf73fd76f48ce6f05e19b176878_xs.jpg"
  },{
    id: 4,
    title: "时尚",
    imgUrl: "https://pic3.zhimg.com/465de28443de54e4f89b39f5486525e7_xs.jpg"
  },{
    id: 5,
    title: "服饰搭配",
    imgUrl: "https://pic3.zhimg.com/5949d3cda_xs.jpg"
  }],

  articleList: [{
    id: 1,
    title: "为什么看了很多书，却依然什么都学不到的感觉",
    desc: "你有没有阅读的习惯呢？ 很多人都喜欢看书，但不是每个人都能够从看书当中获得思维或能力的提升。 有些书籍用来娱乐自己，有些书籍则用来开拓视野，而有...",
    imgUrl: "//upload-images.jianshu.io/upload_images/6352078-3e4630b8fc14c3b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    paid: 5.0,
    nickname: "Nick",
    comment: 10,
    like: 8
  },{
    id: 2,
    title: "为什么看了很多书，却依然什么都学不到的感觉",
    desc: "你有没有阅读的习惯呢？ 很多人都喜欢看书，但不是每个人都能够从看书当中获得思维或能力的提升。 有些书籍用来娱乐自己，有些书籍则用来开拓视野，而有...",
    imgUrl: "//upload-images.jianshu.io/upload_images/6352078-3e4630b8fc14c3b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    paid: 3.2,
    nickname: "Tom",
    comment: 20,
    like: 18
  }]


});

const reducer = (state = defaultStore, action) => {

  switch(action.type) {
    default:
      return state;
  }

};

export default reducer;