import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

// Themed 
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'
import { Colors } from '../constants/Colors'

const Home = () => {
  const router = useRouter()

  return (
    <ThemedView style={styles.container} safe={true}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <ThemedLogo width={180} height={60} />
          <Spacer height={30} />

          <ThemedText style={styles.title} title={true}>
            Organize Your Reading Life
          </ThemedText>

          <Spacer height={15} />

          <ThemedText style={styles.subtitle}>
            The #1 app for book lovers to track, organize, and discover their next favorite read.
          </ThemedText>
        </View>

        <Spacer height={60} />

        <View style={styles.actions}>
          <ThemedButton
            onPress={() => router.push('/register')}
            style={styles.primaryBtn}
          >
            <ThemedText style={styles.btnText}>Get Started For Free</ThemedText>
          </ThemedButton>

          <Spacer height={10} />

          <Link href="/login" asChild>
            <ThemedButton style={styles.secondaryBtn}>
              <ThemedText style={styles.secondaryBtnText}>Sign In</ThemedText>
            </ThemedButton>
          </Link>
        </View>

        <Spacer height={40} />

        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Manage books, track progress, and build your digital library.
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  hero: {
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 40,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  actions: {
    width: '100%',
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryBtnText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    opacity: 0.5,
    textAlign: 'center',
  }
})