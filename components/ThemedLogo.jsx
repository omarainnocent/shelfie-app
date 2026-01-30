import React from 'react'
import { StyleSheet, useColorScheme, Image } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedLogo = ({ width = 150, height = 40 }) => {
    const colorScheme = useColorScheme()
    const isDark = colorScheme === 'dark'

    const logoSource = isDark
        ? require('../assets/image/logo_dark.png')
        : require('../assets/image/logo_light.png')

    return (
        <Image
            source={logoSource}
            style={[styles.logo, { width, height }]}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 20,
    },
})

export default ThemedLogo
