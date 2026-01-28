import { createContext, useEffect, useState } from "react";
import { databases, ID, Permissions, Role } from "../lib/appwrite";
import useUser from "../hooks/useUser";
import { Query } from "react-native-appwrite";

const DATABASE_ID = "697a0b800019bdef67d8";
const COLLECTION_ID = "books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const {user} = useUser();

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

       } 
         catch (error) 
         {
        console.error(error.message);
         }
    }

    async function createBook(data) {
         try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId : user.$id},

                //
                [
                    Permissions.read(Role.user(user.$id)),
                    Permissions.update(Role.user(user.$id)),
                    Permissions.delete(Role.user(user.$id)),
                ]
                
            )

         }
            catch (error) {
        console.error(error.message);
            }
    }

    async function deleteBook(id) {
        try {
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (user) {
            fetchBooks();
        }else {
            setBooks([]);
        }
    })

    return (
        <BooksContext.Provider value={{ books, fetchBooks, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );
}

