import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  WebView,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground
} from "react-native";

import { withNavigation } from "react-navigation";
import Carousel from "react-native-looped-carousel";

const { width, height } = Dimensions.get("window");

class ShowHotelDescriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    const hotel = this.props.hotel;
    return (
      <ScrollView>
        {/* <Carousel photos={this.props.hotel.hotelPhotos}> */}
        <View
          style={{ flex: 1, height: 300 }}
          onLayout={this._onLayoutDidChange}
        >
          <Carousel
            delay={2000}
            style={this.state.size}
            autoplay={false}
            onAnimateNextPage={p => console.log(p)}
            swipe={true}
            bullets={true}
          >
            {this.props.hotel.hotelPhotos.map(photo => (
              <View
                key={photo.id}
                style={[{ backgroundColor: "#fff" }, this.state.size]}
              >
                <View style={styles.carousel}>
                  <ImageBackground
                    style={styles.coverCarousel}
                    source={{
                      uri: photo.url.replace(
                        "/system",
                        "https://ayenda-2016.s3.amazonaws.com"
                      )
                    }}
                  />
                </View>
              </View>
            ))}
          </Carousel>
        </View>

        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={2}>
            {hotel.distributionName}
          </Text>
          <Text style={styles.text}>{hotel.description}</Text>

          <Text style={styles.title} numberOfLines={2}>
            Amenidades
          </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.containerAmenities}
          >
            {this.props.hotel.amenities.map(amenity => (
              <View key={amenity.id}>
                <Image
                  style={styles.image}
                  source={{
                    uri: amenity.imageUrl.replace(
                      "/system",
                      "https://ayenda-2016.s3.amazonaws.com"
                    )
                  }}
                />
                <View style={styles.containerTextAmenities}>
                  <Text style={styles.textAmenities}>{amenity.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 25,
    color: "#3a3a3a",
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
    marginTop: 30
  },
  text: {
    fontSize: 15,
    lineHeight: 33,
    marginLeft: "5%",
    color: "#3A3A3A",
    marginBottom: 30
  },
  containerAmenities: {
    flex: 1
  },
  containerTextAmenities: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 20
  },
  textAmenities: {
    fontSize: 10,
    fontWeight: "bold",
    marginHorizontal: 15
  },
  carousel: {
    height: 300,
    overflow: "hidden"
  },
  coverCarousel: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    resizeMode: "contain"
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    overflow: "hidden"
  }
});

export default withNavigation(ShowHotelDescriptions);
