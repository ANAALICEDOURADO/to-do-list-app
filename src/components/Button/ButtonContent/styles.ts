import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { ButtonContentProps } from "./ButtonContent";

export const ContentButton = styled.TouchableOpacity<ButtonContentProps>`
  height: 50px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.third};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({marginTop}) => marginTop ? marginTop : 30};
  border-radius: 15px;
`;
