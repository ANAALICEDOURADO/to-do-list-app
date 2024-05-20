import { TextProps, View } from "react-native";
import * as S from "./styles";

export interface ButtonTextProps extends TextProps {
  text: string;
  color?: string;
}

export const ButtonText = ({ text, color, ...rest }: ButtonTextProps) => {
  return (
    <View>
      <S.Texto {...rest} color={color}>
        {text}
      </S.Texto>
    </View>
  );
};
