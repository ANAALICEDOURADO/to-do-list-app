import { ReactNode } from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface ButtonContentProps extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor?: string;
}

export const ButtonContent = ({
  backgroundColor,
  children,
  ...rest
}: ButtonContentProps) => {
  return (
    <S.ContentButton {...rest} backgroundColor={backgroundColor}>
      {children}
    </S.ContentButton>
  );
};
