import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export interface CountComponentProps {
  onSort: () => void;
}

export default function CountComponent({ onSort }: CountComponentProps) {
  return (
    <View>
      <TouchableOpacity onPress={onSort}>
        <Ionicons name="trending-down-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
}
