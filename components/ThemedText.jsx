import React from 'react'
import { Text, StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({ style, title, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <Text
            style={[
                { color: title ? theme.title : theme.text },
                title && styles.title,
                style,
            ]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default ThemedText
