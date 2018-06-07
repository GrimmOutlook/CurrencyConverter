import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container/index';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { LastConverted } from '../components/Text';
import { ClearButton } from '../components/Buttons';
import { connectAlert } from '../components/Alert';

import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

// const TEMP_BASE_CURRENCY = 'USD';
// const TEMP_QUOTE_CURRENCY = 'GBP';
// const TEMP_BASE_PRICE = '100';
// const TEMP_QUOTE_PRICE = '79.74';
// const TEMP_CONVERSION_RATE = 0.7974;
// const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
    currencyError: PropTypes.string,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }

  handlePressBaseCurrency = () => {
    console.log('press base currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleChangeText = (amount) => {
    console.log('change amount', amount);
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    console.log('press gear icon');
    this.props.navigation.navigate('Options', { title: 'Options' });
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.themes.primaryColor,
    currencyError: state.currencies.error,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
