import { Product } from '../../model/Product.type';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface CartProductProps {
  product: Product;
  onRemove: () => void;
}

export default function CartProduct({ product, onRemove }: CartProductProps) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity < 20) setQuantity((prev) => prev + 1); // max 19
  };
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1); // non puoi scendere sotto 1
  };
  return (
    <View style={styles.ctn}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.ctnInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={onRemove}>
            <Ionicons name={'trash-outline'} size={24} color={'black'} />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  button: {
    padding: 4,
    backgroundColor: '#838a94',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
