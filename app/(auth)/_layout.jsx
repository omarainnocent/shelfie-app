import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import useUser from "../../hooks/useUser";

export default function AuthLayout() {

    const { user } = useUser();
    console.log("Auth Layout User:", user);
    return (
        <>
            <StatusBar style="auto" />
            <Stack 
              screenOptions={{ animation: "none" }}
            
            />
        </>
    )
}