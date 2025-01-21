import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ProductCard from '../../Components/Molecules/ProductCard';
import { Product } from '../../model/Product.type';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';
import CategoriesComponent from '../../Components/Molecules/CategoriesComponent';
import { CategoriesType } from '../../model/Categories.type';
import DescComponent from '../../Components/Molecules/DescComponent';
import AscComponent from '../../Components/Molecules/AscComponent';
import { SortType } from '../../model/SortType';
import StartComponenet from '../../Components/Molecules/StartComponenet';

export default function HomeScreen() {
  //Use State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<SortType>(SortType.NONE);
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  // Use Effect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response: Product[]) => {
        setProducts([...response]);
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
  const onSort = (type: SortType) => {
    if (type === SortType.ASC) {
      setProducts([...products].sort((a, b) => a.rating.count - b.rating.count));
      setSelectedSort(SortType.ASC);
    } else if (type === SortType.DESC) {
      setProducts([...products].sort((a, b) => b.rating.count - a.rating.count));
      setSelectedSort(SortType.DESC);
    } else if (type === SortType.STR) {
      setProducts([...initialProducts]);
      setSelectedSort(SortType.STR);
      setSelectedCategory('');
    }
  };
  const ItemSeparatorComponent = useCallback(
    () => <View style={style.useCallBackStyle}></View>,
    []
  );

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
      setSelectedCategory(categoryProp);
      if (categoryProp === CategoriesType.electronics) {
        setProducts(products.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.jewelery) {
        setProducts(products.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.menClothing) {
        setProducts(products.filter((product) => product.category === categoryProp));
      } else if (categoryProp === CategoriesType.womenClothing) {
        setProducts(products.filter((product) => product.category === categoryProp));
      }
    },
    [initialProducts]
  );

  return (
    <SafeAreaView style={style.ctn}>
      <View style={style.ctnFilter}>
        <DescComponent
          onSort={() => onSort(SortType.DESC)}
          isSelected={selectedSort === SortType.DESC}
        />
        <AscComponent
          onSort={() => onSort(SortType.ASC)}
          isSelected={selectedSort === SortType.ASC}
        />
        <StartComponenet
          onSort={() => onSort(SortType.STR)}
          isSelected={selectedSort === SortType.STR}
        />
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
            isSelected={selectedCategory === categoryItem}
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
  useCallBackStyle: {
    height: 20,
  },
});
