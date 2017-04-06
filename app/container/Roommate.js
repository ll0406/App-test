import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Content, Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Header, Footer, FooterTab, Button } from 'native-base';
import {Actions} from 'react-native-router-flux'
import NavBarBelow from './Footer'
import peopleData from './personData'

let cardIndex = 0;
/*
The DeckSwiper has two Property:
onSwipeRight()
onSwipeLeft()
When each of the function is called, pop the first element in list,
add to the end of the list.

Do not update the list immeaditely
but rather use ComponentWillDismount to call the update list function

*/

export default class RoommateDeck extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <View>
                        <DeckSwiper
                            /*selectedIndex = {2}*/
                            dataSource={peopleData}
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
