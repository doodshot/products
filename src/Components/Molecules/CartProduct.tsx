import { Product } from '../../model/Product.type';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface CartProductProps {
  product: Product;
  onRemove: () => void;
}

export default function CartProduct({ product, onRemove }: CartProductProps) {
  return (
    <View style={styles.ctn}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.ctnInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Ionicons name={'trash-outline'} size={24} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    marginBottom: 20,
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 16,
  },
  ctnInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
