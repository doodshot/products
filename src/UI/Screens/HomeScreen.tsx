import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, ListRenderItem, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../../Components/Molecules/ProductCard';
import { Product } from '../../model/Product.type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';

export default function HomeScreen() {
  //Use State
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  // Use Effect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response: Product[]) => {
        setProducts(response);
        setInitialProducts(response);
      });
  }, []);

  const onDetail = useCallback(
    (id: number) => {
      nav.navigate('Details', {
        id,
      });
    },
    [nav]
  );
  const onAddToCart = () => {
    console.log('onPressCart');
  };
  const onFav = () => {
    console.log('onPressCart');
  };
  const ItemSeparatorComponent = useCallback(() => <View style={{ height: 20 }}></View>, []);

  console.log(products);
  console.log(initialProducts);

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => {
      return (
        <ProductCard
          product={item}
          onDetail={() => onDetail(item.id)}
          onAddToCart={onAddToCart}
          onFav={onFav}
        />
      );
    },
    [onDetail]
  );

  return (
    <SafeAreaView style={style.ctn}>
      <FlatList
        style={style.imgFlatList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={products}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  ctn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgFlatList: {
    marginTop: 20,
  },
});
