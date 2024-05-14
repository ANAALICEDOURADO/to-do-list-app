import * as S from "./styles";

import React, { ReactElement, ReactNode } from "react";

interface Icons {
  [key: string]: ReactNode;
}

interface InputIconProps {
  errors?: boolean;
  icon: ReactElement;
  iconError: ReactElement;
}

export const InputIcon = ({ errors, icon, iconError }: InputIconProps) => {
  return <S.Icon>{errors ? iconError : icon}</S.Icon>;
};
