import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

interface PriceSummaryProps {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  platformFee?: number;
  total: number;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  subtotal,
  deliveryFee,
  discount,
  platformFee = 15,
  total,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.labelGroup}>
          <Text style={styles.label}>Item total</Text>
          <View style={styles.savedBg}><Text style={styles.savedText}>Saved ₹20</Text></View>
        </View>
        <Text style={styles.value}>₹{subtotal.toFixed(0)}</Text>
      </View>
      
      <View style={[styles.row, { alignItems: 'flex-start' }]}>
        <View>
          <Text style={styles.label}>Delivery fee</Text>
          <Text style={styles.subLabel}>Add items worth ₹20 to get free delivery</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.strikethrough}>₹44</Text>
          <Text style={[styles.value, styles.free]}>FREE</Text>
        </View>
      </View>
      
      {discount > 0 && (
        <View style={styles.row}>
          <Text style={styles.label}>Discount</Text>
          <Text style={styles.value}>-₹{discount.toFixed(0)}</Text>
        </View>
      )}
      
      <View style={styles.row}>
        <Text style={styles.label}>Platform fee</Text>
        <Text style={styles.value}>₹{platformFee.toFixed(0)}</Text>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total payable amount</Text>
        <Text style={styles.totalValue}>₹{(total + platformFee).toFixed(0)}</Text>
      </View>
      
      <View style={styles.savingsBox}>
        <Text style={styles.savingsBoxText}>You are saving ₹99 with this order!</Text>
      </View>
    </View>
  );
};
