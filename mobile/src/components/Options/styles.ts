import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    marginBottom: 32,
    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },

  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 48,
  },
});
