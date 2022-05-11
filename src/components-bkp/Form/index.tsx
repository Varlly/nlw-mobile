import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeft } from 'phosphor-react-native';

import { feedbackTypes } from '../../utils/feedbackTypes'
import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
    feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight='bold'
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image
                        style={styles.image}
                        source={feedbackTypeInfo.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder="Nos conte o que esta acontencendo!"
                placeholderTextColor={theme.colors.text_secondary}
            />
            <View style={styles.footer}>
                <ScreenshotButton 
                    screenshot=""
                    onRemoveShot={() => {}}
                    onTakeShot={() => {}}
                />
            </View>

        </View>
    );
}