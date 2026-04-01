import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white },
  safeArea: { flex: 1, backgroundColor: COLORS.textMedium },
  flex1: { flex: 1, backgroundColor: COLORS.offWhite },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: SPACING.m, height: 60, backgroundColor: COLORS.white },
  iconBtn: { padding: 4, width: 40 },
  headerTitle: { flex: 1, fontSize: 16, fontFamily: FONTS.bold, color: COLORS.textDark, textAlign: 'center' },
  savingsBannerTop: { backgroundColor: COLORS.tealLight, paddingVertical: 10, alignItems: 'center', marginHorizontal: SPACING.m, borderRadius: 8, marginVertical: SPACING.m },
  savingsBannerTopText: { color: COLORS.teal, fontSize: 12, fontFamily: FONTS.bold },
  yellowWarningBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.yellowLight, paddingHorizontal: 12, paddingVertical: 12, marginHorizontal: SPACING.m, borderRadius: 8, borderWidth: 1, borderColor: COLORS.yellowBorder, marginBottom: SPACING.m },
  warningIconCirc: { width: 16, height: 16, borderRadius: 8, backgroundColor: COLORS.yellow, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  yellowWarningText: { flex: 1, color: COLORS.yellowDark, fontSize: 11, fontFamily: FONTS.medium, lineHeight: 16 },
  cartItemsBlock: { backgroundColor: COLORS.white, paddingHorizontal: SPACING.m, paddingBottom: SPACING.m },
  // Out of stock
  outOfStockContainer: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.redBorder, borderRadius: 12, overflow: 'hidden', marginBottom: 20 },
  outOfStockHeader: { backgroundColor: COLORS.redLight, paddingVertical: 8, alignItems: 'center' },
  outOfStockHeaderText: { color: COLORS.red, fontSize: 12, fontFamily: FONTS.bold },
  outOfStockRow: { flexDirection: 'row', alignItems: 'center', padding: SPACING.m, paddingBottom: SPACING.s },
  cartItemImageContainer: { width: 44, height: 44, backgroundColor: COLORS.iconBg, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  cartItemImage: { width: 32, height: 32 },
  cartItemInfo: { flex: 1, marginRight: 12 },
  cartItemTitle: { fontSize: 12, fontFamily: FONTS.medium, color: COLORS.textDark, lineHeight: 18, marginBottom: 4 },
  cartItemWeight: { fontSize: 11, color: COLORS.textLight },
  deleteBtn: { borderWidth: 1, borderColor: COLORS.primary, borderRadius: 6, paddingHorizontal: 16, height: 32, justifyContent: 'center', alignItems: 'center' },
  deleteBtnText: { color: COLORS.primary, fontSize: 11, fontFamily: FONTS.bold },
  similarItemsContainer: { paddingHorizontal: SPACING.m, paddingBottom: SPACING.m },
  similarItemsTitle: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginBottom: SPACING.m, marginTop: SPACING.s },



  divider: { height: 1, backgroundColor: COLORS.dividerLight, width: '100%' },
  sectionPadding: { padding: SPACING.m },
  sectionTitle: { fontSize: 15, fontFamily: FONTS.bold, color: COLORS.textDark, marginBottom: 16 },

  couponsOuterBox: { marginHorizontal: SPACING.m, marginBottom: SPACING.m, padding: SPACING.s, backgroundColor: COLORS.pillBgBlue, borderWidth: 1, borderColor: COLORS.pillBgCyan, borderRadius: 12 },
  couponsHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, marginBottom: 8 },
  iconCircleBlueMini: { width: 14, height: 14, borderRadius: 7, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: 6 },
  sectionTitleOptions: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.primary },


  couponSavedMsg: { backgroundColor: COLORS.pillBgTeal, marginHorizontal: SPACING.m, paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginTop: 12, marginBottom: 16 },
  couponSavedText: { color: COLORS.teal, fontSize: 12 },
  couponSavedBold: { fontFamily: FONTS.bold },
  viewMoreRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 8 },
  viewMoreText: { fontSize: 13, color: COLORS.textSecondary, marginRight: 4, fontFamily: FONTS.medium },

  cashbackBox: { marginHorizontal: SPACING.m, paddingVertical: SPACING.m, borderBottomWidth: 1, borderBottomColor: COLORS.dividerLight },
  cashbackRow: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: COLORS.background, padding: 16, borderRadius: 8, borderWidth: 1, borderColor: COLORS.dividerLight },
  iconCircleBlueHero: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.pillBgCyan, justifyContent: 'center', alignItems: 'center' },
  cashbackTitle: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginBottom: 4 },
  cashbackDesc: { fontSize: 11, color: COLORS.textMuted },

  sectionTitleSmall: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginBottom: 12 },
  instructionsScroll: { flexDirection: 'row', marginBottom: SPACING.m },
  pill: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 12 },
  pillText: { fontSize: 11, color: COLORS.textDark, marginLeft: 6 },
  instructionInput: { backgroundColor: COLORS.background, borderWidth: 1, borderColor: COLORS.borderLight, borderRadius: 8, paddingHorizontal: 16, height: 44, fontSize: 13, color: COLORS.textDark },



  cancellationBox: { marginHorizontal: SPACING.m, backgroundColor: COLORS.offWhite, padding: SPACING.m, borderRadius: 8, borderWidth: 1, borderColor: COLORS.dividerLight },
  cancelTitle: { fontSize: 13, fontFamily: FONTS.bold, color: COLORS.textDark, marginBottom: 6 },
  cancelText: { fontSize: 11, color: COLORS.textMuted, lineHeight: 16 },


  // New Utility Styles to remove inline ones

  warningExclamation: { color: COLORS.white, fontSize: 10, fontWeight: 'bold' },
  outOfStockOpacity: { opacity: 0.5 },
  negativeMarginM: { marginHorizontal: -SPACING.m },
  horizontalListPadding: { paddingHorizontal: SPACING.m },
  emptyCartContainer: { padding: 40, alignItems: 'center' },
  emptyCartText: { fontSize: 16, color: COLORS.textLight, fontFamily: FONTS.medium },
  whiteMiniText: { color: COLORS.white, fontSize: 10 },
  xIconMini: { marginLeft: 4 },
  couponListPadding: { paddingHorizontal: SPACING.m, paddingBottom: 16 },
  cashbackImg: { width: 20, height: 20, borderRadius: 10 },
  cashbackInfo: { marginLeft: 12, flex: 1 },

  spacer120: { height: 120 },
});
