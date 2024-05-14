import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";

export const Astheristic = styled.Text`
  font-size: 17px;
  font-family: ${theme.fonts.bold};
  color: #ff0001;
  margin-right: 1px;
`;

export const Title = styled.Text<{ error: boolean }>`
  font-size: 16px;
  font-family: ${theme.fonts.semiBold};
  margin-bottom: 7px;
  color: ${({ error }) => (error ? "#ff0001" : "#000")};
`;
