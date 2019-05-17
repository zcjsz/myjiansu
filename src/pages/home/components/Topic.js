import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item)=>{
            return(
              <TopicItem key={item.get('id')}>
                <img className='topic-img' alt='' src={item.get('imgUrl')} />
                <span className='topic-title'>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic);