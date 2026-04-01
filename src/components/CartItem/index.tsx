import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';
import { URLS } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import { styles } from './style';

interface CartItemProps {
  item: any;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  isDummy?: boolean;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove, isDummy = false }) => {
  return (
    <View style={styles.cartItemRow}>
      <View style={styles.cartItemImageContainer}>
        <Image source={{ uri: item.image || URLS.cartThumb }} style={styles.cartItemImage} />
      </View>
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.cartItemWeight}>{item.weight}</Text>
      </View>
      <View style={styles.cartItemRight}>
        <View style={styles.compactQtySelector}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => {
              if (item.quantity > 1) {
                onUpdateQuantity(item.id, item.quantity - 1);
              } else {
                onRemove(item.id);
              }
            }}
          >
            <Minus size={14} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => {
              onUpdateQuantity(item.id, item.quantity + 1);
            }}
          >
            <Plus size={14} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.cartItemPrices}>
          <Text style={styles.cartItemPrice}>₹{item.price}</Text>
          <Text style={styles.cartItemOrigPrice}>₹{item.originalPrice || item.price}</Text>
        </View>
      </View>
    </View>
  );
};
