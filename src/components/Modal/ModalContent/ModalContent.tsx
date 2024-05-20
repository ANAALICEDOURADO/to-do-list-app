import { Modal, ModalProps, StyleSheet, View } from "react-native";
import { Content, theme } from "../../../global/styles/styles";
import { ReactNode } from "react";

type Props = ModalProps & {
    modalVisible: boolean;
    children: ReactNode;
}

export const ModalContent = ({modalVisible, children, ...rest}: Props) => {
    return (
        <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        {...rest}
      >
        <Content style={styles.centeredView} >
          <View style={styles.modalView}>
            {children}
          </View>
        </Content>
      </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 35,
      alignItems: "center",
      shadowColor: theme.colors.third,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 5,
      elevation: 10,
    }
  });