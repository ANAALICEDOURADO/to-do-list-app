import { ReactNode } from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface Props extends TouchableOpacityProps {
  onClose: () => void;
  children: ReactNode;
  borderRadius?: number;
  backgroundColor?: string;
  height?: number;
  padding?: number;
}

export const ModalActions = ({
  onClose,
  children,
  borderRadius,
  backgroundColor,
  height,
  padding,
  ...rest
}: Props) => {
  return (
    <S.Botao
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      height={height}
      padding={padding}
      onPress={onClose}
      {...rest}
    >
      {children}
    </S.Botao>
  );
};
