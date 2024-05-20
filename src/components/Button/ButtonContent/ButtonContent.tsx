import { ReactNode } from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface ButtonContentProps extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor?: string;
  marginTop?: number;
}

export const ButtonContent = ({
  backgroundColor,
  marginTop,
  children,
  ...rest
}: ButtonContentProps) => {
  return (
    <S.ContentButton {...rest} marginTop={marginTop} backgroundColor={backgroundColor}>
      {children}
    </S.ContentButton>
  );
};
