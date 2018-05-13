import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'nd';
const ICON_COLOR = "#868686"
const ICON_SIZE = 23;

class Options extends Component () {
  handleThemePress = () => {
    console.log('press Theme');
  }

  handleSitePress = () => {
    console.log('press Site');
  }

  render () {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent={false}>
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicon
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicon
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
