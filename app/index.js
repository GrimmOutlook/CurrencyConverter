import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Home from './screens/Home';
import Options from './screens/Options';
// import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

// export default () => <CurrencyList />;
export default () => <Options />;
// export default () => <Home />;
