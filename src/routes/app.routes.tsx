import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Main } from "../screens/app/Main";
import { AddTask } from "../screens/app/AddTask";
import { Details } from "../screens/app/Details";
import { TabRoutes } from "./tabAppRoutes";

export const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tab" component={TabRoutes} />
      <Stack.Screen name="AddTask" component={AddTask} />
      <Stack.Screen name="Details" component={Details} /> 
    </Stack.Navigator>
  );
};