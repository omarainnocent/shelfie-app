import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    const colorScheme = useColorScheme() // You can change this to 'dark' to test dark mode
    console.log("Current color scheme:", colorScheme);
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#ddd'},
            headerTintColor: '#333'
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Home',
                }}
            />
            <Stack.Screen
                name="about"
                options={{
                    headerTitle: 'About Us',
                }}
            />
            <Stack.Screen
                name="contact"
                options={{
                    headerTitle: 'Contact Us', headerShown: false,
                }}
            />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})