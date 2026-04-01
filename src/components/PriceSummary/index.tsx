import React from 'react';
import { View, Text } from 'react-native';
import {
  ShoppingBasket,
  Truck,
  BadgePercent,
  Ticket,
  Store,
  ReceiptText,
} from 'lucide-react-native';
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

const ICON_SIZE = 14;
const ICON_COLOR = COLORS.textMedium;
const ICON_GREEN = COLORS.primary;

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
        <View style={styles.billRowLeft}>
          <View style={styles.iconWrap}>
            <ShoppingBasket size={ICON_SIZE} color={ICON_COLOR} />
          </View>
          <Text style={styles.billLabel}>{STRINGS.itemTotal}</Text>
        </View>
        <Text style={styles.billValue}>₹{currentSubtotal}</Text>
      </View>

      {/* PRODUCT DISCOUNT */}
      {currentDiscount > 0 && (
        <View style={styles.billRow}>
          <View style={styles.billRowLeft}>
            <View style={[styles.iconWrap, styles.iconWrapGreen]}>
              <BadgePercent size={ICON_SIZE} color={ICON_GREEN} />
            </View>
            <Text style={styles.billLabel}>Product Discount</Text>
          </View>
          <Text style={[styles.billValue, { color: COLORS.primary }]}>
            -₹{currentDiscount}
          </Text>
        </View>
      )}

      {/* AFTER DISCOUNT SUBTOTAL */}
      <View style={styles.billRow}>
        <View style={styles.billRowLeft}>
          <View style={styles.iconWrap}>
            <ReceiptText size={ICON_SIZE} color={ICON_COLOR} />
          </View>
          <Text style={styles.billLabel}>Subtotal after discount</Text>
        </View>
        <Text style={styles.billValue}>₹{itemTotalAfterDiscount}</Text>
      </View>

      {/* DELIVERY FEE */}
      <View style={styles.billRow}>
        <View style={styles.billRowLeft}>
          <View style={styles.iconWrap}>
            <Truck size={ICON_SIZE} color={ICON_COLOR} />
          </View>
          <Text style={styles.billLabel}>{STRINGS.deliveryFee}</Text>
        </View>
        <Text style={styles.billValue}>FREE</Text>
      </View>

      {/* COUPON DISCOUNT */}
      {couponDiscountAmount > 0 && (
        <View style={styles.billRow}>
          <View style={styles.billRowLeft}>
            <View style={[styles.iconWrap, styles.iconWrapGreen]}>
              <Ticket size={ICON_SIZE} color={ICON_GREEN} />
            </View>
            <Text style={styles.billLabel}>Coupon Discount</Text>
          </View>
          <Text style={[styles.billValue, { color: COLORS.primary }]}>
            -₹{couponDiscountAmount}
          </Text>
        </View>
      )}

      {/* PLATFORM FEE */}
      <View style={styles.billRow}>
        <View style={styles.billRowLeft}>
          <View style={styles.iconWrap}>
            <Store size={ICON_SIZE} color={ICON_COLOR} />
          </View>
          <Text style={styles.billLabel}>Platform fee</Text>
        </View>
        <Text style={styles.billValue}>₹{platformFee}</Text>
      </View>

      <View style={styles.dashedDividerSpacer} />

      {/* TOTAL PAYABLE */}
      <View style={styles.billRow}>
        <Text style={styles.totalLabel}>To Pay</Text>
        <Text style={styles.totalValue}>₹{Math.max(0, finalPayable)}</Text>
      </View>

      {/* SAVINGS BANNER */}
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
