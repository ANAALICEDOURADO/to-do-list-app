import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "../screens/app/Main";

export const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};