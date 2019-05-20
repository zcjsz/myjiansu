import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import Article from './components/Article';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-image" alt='' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <Article></Article>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.fetchAndStoreHomeData();
  }

}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAndStoreHomeData() {
      dispatch(actionCreators.fetchAndStoreHomeData());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);