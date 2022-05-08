import React from 'react';
import { 
  Image,
  TouchableOpacity, 
  TouchableOpacityProps, 
  View 
} from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ 
  screenshot, 
  onTakeShot, 
  onRemoveShot,
  ...rest
}: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot }
      {...rest}
    >
      {
        screenshot 
        ?
          <View>
            <Image 
              style={styles.image} 
              source={{ uri: screenshot }}
            />

            <Trash 
              size={22}
              color={theme.colors.text_secondary}
              weight="fill"
              style={styles.removeIcon}
            />
          </View>
        :
          <Camera 
            size={24}
            color={theme.colors.text_primary}
            weight="bold"
          />
      }
    </TouchableOpacity>
  );
}
