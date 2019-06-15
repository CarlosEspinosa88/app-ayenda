import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { withNavigation } from "react-navigation";
import Header from "../header";
import Cities from "../cities";
import Promises from "../promises";
import AboutUs from "../about-us";

// import navigationService from "../navigation-services";

class Home extends Component {
  // componentDidMount() {
  //   console.log(this.props.navigation);
  //   navigationService.setNavigator(this.props.navigation);
  //   console.log(navigationService._navigator);
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <Cities />
          <Promises />
          <AboutUs />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#FFF"
  }
});

export default withNavigation(Home);
