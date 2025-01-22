import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Product } from '../../model/Product.type';
import { storage } from '../../core/storage/storage';
import ProductCard from '../../Components/Molecules/ProductCard';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';
import ListEmptyComponetnFlatList from '../../Components/Atoms/ListEmptyComponetnFlatList';

export default function FavScreen() {
  //navigation
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  //useState
  const [favProducts, setFavProducts] = useState<Product[]>([]);
  //mmkv storage
  const loadFavorites = useCallback(async () => {
    const favoriteIds = storage.getItem('favorites');
    if (favoriteIds) {
      const ids = JSON.parse(favoriteIds);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const filteredProduct = data.filter((product: Product) => ids.includes(product.id));
      setFavProducts(filteredProduct);
    }
  }, []);
  function onFavorite(id: number) {
    const updatedFavs = favProducts.filter((product) => product.id !== id);
    setFavProducts(updatedFavs);
    storage.setItem('favorites', JSON.stringify(updatedFavs.map((cart) => cart.id)));
  }
  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => {
      return (
        <ProductCard
          product={item}
          onFav={() => onFavorite(item.id)}
          isSelected={true}
          onAddToCart={() => {}}
          onDetail={() => onDetail(item.id)}
          isSelectedCart={false}
        />
      );
    },
    [onFavorite]
  );
  const onDetail = useCallback(
    (id: number) => {
      nav.navigate('Details', {
        id,
      });
    },
    [nav]
  );
  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.useCallBackStyle}></View>,
    []
  );
  // Usa useFocusEffect per ricaricare i preferiti quando la schermata torna in focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites])
  );
  return (
    <SafeAreaView style={styles.ctn}>
      <FlatList
        data={favProducts}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponetnFlatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  useCallBackStyle: {
    height: 20,
  },
});
