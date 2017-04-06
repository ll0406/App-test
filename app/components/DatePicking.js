import React, { Component } from 'react';
import {
  View,
  Image,
  DatePickerIOS
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Content, Container, Header, Button, Text} from 'native-base';
import {connect} from 'react-redux'


export default class DatePick extends Component {
  constructor(props) {
    super(props);
    state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onSubmit = () => {
    this.props.callback(this.state.date)
    Actions.pop();
  }

  render() {
    <Container>
      <Header/>
      <Content>
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
        <Button full onPress={() => this.onSubmit()}>
          <Text>Save</Text>
        </Button>
      </Content>
    </Container>
  }

}
