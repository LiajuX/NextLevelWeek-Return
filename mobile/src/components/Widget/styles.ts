import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
  },

  modal: {
    paddingBottom: getBottomSpace() + 16,
    backgroundColor: theme.colors.surface_primary,
  },
  
  indicator: {
    width: 56,
    marginTop: 4,
    backgroundColor: theme.colors.indicator,
  },
});
