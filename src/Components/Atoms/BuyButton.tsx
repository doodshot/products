import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export type BuyButtonProps = {
  onBuy: () => void;
};

const BuyButton = ({ onBuy }: BuyButtonProps) => {
  return (
    <TouchableOpacity onPress={onBuy}>
      <View style={styles.ctn}>
        <View style={styles.btnCtn}>
          <Text style={styles.buy}>Acquista</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ctn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnCtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    paddingHorizontal: 20,
    backgroundColor: '#efecec',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buy: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Merry-Bold',
    fontWeight: '900',
  },
});

export default BuyButton;
