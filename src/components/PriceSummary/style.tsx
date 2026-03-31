import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.m,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.m,
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.textSecondary,
  },
  subLabel: {
    fontSize: 10,
    color: COLORS.primary,
    marginTop: 2,
  },
  savedBg: {
    backgroundColor: '#FFEADD',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  savedText: {
    color: '#FF7A00',
    fontSize: 10,
    fontFamily: FONTS.bold,
  },
  value: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.textPrimary,
  },
  free: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginLeft: 4,
  },
  strikethrough: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textDecorationLine: 'line-through',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    borderStyle: 'dashed',
    marginVertical: SPACING.s,
    marginBottom: SPACING.m,
  },
  totalLabel: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  savingsBox: {
    marginTop: SPACING.m,
    padding: SPACING.s,
    backgroundColor: COLORS.bannerBg,
    borderRadius: 20,
    alignItems: 'center',
  },
  savingsBoxText: {
    color: COLORS.bannerText,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
});
