import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button
} from './style';


class Header extends Component {

  render() {
    const { focused, mouseIn, searchInfoList, handleInputFocus, handleInputBlur } = this.props;
    return(
      <HeaderWrapper className="width-limit">
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe600;</span>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus.bind(this, searchInfoList)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? "iconfont zoom focused" : "iconfont zoom"}>
              &#xe637;
            </span>
            { (focused || mouseIn) ? this.showSearchInfo() : null }
          </SearchWrapper>
          <Addition>
            <Button className="writing">
              <span className="iconfont">&#xe616;</span>
              写文章
            </Button>
            <Button className="register">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }


  showSearchInfo = () => {
    const { searchInfoList, currentPage, totalPage, iconRotate, handleMouseEnter, handleMouseLeave, handleSwitchPage, setIconRotate } = this.props;
    const currentInfoList = [];
    for(let i = (currentPage-1) * 10; i < currentPage * 10 && i < searchInfoList.size; i++) {
      currentInfoList.push(searchInfoList.get(i));
    }
    if(currentInfoList.length > 0) {
      return(
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={handleSwitchPage.bind(this, currentPage, totalPage)}>
              <CSSTransition
                in={iconRotate}
                timeout={300}
                classNames="rotate"
                onEntered={setIconRotate.bind(this, false)}
              >
                <span className="iconfont spin">&#xe601;</span>
              </CSSTransition>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              currentInfoList.map((item, index)=>{
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };



}


const mapStateToProps = (state) => {
  return {
    //focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    iconRotate: state.getIn(['header', 'iconRotate']),
    searchInfoList: state.getIn(['header', 'searchInfoList']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(searchInfoList) {
      if(searchInfoList.size === 0) {
        dispatch(actionCreators.fetchSearchInfoList());
      }
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.iconRotate(false));
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleSwitchPage(currentPage, totalPage) {
      if(currentPage < totalPage) {
        dispatch(actionCreators.switchPage(currentPage + 1));
      } else {
        dispatch(actionCreators.switchPage(1));
      }
      dispatch(actionCreators.iconRotate(true));
    },
    setIconRotate(rotate) {
      dispatch(actionCreators.iconRotate(rotate));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
