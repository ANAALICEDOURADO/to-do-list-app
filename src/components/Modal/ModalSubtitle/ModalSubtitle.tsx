import * as S from "./styles";

export interface ModalSubitleProps {
  subtitle: string;
  fontSize?: number;
  textAlign?: string;
  color?: string;
}

export const ModalSubtitle = ({ subtitle, fontSize, textAlign, color }: ModalSubitleProps) => {
  return <S.Subtitle fontSize={fontSize} textAlign={textAlign} color={color} >{subtitle}</S.Subtitle>
};