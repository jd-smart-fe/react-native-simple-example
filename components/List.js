import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ScrollView, ActivityIndicator } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements';

export default class Iscroll extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      count: 0,
    };
  }

  async fetchData() {

    try {
      let response = await fetch('https://swapi.co/api/people/');
      let json = await response.json();
      this.setState({
        count: json.count,
        list: json.results,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        list: json.results,
        count: -1
      });
    }
  }

  _onPressButton(item) {
    console.log(`Click ${item.name}`);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {

    return (
      <View>

        {
          this.state.list.length > 0 ? (<List>
            {
              this.state.list.map((item, index) => {
                return (
                  <ListItem
                    roundAvatar
                    avatar={<Avatar
                      title={item.name.substr(0, 1)}
                      rounded
                    />}
                    key={item.name + index}
                    title={item.name}
                    onPress={() => this._onPressButton(item)}
                  />
                );
              })
            }
          </List>) : <ActivityIndicator
              animating={true} size="large"
              style={styles.spinner}
            />
        }
      </View>
    )
  }
}

var styles = StyleSheet.create({

  spinner: {
    marginTop: 200
  },
});
