import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { withNavigation } from 'react-navigation';
import navigationService from "../components/navigation-services";


// const { log } =  console;

class ListCities extends Component {

  // constructor(props){
  //   super(props);
  //   this.handlePress = this.handlePress.bind(this);
  // }

  // handlePress (id) {
  //   log(id);
  //   navigationService.navigate('Hotels', { idSend: id });
  // }

  handlePress = () => {
    this.props.navigation.navigate("Hotels");
    // navigationService.navigate("show");
  };
  

  render() {
    return(
      <ScrollView style={styles.container} >
        <View style={styles.containerText} >
          <Text style={styles.title}>Destinos Ayenda Hoteles</Text>
        </View>
        {this.props.cities.map(city => (
          <TouchableOpacity
            key={city.id}
            activeOpacity={0.7}
            onPress={this.handlePress}
            // onPress={() => this.handlePress(city.id)}
            style={styles.wrapper}
          >
            <ImageBackground
              style={styles.cover}
              source={{uri: city.firstPhoto.url.replace("/system", "https://ayenda-2016.s3.amazonaws.com") }}
            >
              <View style={styles.overlay} >
                <Text style={styles.city} numberOfLines={1}>{city.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))
      }
      </ScrollView>
    )
  }
}

// const ListCities = ({ cities }) => (
//   <ScrollView style={styles.container} >
//     <View style={styles.containerText} >
//       <Text style={styles.title}>Destinos Ayenda Hoteles</Text>
//     </View>
//     {cities.map(city => (
//       <TouchableOpacity
//         key={city.id}
//         activeOpacity={0.7}
//         onPress={this.handlePress}
//         style={styles.wrapper}
//       >
//         <ImageBackground
//           style={styles.cover}
//           source={{uri: city.firstPhoto.url.replace("/system", "https://ayenda-2016.s3.amazonaws.com") }}
//         >
//           <View style={styles.overlay} >
//             <Text style={styles.city} numberOfLines={1}>{city.name}</Text>
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//     ))
//   }
//   </ScrollView>
// );




const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  cover: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    resizeMode: 'contain',
  },
  wrapper: {
    width: '90%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#d1d1d1',
    marginHorizontal: '5%',
    padding: 0,
    marginBottom: 20,
  },
  city: {
    height: 100,
    justifyContent: "flex-end",
    alignItems:"flex-start",
    overflow: "hidden",
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: '5%',
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3a3a3a',
  },
  separador: {
    marginVertical: '5%',
  },
  separadorEnd: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
  },
})

export default withNavigation(ListCities);
