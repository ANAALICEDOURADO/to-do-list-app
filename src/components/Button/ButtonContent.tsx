import { TouchableOpacity, StyleSheet, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { ReactNode } from "react";

interface ButtonContentProps {
    children: ReactNode;
}

export const ButtonContent = ({children}: ButtonContentProps) => {
  return (
    <View>
      <TouchableOpacity
      style={styles.btn}
    >{children}</TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: theme.colors.third,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    borderRadius: 15,
  },
});