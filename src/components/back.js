import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: null,
});

class BackNav extends Component{
  handlePress = () => {
    this.props.navigation.dispatch(backAction);
  }

  render(){
    return(
      <TouchableOpacity
      onPress={this.handlePress}
      >
        <Image
          source={require('../../assets/back-menu.png')}
          style={styles.toggle}
        />
      </TouchableOpacity>
    )
  }
} 

const styles = StyleSheet.create({
  toggle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 20,
  },
})

export default withNavigation(BackNav);
