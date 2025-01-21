import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';

interface CategoriesComponentProps {
  category: string;
  onCategoryPress: (item: string) => void;
  isSelected: boolean;
}

export default function CategoriesComponent({
  category,
  onCategoryPress,
  isSelected,
}: CategoriesComponentProps) {
  const onPress = useCallback(() => {
    if (!onCategoryPress) {
      return;
    }
    onCategoryPress(category);
  }, [category, onCategoryPress]);
  //useFonts
  const [fontLoad] = useFonts({
    'Merry-Bold': require('../../../assets/fonts/Merriweather-Bold.ttf'),
  });
  if (!fontLoad) {
    return null;
  }

  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={onPress}>
        <Text style={isSelected ? styles.selectedText : styles.txt}>{category}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  txt: {
    fontSize: 24,
    fontFamily: 'Merry-Bold',
  },
  selectedText: {
    fontSize: 24,
    fontFamily: 'Merry-Bold',
    color: 'lightgray',
  },
});
