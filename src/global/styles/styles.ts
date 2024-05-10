import styled from "styled-components/native";
import { theme } from "./theme";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.regular};
`;
