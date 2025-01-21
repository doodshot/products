import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, ListRenderItem, View, ScrollView } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../../Components/Molecules/ProductCard';
import { Product } from '../../model/Product.type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';
import CategoriesComponent from '../../Components/Molecules/CategoriesComponent';
import { CategoriesType } from '../../model/Categories.type';
import DescComponent from '../../Components/Molecules/DescComponent';
import AscComponent from '../../Components/Molecules/AscComponent';

export default function HomeScreen() {
  //Use State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  // Use Effect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response: Product[]) => {
        setProducts(response);
        setInitialProducts([...response]);
      });
  }, []);
  //chiamata categories da finire
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((response: string[]) => {
        setCategories(response);
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
  //da implementare
  const onAddToCart = () => {
    console.log('onPressCart');
  };
  const onFav = () => {
    console.log('onPressCart');
  };
  const ItemSeparatorComponent = useCallback(() => <View style={{ height: 20 }}></View>, []);

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

  const onCategoryPress = useCallback(
    (categoryProp: string) => {
      if (categoryProp === CategoriesType.electronics) {
        setProducts(initialProducts.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.jewelery) {
        setProducts(initialProducts.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.menClothing) {
        setProducts(initialProducts.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.womenClothing) {
        setProducts(initialProducts.filter((product) => product.category === categoryProp));
      }
    },
    [initialProducts]
  );

  return (
    <SafeAreaView style={style.ctn}>
      <View style={style.ctnFilter}>
        <DescComponent onSort={() => {}} />
        <AscComponent onSort={() => {}} />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.ctnCategories}>
        {categories.map((categoryItem, index) => (
          <CategoriesComponent
            key={index}
            category={categoryItem}
            onCategoryPress={onCategoryPress}
          />
        ))}
      </ScrollView>
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
  ctnCategories: {
    margin: 10,
  },
  ctnFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
