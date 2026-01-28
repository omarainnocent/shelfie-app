import { StyleSheet, Keyboard, Text, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import useBooks from '../../hooks/useBooks'

const Create = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const { createBook } = useBooks()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return

    setLoading(true)

    await createBook({ title, author, description })

    //reset fields
    setTitle("")
    setAuthor("")
    setDescription("")

    setLoading(false)

    //redirect
    router.replace('/books')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.heading}>
          Create a New Book
        </ThemedText>
        <Spacer />

        <ThemedTextInput
          style={styles.input}

          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />
        <ThemedTextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />
        <ThemedTextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline= {true}
        />
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemedButton>
        </ThemedView>
        </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
})