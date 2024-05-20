import { ReactNode } from "react";
import * as S from './styles'

type ModalRootProps = {
    children: ReactNode;
}

export const ModalRoot = ({children}: ModalRootProps) => {
  return <S.Root>{children}</S.Root>;
};
