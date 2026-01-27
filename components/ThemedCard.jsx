import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, children, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View
            style={[
                styles.card,
                { backgroundColor: theme.uiBackground },
                style,
            ]}
            {...props}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 12,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
})

export default ThemedCard
