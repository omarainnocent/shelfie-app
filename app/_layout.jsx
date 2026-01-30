import "react-native-get-random-values"
import "react-native-url-polyfill/auto"
import { Stack } from "expo-router"
import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { UserProvider } from "../context/UserContext"
import { BooksProvider } from "../context/BooksContext"

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light



  return (
    <UserProvider>
      <BooksProvider>
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Stack
            initialRouteName="index"
            screenOptions={{
              headerStyle: { backgroundColor: theme.navBackground },
              headerTintColor: theme.title,
              headerShadowVisible: false, // Cleaner, modern look
              headerTitleStyle: {
                fontWeight: '900',
                fontSize: 20,
              },
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </BooksProvider>
    </UserProvider>
  )
}