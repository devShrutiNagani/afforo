import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.s,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  iconBtn: { padding: 8 },
  headerTitle: {
    flex: 1,
    fontSize: 13,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
    textAlign: 'center',
  },

  container: { flex: 1, backgroundColor: COLORS.background },

  // HERO SECTION
  heroSection: {
    backgroundColor: COLORS.white,
    margin: SPACING.m,
    borderRadius: 16,
    padding: SPACING.m,
  },
  heroTag: {
    position: 'absolute',
    top: 0,
    left: 16,
    backgroundColor: COLORS.tealDark,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  heroTagText: {
    color: COLORS.white,
    fontSize: 13,
    fontFamily: FONTS.bold,
  },
  heroTagSub: {
    color: COLORS.white,
    fontSize: 10,
    fontFamily: FONTS.bold,
  },

  carouselContainer: {
    height: 240,
    marginVertical: SPACING.m,
  },
  slideImageContainer: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: { width: '80%', height: '100%' },

  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.m,
  },
  dot: { width: 6, height: 6, borderRadius: 3, marginHorizontal: 3 },
  dotActive: { backgroundColor: COLORS.orange },
  dotInactive: { backgroundColor: COLORS.border },

  heroBrand: { fontSize: 12, color: COLORS.textMuted },
  heroTitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
    marginVertical: 6,
  },
  heroWeight: { fontSize: 12, color: COLORS.textMuted },

  heroActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  heroPriceRow: { flexDirection: 'row', alignItems: 'center' },
  heroPrice: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
    marginRight: 8,
  },
  heroOrigPrice: {
    fontSize: 14,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
  },

  heroBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  heroBtnText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },

  // SECTIONS
  sectionBlock: {
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.m,
    marginBottom: SPACING.m,
    borderRadius: 16,
    padding: SPACING.m,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
    marginBottom: 12,
  },

  descriptionText: {
    fontSize: 13,
    color: COLORS.textMedium,
    lineHeight: 20,
    fontFamily: FONTS.regular,
  },

  // COMMON MODAL
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },

  // ADDRESS MODAL
  addressModalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: SPACING.l,
  },
  addressModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  mapPinCirc: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.teal,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addressModalTitle: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
  },
  closeBtn: { padding: 4 },
  closeBtnText: {
    fontSize: 18,
    color: COLORS.textLight,
  },

  addressModalBtn: {
    backgroundColor: COLORS.confirmGreen,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  addressModalBtnText: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONTS.medium,
  },

  // UTILITIES
  horizontalListPadding: {
    paddingHorizontal: SPACING.m,
  },
  negativeMarginM: {
    marginHorizontal: -SPACING.m,
  },
  spacer40: { height: 40 },
});
