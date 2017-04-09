import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Content, Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Header, Footer, FooterTab, Button } from 'native-base';
import {Actions} from 'react-native-router-flux'
import NavBarBelow from './Footer'
import defaultList from './personData'

import {connect} from 'react-redux'


/*
The DeckSwiper has two Property:
onSwipeRight()
onSwipeLeft()
When each of the function is called, pop the first element in list,
add to the end of the list.

Do not update the list immeaditely
but rather use ComponentWillDismount to call the update list function

*/

const mapStateToProps = (state) => ({
  personList: state.personList
})

class RoommateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.index = 0;
    this.list = defaultList;
    if (this.props.personList.length > 0) {
      this.list = this.props.personList
    }
  }

  //https://github.com/coolaj86/knuth-shuffle
  shuffle() {
    var array = this.list;
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.list = array;
  }

    swipeRight(){
      ++this.index;
      console.log(this.index);

    }

    swipeLeft(){
      ++this.index;
      console.log(this.index);
    }


    render() {
        this.shuffle();
        return (
            <Container>
                <Header/>
                <Content>
                    <View>
                        <DeckSwiper
                            onSwipeLeft={()=> this.swipeLeft}
                            onSwipeRight={() => this.swipeRight}
                            dataSource={this.list}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={item.image} />
                                        </Left>
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </CardItem>

                                    <CardItem cardBody>
                                        <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={item.image} />
                                    </CardItem>
                                    <CardItem>
                                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                        <Text>{item.name}</Text>
                                    </CardItem>

                                </Card>
                            }
                        />
                      </View>
                  </Content>
                <NavBarBelow/>
            </Container>
        );
    }
}
export default connect(mapStateToProps)(RoommateDeck)
