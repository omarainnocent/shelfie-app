import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedLogo from '../../components/ThemedLogo'

import useUser from '../../hooks/useUser'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { register } = useUser();



    const handleSubmit = async () => {
        setError(null);
        setLoading(true);
        try {
            await register(email, password);
            console.log('Registration successful');
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.message || "Failed to register");
        } finally {
            setLoading(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container} safe={true}>
                <ThemedLogo width={160} height={50} />
                <Spacer height={20} />

                <ThemedText title style={styles.title}>
                    Join Shelfie
                </ThemedText>

                <ThemedText style={styles.subtitle}>
                    Start tracking your reading progress today
                </ThemedText>

                <Spacer height={40} />

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
                <Spacer />
                {error && <Text style={styles.error}>{error}</Text>}

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
        fontSize: 28,
        fontWeight: '900',
        color: Colors.primary,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.6,
        textAlign: 'center',
        marginTop: 5,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 8,
        width: '100%',
        elevation: 2,
    },
    error: {
        color: '#ff4444',
        textAlign: 'center',
        marginTop: 10,
    },
})
