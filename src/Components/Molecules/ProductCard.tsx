import { View, StyleSheet, Text, Image } from 'react-native';
import { Product } from '../../model/Product.type';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}
/*
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
*/
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.ctn}>
      <View style={styles.ctnTitle}>
        <Text style={styles.title}> {product.title}</Text>
      </View>
      <View style={styles.ctnImg}>
        <Image source={{ uri: product.image }} style={styles.img}></Image>
        <Text>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    borderWidth: 1,
    height: 300,
    alignItems: 'flex-start',
    marginHorizontal: 24,
    borderRadius: 30,
    paddingTop: 10,
  },
  ctnTitle: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ctnImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
});

export default ProductCard;
