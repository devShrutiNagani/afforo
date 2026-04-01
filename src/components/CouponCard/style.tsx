import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  couponCard: { width: 130, backgroundColor: COLORS.white, borderRadius: 12, padding: 12, marginRight: 12, alignItems: 'center', borderWidth: 1, borderColor: COLORS.borderLight, elevation: 1, shadowColor: COLORS.black, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2 },
  couponCardApplied: { borderColor: COLORS.orangeBorder, backgroundColor: COLORS.orangeLight },
  couponTopCirc: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.teal, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  couponTopCircText: { color: COLORS.white, fontSize: 12, fontFamily: FONTS.bold },
  couponTopCircSub: { color: COLORS.white, fontSize: 9, fontFamily: FONTS.bold },
  couponDashedLine: { height: 1, width: '100%', borderColor: '#DDD', borderWidth: 1, borderStyle: 'dashed', position: 'absolute', top: 56 },
  couponWarningText: { fontSize: 10, color: COLORS.red, textAlign: 'center', marginBottom: 8, lineHeight: 14 },
  couponDescText: { fontSize: 10, color: COLORS.textMuted, textAlign: 'center', marginBottom: 8, lineHeight: 14 },
  couponCodeBox: { borderStyle: 'dashed', borderWidth: 1, borderColor: '#CCC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4, marginBottom: 12 },
  couponCodeText: { fontSize: 12, fontFamily: FONTS.bold, color: COLORS.textDark },
  couponApplyBtn: { color: COLORS.orange, fontSize: 11, fontFamily: FONTS.bold },
  couponApplyBtnApplied: { color: COLORS.white, backgroundColor: COLORS.orange, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 4, overflow: 'hidden' },
});
