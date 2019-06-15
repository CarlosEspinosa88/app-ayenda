import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  } from 'react-native';

import { withNavigation } from 'react-navigation';
import Header from '../header-hotels';
import HotelsContainer from '../hotels-container';

// import Search from '../sections/components/search';
// import FooterMain from '../sections/components/footer-main';

class Hotels extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <HotelsContainer />
          {/* <Search /> */}
          {/* <FooterMain /> */}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default withNavigation(Hotels);
