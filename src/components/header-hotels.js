import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {withNavigation} from 'react-navigation';
import Logo from './logo';
import BackNav from './back'

class HeaderHotels extends Component{
  render(){
    return(
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.left} >
            <BackNav />
          </View>
          <View style={styles.center} >
            <Logo />
          </View>
          <View style={styles.right} >
          </View>
        </View>

      </SafeAreaView>
    )
  }
} 


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cover: {
    width: '100%',
    height: 300,
    overflow: "hidden",
    resizeMode: 'contain',
  },
})

export default withNavigation(HeaderHotels);