import { ReactNode } from "react";
import * as S from "./styles";

export type Props = {
  children: ReactNode;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
};

export const ModalView = ({
  alignItems,
  justifyContent,
  flexDirection,
  children,
  ...rest
}: Props) => {
  return (
    <S.ModalView
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </S.ModalView>
  );
};
