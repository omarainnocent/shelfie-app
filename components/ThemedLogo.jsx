import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'

const ThemedLogo = ({ size = 80 }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <Ionicons
            name="book"
            size={size}
            color={Colors.primary}
            style={styles.logo}
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 20,
    },
})

export default ThemedLogo
