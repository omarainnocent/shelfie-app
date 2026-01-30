import { createContext, useEffect, useState } from "react";
import { databases, ID, Permission, Role } from "../lib/appwrite";
import useUser from "../hooks/useUser";
import { Query } from "react-native-appwrite";

const DATABASE_ID = "697a0b800019bdef67d8";
const COLLECTION_ID = "books";



export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    // Fetch books from your data source and update state
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal("userId", user.$id)
        ]
      );
      setBooks(response.documents);

    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBooksByI(id) {

    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )

      return response;

    }
    catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id }
      )
      setBooks([...books, newBook])

    }
    catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {

      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {

    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user])

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBooksByI, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

