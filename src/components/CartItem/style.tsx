import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.m,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.m,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: COLORS.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    position: 'relative',
    marginRight: SPACING.m,
  },
  discountTag: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: COLORS.tealDark,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 4,
    zIndex: 1,
    alignItems: 'center',
  },
  discountText: {
    color: COLORS.white,
    fontSize: 9,
    fontFamily: FONTS.bold,
    lineHeight: 10,
  },
  discountTextSmall: {
    color: COLORS.white,
    fontSize: 6,
    fontFamily: FONTS.bold,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    paddingRight: SPACING.s,
  },
  title: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
    lineHeight: 18,
    marginBottom: 4,
  },
  weight: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
  },
  actionContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: 80,
  },
  quantity: {
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 13,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  originalPrice: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
});
