import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item)=>{
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
};

const mapDispatchToProps = () => {
  return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(Recommend);