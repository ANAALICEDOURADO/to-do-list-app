import styled from "styled-components/native";
import { theme } from "./theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.third}
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.regular};
`;

export { theme };
