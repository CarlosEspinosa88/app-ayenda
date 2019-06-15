import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

class ShowHotelDescriptions extends Component {
  render() {
    const hotel = this.props.hotel;
    return (
      <View style={styles.container}>
        <View key={hotel.id}>
          <Text style={styles.title} numberOfLines={2}>
            {hotel.distributionName}
          </Text>
          <Text style={styles.text} html={hotel.description}>
            {hotel.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    overflow: "hidden",
    marginHorizontal: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "#3a3a3a",
    textAlign: "center",
    marginTop: 30
  },
  text: {
    fontSize: 15,
    lineHeight: 33,
    marginLeft: "5%",
    color: "#3A3A3A",
    marginBottom: 30
  }
});

export default withNavigation(ShowHotelDescriptions);
