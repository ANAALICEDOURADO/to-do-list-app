import { Text, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface ModalSubitleProps {
  subtitle: string;
}

export const ModalSubtitle = ({ subtitle }: ModalSubitleProps) => {
  return <Text style={styles.subtitle} >{subtitle}</Text>
};

const styles = StyleSheet.create({
    subtitle:{
        textAlign: "center",
        fontFamily: theme.fonts.regular,
        fontSize: 16,
      },
});