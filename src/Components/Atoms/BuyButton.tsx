import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export type BuyButtonProps = {
  onBuy: () => void;
  isActived: boolean;
};

const BuyButton = ({ onBuy, isActived }: BuyButtonProps) => {
  console.log(isActived);
  return (
    <TouchableOpacity onPress={onBuy} disabled={isActived}>
      <View style={styles.ctn}>
        <View style={styles.btnCtn}>
          <Text style={isActived ? styles.buyDisabled : styles.buy}>Acquista</Text>
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
  buyDisabled: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Merry-Bold',
    fontWeight: '900',
    color: 'lightgray',
  },
});

export default BuyButton;
