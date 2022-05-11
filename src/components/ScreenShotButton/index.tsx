import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Trash, Camera } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
    screenshot: string | null
    onTakeShot: () => void
    onRemoveShot: () => void
}

export function ScreenShotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={screenshot ? onRemoveShot : onTakeShot}
    >
        {
            screenshot
                ?
                <View>
                    <Image 
                        style={styles.image}
                        source={{ uri: screenshot}}

                    />
                <Trash 
                    size={20}
                    color={theme.colors.text_secondary}
                    weight='fill'
                    style={styles.removeIcon}
                    />
                </View>
                :
                <Camera 
                    size={27}
                    color={theme.colors.text_secondary}
                    weight='bold'
                />
            
        }

    </TouchableOpacity>
  );
}