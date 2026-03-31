import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CartItemType } from '../../types';
import { QuantitySelector } from '../QuantitySelector';
import { styles } from './style';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = React.memo(({ item, onUpdateQuantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>52%</Text>
          <Text style={styles.discountTextSmall}>OFF</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>Gold Premium Assam Tea Rich Taste & Irresistible</Text>
          <Text style={styles.weight}>3 x 1 kg</Text>
        </View>
        
        <View style={styles.actionContainer}>
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
            style={styles.quantity}
          />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{item.price.toFixed(0)}</Text>
            {item.originalPrice && (
              <Text style={styles.originalPrice}>₹{(item.originalPrice).toFixed(0)}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
});
