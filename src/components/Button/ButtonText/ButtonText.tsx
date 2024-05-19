import { View } from "react-native";
import * as S from './styles'

interface ButtonTextProps {
    text: string;
}

export const ButtonText = ({text}: ButtonTextProps) => {
  return (
    <View>
      <S.Texto>{text}</S.Texto>
    </View>
  );
};
