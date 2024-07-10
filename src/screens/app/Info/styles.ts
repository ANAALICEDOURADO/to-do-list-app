import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  flex: 0.1;
  flex-direction: row;
`;

export const AreaBack = styled.View``;

export const BackBtn = styled.TouchableOpacity``;

export const PhotoArea = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const AroundPhoto = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Photo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
`;

export const InfoArea = styled.View`
  margin-horizontal: 20px;
  border-radius: 15px;
  height: 350px;
  min-width: 350px;
  padding: 20px;
  justify-content: space-around;
`

export const infoTxt = styled.TouchableOpacity`
flex-direction: row;
`
export const AreaTxt = styled.View`
margin-horizontal: 10px;

`

export const Footer = styled.View`
  flex: 0.5;
  justify-content: center;
  margin-horizontal: 30px;
`;

export const LogOut = styled.TouchableOpacity`
flex-direction: row;
`

export const Text = styled.Text`
  color: ${theme.colors.black};
  font-size: 18px;
  font-family: ${theme.fonts.medium};
`;

export const SemiTxt = styled.Text`
  color: ${theme.colors.grey};
  font-size: 14px;
  font-family: ${theme.fonts.regular};
`
