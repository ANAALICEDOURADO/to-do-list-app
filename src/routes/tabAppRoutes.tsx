import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Main, dataTaskProps } from "../screens/app/Main";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../global/styles/theme";


export const TabRoutes = () => {
  const Tab = createBottomTabNavigator();
  const { navigate } = useNavigation();

  const screenOptions = {
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      width: "100%",
      position: "relative",
      bottom: 0,
      right: 0,
      left: 0,
      borderRadius: 0,
      elevation: 0,
      height: 70,
      backgroundColor: theme.colors.third,
      borderWidth: 0,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Main">
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigate('Main', { showCompleted: false })}
              >
                <Feather name="list" size={25} color={theme.colors.white} />

                <Text
                  style={{
                    fontSize: 12,
                    color: focused
                      ? theme.colors.white
                      : theme.colors.secondary,
                    marginTop: 6,
                    fontFamily: theme.fonts.semibold,
                  }}
                >
                  Todas
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name="CreateTask"
        component={Main}
        options={{
          tabBarButton: ({ children }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate("AddTask");
                }}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.colors.white,
                  width: Platform.OS == "ios" ? 60 : 70,
                  height: Platform.OS == "ios" ? 60 : 70,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 50,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 8,
                }}
              >
                <Feather name="plus" size={30} color={theme.colors.third} />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name="TasksDone"
        component={Main}
        initialParams={{showCompleted: true}}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigate('Main', { showCompleted: true })}
              >
                <Feather name="check" size={25} color={theme.colors.white} />

                <Text
                  style={{
                    fontSize: 12,
                    color: focused
                      ? theme.colors.white
                      : theme.colors.secondary,
                    marginTop: 6,
                    fontFamily: theme.fonts.semibold,
                  }}
                >
                  Completas
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
