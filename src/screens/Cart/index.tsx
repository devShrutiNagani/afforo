import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../constants/colors';
import { ChevronLeft, ChevronDown, ChevronRight, MapPin, Search, Minus, Plus, StopCircle, Info, BellOff, PhoneOff, User, XCircle, Trash2 } from 'lucide-react-native';
import { useCart } from '../../hooks/useCart';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

import { COUPONS_DATA, SIMILAR_ITEMS, SUGGESTED_ITEMS, OUT_OF_STOCK_ITEM, DELIVERY_INSTRUCTIONS } from '../../constants/mockData';
import { URLS } from '../../constants/images';
import { STRINGS } from '../../constants/strings';
import { styles } from './style';

export const CartScreen = () => {
  const navigation = useNavigation<NavProp>();
  const { items, addItem, updateItemQuantity, removeItem, deliveryAddress } = useCart();
  const [instruction, setInstruction] = useState('');

  // Interactive UI states requested
  const [appliedCouponId, setAppliedCouponId] = useState<string | null>('2');
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

  const handleApplyCoupon = (id: string, criteria: string | null) => {
    // If there is criteria like "Add more items", we optionally shouldn't apply it.
    // For now, toggle logic for standard coupons:
    if (appliedCouponId === id) {
      setAppliedCouponId(null); // Un-apply
    } else {
      setAppliedCouponId(id);
    }
  };

  const renderSuggestedItem = (item: any) => {
    // Process "52% OFF", extracting first digit and "OFF" smartly, or just render it
    const parts = item.discount.split(' ');
    const numberStr = parts[0]; // e.g. "50%"
    const suffix = parts.length > 1 ? parts[1] : '';

    return (
      <View style={styles.suggestedCard}>
        <View style={styles.discountTagSmall}>
          <Text style={styles.discountText}>{numberStr}</Text><Text style={styles.discountTextSmall}>{suffix}</Text>
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
            <TouchableOpacity style={styles.greenSolidBtn} onPress={() => { setSelectedModalItem(item); setModalVisible(true); }}>
              <Text style={styles.greenSolidText}>{STRINGS.options2}</Text>
              <ChevronDown size={14} color={COLORS.white} style={styles.chevronMini} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.greenSolidBtn, { paddingHorizontal: 16, minWidth: 60, justifyContent: 'center' }]} onPress={() => addItem({ ...item, quantity: 1 })}>
              <Text style={styles.greenSolidText}>{STRINGS.add}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const renderInstructionIcon = (iconName: string, isSelected: boolean) => {
    const color = isSelected ? COLORS.primary : "#666";
    const size = 12;
    switch (iconName) {
      case 'BellOff': return <BellOff size={size} color={color} />;
      case 'PhoneOff': return <PhoneOff size={size} color={color} />;
      case 'User': return <User size={size} color={color} />;
      default: return null;
    }
  };

  const renderCoupon = (item: typeof COUPONS_DATA[0]) => {
    const isApplied = appliedCouponId === item.id;
    return (
      <View style={[styles.couponCard, isApplied && styles.couponCardApplied]}>
        <View style={styles.couponTopCirc}>
          <Text style={styles.couponTopCircText}>{item.pct}</Text>
          <Text style={styles.couponTopCircSub}>OFF</Text>
        </View>
        <View style={styles.couponDashedLine} />
        {item.criteria ? (
          <Text style={styles.couponWarningText}>{item.criteria}</Text>
        ) : (
          <Text style={styles.couponDescText}>Upto ₹120 on orders above ₹1200</Text>
        )}
        <View style={styles.couponCodeBox}>
          <Text style={styles.couponCodeText}>{item.code}</Text>
        </View>
        <TouchableOpacity onPress={() => handleApplyCoupon(item.id, item.criteria)}>
          <Text style={[styles.couponApplyBtn, isApplied && styles.couponApplyBtnApplied]}>
            {isApplied ? '✓ APPLIED' : 'APPLY'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCartItem = (item: any, isDummy = false) => (
    <View style={styles.cartItemRow} key={item.id}>
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
                updateItemQuantity(item.id, item.quantity - 1);
              } else {
                removeItem(item.id);
              }
            }}
          >
            <Minus size={14} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => {
              updateItemQuantity(item.id, item.quantity + 1);
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

  // Compute currently applied coupon for standard visual mapping:
  const activeCouponData = appliedCouponId ? COUPONS_DATA.find(c => c.id === appliedCouponId) : null;

  const currentSubtotal = availableItems.length === 0 ? 0 : availableItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
  const currentDiscount = availableItems.length === 0 ? 0 : Math.floor(currentSubtotal * 0.1); // Dynamic scaling mock discount based on cart density
  const platformFee = isCartEmpty ? 0 : 20;

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
  const totalSavings = currentDiscount + couponDiscountAmount + 99; // Standard static mockup delivery saving baseline applied

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
            <Text style={styles.yellowWarningText}>{STRINGS.delayWarning}{"\n"}{STRINGS.delayWarning}</Text>
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
                    renderItem={({ item: si }) => renderSuggestedItem(si)}
                    contentContainerStyle={styles.horizontalListPadding}
                    style={styles.negativeMarginM}
                  />
                </View>
              </View>
            ))}

            {availableItems.length > 0 ? (
              availableItems.map((item) => renderCartItem(item))
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
              renderItem={({ item }) => renderSuggestedItem(item)}
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
              renderItem={({ item }: any) => renderCoupon(item)}
              contentContainerStyle={styles.couponListPadding}
              style={styles.negativeMarginM}
            />

            {activeCouponData && (
              <View style={styles.couponSavedMsg}>
                <Text style={styles.couponSavedText}>🎉 You are <Text style={styles.couponSavedBold}>saving {activeCouponData.pct}</Text> with this coupon 🎉</Text>
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
                    style={[styles.pill, isSelected && { borderColor: COLORS.primary, backgroundColor: COLORS.pillBgGreen }]}
                    onPress={() => toggleInstruction(inst.key)}
                  >
                    {renderInstructionIcon(inst.icon, isSelected)}
                    <Text style={[styles.pillText, isSelected && { color: COLORS.primary }]}>{inst.key}</Text>
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
                <Text style={styles.billLabel}>{STRINGS.handlingCharge}</Text>
                <Text style={styles.deliverySublabel}>Add items worth ₹20 to get free delivery</Text>
              </View>
              <View style={styles.freeDeliveryBox}>
                <Text style={styles.strikethroughPrice}>₹40</Text>
                <Text style={styles.freeText}>FREE</Text>
              </View>
            </View>

            {currentDiscount > 0 && (
              <View style={styles.billRow}>
                <Text style={styles.billLabel}>{STRINGS.payUsing}</Text>
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

            <View style={styles.dashedDividerSpacer} />

            <View style={styles.billRow}>
              <Text style={styles.totalLabel}>Total payable amount</Text>
              <Text style={styles.totalValue}>₹{Math.max(0, finalPayable)}</Text>
            </View>

            <View style={styles.savingsBannerBottom}>
              <Text style={styles.savingsBannerBottomText}>You are saving ₹{totalSavings} with this order!</Text>
            </View>
          </View>

          <View style={styles.cancellationBox}>
            <Text style={styles.cancelTitle}>{STRINGS.cancellationPolicy}</Text>
            <Text style={styles.cancelText}>
              You can cancel your order for free within the first 60 seconds. After that, a cancellation fee will apply.
            </Text>
          </View>

          <View style={styles.spacer120} />
        </ScrollView>
      </View>

      <View style={styles.stickyBottom}>
        <View style={styles.addressRow}>
          <View style={styles.addressLeft}>
            <View style={styles.mapPinBubble}>
              <MapPin size={12} color={COLORS.white} fill={COLORS.white} />
            </View>
            {deliveryAddress ? (
              <Text style={styles.deliverToText}>Deliver to <Text style={styles.homeBold}>Home</Text></Text>
            ) : (
              <Text style={styles.deliverToText}>Delivery Location</Text>
            )}
          </View>
          {deliveryAddress && (
            <TouchableOpacity onPress={() => navigation.navigate('Address' as never)}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          )}
        </View>

        {deliveryAddress ? (
          <Text style={styles.addressSubText} numberOfLines={1}>{deliveryAddress}</Text>
        ) : (
          <Text style={styles.addressSubText} numberOfLines={1}>Please add an address to continue</Text>
        )}

        <View style={styles.bottomBarRow}>
          <View style={styles.totalBox}>
            <Text style={styles.toPayLabel}>To Pay</Text>
            <Text style={styles.finalTotal}>₹{Math.max(0, finalPayable)}</Text>
          </View>

          {!deliveryAddress ? (
            <TouchableOpacity
              style={styles.proceedBtnLarge}
              onPress={() => navigation.navigate('Address' as never)}
            >
              <Text style={styles.proceedText}>{STRINGS.addAddressToCheckout}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.proceedBtn, isCartEmpty && styles.disabledOpacity]}
              disabled={isCartEmpty}
              onPress={() => navigation.navigate('Checkout', { appliedCouponId, mockSubtotal: currentSubtotal, mockDiscount: currentDiscount })}
            >
              <Text style={styles.proceedText}>{STRINGS.proceedToCheckout}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Options Bottom Sheet Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedModalItem?.title}</Text>

                {selectedModalItem?.variants?.map((variant: any, index: number) => (
                  <View style={styles.variantRow} key={index}>
                    <View style={styles.variantImageContainer}>
                      <Image source={{ uri: selectedModalItem.image }} style={styles.variantImage} />
                      <View style={styles.variantBadge}><Text style={styles.variantBadgeText}>{variant.weight.charAt(0)}</Text></View>
                    </View>
                    <View style={styles.variantInfo}>
                      <Text style={styles.variantWeight}>{variant.weight}</Text>
                      <View style={styles.variantPriceBox}>
                        <Text style={styles.variantPrice}>₹{variant.price}</Text>
                        <Text style={styles.variantOrigPrice}>₹{variant.originalPrice}</Text>
                      </View>
                    </View>

                    {index === 0 && variantQuantity > 0 ? (
                      <View style={styles.modalQtySelector}>
                        <TouchableOpacity onPress={() => setVariantQuantity(q => Math.max(0, q - 1))} style={styles.modalQtyBtn}>
                          <Minus size={14} color={COLORS.primary} />
                        </TouchableOpacity>
                        <Text style={styles.modalQtyText}>{variantQuantity}</Text>
                        <TouchableOpacity onPress={() => setVariantQuantity(q => q + 1)} style={styles.modalQtyBtn}>
                          <Plus size={14} color={COLORS.primary} />
                        </TouchableOpacity>
                      </View>
                    ) : index === 0 ? (
                      <TouchableOpacity style={styles.modalAddBtn} onPress={() => setVariantQuantity(1)}>
                        <Text style={styles.modalAddText}>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.modalAddBtn}
                        onPress={() => {
                          addItem({
                            id: `${selectedModalItem.id}-v${index}`,
                            title: selectedModalItem.title,
                            weight: variant.weight,
                            price: variant.price,
                            image: selectedModalItem.image,
                          });
                          setModalVisible(false);
                        }}
                      >
                        <Text style={styles.modalAddText}>Add</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.confirmBtn}
                  onPress={() => {
                    if (variantQuantity > 0 && selectedModalItem) {
                      addItem({
                        id: `${selectedModalItem.id}-v0`,
                        title: selectedModalItem.title,
                        weight: selectedModalItem.variants[0].weight,
                        price: selectedModalItem.variants[0].price,
                        image: selectedModalItem.image,
                      });
                    }
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.confirmBtnText}>Confirm</Text>
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
