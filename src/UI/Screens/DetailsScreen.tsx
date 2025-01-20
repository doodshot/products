import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, Image, View } from 'react-native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../model/Product.type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function DetailsScreen() {
  //Navigation
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Details'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  //useState
  const [product, setProduct] = useState<Product>({
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: '',
  });
  const { top } = useSafeAreaInsets();
  //useEffect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + route.params.id)
      .then((res) => res.json())
      .then((response: Product) => {
        setProduct(response);
      });
  }, [route.params.id]);
  console.log(product);
  return (
    <View style={[styles.ctn, { marginTop: top }]}>
      <Ionicons
        name="caret-back-outline"
        size={32}
        color="black"
        style={styles.backIcon}
        onPress={() => nav.goBack()}
      />
      <ScrollView style={styles.header}>
        <Image source={{ uri: product.image }} style={styles.img}></Image>
        <Text style={styles.title} numberOfLines={3}>
          {product.title}
        </Text>
        <Text style={styles.cat}>Category: {product.category}</Text>
        <Text style={styles.titleDesc}>Description</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  backIcon: {
    marginBottom: 16,
    marginHorizontal: 24,
  },
  header: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  img: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'regular',
  },
  cat: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleDesc: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
