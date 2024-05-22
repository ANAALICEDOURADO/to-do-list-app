import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { ButtonTextProps } from "./ButtonText";

export const Texto = styled.Text<ButtonTextProps>`
    color: ${({color}) => color ? color : theme.colors.white};
    font-size: ${({fontSize}) => fontSize ? fontSize : '18px'};
    font-family: ${theme.fonts.semibold};
    padding: ${({padding}) => padding ? padding : '12px'};
`;
