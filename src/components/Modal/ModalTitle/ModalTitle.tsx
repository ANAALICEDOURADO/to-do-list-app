import * as S from "./styles";

interface ModalTitleProps {
  title: string;
}

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return <S.Title>{title}</S.Title>;
};
