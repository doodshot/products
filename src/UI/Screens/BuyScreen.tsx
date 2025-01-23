import { Image, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import React from 'react';

export default function BuyScreen() {
  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.header}>
        <Text style={styles.title}>Hai completato con successo il tuo acquisto!</Text>
      </View>
      <Image
        source={{
          uri: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZoYzl5cHdmeTNkcWd1bTR1bzR2cHMxZDBzdXluNmVxdTdvNHpyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tfy1QEkNqQSVYeJcml/giphy.gif',
        }}
        style={styles.img}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Grazie per aver acquistato con noi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: 'lightgreen',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Merry-Bold',
    color: 'black',
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
  },
  footerText: {
    fontSize: 24,
    fontWeight: '200',
  },
});
