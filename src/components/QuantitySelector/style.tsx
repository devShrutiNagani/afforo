import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    height: 28,
  },
  button: {
    paddingHorizontal: SPACING.s,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    backgroundColor: COLORS.white,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 24,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.primary,
  },
  quantity: {
    fontSize: FONTS.sizes.s,
    fontFamily: FONTS.medium,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
