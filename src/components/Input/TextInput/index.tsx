import { Control, FieldError, useController } from "react-hook-form";
import { TextInputProps } from "react-native";
import { theme } from "../../../global/styles/theme";
import * as S from "./styles";
import React from "react";

interface InputProps extends TextInputProps {
  placeholder?: string;
  control?: Control<any>;
  errors?: FieldError;
  isActivePassword?: boolean;
  name: string;
}

export const TextInput = ({
  placeholder,
  control,
  name,
  errors,
  isActivePassword,
  ...rest
}: InputProps) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <S.TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.grey}
      onChangeText={field.onChange}
      value={field.value}
      secureTextEntry={isActivePassword}
      {...rest}
    />
  );
};
