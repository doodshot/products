import { SafeAreaView, StyleSheet, View, Text, FlatList, ListRenderItem } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../model/Product.type';
import { storage } from '../../core/storage/storage';
import CartProduct from '../../Components/Molecules/CartProduct';
import { useFocusEffect } from '@react-navigation/native';

export default function CartScreen() {
  //useState
  const [cart, setCart] = useState<Product[]>([]);
  //loadCart
  const loadCart = useCallback(async () => {
    const favoriteIds = storage.getItem('cart');
    if (favoriteIds) {
      const ids = JSON.parse(favoriteIds);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const filteredCart = data.filter((product: Product) => ids.includes(product.id));
      setCart(filteredCart);
    }
  }, []);
  const renderItem = useCallback<ListRenderItem<Product>>(({ item }) => {
    return <CartProduct product={item} onRemove={() => {}} />;
  }, []);
  //useEffectCart
  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [loadCart])
  );
  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.header}>
        <Ionicons name={'cart-outline'} size={46} color="black" style={styles.icon} />
        <Text style={styles.title}>My Cart</Text>
      </View>
      <FlatList data={cart} renderItem={renderItem} />
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'Merry-Bold',
  },
});
