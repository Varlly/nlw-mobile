import React, { useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Image, 
    TextInput 
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import {captureScreen} from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'

import { FeedbackType } from '../../components/Widget'
import { Button } from '../../components/Button'
import { ScreenShotButton } from '../../components/ScreenShotButton';

import { styles } from './styles';
import { theme } from '../../theme';
import api from '../../libs/api';
import { feedbackTypes } from '../../utils/feedbackTypes'

interface Props {
    feedbackType: FeedbackType
    onFeedbackCanceled: () => void
    onFeedbackSent: () => void
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
    const [screenshot, setScreenshot] = useState <string | null> (null)
    const [ isSendingFeedback, setIsSendingFeedback ] = useState<boolean>(false)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]
   
    const handleScreenshot = () => {
        captureScreen({
            format: 'png',
            quality: 0.8,
        })
            .then( uri => setScreenshot(uri))
            .catch(error => console.log(error))
    }
    
    const handleScreenshotRemove = () => {
        setScreenshot(null)
    }

    async function handleSendFeedback() {
        if(isSendingFeedback){
            return
        }
        
        setIsSendingFeedback(true)
        const screenShotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'})
        
        try{
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: `data:image/png;base64, ${screenShotBase64}`,
                comment
            })
            
            onFeedbackSent()

        }catch (error) {
            setIsSendingFeedback(false)
            console.log(error)
        }
        
   }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
                    <ArrowLeft
                        size={24}
                        weight='bold'
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                style={styles.input}
                multiline
                placeholder='Conte com detalhes o que está acontecendo...'
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}
            />
            <View style={styles.footer}>
                <ScreenShotButton
                    screenshot={screenshot}
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                />
                <Button 
                    onPress={handleSendFeedback}
                    isLoading={isSendingFeedback}
                />
            </View>
        </View>
    );
}