import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  stickyBottom: { backgroundColor: COLORS.white, borderTopWidth: 1, borderTopColor: COLORS.borderLight, elevation: 8, shadowColor: COLORS.black, shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.05, shadowRadius: 4, paddingBottom: Platform.OS === 'ios' ? 24 : 16 },
  addressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACING.m, paddingTop: SPACING.m },
  addressLeft: { flexDirection: 'row', alignItems: 'center' },
  mapPinBubble: { backgroundColor: COLORS.teal, width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  deliverToText: { fontSize: 13, color: COLORS.textDark, marginLeft: 8 },
  homeBold: { fontFamily: FONTS.bold },
  changeText: { color: COLORS.primary, fontSize: 13, fontFamily: FONTS.bold },
  addressSubText: { fontSize: 11, color: COLORS.textMuted, paddingHorizontal: SPACING.m, paddingLeft: 38, marginTop: 4, marginBottom: SPACING.s },
  bottomBarRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACING.m, marginTop: 4 },
  toPayLabel: { fontSize: 11, color: COLORS.textMuted, marginBottom: 2 },
  finalTotal: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark },
  proceedBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 32, paddingVertical: 12, borderRadius: 8 },
  proceedBtnLarge: { backgroundColor: COLORS.primary, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  proceedText: { color: COLORS.white, fontSize: 15, fontFamily: FONTS.bold },
  disabledOpacity: { opacity: 0.3 },
  disableTxt: { color: COLORS.black, fontSize: 15, fontFamily: FONTS.bold },
});
