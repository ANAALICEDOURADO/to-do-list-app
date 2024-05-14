import React from "react";
import { View } from "react-native";
import * as S from "./styles";

type InputLabelProps = {
  fieldRequired?: boolean;
  label?: string;
  errors: boolean;
};

export const InputLabel = ({
  fieldRequired,
  label,
  errors,
}: InputLabelProps) => {
  return (
    <>
      {fieldRequired ? (
        <View style={{ flexDirection: "row" }}>
          {<S.Astheristic>*</S.Astheristic>}
          {label && <S.Title error={errors}>{label}:</S.Title>}
        </View>
      ) : (
        <>{label && <S.Title error={errors}>{label}:</S.Title>}</>
      )}
    </>
  );
};
