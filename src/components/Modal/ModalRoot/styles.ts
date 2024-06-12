import styled from "styled-components/native";
import { ModalRootProps } from "./ModalRoot";

export const Root = styled.View<ModalRootProps>`
flex: 1;
justify-content: center;
align-items: center;
margin-top: ${({marginTop})=> marginTop? `${marginTop}px` : '22px'}
`