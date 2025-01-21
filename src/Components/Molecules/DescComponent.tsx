import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles.ascdesc';

export interface CountComponentProps {
  onSort: () => void;
}

export default function DescComponent({ onSort }: CountComponentProps) {
  return (
    <View style={styles.ctn}>
      <TouchableOpacity onPress={onSort}>
        <Ionicons name="trending-down-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
}
