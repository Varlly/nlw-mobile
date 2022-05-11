import React from 'react';
import { 
    Text,
    TouchableOpacity, 
    TouchableOpacityProps, 
    ActivityIndicator 
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLonding: boolean
}

export function Button({ isLonding }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
        {
            isLonding
                ?
                <ActivityIndicator />
                :
                <Text>
                    Enviar feedback
                </Text>
        }

    </TouchableOpacity>
  );
}