import { StyleSheet, Text, View, useColorScheme, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    borderRadius: 6,
                    padding: 20,
                    width: '100%',
                },
                style
            ]}
            placeholderTextColor={theme.iconColor}
            {...props}
        />
    )
}

export default ThemedTextInput
