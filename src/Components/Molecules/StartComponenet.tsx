import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles.ascdesc';

export interface StartComponentProps {
  onSort: () => void;
  isSelected: boolean;
}

export default function StartComponenet({ onSort, isSelected }: StartComponentProps) {
  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={onSort}>
        <Ionicons name="refresh-outline" size={32} color={isSelected ? 'lightgray' : 'black'} />
      </TouchableOpacity>
    </View>
  );
}
