import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BellOff, ChevronLeft, ChevronRight, PhoneOff, User, XCircle } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PriceSummary } from '../../components/PriceSummary';
import { COLORS } from '../../constants/colors';
import { useCart } from '../../hooks/useCart';
import { RootStackParamList } from '../../navigation/AppNavigator';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

import { CartItem } from '../../components/CartItem';
import { CouponCard } from '../../components/CouponCard';
import { StickyBottomBar } from '../../components/StickyBottomBar';
import { SuggestedItem } from '../../components/SuggestedItem';
import { VariantBottomSheet } from '../../components/VariantBottomSheet';
import { URLS } from '../../constants/images';
import { COUPONS_DATA, DELIVERY_INSTRUCTIONS, SIMILAR_ITEMS, SUGGESTED_ITEMS } from '../../constants/mockData';
import { STRINGS } from '../../constants/strings';
import { styles } from './style';

export const CartScreen = () => {
  const navigation = useNavigation<NavProp>();
  const { items, addItem, updateItemQuantity, removeItem, deliveryAddress } = useCart();
  const [instruction, setInstruction] = useState('');

  // Interactive UI states requested
  const [appliedCouponId, setAppliedCouponId] = useState<string | null>('');
  const [selectedInstructions, setSelectedInstructions] = useState<string[]>([]);
  const [selectedModalItem, setSelectedModalItem] = useState<any>(null);

  const toggleInstruction = (inst: string) => {
    if (selectedInstructions.includes(inst)) {
      setSelectedInstructions(prev => prev.filter(i => i !== inst));
    } else {
      setSelectedInstructions(prev => [...prev, inst]);
    }
  };

  // Options Modal State
  const [modalVisible, setModalVisible] = useState(false);
  const [variantQuantity, setVariantQuantity] = useState(1);

  useEffect(() => {
    if (!modalVisible) {
      setVariantQuantity(1);
    }
  }, [modalVisible]);

  const outOfStockItems = items.filter(item => item.isOutOfStock);
  const availableItems = items.filter(item => !item.isOutOfStock);
  const isCartEmpty = availableItems.length === 0 && outOfStockItems.length === 0;

  const handleApplyCoupon = (id: string) => {
    const coupon = COUPONS_DATA.find(c => c.id === id);
    if (!coupon) return;

    // ❌ Block if condition not met
    if (currentSubtotal < coupon.minOrder) {
      Alert.alert(`Minimum order ₹${coupon.minOrder} required`);
      return;
    }

    // ✅ Toggle
    if (appliedCouponId === id) {
      setAppliedCouponId(null);
    } else {
      setAppliedCouponId(id);
    }
  };

  const renderInstructionIcon = (iconName: string, isSelected: boolean) => {
    const color = isSelected ? COLORS.black : "#666";
    const size = 12;
    switch (iconName) {
      case 'BellOff': return <BellOff size={size} color={color} />;
      case 'PhoneOff': return <PhoneOff size={size} color={color} />;
      case 'User': return <User size={size} color={color} />;
      default: return null;
    }
  };


  // Compute currently applied coupon for standard visual mapping:
  const activeCouponData = appliedCouponId ? COUPONS_DATA.find(c => c.id === appliedCouponId) : null;

  const currentSubtotal = availableItems.length === 0 ? 0 : availableItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
  const currentDiscount = availableItems.length === 0 ? 0 : Math.floor(currentSubtotal * 0.1);
  const platformFee = isCartEmpty ? 0 : 20;

  let couponDiscountAmount = 0;

  if (activeCouponData && currentSubtotal >= activeCouponData.minOrder) {
    if (activeCouponData.type === 'flat') {
      couponDiscountAmount = activeCouponData.value;
    }

    if (activeCouponData.type === 'percent') {
      const discount = (currentSubtotal * activeCouponData.value) / 100;

      couponDiscountAmount = activeCouponData.maxDiscount
        ? Math.min(discount, activeCouponData.maxDiscount)
        : discount;
    }
  }

  const finalPayable = currentSubtotal - currentDiscount + platformFee - couponDiscountAmount;
  const totalSavings = currentDiscount + couponDiscountAmount + 99;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('ProductDetails')}>
          <ChevronLeft color={COLORS.textPrimary} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{STRINGS.reviewCart}</Text>
        <View style={styles.iconBtn} />
      </View>

      <View style={styles.flex1}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.savingsBannerTop}>
            <Text style={styles.savingsBannerTopText}>{STRINGS.savingsMsg}</Text>
          </View>

          <View style={styles.yellowWarningBanner}>
            <View style={styles.warningIconCirc}>
              <Text style={styles.warningExclamation}>!</Text>
            </View>
            <Text style={styles.yellowWarningText}>{STRINGS.delayWarning}</Text>
          </View>

          {/* Cart Items List */}
          <View style={styles.cartItemsBlock}>
            {outOfStockItems.map((item) => (
              <View style={styles.outOfStockContainer} key={item.id}>
                <View style={styles.outOfStockHeader}>
                  <Text style={styles.outOfStockHeaderText}>{STRINGS.outOfStockMsg}</Text>
                </View>
                <View style={styles.outOfStockRow}>
                  <View style={[styles.cartItemImageContainer, styles.outOfStockOpacity]}>
                    <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                  </View>
                  <View style={[styles.cartItemInfo, styles.outOfStockOpacity]}>
                    <Text style={styles.cartItemTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.cartItemWeight}>{item.weight}</Text>
                  </View>
                  <TouchableOpacity style={styles.deleteBtn} onPress={() => removeItem(item.id)}>
                    <Text style={styles.deleteBtnText}>{STRINGS.delete}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.similarItemsContainer}>
                  <Text style={styles.similarItemsTitle}>{STRINGS.similarProducts}</Text>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={SIMILAR_ITEMS}
                    keyExtractor={(si: any) => si.id}
                    renderItem={({ item: si }) => (
                      <SuggestedItem
                        item={si}
                        onOptions={(it) => { setSelectedModalItem(it); setModalVisible(true); }}
                        onAdd={(it) => addItem({ ...it, quantity: 1 })}
                      />
                    )}
                    contentContainerStyle={styles.horizontalListPadding}
                    style={styles.negativeMarginM}
                  />
                </View>
              </View>
            ))}

            {availableItems.length > 0 ? (
              availableItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateItemQuantity}
                  onRemove={removeItem}
                />
              ))
            ) : (outOfStockItems.length === 0 && (
              <View style={styles.emptyCartContainer}>
                <Text style={styles.emptyCartText}>{STRINGS.yourCartIsEmpty}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          {/* Did you forget? */}
          <View style={styles.sectionPadding}>
            <Text style={styles.sectionTitle}>{STRINGS.didYouForget}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={SUGGESTED_ITEMS}
              keyExtractor={(item: any) => item.id}
              renderItem={({ item }) => (
                <SuggestedItem
                  item={item}
                  onOptions={(it) => { setSelectedModalItem(it); setModalVisible(true); }}
                  onAdd={(it) => addItem({ ...it, quantity: 1 })}
                />
              )}
              contentContainerStyle={styles.horizontalListPadding}
              style={styles.negativeMarginM}
            />
          </View>

          {/* Coupons Section */}
          <View style={styles.couponsOuterBox}>
            <View style={styles.couponsHeaderRow}>
              <View style={styles.iconCircleBlueMini}><Text style={styles.whiteMiniText}>%</Text></View>
              <Text style={styles.sectionTitleOptions}>{STRINGS.topCoupons}</Text>
              <XCircle size={16} color={COLORS.primary} style={styles.xIconMini} />
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={COUPONS_DATA}
              keyExtractor={(item: any) => item.id}
              renderItem={({ item }: any) => (
                <CouponCard
                  item={item}
                  isApplied={appliedCouponId === item.id}
                  onApply={handleApplyCoupon}
                  currentSubtotal={currentSubtotal}
                />
              )}
              contentContainerStyle={styles.couponListPadding}
              style={styles.negativeMarginM}
            />

            {activeCouponData && (
              <View style={styles.couponSavedMsg}>
                <Text style={styles.couponSavedText}>
                  🎉 You are saving{' '}
                  <Text style={styles.couponSavedBold}>
                    {activeCouponData.type === 'percent'
                      ? `${activeCouponData.value}%`
                      : `₹${activeCouponData.value}`}
                  </Text>{' '}
                  with this coupon 🎉
                </Text>
              </View>
            )}

            <TouchableOpacity style={styles.viewMoreRow}>
              <Text style={styles.viewMoreText}>{STRINGS.viewMore}</Text>
              <ChevronRight size={14} color={COLORS.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.cashbackBox}>
            <View style={styles.cashbackRow}>
              <View style={styles.iconCircleBlueHero}>
                <Image source={{ uri: URLS.cartMini }} style={styles.cashbackImg} />
              </View>
              <View style={styles.cashbackInfo}>
                <Text style={styles.cashbackTitle}>{STRINGS.cashbackMsg}</Text>
                <Text style={styles.cashbackDesc}>No coupon needed</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionPadding}>
            <Text style={styles.sectionTitle}>{STRINGS.orderInstructions}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.instructionsScroll}>
              {DELIVERY_INSTRUCTIONS.map((inst) => {
                const isSelected = selectedInstructions.includes(inst.key);
                return (
                  <TouchableOpacity
                    key={inst.id}
                    style={[styles.pill, isSelected && { borderColor: COLORS.orange, backgroundColor: COLORS.orangeBorder }]}
                    onPress={() => toggleInstruction(inst.key)}
                  >
                    {renderInstructionIcon(inst.icon, isSelected)}
                    <Text style={[styles.pillText, isSelected && { color: COLORS.black }]}>{inst.key}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TextInput
              style={styles.instructionInput}
              placeholder={STRINGS.instructionPlaceholder}
              placeholderTextColor="#999"
              value={instruction}
              onChangeText={setInstruction}
            />
          </View>

          {/* Price Summary Container */}
          <PriceSummary
            currentSubtotal={currentSubtotal}
            currentDiscount={currentDiscount}
            platformFee={platformFee}
            couponDiscountAmount={couponDiscountAmount}
            finalPayable={finalPayable}
            totalSavings={totalSavings}
          />
          <View style={styles.cancellationBox}>
            <Text style={styles.cancelTitle}>{STRINGS.cancellationPolicy}</Text>
            <Text style={styles.cancelText}>
              {STRINGS.cencelYourOrder}
            </Text>
          </View>

          <View style={styles.spacer120} />
        </ScrollView>
      </View>

      <StickyBottomBar
        deliveryAddress={deliveryAddress}
        finalPayable={finalPayable}
        isCartEmpty={isCartEmpty}
        availableItems={availableItems}
        onChangeAddress={() => navigation.navigate('Address' as never)}
        onAddAddress={() => navigation.navigate('Address' as never)}
        onProceedToCheckout={() => navigation.navigate('Checkout', { appliedCouponId, mockSubtotal: currentSubtotal, mockDiscount: currentDiscount })}
      />

      {/* Options Bottom Sheet Modal */}
      <VariantBottomSheet
        visible={modalVisible}
        item={selectedModalItem}
        onClose={() => setModalVisible(false)}
        onAdd={(data) => addItem(data)}
      />
    </SafeAreaView>
  );
};
