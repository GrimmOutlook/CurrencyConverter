import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./images/background.png')}
      resizeMode="contain"
      style={styles.containerImage}
    >
      <Image
        source={require('./images/logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
