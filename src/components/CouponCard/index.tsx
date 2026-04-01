import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COUPONS_DATA } from '../../constants/mockData';
import { styles } from './style';

interface CouponCardProps {
  item: typeof COUPONS_DATA[0];
  isApplied: boolean;
  onApply: (id: string) => void;
  currentSubtotal: number;
}

export const CouponCard: React.FC<CouponCardProps> = ({
  item,
  isApplied,
  onApply,
  currentSubtotal,
}) => {
  // ✅ Check if coupon is applicable
  const isDisabled = currentSubtotal < item.minOrder;

  return (
    <View style={[styles.couponCard, isApplied && styles.couponCardApplied]}>

      {/* Top Circle */}
      <View style={styles.couponTopCirc}>
        <Text style={styles.couponTopCircText}>
          {item.type === 'percent' ? `${item.value}%` : `₹${item.value}`}
        </Text>
        <Text style={styles.couponTopCircSub}>OFF</Text>
      </View>

      {/* Divider */}
      <View style={styles.couponDashedLine} />

      {/* Description */}
      <Text style={styles.couponDescText}>
        {item.description || `Valid on orders above ₹${item.minOrder}`}
      </Text>

      {/* Coupon Code */}
      <View style={styles.couponCodeBox}>
        <Text style={styles.couponCodeText}>{item.code}</Text>
      </View>

      {/* Apply Button */}
      <TouchableOpacity
        disabled={isDisabled}
        onPress={() => onApply(item.id)}
      >
        <Text
          style={[
            styles.couponApplyBtn,
            isApplied && styles.couponApplyBtnApplied,
            isDisabled && { opacity: 0.5 },
          ]}
        >
          {isDisabled
            ? 'APPLY'
            : isApplied
              ? '✓ APPLIED'
              : 'APPLY'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};