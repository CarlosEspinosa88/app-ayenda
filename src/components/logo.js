import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

function Logo(props) {
  return(
    <Image
      source={require('../../assets/logo-dark.png')}
      style={styles.logo}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 65,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
})

export default Logo;
