import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground
} from "react-native";
import Carousel from "react-native-looped-carousel";

const { width, height } = Dimensions.get("window");

class CarouselShow extends Component {
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
    const hotel = hotel;
    return (
      <View style={{ flex: 1, height: 300 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay={false}
          onAnimateNextPage={p => console.log(p)}
          arrows={true}
          swipe={true}
          bullets={true}
        >
          {hotel.hotelPhotos.map(photo => (
            <View style={[{ backgroundColor: "#f2f5f7" }, this.state.size]}>
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
    );
  }
}

export default CarouselShow;
