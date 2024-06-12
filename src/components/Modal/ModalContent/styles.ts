import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import {Props} from './ModalContent'

export const ModalView = styled.View<Props>`
    margin: 20px;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : theme.colors.white};
    border-radius: 15px;
    padding: 35px;
`;
