import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: COLORS.overlay,
        justifyContent: 'flex-end',
    },

    addressModalContent: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: SPACING.l,
        paddingBottom: 40,
    },

    addressModalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
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
        fontSize: 17,
        fontFamily: FONTS.medium,
        color: COLORS.textDark,
    },

    closeBtn: {
        padding: 4,
    },

    closeBtnText: {
        fontSize: 18,
        color: COLORS.textLight,
        fontFamily: FONTS.medium,
    },

    addressModalBtn: {
        backgroundColor: COLORS.confirmGreen,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },

    addressModalBtnText: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: FONTS.medium,
    },
});