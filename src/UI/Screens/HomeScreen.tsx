import { SafeAreaView, Text, StyleSheet, FlatList, ListRenderItem, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../../Components/Molecules/ProductCard';
import { Product } from '../../model/Product.type';



export default function HomeScreen() {
  //Use State
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  // Use Effect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response: Product[]) => {
        setProducts(response);
        setInitialProducts(response);
        });
  }, []);

  const onPressCart = () => {
    console.log("onPressCart");
  }
  const ItemSeparatorComponent = useCallback(() => <View style={{height: 20}}></View>, []);

  console.log(products)
  console.log(initialProducts)

  const renderItem = useCallback<ListRenderItem<Product>>(({item}) => {
    return <ProductCard product={item} onPress={onPressCart}/>;
  }, []);

  return (
       <SafeAreaView>
         <FlatList
           style={{width: '100%', marginTop: 20}}
           showsVerticalScrollIndicator={false}
           ItemSeparatorComponent={ItemSeparatorComponent}
           data={products}
           renderItem={renderItem}
         />
       </SafeAreaView>
    );
}

const style = StyleSheet.create({}
);