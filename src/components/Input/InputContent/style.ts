import styled, { css } from "styled-components/native";
import { theme } from "../../../global/styles/theme";
import { InputContentProps } from ".";

export type Props = {
  isErrored?: boolean;
};

type CombinedProps =
  Props & InputContentProps;

export const Container = styled.View<Props>`
  width: 100%;
`;

export const ContentInput = styled.View<CombinedProps>`
  width: 100%;
  height: ${({height}) => height ? height : 50};
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.secondary};
  border-radius: 15px;
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
