import { Control, FieldError, useController } from "react-hook-form";
import {
  TextInputMaskOptionProp,
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from "react-native-masked-text";
import { theme } from "../../../global/styles/theme";
import * as S from "./styles";
import React from "react";

interface InputProps extends TextInputMaskProps {
  placeholder?: string;
  control?: Control<any>;
  errors?: FieldError;
  isActivePassword?: boolean;
  name: string;
  type: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
}

export const TextInputMask = ({
  placeholder,
  control,
  name,
  errors,
  isActivePassword,
  type,
  options,
  ...rest
}: InputProps) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <S.TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.neutral_11}
      onChangeText={field.onChange}
      value={field.value}
      secureTextEntry={isActivePassword}
      type={type}
      options={options}
      {...rest}
    />
  );
};
