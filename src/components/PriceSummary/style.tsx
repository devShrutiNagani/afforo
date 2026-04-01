import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  billDetailsContainer: { backgroundColor: COLORS.white, margin: SPACING.m, borderRadius: 16, padding: SPACING.m, borderWidth: 1, borderColor: COLORS.dividerLight },
  billRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  billRowLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 8 },
  iconWrap: { width: 22, height: 22, borderRadius: 6, backgroundColor: COLORS.iconBg, alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  iconWrapGreen: { backgroundColor: COLORS.primaryLight },
  billLabel: { fontSize: 12, color: COLORS.textMedium },
  savedOrangeTag: { backgroundColor: COLORS.orangeLight, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginLeft: 8 },
  savedOrangeText: { color: COLORS.orange, fontSize: 9, fontFamily: FONTS.bold },
  billValue: { fontSize: 13, color: COLORS.textDark, fontFamily: FONTS.medium },
  billRowLeftCol: { flex: 1 },
  deliverySublabel: { fontSize: 10, color: COLORS.orange, marginTop: 2 },
  freeDeliveryBox: { flexDirection: 'row', alignItems: 'center' },
  strikethroughPrice: { color: COLORS.textLight, textDecorationLine: 'line-through', fontSize: 12, marginRight: 6 },
  freeText: { color: COLORS.primary, fontSize: 12, fontFamily: FONTS.bold },
  dashedDividerSpacer: { height: 1, width: '100%', borderColor: '#DDD', borderWidth: 1, borderStyle: 'dashed', marginVertical: SPACING.m },
  totalLabel: { fontSize: 14, fontFamily: FONTS.bold, color: COLORS.textDark },
  totalValue: { fontSize: 15, fontFamily: FONTS.bold, color: COLORS.textDark },
  savingsBannerBottom: { backgroundColor: COLORS.tealLight, marginTop: 16, paddingVertical: 12, alignItems: 'center', borderRadius: 8, borderStyle: 'dashed', borderWidth: 1, borderColor: COLORS.tealLight },
  savingsBannerBottomText: { color: COLORS.teal, fontSize: 12, fontFamily: FONTS.bold },
});
