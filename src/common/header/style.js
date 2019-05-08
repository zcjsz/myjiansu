import styled from 'styled-components';
import logoPNG from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px
  height: 56px;
  background: url(${logoPNG});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
`;

export const NavItem = styled.div`
  line-height: 26px;
  padding: 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #999;
    &.focused {
      background: #999;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
    transition: width .3s ease-out;
  }
  &.slide-enter-done {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
    transition: width .3s ease-out;
  }
  &.slide-exit-done {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-heigh: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
  }
  .rotate-enter {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  .rotate-enter-active {
    transform: rotate(360deg);
    transform-origin: center center;
    transition: transform 300ms;
  }
  .rotate-enter-done {
    transform: rotate(360deg);
    transform-origin: center center;
  }
  .rotate-exit {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  .rotate-exit-active {
    transform: rotate(0deg);
    transform-origin: center center;
  
  }
  .rotate-exit-done {
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  line-height: 20px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  font-size: 14px;
  &.register {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149; 
  }
`;