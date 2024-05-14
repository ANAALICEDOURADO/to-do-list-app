import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import { theme } from "../../../global/styles/theme";

export const TextInput = styled(TextInputMask)`
  flex: 1;
  font-size: 15px;
  height: 48px;
  font-family: ${theme.fonts.regular};
  padding-left: 10px;
  padding-right: 10px;
`;
