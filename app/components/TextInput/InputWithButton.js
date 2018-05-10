import React, { PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable = true }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput style={styles.input} editable={editable} />
  </View>
);

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
