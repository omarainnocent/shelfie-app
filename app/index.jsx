import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/image/logo_light.png'
import { Link } from 'expo-router'


const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.img}
            />
            <Text style={styles.title}>The Number</Text>

            <Text style={{ marginTop: 10, marginBottom: 10 }}>
                Reading List App
                </Text>

            <Link href="/about" style={{ marginTop: 20, color: 'blue' }}>
                Go to About Page
            </Link>
            <Link href="/contact" style={{ marginTop: 20, color: 'blue' }}>
                Contact Page
            </Link>

                
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    img: {
        marginVertical: 20,
    },

})