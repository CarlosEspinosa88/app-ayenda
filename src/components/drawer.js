import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { withNavigation } from 'react-navigation';

class Drawer extends Component {
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cover}>
            <Image
              source={require('../../assets/logo-dark.png')}
              style={styles.logo}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  cover: {
    backgroundColor: '#cde500',
    padding: 10,
    height: 130,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  left: {
    flex: 1,
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#3a3a3a',
  },
  item: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
})


export default withNavigation(Drawer);