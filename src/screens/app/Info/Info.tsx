import React from "react";
import { View, Text, StatusBar } from "react-native";
import { theme } from "../../../global/styles/theme";
import { Container } from "../../../global/styles/styles";

export const Info = () => {
  return (
    <Container>
        <StatusBar
        translucent
        backgroundColor={"#FFFFFF"}
        barStyle={"dark-content"}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.red,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <Text>eu sou a página de informações do usuário</Text>
      </View>
    </Container>
  );
};
