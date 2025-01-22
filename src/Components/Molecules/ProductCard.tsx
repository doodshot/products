import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Product } from '../../model/Product.type';
import React from 'react';

interface ProductCardProps {
  product: Product;
  onDetail: () => void;
  onFav: () => void;
  onAddToCart: () => void;
  isSelected: boolean;
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
const ProductCard = ({ product, onDetail, onAddToCart, onFav, isSelected }: ProductCardProps) => {
  //UseState
  const realPrice = product.price + 100;
  return (
    <View style={styles.ctn}>
      <View style={styles.ctnFav}>
        <TouchableOpacity onPress={onFav}>
          <Image
            source={
              isSelected
                ? require('../../../assets/fav-selected-product.png')
                : require('../../../assets/fav-selected.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ctnImg}>
        <TouchableOpacity onPress={onDetail}>
          <Image source={{ uri: product.image }} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <View style={styles.ctnReview}>
          <Text>{product.rating.rate}/5</Text>
          <Image source={require('../../../assets/star.png')} style={styles.iconStar} />
          <Image source={require('../../../assets/imgReviews.png')} style={styles.iconReview} />
          <Text>{product.rating.count}</Text>
        </View>
      </View>
      <View style={styles.footerCtn}>
        <View style={styles.footerCard}>
          <View style={styles.ctnOffer}>
            <Text style={styles.realPrice}>${realPrice} </Text>
            <Text style={styles.priceOff}>-35%</Text>
          </View>
          <Text style={styles.txtPrice}>${product.price}</Text>
        </View>
        <TouchableOpacity onPress={onAddToCart}>
          <View style={styles.ctnImageCart}>
            <Image style={styles.iconCart} source={require('../../../assets/cart.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: 300,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  img: {
    resizeMode: 'contain',
    width: 230,
    height: 250,
  },
  ctnImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 20,
    fontSize: 18,
    marginTop: 40,
    fontWeight: 'bold',
  },
  iconStar: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 5,
  },
  ctnReview: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 8,
  },
  iconReview: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 5,
  },
  footerCard: {
    marginTop: 32,
    position: 'relative',
    top: 0,
    right: 15,
  },
  realPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  ctnOffer: {
    flexDirection: 'row',
  },
  priceOff: {
    backgroundColor: '#E9F0FF',
    padding: 2,
    borderRadius: 5,
  },
  txtPrice: {
    marginTop: 2,
    fontSize: 22,
  },
  footerCtn: {
    flexDirection: 'row',
  },
  ctnImageCart: {
    padding: 20,
    backgroundColor: '#2667FF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 40,
  },
  iconCart: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  ctnFav: {
    position: 'absolute',
    top: 10,
    right: 0,
    marginTop: 15,
    marginRight: 15,
    zIndex: 1,
  },
});

export default ProductCard;
