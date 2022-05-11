import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { ChatCircleDots } from 'phosphor-react-native';

import { Opions } from '../Opions';
import { Form } from '../Form';
import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes

function Widget() {
    const bottomSheetRef = useRef<BottomSheet>(null)
    const handleOpen = () => {
        bottomSheetRef.current?.expand()
    }

    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={handleOpen}
            >
                <ChatCircleDots 
                    size={24}
                    weight='bold'
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0.1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {/* <Opions /> */}
                <Form feedbackType='BUG' />

            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget);