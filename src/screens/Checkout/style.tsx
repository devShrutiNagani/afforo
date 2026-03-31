import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    padding: SPACING.m,
  },
  section: {
    marginBottom: SPACING.l,
  },
  sectionTitle: {
    fontSize: FONTS.sizes.m,
    fontFamily: FONTS.bold,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.s,
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    padding: SPACING.m,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  addressName: {
    fontSize: FONTS.sizes.s,
    fontFamily: FONTS.bold,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  addressText: {
    fontSize: FONTS.sizes.s,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  paymentText: {
    fontSize: FONTS.sizes.m,
    fontFamily: FONTS.medium,
    color: COLORS.textPrimary,
  },
  footer: {
    padding: SPACING.m,
    paddingBottom: SPACING.xl,
    backgroundColor: COLORS.cardBackground,
    borderTopWidth: 1,
    borderColor: COLORS.border,
  },

  // Replicated synchronized structural Cart billing UI
  billDetailsContainer: { backgroundColor: COLORS.white, borderRadius: 16, padding: SPACING.m, borderWidth: 1, borderColor: COLORS.dividerLight },
  billRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  billRowLeft: { flexDirection: 'row', alignItems: 'center' },
  billLabel: { fontSize: 12, color: COLORS.textMedium },
  savedOrangeTag: { backgroundColor: COLORS.orangeLight, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginLeft: 8 },
  savedOrangeText: { color: COLORS.orange, fontSize: 9, fontFamily: FONTS.bold },
  billValue: { fontSize: 13, color: COLORS.textDark, fontFamily: FONTS.medium },
  billRowLeftCol: { flex: 1 },
  deliverySublabel: { fontSize: 10, color: COLORS.orange, marginTop: 2 },
  freeDeliveryBox: { flexDirection: 'row', alignItems: 'center' },
  strikethroughPrice: { color: COLORS.textLight, textDecorationLine: 'line-through', fontSize: 12, marginRight: 6 },
  freeText: { color: COLORS.primary, fontSize: 12, fontFamily: FONTS.bold },
  dashedDivider: { height: 1, width: '100%', borderColor: '#DDD', borderWidth: 1, borderStyle: 'dashed' },
  totalLabel: { fontSize: 14, fontFamily: FONTS.bold, color: COLORS.textDark },
  totalValue: { fontSize: 15, fontFamily: FONTS.bold, color: COLORS.textDark },

  savingsBannerBottom: { backgroundColor: COLORS.tealLight, marginTop: 16, paddingVertical: 12, alignItems: 'center', borderRadius: 8, borderStyle: 'dashed', borderWidth: 1, borderColor: COLORS.tealLight },
  savingsBannerBottomText: { color: COLORS.teal, fontSize: 12, fontFamily: FONTS.bold },
});
