import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/image/logo_dark.png'
import LightLogo from '../assets/image/logo_light.png'

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} />
  )
}

export default ThemedLogo