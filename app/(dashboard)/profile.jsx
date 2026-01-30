import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../constants/Colors'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import useUser from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {

  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
        {`Welcome, ${user?.email || 'User'}!`}
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />

      <ThemedButton onPress={logout} style={styles.btn}>
        <Text style={styles.btnText}>Logout</Text>
      </ThemedButton>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "900",
    fontSize: 28,
    textAlign: "center",
    color: Colors.primary,
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})