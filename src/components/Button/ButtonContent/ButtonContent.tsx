import { ReactNode } from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface ButtonContentProps extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor?: string;
  marginTop?: number | string;
  flexDirection?: string;
  borderRadius?: number | string;
}

export const ButtonContent = ({
  backgroundColor,
  marginTop,
  flexDirection,
  borderRadius,
  children,
  ...rest
}: ButtonContentProps) => {
  return (
    <S.ContentButton {...rest} flexDirection={flexDirection} borderRadius={borderRadius}  marginTop={marginTop} backgroundColor={backgroundColor}>
      {children}
    </S.ContentButton>
  );
};
