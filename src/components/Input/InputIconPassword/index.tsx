import * as S from "./styles";

import EyeClosed from "../../../assets/icons/EyeClosed.svg";
import EyeOpenned from "../../../assets/icons/EyeOpenned.svg";

import EyeClosedRed from "../../../assets/icons/EyeClosedRed.svg";
import EyeOpennedRed from "../../../assets/icons/EyeOpennedRed.svg";

import React, { ReactNode } from "react";

type InputIconPasswordProps = {
  secureTextActive: boolean;
  errors: boolean;
  onPressButton: () => void;
};

interface Icons {
  [key: string]: ReactNode;
}

const myIcons: Icons = {
  false: <EyeClosed width={23} />,
  true: <EyeOpenned width={23} />,
  falseError: <EyeClosedRed width={23} />,
  trueError: <EyeOpennedRed width={23} />,
};

export const InputIconPassword = ({
  secureTextActive,
  errors,
  onPressButton,
}: InputIconPasswordProps) => {
  return (
    <S.IconButton onPress={onPressButton}>
      {myIcons[`${secureTextActive}${errors ? "Error" : ""}`]}
    </S.IconButton>
  );
};
