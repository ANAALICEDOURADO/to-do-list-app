import { Text, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface ModalTitleProps {
  title: string;
}

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return <Text style={styles.modalText}>{title}</Text>;
};

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontFamily: theme.fonts.bold,
    fontSize: 18,
  },
});
