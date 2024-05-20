import { ReactNode } from "react";
import { Container } from "../Spacer/styles";
import { StyleSheet } from "react-native";

type ModalRootProps = {
    children: ReactNode;
}

export const ModalRoot = ({children}: ModalRootProps) => {
  return <Container style={styles.centeredView}>{children}</Container>;
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
});
