import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import * as S from "./style";

export type InputContentProps = {
  children: ReactNode;
  errors: FieldError;
  height?: number;
};

export function InputContent({ children, errors, height, ...rest }: InputContentProps) {
  return (
    <S.Container  {...rest}>
      <S.ContentInput height={height} errors={errors} isErrored={!!errors}>{children}</S.ContentInput>

      {errors && <S.Error>{errors?.message}</S.Error>}
    </S.Container>
  );
}
