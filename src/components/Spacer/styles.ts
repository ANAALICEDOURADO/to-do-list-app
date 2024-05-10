import styled from "styled-components/native";

interface Props {
  width?: number;
  height?: number;
}

export const Container = styled.View<Props>`
  width: ${({ width }) => (width ? width : `100%`)};
  height: ${({ height }) => (height ? height : "10%")};
`;
