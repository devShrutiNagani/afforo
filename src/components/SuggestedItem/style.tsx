import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  brandText: { fontSize: 10, color: COLORS.textMuted, marginBottom: 2 },
  suggestedCard: { width: 140, backgroundColor: COLORS.white, marginRight: 12, position: 'relative' },
  discountTagSmall: { position: 'absolute', top: 0, left: 0, backgroundColor: COLORS.tealDark, paddingHorizontal: 6, paddingVertical: 4, borderBottomRightRadius: 8, borderTopLeftRadius: 8, zIndex: 10, alignItems: 'center' },
  discountText: { color: COLORS.white, fontSize: 10, fontFamily: FONTS.bold, lineHeight: 12 },
  discountTextSmall: { color: COLORS.white, fontSize: 8, fontFamily: FONTS.bold, lineHeight: 10 },
  suggestedImgBox: { backgroundColor: COLORS.inputBg, borderRadius: 12, borderWidth: 1, borderColor: COLORS.offWhite, justifyContent: 'center', alignItems: 'center', padding: 16, marginBottom: 8 },
  suggestedImage: { width: 60, height: 60 },
  suggestedTitle: { fontSize: 12, fontFamily: FONTS.medium, color: COLORS.textDark },
  suggestedWeight: { fontSize: 10, color: COLORS.textMuted },
  suggestedActionRow: { justifyContent: 'space-between', alignItems: 'baseline' },
  suggestedPriceBox: { flexDirection: 'row', alignItems: 'baseline' },
  suggestedPrice: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginRight: 4 },
  suggestedOrigPrice: { fontSize: 10, color: COLORS.textLight, textDecorationLine: 'line-through' },
  greenSolidBtn: { backgroundColor: COLORS.primary, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6, marginTop: 6 },
  greenSolidText: { color: COLORS.white, fontSize: 10, fontFamily: FONTS.bold },
  chevronMini: { marginLeft: 2 },
});
