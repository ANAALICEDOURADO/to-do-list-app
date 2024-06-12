import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { Props } from './ModalActions'


export const Botao = styled.TouchableOpacity<Props>`
width: 50px;
background-color: ${({backgroundColor})=>backgroundColor?backgroundColor: theme.colors.third};
border-radius: ${({borderRadius}) => borderRadius ? `${borderRadius}px` : '10px'};
align-items:  center;
justify-content: center;
padding: ${({padding}) => padding ? `${padding}px` : '15px'};
height: ${({height}) => height ? `${height}px` : '60px'};
`