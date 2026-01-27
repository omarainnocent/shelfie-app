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
import useUser from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useUser();

    

    const handleSubmit = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.log(error.message);
        }

        setLoading(true);
        try {
            await login(email, password);
            console.log('Login successful');
        } catch (error) {
            console.error('Login error:', error);
            alert(error.message || "Failed to login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login To Your Account
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
                <Spacer height={15} />

            </View>

            <Spacer height={20} />

            <ThemedButton
                onPress={handleSubmit}
                style={styles.btn}>
                <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Login</Text>
            </ThemedButton>

            <Spacer height={40} />

            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Don't have an account? Register here
                </ThemedText>
            </Link>
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#6849a7',
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
})