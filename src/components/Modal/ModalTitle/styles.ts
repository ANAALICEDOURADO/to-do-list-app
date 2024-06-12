import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { ModalTitleProps } from "./ModalTitle";

export const Title = styled.Text<ModalTitleProps>`
  text-align: ${({textAlign})=> textAlign? textAlign : 'center'};
  font-family: ${theme.fonts.bold};
  font-size: ${({fontSize})=> fontSize ? fontSize : '18px' };
  color: ${({color})=> color? color : '#000'}
`;
