import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function AboutUs(props) {
  return(
    <View styles={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>¿Por qué reservar con Ayenda Hoteles?</Text>

        <Text style={styles.text}>
          Ayenda Hoteles es una cadena de hoteles que te ofrece hoteles estandarizados en calidad con precios muy baratos, todos con sus servicios básicos completamente solventados y con soporte en cualquier momento. Tienes hoteles económicos en Bogotá, Medellín y Pereira, para reservar con unos pocos clics.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    overflow: "hidden",
    flex: 1,
    marginLeft: 10,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#3a3a3a',
    textAlign: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 15,
    lineHeight: 33,
    marginLeft: '5%',
    color: '#3A3A3A',
    marginBottom: 30,
  },
})

export default AboutUs;