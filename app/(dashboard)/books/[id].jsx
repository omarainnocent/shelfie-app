import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import { useEffect, useState } from 'react'

//themed components
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedButton from '../../../components/ThemedButton'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Colors'

const BookDetails = () => {

    const [book, setBook] = useState(null);
    const { id } = useLocalSearchParams()
    const { books, deleteBook } = useBooks();
    const router = useRouter();

    const handleDelete = async () => {
        await deleteBook(id);
        router.replace('/books');

    }

    useEffect(() => {
        if (id && books.length > 0) {
            const foundBook = books.find(b => b.$id === id);
            setBook(foundBook);
        }
    }, [id, books])

    if (!book) {
        return (
            <ThemedView style={styles.container} safe={true}>
                <ThemedLoader />
             </ThemedView>
        )
    }


  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            Delete Book
        </Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },

  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center',

  }


})