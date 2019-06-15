import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../header-hotels";
import ShowHotel from "../show-hotel-container"
import { withNavigation } from "react-navigation";

class Show extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <ShowHotel />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default withNavigation(Show);
