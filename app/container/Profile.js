import React, { Component } from 'react';
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {Button, Switch,Form, Input,Header,Right,Icon, ListItem,Picker, Left,Thumbnail,Container, Card,CardItem,Body,Text,Content, Center, Item} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import NavBarBelow from './Footer'
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux'
import {gChange, sChange} from '../actions/profilePage'


//The props is passed to this level of profilePage
const mapStateToProps = (state) => ({
  profileKeys: state.profileKeys,
  name: state.name,
  birthday: state.bd,
})

class ProfilePage extends Component {
  //Probably not necessary
  constructor(props) {
      super(props);
  }

  formatDate(date){
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  onGenderChange (value: string) {
    const {dispatch} = this.props
    dispatch(gChange(value))
    this.forceUpdate();
  }
  onStatusChange (value: string) {
    const {dispatch} = this.props
    dispatch(sChange(value))
    this.forceUpdate();
  }
  componentWillMount() {
    console.log('render start')
  }

  render() {

    const {profileKeys, name, birthday} = this.props

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
                <TouchableOpacity onPress={()=>Actions.newsPage()}>
                  <Thumbnail style={{width: 100, height: 100, borderRadius: 50}}
                  source={require('../img/Lili.jpeg')}
                  />
                </TouchableOpacity>

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
                  <Text>{name}</Text>
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
                <Button transparent>
                  <Icon name="arrow-forward" style={{ color: '#0A69FE' }} />
                </Button>


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
                 <Text>{this.formatDate(birthday)}</Text>
                 <Button transparent
                  onPress={() => Actions.datePick()}
                   >
                   <Icon name="arrow-forward" style={{ color: '#0A69FE' }} />
                 </Button>
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
