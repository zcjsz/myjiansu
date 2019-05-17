import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  padding-left: 15px;
  .banner-image {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
  background: aquamarine;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0px 10px 0px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  .topic-img {
    width: 32px;
  }
  .topic-title {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ArticleItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  display:flex;
  justify-content: space-between;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
`;

export const ArticleInfo = styled.div`
  width: 458px;
  .article-title {
    display: block;
    margin-bottom: 4px;
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }
  .article-title:hover {
    text-decoration: underline;
  }
  .article-desc {
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
  .article-meta {
    color: #b4b4b4;
    span {
      margin-right: 20px;
    }
    .article-paid {
      color: #ea6f5a;
    }
    .article-paid::before {
      content: "\\e63c";
      margin-right: 5px;
    }
    .article-comment::before {
      content: "\\e684";
      margin-right: 5px;
    }
    .article-like::before {
      content: "\\e755";
      margin-right: 5px;
    }
  }
  
`;

export const ArticleImg = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
`;
























