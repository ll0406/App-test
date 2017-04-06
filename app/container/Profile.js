import React, { Component } from 'react';
import {
  View,
  Image,
  Alert
} from 'react-native';

import {Button, Switch,Form, Input,Header,Right,Icon, ListItem,Picker, Left,Thumbnail,Container, Card,CardItem,Body,Text,Content, Center, Item} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Actions from 'react-native-router-flux';
import NavBarBelow from './Footer'

import {connect} from 'react-redux'
import {actionCreators} from '../../sampleRedux'
//The props is passed to this level of profilePage
const mapStateToProps = (state) => ({
  profileKeys: state.profileKeys
})

class ProfilePage extends Component {

  //Probably not necessary
  constructor(props) {
      super(props);
  }

  onGenderChange (value: string) {
    const {dispatch} = this.props
    dispatch(actionCreators.gChange(value))
  }
  onStatusChange (value: string) {
    const {dispatch} = this.props
    dispatch(actionCreators.sChange(value))
  }


  render() {

    const {profileKeys} = this.props

    return (
      <Container>
        <Header/>
          <Content>
            <Grid>
              <Row size={1}>


              </Row>

              <Row size={4}>

              </Row>
            </Grid>
            <Card>
            <CardItem>
              <Left>
              <Body>
              <Right>

                  <Thumbnail style={{width: 100, height: 100, borderRadius: 50}}
                  source={require('../img/Lili.jpeg')}
                  />

              </Right>
              </Body>
              </Left>

            </CardItem>
           </Card>
           <ListItem icon>
              <Left>
                <Icon name="person"/>
              </Left>
              <Body>
                <Text>用户名</Text>
              </Body>
              <Right>
                  <Text>Li</Text>
                  <Button transparent
                    >
                    <Icon name="arrow-forward" style={{ color: '#0A69FE' }} />
                  </Button>
              </Right>
            </ListItem>

            <ListItem icon>
               <Left>
                <Icon name="male"/>
               </Left>
               <Body>
                 <Text>性别</Text>
               </Body>
               <Right>
                <Picker
                  iosHeader="性别"
                  mode="dropdown"
                  selectedValue={profileKeys[0]}
                  onValueChange={this.onGenderChange.bind(this)}>
                  <Item label="男性" value="key0" />
                  <Item label="女性" value="key1" />
                  <Item label="未知" value="key3" />
                </Picker>
               </Right>
            </ListItem>


            <ListItem icon>
               <Left>
                 <Icon name="calendar"/>
               </Left>
               <Body>
                 <Text>生日</Text>
               </Body>
               <Right>
                 <Text>Apr. 06, 1996</Text>
               </Right>
             </ListItem>

             <ListItem icon>
                <Left>
                 <Icon name="heart"/>
                </Left>
                <Body>
                  <Text>感情状况</Text>
                </Body>
                <Right>
                 <Picker
                   iosHeader="感情状况"
                   mode="dropdown"
                   selectedValue={profileKeys[1]}
                   onValueChange={this.onStatusChange.bind(this)}>
                   <Item label="未知" value="key3" />
                   <Item label="单身" value="key0" />
                   <Item label="交往中" value="key1" />
                   <Item label="已订婚" value="key2" />
                   <Item label="已婚" value="key4" />
                   <Item label="分居" value="key5" />
                   <Item label="离婚" value="key6" />
                   <Item label="鳏寡" value="key7" />

                 </Picker>
                </Right>
             </ListItem>

            <ListItem icon>
               <Left>
                 <Icon name="bulb"/>
               </Left>
               <Body>
                 <Text>个人简介</Text>
               </Body>
               <Right>
                 <Text>Nice Guy</Text>
               </Right>
             </ListItem>

             <ListItem icon>
               <Left>
                 <Icon name="pulse"/>
               </Left>
               <Body>
                 <Text>公开信息</Text>
               </Body>
               <Right>
                <Switch value={true} />
              </Right>
             </ListItem>
          </Content>
        <NavBarBelow/>
      </Container>
    )
  }
}

export default connect(mapStateToProps)(ProfilePage)
