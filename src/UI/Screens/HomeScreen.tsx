import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export type Product = {
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
}


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

  console.log(products)
  console.log(initialProducts)

  return (
       <SafeAreaView>
         <Text>
           Ciao Home screen
         </Text>
       </SafeAreaView>
    );
}

const style = StyleSheet.create({}
);