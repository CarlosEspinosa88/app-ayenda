import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

function Promises(props) {
  return (
    <View styles={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Promesa Ayenda Hoteles</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/bottle-water.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Botella de agua</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/wifi.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Wifi gratis</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/hot-water.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Agua caliente</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/tv.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Televisión</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/personal-kit.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Kit de aseo</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.promise}
            source={require("../../assets/promise/bed-clean.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.text}>Sabanas limpias</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    overflow: "hidden",
    flex: 1,
    marginLeft: 10
  },
  promise: {
    width: 100,
    height: 100,
    marginLeft: 10
  },
  containerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 20
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "#3a3a3a"
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    marginHorizontal: 15
  }
});

export default Promises;
