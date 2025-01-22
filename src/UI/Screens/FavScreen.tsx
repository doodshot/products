import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Product } from '../../model/Product.type';
import { storage } from '../../core/storage/storage';
import ProductCard from '../../Components/Molecules/ProductCard';

export default function FavScreen() {
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
          onDetail={() => {}}
        />
      );
    },
    [onFavorite]
  );
  // Recupera i dati al montaggio della schermata
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);
  return (
    <SafeAreaView>
      <FlatList data={favProducts} renderItem={renderItem} />
    </SafeAreaView>
  );
}
