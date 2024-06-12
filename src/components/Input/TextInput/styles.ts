import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";

export const TextInput = styled.TextInput`
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
  padding: 0px 12px;
  textAlignVertical: top;
`;
