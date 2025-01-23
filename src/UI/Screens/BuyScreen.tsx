import { Image, SafeAreaView } from 'react-native';
import React from 'react';

export default function BuyScreen() {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVtbnBvcHZkMXFjZjhjeTFkbGg1bTNvNHhjdTdneHRsM285eXYwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gfO3FcnL8ZK9wVgr6t/giphy.gif',
        }}
      />
    </SafeAreaView>
  );
}
