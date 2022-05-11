import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

const Widget = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feebackSent, setFeedbackSent] = useState(false)

    const bottomSheetRef = useRef<BottomSheet>(null)

    const handleOpen = () => {
        bottomSheetRef.current?.expand();
    }

    const handleRestatFeedback = () => {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    const handleFeedbackSent = () => {
        setFeedbackSent(true)
    }

    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={handleOpen}
            >
                <ChatTeardropDots
                    size={24}
                    weight='bold'
                    color={theme.colors.text_on_brand_color}

                />
            </TouchableOpacity>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0.1, 300]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {
                    feebackSent
                        ?
                        <Success 
                            onSendAnotherFeedback={handleRestatFeedback}
                        />
                        :
                        <>
                            {
                                feedbackType
                                    ?
                                    <Form 
                                        feedbackType={feedbackType} 
                                        onFeedbackCanceled={handleRestatFeedback}
                                        onFeedbackSent={handleFeedbackSent}
                                    />
                                    :
                                    <Options 
                                        onFeedbackTypeChanged={setFeedbackType}
                                    />
                            }
                        </>
                }

            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)