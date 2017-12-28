/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Alert,AppRegistry, Text, TextInput, Button, StyleSheet, View } from 'react-native';
//import { StackNavigator } from 'react-navigation';



export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    _onPressFood() {
    Alert.alert('You tapped the food button!')
  }
    _onPressWine() {
    Alert.alert('You tapped the wine button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Name"
        />
        <TextInput
          style={{height: 80}}
          placeholder="Enter Address"
        />
        <Button
            onPress={this._onPressFood}
            title="Food Joint"
        />
        <Text>
    
        </Text>
        <Text>
    
        </Text>
        <Text>
    
        </Text>        
        <Button
            onPress={this._onPressWine}
            title="Wine Shop"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
// skip this line if using Create React Native App
AppRegistry.registerComponent('Test2', () => Shop);
