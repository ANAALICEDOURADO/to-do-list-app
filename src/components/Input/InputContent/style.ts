import styled, { css } from "styled-components/native";
import { theme } from "../../../global/styles/theme";

type Props = {
  isErrored?: boolean;
};

export const Container = styled.View<Props>`
  width: 100%;
`;

export const ContentInput = styled.View<Props>`
  width: 100%;
  height: 35px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  ${(props) =>
    props.isErrored &&
    css`
      border-bottom-width: 1px;
      border-color: #ff0001;
    `}
`;

export const Error = styled.Text`
  color: #ff0001;
  font-size: 12px;
  font-family: ${theme.fonts.medium};
  padding-top: 5px;
  padding-left: 5px;
`;
