import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import Onboarding from "./src/screens/auth/Onboarding";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  const Stack = createNativeStackNavigator()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return;

  return (

    <NavigationContainer>
      <StatusBar translucent backgroundColor={'#208674'} barStyle={"light-content"} />
      <Routes />
    </NavigationContainer>
    /*<>
      <StatusBar translucent barStyle={"light-content"} />

      <Onboarding />
    </>*/
  );
}
