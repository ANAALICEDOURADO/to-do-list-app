import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
import { SignIn } from "../screens/auth/SignIn";
import { SignUp } from "../screens/auth/SignUp";

// Definimos a tipagem da rotas e o que elas vão receber, quando a screen não recebe nada
// Definimos como undefined;
// Caso for receber definimos, exemplo, uma screen vai receber o id
// Ficaria => SignUp: {id: number}
export type RootAuthRoutesList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

// Criamos a tipagem que vamos passar no useNavigation das rotas, para que ele reconheça as rotas existentes
// Do nativeStack, e as rotas que tem está dentro do RootAuthRoutesList
export type AuthScreenNavigationProp =
  NativeStackNavigationProp<RootAuthRoutesList>;

export const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
