import React from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components/Container/index';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Text>Whats up?!</Text>
  </Container>
);
