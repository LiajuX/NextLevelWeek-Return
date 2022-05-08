import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 104,
    height: 112,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.surface_secondary,
  },

  image: {
    width: 40,
    height: 40,
  },

  title: {
    marginTop: 8,
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});
