import { ReactNode } from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface ButtonContentProps extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor?: string;
  marginTop?: number;
  flexDirection?: string;
}

export const ButtonContent = ({
  backgroundColor,
  marginTop,
  flexDirection,
  children,
  ...rest
}: ButtonContentProps) => {
  return (
    <S.ContentButton {...rest} flexDirection={flexDirection}  marginTop={marginTop} backgroundColor={backgroundColor}>
      {children}
    </S.ContentButton>
  );
};
