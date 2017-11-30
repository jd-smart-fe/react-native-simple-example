import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://user-images.githubusercontent.com/334762/33426745-da7e4798-d5fd-11e7-826a-5edfa3ad5703.jpg' }}
            style={{ width: 150, height: 150, marginTop: 100 }}
          />
        </View>
        <View style={{
          marginTop: 50,
          flex: 2,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <Text> Welcome to The New World </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Enter"
            onPress={() =>
              navigate('List', { name: 'Jane' })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});
