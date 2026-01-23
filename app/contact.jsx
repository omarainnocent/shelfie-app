import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page </Text>
      <Link href="/" style={styles.link}>
        Go Back Home
      </Link>
    </View>
  )
}

export default Contact


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

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        // color: 'blue',
    },

    
})

