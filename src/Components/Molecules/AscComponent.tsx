import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles.ascdesc';

export interface AscComponentProps {
  onSort: () => void;
  isSelected: boolean;
}

export default function AscComponent({ onSort, isSelected }: AscComponentProps) {
  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={onSort}>
        <Ionicons name="trending-up-outline" size={32} color={isSelected ? 'lightgray' : 'black'} />
      </TouchableOpacity>
    </View>
  );
}
