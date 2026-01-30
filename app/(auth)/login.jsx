import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import { Colors } from '../../constants/Colors'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedLogo from '../../components/ThemedLogo'
import useUser from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser();



    const handleSubmit = async () => {
        setError(null);
        // Simple validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            await login(email, password);
            console.log('Login successful');
        } catch (error) {
            console.error('Login error:', error);
            setError(error.message || "Failed to login");
        }
    }

    return (
        <ThemedView style={styles.container} safe={true}>
            <ThemedLogo width={160} height={50} />
            <Spacer height={20} />
            <ThemedText title={true} style={styles.title}>
                Welcome Back
            </ThemedText>
            <ThemedText style={styles.subtitle}>
                Sign in to continue your reading journey
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
                <Spacer height={15} />

            </View>

            <Spacer height={20} />

            <ThemedButton
                onPress={handleSubmit}
                style={styles.btn}>
                <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Login</Text>
            </ThemedButton>
            <Spacer />
            {error && <Text style={styles.error}>{error}</Text>}

            <Spacer height={40} />

            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Don't have an account? Register here
                </ThemedText>
            </Link>
            {/* <ThemedLoader /> */}
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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
    pressed: {
        opacity: 0.8,
    },
    error: {
        color: '#ff4444',
        textAlign: 'center',
        marginTop: 10,
    },
})