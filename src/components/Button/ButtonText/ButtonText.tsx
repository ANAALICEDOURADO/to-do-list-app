import { TextProps, View } from "react-native";
import * as S from "./styles";

export interface ButtonTextProps extends TextProps {
  text: string;
  color?: string;
  padding?: string;
  fontSize?: number;
}

export const ButtonText = ({ text, color, padding, fontSize, ...rest }: ButtonTextProps) => {
  return (
    <View>
      <S.Texto {...rest} fontSize={fontSize} padding={padding} color={color}>
        {text}
      </S.Texto>
    </View>
  );
};
