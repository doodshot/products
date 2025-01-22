import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';

const ListEmptyComponetnFlatList = () => {
  return (
    <View style={styles.ctn}>
      <Text style={styles.title}>Non hai nessun preferito!</Text>
      <Image
        source={{
          uri: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVtbnBvcHZkMXFjZjhjeTFkbGg1bTNvNHhjdTdneHRsM285eXYwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gfO3FcnL8ZK9wVgr6t/giphy.gif',
        }}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: 300,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  img: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Merry-Bold',
  },
});

export default ListEmptyComponetnFlatList;
