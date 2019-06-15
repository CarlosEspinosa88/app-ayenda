import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { DrawerActions } from 'react-navigation-drawer';
import {withNavigation} from 'react-navigation';

class MenuToggle extends Component{
  handlePress = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
  
  render(){
    return(
      <TouchableOpacity
        onPress={this.handlePress}
      >
        <Image
          source={require('../../assets/menu.png')}
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
    marginLeft: 10,
  },
})

export default withNavigation(MenuToggle);
