import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";

interface IndicatorProps {
  active: boolean;
}

export const AreaContent = styled.View`
  flex: 120;
  height: 400px;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  background-color: ${theme.colors.third};
  margin-top: auto;
  align-items: center;
`;

export const Indicator = styled.View<IndicatorProps>`
  width: 10px;
  height: 5px;
  background-color: ${props =>
    props.active ? theme.colors.white : theme.colors.primary};
  margin-horizontal: 3px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.bold};
  text-align: center;
  padding-top: 45px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.white};
  padding-horizontal: 20px;
  text-align: center;
  padding-top: 25px;
`;

export const AreaBtn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;

export const StartBtn = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  border-radius: 15px;
  padding: 20px;
  margin: 0 90px;
`;

export const NextBtn = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  border-radius: 50px;
  padding: 20px 20px;
  margin: 0 90px;
`;

export const BtnText = styled.Text`
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.primary};
  font-size: 20px;
`;

export const AreaIndicator = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
