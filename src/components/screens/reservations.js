import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Header from '../../components/header-hotels';
// import Calendar from '../sections/components/calendar';
// import Guest from '../sections/components/guest';
// import ButtonReservation from '../sections/components/button-reservation'

class Reservation extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Hotels')
  }

  render(){
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          
          {/* <Calendar /> */}
          {/* <Guest /> */}
          {/* <ButtonReservation /> */}

          
          <TouchableHighlight
            onPress={this.handlePress}
            color="#3a3a3a"
            style={styles.button}
          >
            <Text style={styles.buttonText} >Buscar Hoteles</Text>
          </TouchableHighlight>
          

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  button: {
    width: 300,
    padding: 5,
    borderRadius: 30,
    backgroundColor: '#cde500',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  buttonText: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default withNavigation(Reservation);
