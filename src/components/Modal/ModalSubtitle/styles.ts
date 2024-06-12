import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { ModalSubitleProps } from "./ModalSubtitle";

export const Subtitle = styled.Text<ModalSubitleProps>`
  text-align: ${({textAlign})=> textAlign? textAlign : 'center'};
  font-family: ${theme.fonts.regular};
  font-size: ${({fontSize})=> fontSize ? fontSize : '18px' };
  color: ${({color})=> color? color : '#000'}
`;
