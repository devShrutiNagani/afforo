import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { COLORS } from '../../constants/colors';
import { STRINGS } from '../../constants/strings';
import { styles } from './style';
import { Product } from '../../types';

interface StickyBottomBarProps {
  deliveryAddress: string | null | undefined;
  finalPayable: number;
  isCartEmpty: boolean;
  availableItems: Product[];
  onChangeAddress: () => void;
  onAddAddress: () => void;
  onProceedToCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  deliveryAddress,
  finalPayable,
  isCartEmpty,
  availableItems,
  onChangeAddress,
  onAddAddress,
  onProceedToCheckout,
}) => {

  return (
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
          <TouchableOpacity onPress={onChangeAddress}>
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
        <View>
          <Text style={styles.toPayLabel}>To Pay</Text>
          <Text style={styles.finalTotal}>₹{Math.max(0, finalPayable)}</Text>
        </View>

        {!deliveryAddress ? (
          <TouchableOpacity
            style={styles.proceedBtnLarge}
            onPress={onAddAddress}
          >
            <Text style={styles.proceedText}>{STRINGS.addAddressToCheckout}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.proceedBtn, availableItems.length === 0 && styles.disabledOpacity]}
            disabled={availableItems.length === 0}
            onPress={onProceedToCheckout}
          >
            <Text style={availableItems.length === 0 ? styles.disableTxt : styles.proceedText}>{STRINGS.proceedToCheckout}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
