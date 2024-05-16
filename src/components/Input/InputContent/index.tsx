import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import * as S from "./style";

type InputContentProps = {
  children: ReactNode;
  errors: FieldError;
};

export function InputContent({ children, errors, ...rest }: InputContentProps) {
  return (
    <S.Container {...rest}>
      <S.ContentInput isErrored={!!errors}>{children}</S.ContentInput>

      {errors && <S.Error>{errors?.message}</S.Error>}
    </S.Container>
  );
}
