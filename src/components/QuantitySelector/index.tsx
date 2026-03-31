import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { COLORS } from '../../constants/colors';

import { styles } from './style';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  style?: object;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onDecrease} style={styles.button}>
        {quantity === 1 ? (
          <Trash2 size={14} color={COLORS.primary} />
        ) : (
          <Minus size={14} color={COLORS.primary} />
        )}
      </TouchableOpacity>
      
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      
      <TouchableOpacity onPress={onIncrease} style={styles.button}>
        <Plus size={14} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};
