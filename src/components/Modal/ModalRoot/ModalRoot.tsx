import { ReactNode } from "react";
import * as S from './styles'

export type ModalRootProps = {
    children: ReactNode;
    marginTop?: number;
}

export const ModalRoot = ({children, marginTop}: ModalRootProps) => {
  return <S.Root marginTop={marginTop} >{children}</S.Root>;
};
