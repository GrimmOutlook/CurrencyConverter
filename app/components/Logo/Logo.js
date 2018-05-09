import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

const Logo = () => (
  <View>
    <ImageBackground
      source={require('./images/background.png')}
      style={{
        width: 280,
        height: 280,
      }}
    >
      <Image
        source={require('./images/logo.png')}
      />
    </ImageBackground>
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;
