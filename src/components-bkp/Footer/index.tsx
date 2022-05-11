import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './styles';

export function Footer() {
  return (
    <View>
        <Text style={styles.text}>
            Feito com ♥ pelo Hemerson
            </Text>
    </View>
  );
}