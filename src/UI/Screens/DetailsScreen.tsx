import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStack';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../model/Product.type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../../Components/Atoms/stylesDetail';
export default function DetailsScreen() {
  //Navigation
  const nav = useNavigation<NavigationProp<RootStackParamList, 'Details'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  //useState
  const [product, setProduct] = useState<Product>({
    category: '',
    description: '',
    id: 0,
    image: 'https://placehold.co/500x300',
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
        <Text style={styles.cat}>Category</Text>
        <Text style={styles.desc}>{product.category}</Text>
        <Text style={styles.titleDesc}>Description</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.titleDesc}>Rating</Text>
        <Text style={styles.desc}>{product.rating.rate}/5</Text>
        {/* numberReviews */}
        <Text style={styles.titleDesc}>Number of reviews</Text>
        <View style={styles.ctnNumberReviews}>
          <Text>{product.rating.count}</Text>
          <Image source={require('../../../assets/imgReviews.png')} style={styles.iconReview} />
        </View>
        {/* price componenet */}
        <View style={styles.ctnPrice}>
          <View style={styles.ctnTxtPrice}>
            <Text style={styles.pricetxt}>${product.price}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
