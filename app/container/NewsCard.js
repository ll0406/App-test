
import React, { Component } from 'react';
import {
  View,
  Image,
  Alert
} from 'react-native';
import {Content, Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, CardItem, Card, Spinner} from 'native-base';
import {Actions} from 'react-native-router-flux'

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
  }

  goToWeb() {
  return Actions.webPage({this_url:this.props.this_url});
}

  render() {
    return (
      <Card>
            <CardItem bordered>
                <Left>
                    <Thumbnail square source={require('../img/one.png')}/>
                    <Body>
                      <Text>NEW TITLE</Text>
                      <Text note>Apr. 15, 2016</Text>
                    </Body>
                </Left>
            </CardItem>

            <CardItem>
                <Body>
                    <Image style={{ resizeMode: 'cover' }} source={require('./img/rsz_card-showcase.png')} />
                    <Text>
                        SUMMARY
                    </Text>
                    <Button transparent textStyle={{color: '#87838B'}}
                      onPress={() => this.goToWeb()}
                    >
                        <Text>More Info</Text>
                    </Button>
                </Body>
            </CardItem>
       </Card>
    )
  }
}
