import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { withNavigation } from "react-navigation";

class ListHotels extends Component {
  handlePress = hotelId => {
    this.props.navigation.navigate("Show", { hotelId: hotelId });
  };

  render() {
    return (
      <View>
        {this.props.hotels.map(hotel => (
          <TouchableOpacity
            key={hotel.id}
            activeOpacity={0.7}
            style={styles.wrapper}
            onPress={() => {
              this.handlePress(hotel.id);
            }}
          >
            <View style={styles.image}>
              <ImageBackground
                style={styles.cover}
                source={{
                  uri: hotel.hotelPhotos[0].url.replace(
                    "/system",
                    "https://ayenda-2016.s3.amazonaws.com"
                  )
                }}
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.city} numberOfLines={2}>
                {hotel.distributionName}
              </Text>
              <Text style={styles.city} numberOfLines={1}>
                {hotel.pricing}
              </Text>
              <Text style={styles.city} numberOfLines={1}>
                {hotel.lastPricing}
              </Text>
              <Text style={styles.city} numberOfLines={1}>
                {hotel.availableQuantity}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#d1d1d1",
    marginHorizontal: "5%",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    flex: 2,
    flexDirection: "row"
  },
  image: {
    width: "35%"
  },
  info: {
    width: "65%",
    padding: 10
  },
  cover: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    resizeMode: "contain"
  }
});

export default withNavigation(ListHotels);
