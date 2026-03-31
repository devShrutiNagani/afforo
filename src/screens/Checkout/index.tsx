import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useCart } from '../../hooks/useCart';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { styles } from './style';
import { STRINGS } from '../../constants/strings';
import { APP_CONFIG } from '../../constants/config';
import { COUPONS_DATA } from '../../constants/mockData';

type CheckoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;
type CheckoutScreenRouteProp = RouteProp<RootStackParamList, 'Checkout'>;



export const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const route = useRoute<CheckoutScreenRouteProp>();
  const { items, clear } = useCart();
  const [loading, setLoading] = useState(false);

  const appliedCouponId = route.params?.appliedCouponId || null;
  const activeCouponData = appliedCouponId ? COUPONS_DATA.find(c => c.id === appliedCouponId) : null;

  // Exact math clone of the Cart Screen dynamic pricing block:
  const isCartEmpty = items.length === 0;
  const currentSubtotal = route.params?.mockSubtotal ?? (isCartEmpty ? 444 : items.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const currentDiscount = route.params?.mockDiscount ?? (isCartEmpty ? 20 : Math.floor(currentSubtotal * APP_CONFIG.defaultDiscountPct));
  const platformFee = APP_CONFIG.platformFee;

  let couponDiscountAmount = 0;
  if (activeCouponData) {
    if (activeCouponData.pct.includes('₹')) {
      couponDiscountAmount = parseInt(activeCouponData.pct.replace('₹', ''), 10) || 0;
    } else if (activeCouponData.pct.includes('%')) {
      const pctVal = parseInt(activeCouponData.pct.replace('%', ''), 10) || 0;
      couponDiscountAmount = Math.floor(currentSubtotal * (pctVal / 100));
    }
  }

  const finalPayable = currentSubtotal - currentDiscount + platformFee - couponDiscountAmount;
  const totalSavings = currentDiscount + couponDiscountAmount + APP_CONFIG.defaultSavingsMatch; // Matching cart mockup scale

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      clear();
      navigation.navigate('OrderSuccess');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Header title={STRINGS.checkout} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{STRINGS.deliveryAddress}</Text>
          <View style={styles.card}>
            <Text style={styles.addressName}>{STRINGS.home}</Text>
            <Text style={styles.addressText}>Plot no.10, Khasra no.873, Rawli Mehd...</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{STRINGS.paymentMethod}</Text>
          <View style={styles.card}>
            <Text style={styles.paymentText}>Aforro Wallet • UPI</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{STRINGS.orderSummary}</Text>
          
          {/* Synchronized dynamically generated Bill Details Container matches native Figma */}
          <View style={styles.billDetailsContainer}>
            <View style={styles.billRow}>
              <View style={styles.billRowLeft}>
                <Text style={styles.billLabel}>{STRINGS.itemTotal}</Text>
                {currentDiscount > 0 && <View style={styles.savedOrangeTag}><Text style={styles.savedOrangeText}>Saved ₹{currentDiscount}</Text></View>}
              </View>
              <Text style={styles.billValue}>₹{currentSubtotal}</Text>
            </View>

            <View style={styles.billRow}>
              <View style={styles.billRowLeftCol}>
                <Text style={styles.billLabel}>{STRINGS.deliveryFee}</Text>
                <Text style={styles.deliverySublabel}>Add items worth ₹20 to get free delivery</Text>
              </View>
              <View style={styles.freeDeliveryBox}>
                <Text style={styles.strikethroughPrice}>₹40</Text>
                <Text style={styles.freeText}>FREE</Text>
              </View>
            </View>

            {currentDiscount > 0 && (
              <View style={styles.billRow}>
                <Text style={styles.billLabel}>Discount</Text>
                <Text style={styles.billValue}>-₹{currentDiscount}</Text>
              </View>
            )}

            {couponDiscountAmount > 0 && (
              <View style={styles.billRow}>
                <Text style={styles.billLabel}>Coupon Cut</Text>
                <Text style={[styles.billValue, { color: COLORS.primary }]}>-₹{couponDiscountAmount}</Text>
              </View>
            )}

            <View style={styles.billRow}>
              <Text style={styles.billLabel}>Platform fee</Text>
              <Text style={styles.billValue}>₹{platformFee}</Text>
            </View>

            <View style={[styles.dashedDivider, { marginVertical: SPACING.m }]} />

            <View style={styles.billRow}>
              <Text style={styles.totalLabel}>Total payable amount</Text>
              <Text style={styles.totalValue}>₹{Math.max(0, finalPayable)}</Text>
            </View>
            
            <View style={styles.savingsBannerBottom}>
              <Text style={styles.savingsBannerBottomText}>You are saving ₹{totalSavings} with this order!</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={loading ? STRINGS.orderPlacing : `${STRINGS.placeOrder} • ₹${Math.max(0, finalPayable)}`}
          onPress={handlePlaceOrder}
          loading={loading}
        />
      </View>
    </View>
  );
};


