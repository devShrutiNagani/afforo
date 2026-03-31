import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  flex1: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.s,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerLight,
    backgroundColor: COLORS.white,
  },
  iconBtn: { padding: 8, width: 40 },
  headerTitle: { flex: 1, fontSize: 16, fontFamily: FONTS.bold, color: COLORS.textDark, textAlign: 'center' },
  container: { padding: SPACING.l },
  currentLocationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.pillBgCyan,
    padding: SPACING.m,
    borderRadius: 12,
    marginBottom: SPACING.l,
    borderWidth: 1,
    borderColor: '#DCE9F2'
  },
  currentLocationText: {
    color: COLORS.teal,
    fontSize: 15,
    fontFamily: FONTS.bold
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderDark,
    padding: SPACING.m,
  },
  inputIcon: { marginTop: 2, marginRight: SPACING.s },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  footer: {
    padding: SPACING.m,
    paddingBottom: SPACING.xl,
    borderTopWidth: 1,
    borderColor: COLORS.dividerLight,
    backgroundColor: COLORS.white,
  },
  saveBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: { color: COLORS.white, fontSize: 16, fontFamily: FONTS.bold },
  indicatorSmall: { marginRight: 8 },
  navIcon: { marginRight: 8 },
});
