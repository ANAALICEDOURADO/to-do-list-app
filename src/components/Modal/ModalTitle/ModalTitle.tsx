import * as S from "./styles";

export interface ModalTitleProps {
  title: string;
  fontSize?: number;
  textAlign?: string;
  color?: string;
}

export const ModalTitle = ({ title, fontSize, textAlign, color}: ModalTitleProps) => {
  return <S.Title fontSize={fontSize} textAlign={textAlign} color={color} >{title}</S.Title>;
};
