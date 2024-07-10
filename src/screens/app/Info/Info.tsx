import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";
import { Container, Content, Title } from "../../../global/styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Spacer } from "../../../components/Spacer";
import Elipse9 from "../../../assets/Ellipse 9.svg";
import Untitled from "../../../assets/Untitled.svg";

export const Info = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar
        translucent
        backgroundColor={theme.colors.third}
        barStyle={"dark-content"}
      />
      <Untitled style={styles.elipse} />
      <S.Header>
        <Content>
          <S.AreaBack>
            <S.BackBtn onPress={() => navigate('Main')}>
              <Feather name="arrow-left" size={25} color={theme.colors.white} />
            </S.BackBtn>
          </S.AreaBack>
        </Content>
      </S.Header>
      <S.PhotoArea>
        <S.Photo source={require("../../../assets/pjo.jpg")} />
        <Content>
          <Title style={{ fontSize: 25, color: theme.colors.black }}>
            Ana Alice dos Santos
          </Title>
        </Content>
      </S.PhotoArea>
      <Spacer height={60} />
      <S.Main>
        <Content>
          <S.InfoArea>
            <S.infoTxt onPress={() => navigate('Main')}>
            <Feather name="archive" size={30} color={theme.colors.third} />
              <S.AreaTxt>
              <S.Text>Minhas tarefas</S.Text>
              <S.SemiTxt>blablablabla</S.SemiTxt>
              </S.AreaTxt>
            </S.infoTxt>
            <S.infoTxt>
            <Feather name="user" size={30} color={theme.colors.third} />
              <S.AreaTxt>
              <S.Text>Editar Perfil</S.Text>
              <S.SemiTxt>blablablabla</S.SemiTxt>
              </S.AreaTxt>
            </S.infoTxt>
            <S.infoTxt>
            <Feather name="key" size={30} color={theme.colors.third} />
              <S.AreaTxt>
              <S.Text>Mudar Senha</S.Text>
              <S.SemiTxt>blablablabla</S.SemiTxt>
              </S.AreaTxt>
            </S.infoTxt>
            <S.infoTxt>
            <Feather name="box" size={30} color={theme.colors.third} />
              <S.AreaTxt>
              <S.Text>seila kkkkkkkkkk</S.Text>
              <S.SemiTxt>blablablabla</S.SemiTxt>
              </S.AreaTxt>
            </S.infoTxt>
          </S.InfoArea>
        </Content>
      </S.Main>
      <S.Footer>
        <Content>
          <S.LogOut>
          <Feather name="log-out" size={30} color={theme.colors.red} />
          <S.Text style={{ color: theme.colors.red, paddingLeft: 10 }}>Log Out</S.Text>
          </S.LogOut>
        </Content>
      </S.Footer>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  elipse: {
    width: 650,
    height: 650,
    position: "absolute",
    right: -190,
    top: -400,
  },
});
