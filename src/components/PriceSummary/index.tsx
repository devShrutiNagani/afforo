import React from 'react';
import { View, Text } from 'react-native';
import { STRINGS } from '../../constants/strings';
import { COLORS } from '../../constants/colors';

import { styles } from './style';

interface PriceSummaryProps {
  currentSubtotal: number;
  currentDiscount: number;
  platformFee: number;
  couponDiscountAmount: number;
  finalPayable: number;
  totalSavings: number;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  currentSubtotal,
  currentDiscount,
  platformFee,
  couponDiscountAmount,
  finalPayable,
  totalSavings,
}) => {
  const itemTotalAfterDiscount = currentSubtotal - currentDiscount;

  return (
    <View style={styles.billDetailsContainer}>

      {/* ITEM TOTAL */}
      <View style={styles.billRow}>
        <Text style={styles.billLabel}>{STRINGS.itemTotal}</Text>
        <Text style={styles.billValue}>₹{currentSubtotal}</Text>
      </View>

      {/* PRODUCT DISCOUNT */}
      {currentDiscount > 0 && (
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Product Discount</Text>
          <Text style={[styles.billValue, { color: COLORS.primary }]}>
            -₹{currentDiscount}
          </Text>
        </View>
      )}

      {/* AFTER DISCOUNT PRICE */}
      <View style={styles.billRow}>
        <Text style={styles.billLabel}>Subtotal after discount</Text>
        <Text style={styles.billValue}>₹{itemTotalAfterDiscount}</Text>
      </View>

      {/* COUPON */}
      {couponDiscountAmount > 0 && (
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Coupon Discount</Text>
          <Text style={[styles.billValue, { color: COLORS.primary }]}>
            -₹{couponDiscountAmount}
          </Text>
        </View>
      )}

      {/* PLATFORM FEE */}
      <View style={styles.billRow}>
        <Text style={styles.billLabel}>Platform fee</Text>
        <Text style={styles.billValue}>₹{platformFee}</Text>
      </View>

      <View style={styles.dashedDividerSpacer} />

      {/* FINAL */}
      <View style={styles.billRow}>
        <Text style={styles.totalLabel}>To Pay</Text>
        <Text style={styles.totalValue}>₹{Math.max(0, finalPayable)}</Text>
      </View>

      {/* SAVINGS */}
      {totalSavings > 0 && (
        <View style={styles.savingsBannerBottom}>
          <Text style={styles.savingsBannerBottomText}>
            🎉 You saved ₹{totalSavings}
          </Text>
        </View>
      )}
    </View>
  );
};
