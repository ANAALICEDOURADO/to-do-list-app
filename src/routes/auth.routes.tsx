import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
import { SignIn } from "../screens/auth/SignIn";
import { SignUp } from "../screens/auth/SignUp";

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
