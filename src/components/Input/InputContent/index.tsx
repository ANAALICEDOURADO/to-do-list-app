type InputContentProps = {
  children: ReactNode;
  errors: FieldError;
};

import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import * as S from "./style";

export function InputContent({ children, errors, ...rest }: InputContentProps) {
  return (
    <S.Container {...rest}>
      <S.ContentInput isErrored={!!errors}>{children}</S.ContentInput>
      {errors && <S.Error>{String(errors?.message)}</S.Error>}
    </S.Container>
  );
}
