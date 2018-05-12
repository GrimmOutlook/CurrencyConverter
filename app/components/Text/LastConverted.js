import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, conversionRate, quote, date }) => (
  <Text style={styles.smallText}>
    {base} = {conversionRate} {quote} as of {moment(date).format('MMMM DD, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
