import React from "react";
import * as S from "./styles";

interface Props {
  width?: number;
  height?: any;
}
5;
export function Spacer({ width = 0, height = "0%", ...rest }: Props) {
  return <S.Container {...rest} width={width} height={height} />;
}
