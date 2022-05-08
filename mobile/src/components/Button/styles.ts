import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.brand,
  },

  title: {
    color: theme.colors.text_on_brand_color,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});
