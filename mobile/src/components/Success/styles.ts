import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  image: {  
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },

  title: {
    marginBottom: 24,
    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    marginBottom: 56,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: theme.colors.surface_secondary,
  },

  buttonTitle: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});
