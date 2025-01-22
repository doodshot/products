import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.header}>
        <Ionicons name={'cart-outline'} size={46} color="black" style={styles.icon} />
        <Text style={styles.title}>My Cart</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: -20,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'Merry-Bold',
  },
});
