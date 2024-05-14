import React, { ReactNode } from "react";
import { View } from "react-native";

type InputRootProps = {
  children: ReactNode;
  width?: any | number;
};

export const InputRoot = ({ children, width }: InputRootProps) => {
  return <View style={{ width: width ?? "100%" }}>{children}</View>;
};
