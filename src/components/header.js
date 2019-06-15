import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import MenuToggle from './menu-toggle';
import Logo from './logo';

class Header extends Component{
  render(){
    return(
      <SafeAreaView>
        <ImageBackground
          style={styles.cover}
          source={require('../../assets/backgroundayendarooms.jpg')}
        >
          <View style={styles.header}>
            <View style={styles.left} >
              <MenuToggle />
            </View>
            <View style={styles.center} >
              <Logo />
            </View>
            <View style={styles.right} >
            </View>
          </View>

          <View style={styles.ayenda}>
            <Text
              style={styles.info}
              numberOfLines={2}
            >
              Hoteles Económicos y Estandarizados en COLOMBIA
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
} 

const styles = StyleSheet.create({
  header: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  ayenda: {
    position: 'absolute',
    top: 140,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  info: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
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

export default withNavigation(Header);