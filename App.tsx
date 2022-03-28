import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

const SF400 = (require('./src/assets/fonts/SF-Pro-Rounded-Regular.ttf'));
const SF600 = (require('./src/assets/fonts/SF-Pro-Rounded-Semibold.ttf'));
const SF700 = (require('./src/assets/fonts/SF-Pro-Rounded-Bold.ttf'));
const SF800 = (require('./src/assets/fonts/SF-Pro-Rounded-Heavy.ttf'));

import theme from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    SF400,
    SF600,
    SF700,
    SF800
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
