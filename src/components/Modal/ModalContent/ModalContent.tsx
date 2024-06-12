import { Modal, ModalProps, StyleSheet, View } from "react-native";
import { Content, theme } from "../../../global/styles/styles";
import { ReactNode } from "react";
import * as S from './styles'

export type Props = ModalProps & {
    modalVisible: boolean;
    children: ReactNode;
    backgroundColor?: string;
}

export const ModalContent = ({backgroundColor, modalVisible, children, ...rest}: Props) => {
    return (
        <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        {...rest}
      >
        <Content style={styles.centeredView} >
          <S.ModalView backgroundColor={backgroundColor} style={styles.modalView}>
            {children}
          </S.ModalView>
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