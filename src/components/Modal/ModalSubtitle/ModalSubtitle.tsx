import * as S from "./styles";

interface ModalSubitleProps {
  subtitle: string;
}

export const ModalSubtitle = ({ subtitle }: ModalSubitleProps) => {
  return <S.Subtitle>{subtitle}</S.Subtitle>
};