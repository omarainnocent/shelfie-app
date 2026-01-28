import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function login(email, password) {
       try {
        await account.createEmailPasswordSession(email, password)
        const response = await account.get();
        setUser(response);
       }
         catch (error) {
        throw Error(error.message)
       }
       
    }

    async function register(email, password) {
      try {
        await account.create(ID.unique(), email, password)
        await login(email, password)
      } catch (error) {
        throw Error(error.message)
      }
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
       
    }

    return (
        <UserContext.Provider value={{ user, loading, login, register, logout, checkUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;