import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticleItem, ArticleInfo, ArticleImg } from '../style';

class Article extends Component {
  render() {
    const { articleList } = this.props;
    return (
      articleList.map((item)=>{
        return (
          <ArticleItem key={item.get('id')}>
            <ArticleInfo>
              {/*<a className='article-title' href='/'>{item.get('title')}</a>*/}
              {/*<p className='article-desc'>{item.get('desc')}</p>*/}
              <div className='article-meta'>
                <span className='article-paid iconfont'>{item.get('paid')}</span>
                <span className='article-nickname'>{item.get('nickname')}</span>
                <span className='article-comment iconfont'>{item.get('comment')}</span>
                <span className='article-like iconfont'>{item.get('like')}</span>
              </div>
            </ArticleInfo>
            {/*<ArticleImg className='article-img' alt='' src={item.get('imgUrl')} />*/}
          </ArticleItem>
        );
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Article);