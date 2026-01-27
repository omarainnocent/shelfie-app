import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

import useUser from '../../hooks/useUser'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { user, register } = useUser();

    

    const handleSubmit = async () => {
        if (!email || !password) return alert("Please fill in all fields")

        setLoading(true)
        try {
            await register(email, password)
            console.log('Registration successful')
        } catch (error) {
            console.error('Registration error:', error)
            alert(error.message || "Failed to register")
        } finally {
            setLoading(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />

                <ThemedText title style={styles.title}>
                    Register Account
                </ThemedText>

                <Spacer height={20} />

                <View style={styles.form}>
                    <ThemedTextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Spacer height={15} />

                    <ThemedTextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <Spacer height={20} />

                <ThemedButton onPress={handleSubmit} style={styles.btn} disabled={loading}>
                    <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
                        {loading ? 'Registering...' : 'Register'}
                    </Text>
                </ThemedButton>

                <Spacer height={40} />

                <Link href="/login">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Already have an account? Login here
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    form: {
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#6849a7',
        padding: 15,
        borderRadius: 5,
    },
})
