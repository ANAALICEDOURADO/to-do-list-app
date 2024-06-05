import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";

export const Header = styled.View`
  flex: 0.05;
  height: 80px;
  background-color: ${theme.colors.lime};
  justify-content: start;
  padding: 20px 24px;
  flex-direction: row;
  align-items: baseline;
`;

export const Back = styled.TouchableOpacity`
`

export const Title = styled.Text`
  font-size: 25px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.semibold};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  margin-top: 20px;
`;

export const Footer = styled.View`
  flex: 0.05;
  background-color: ${theme.colors.white};
  padding: 20px 24px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const BtnFooter = styled.TouchableOpacity`
align-items: center;
`

export const AddTask = styled.TouchableHighlight`
background-color: ${theme.colors.lime};
border-radius: 50px;
width: 70px;
height: 70px;
align-items: center;
justify-content: center;
position: absolute;
right: 40;
top: -35;
`

export const Teste = styled.View`

`

export const BtnFooterText = styled.Text`
color: ${theme.colors.white}
`
