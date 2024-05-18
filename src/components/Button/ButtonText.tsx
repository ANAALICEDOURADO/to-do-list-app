import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

interface ButtonTextProps {
    text: string;
}

export const ButtonText = ({text}: ButtonTextProps) => {
  return (
    <View>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    paddingLeft: 12,
  },
});
