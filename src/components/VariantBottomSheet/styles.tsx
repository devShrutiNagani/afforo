import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },

    modalContent: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: SPACING.l,
        paddingBottom: SPACING.xxxl,
    },

    modalTitle: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLORS.textDark,
        lineHeight: 20,
        marginBottom: SPACING.l,
    },

    variantRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.borderDark,
        borderRadius: 12,
        padding: SPACING.s,
        marginBottom: SPACING.m,
    },

    variantImageContainer: {
        width: 44,
        height: 44,
        borderRadius: 6,
        backgroundColor: COLORS.inputBg,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
        position: 'relative',
    },

    variantImage: {
        width: 32,
        height: 32,
    },

    variantBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: COLORS.orange,
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    variantBadgeText: {
        color: COLORS.white,
        fontSize: 9,
        fontFamily: FONTS.bold,
    },

    variantInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    variantWeight: {
        fontSize: 12,
        color: COLORS.textMedium,
        marginRight: SPACING.m,
        fontFamily: FONTS.medium,
    },

    variantPriceBox: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },

    variantPrice: {
        fontSize: 13,
        fontFamily: FONTS.bold,
        color: COLORS.textDark,
        marginRight: 4,
    },

    variantOrigPrice: {
        fontSize: 11,
        color: COLORS.textLight,
        textDecorationLine: 'line-through',
    },

    modalAddBtn: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 6,
        minWidth: 70,
        alignItems: 'center',
    },

    modalAddText: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: FONTS.bold,
    },

    modalQtySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 6,
        height: 32,
        backgroundColor: COLORS.white,
    },

    modalQtyBtn: {
        paddingHorizontal: 8,
        height: '100%',
        justifyContent: 'center',
    },

    modalQtyText: {
        color: COLORS.primary,
        fontSize: 12,
        fontFamily: FONTS.bold,
        minWidth: 16,
        textAlign: 'center',
    },

    confirmBtn: {
        backgroundColor: COLORS.confirmGreen,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: SPACING.s,
    },

    confirmBtnText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: FONTS.bold,
    },
});