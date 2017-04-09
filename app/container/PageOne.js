/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Alert
} from 'react-native';
import {Content, Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, CardItem, Card, Spinner} from 'native-base';

import {Actions} from 'react-native-router-flux'

import NavBarBelow from './Footer'
import Dataset from 'impagination'
import NewsCard from './NewsCard'
import NewsWebScene from './NewsWebScene'

import {connect} from 'react-redux';
import {setNewsOffset} from '../actions/newsPage'

//The props is passed to this level of newsPage
const mapStateToProps = (state) => ({
  initialOffset: state.newsOffset
})

class NewsP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.offset = 0;
  }

  setCurrentReadOffset = (event) => {
    // Log the current scroll position in the list in pixels
    //console.log(event.nativeEvent.contentOffset.y);
    this.offset = event.nativeEvent.contentOffset.y
    //console.log(this.offset)
  }

  componentWillUnmount() {
    const {dispatch} = this.props
    dispatch(setNewsOffset(this.offset))
  }


  render() {
    const {initialOffset} = this.props
    return (
          <Container>
            <Header/>
              <Content onScroll={this.setCurrentReadOffset} contentOffset={{x:0,y:initialOffset}}>
               <NewsCard this_url="https://mp.weixin.qq.com/s?__biz=MjM5OTE3MzYxMw==&mid=2650845638&idx=1&sn=4c96c4bdfdc4d7d7d763275c58c3c63e&chksm=bccb9d448bbc1452170b9c3ea10f2265edc1ff2386171d8e45787298659340346c829f8ae9bc&scene=0&key=428bae443386acb4271c2aada14ec30aa276f8783e2bdf56b66dc224909e16c2a565e4e6c0b1a2859df4dc8cb945d4281dbe75baeb04164ebc5db964543e24016fdf1f7e435c2d00ef2e1368dc7cafe2&ascene=0&uin=MTcxNTExMjQ1Ng%3D%3D&devicetype=iMac+MacBookPro13%2C2+OSX+OSX+10.12.3+build(16D32)&version=12010310&nettype=WIFI&fontScale=100&pass_ticket=iIVMEk1aI%2Bu0Cmtbw%2FH0FdEZB6xUhw07CSXfVzHmW9FBuwtPg9Qr%2BkM0DjvTztOB"/>
               <NewsCard this_url="https://www.youtube.com"/>
               <NewsCard this_url="https://www.youtube.com"/>
               <NewsCard this_url="https://www.youtube.com"/>
              </Content>
              <NavBarBelow/>
          </Container>
      );
  }
}

export default connect(mapStateToProps)(NewsP)
