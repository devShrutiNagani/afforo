import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  cartItemRow: { flexDirection: 'row', alignItems: 'flex-start', marginVertical: 12 },
  cartItemImageContainer: { width: 44, height: 44, backgroundColor: COLORS.iconBg, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  cartItemImage: { width: 32, height: 32 },
  cartItemInfo: { flex: 1, marginRight: 12 },
  cartItemTitle: { fontSize: 12, fontFamily: FONTS.medium, color: COLORS.textDark, lineHeight: 18, marginBottom: 4 },
  cartItemWeight: { fontSize: 11, color: COLORS.textLight },
  cartItemRight: { alignItems: 'flex-end', width: 70 },
  cartItemPrices: { flexDirection: 'row', alignItems: 'baseline', marginTop: 8 },
  cartItemPrice: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginRight: 4 },
  cartItemOrigPrice: { fontSize: 10, color: COLORS.textLight, textDecorationLine: 'line-through' },

  compactQtySelector: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.primary, borderRadius: 6, height: 30, backgroundColor: COLORS.white, width: '100%' },
  qtyBtn: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  qtyText: { color: COLORS.primary, fontSize: 12, fontFamily: FONTS.bold },
});
