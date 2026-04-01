import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { COLORS } from '../../constants/colors';
import { STRINGS } from '../../constants/strings';

import { styles } from './style';

interface SuggestedItemProps {
  item: any;
  onAdd: (item: any) => void;
  onOptions: (item: any) => void;
}

export const SuggestedItem: React.FC<SuggestedItemProps> = ({ item, onAdd, onOptions }) => {
  // Process "52% OFF", extracting first digit and "OFF" smartly, or just render it
  const parts = item.discount.split(' ');
  const numberStr = parts[0]; // e.g. "50%"
  const suffix = parts.length > 1 ? parts[1] : '';

  return (
    <View style={styles.suggestedCard}>
      <View style={styles.discountTagSmall}>
        <Text style={styles.discountText}>{numberStr}</Text>
        <Text style={styles.discountTextSmall}>{suffix}</Text>
      </View>
      <View style={styles.suggestedImgBox}>
        <Image source={{ uri: item.image }} style={styles.suggestedImage} />
      </View>
      <Text style={styles.brandText}>{item.brand}</Text>
      <Text style={styles.suggestedTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.suggestedWeight}>{item.weight}</Text>
      <View style={styles.suggestedActionRow}>
        <View style={styles.suggestedPriceBox}>
          <Text style={styles.suggestedPrice}>₹{item.price}</Text>
          <Text style={styles.suggestedOrigPrice}>₹{item.originalPrice}</Text>
        </View>
        {item.hasOptions ? (
          <TouchableOpacity style={styles.greenSolidBtn} onPress={() => onOptions(item)}>
            <Text style={styles.greenSolidText}>{STRINGS.options2}</Text>
            <ChevronDown size={14} color={COLORS.white} style={styles.chevronMini} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.greenSolidBtn, { paddingHorizontal: 16, minWidth: 60, justifyContent: 'center' }]}
            onPress={() => onAdd({ ...item, quantity: 1 })}
          >
            <Text style={styles.greenSolidText}>{STRINGS.add}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
