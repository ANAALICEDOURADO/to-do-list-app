import styled from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { Props } from "./ModalView";

export const ModalView = styled.View<Props>`
    align-items:  ${({alignItems}) => alignItems ? alignItems : 'center'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'collumn'};
    width: 290px;
`;
