import {Actions, Router, Scene} from 'react-native-router-flux';
import React, { Component } from 'react'
import NewsP from './container/PageOne'
import NewsWebScene from './container/NewsWebScene'
import RoommateDeck from './container/Roommate'
import ProfilePage from './container/Profile'
import newSwipe from './container/newSwipe'
import DatePick from './container/DatePicking'
import homePage from './container/homePage'

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="newsPage"
      component={NewsP}
      title={"推送"}
      type='replace'
      initial

      />
    <Scene
      key="profilePage"
      component={ProfilePage}
      type='replace'
      title={"Profile"}
      />

    <Scene
      key="webPage"
      component={NewsWebScene}
      title={"详情"}
      />

    <Scene
      key="datePick"
      component={DatePick}
      title={"Pick Your Birthday"}
      />

    <Scene
      key="home"
      component={homePage}
      title={"Home"}
      type='replace'
      />

    <Scene
      key="roommate"
      component={RoommateDeck}
      type='replace'
      title={"探？"}
      />
    <Scene
      key="SwipeNew"
      component={newSwipe}
      title={"Swipe"}
      type='replace'
      />
  </Scene>
);

export default scenes;
