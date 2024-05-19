import { Input } from "../../../components/Input";
import { Container, Content } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Title, theme } from "../../../global/styles/styles";
import NormalIcon from "../../../assets/icons/EyeClosed.svg";
import ErrorIcon from "../../../assets/icons/EyeClosedRed.svg";
import Elipse9 from "../../../assets/Ellipse 9.svg";
import Elipse10 from "../../../assets/Ellipse 10.svg";
import { Button } from "../../../components/Button";
import IconeAdd from "../../../assets/icons/add.svg";
import { useState } from "react";

export const SignIn = () => {
  type dataFormProps = {
    email: string;
    password: string;
  };

  const formSchema = yup.object({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Digite pelo menos 8 digitos"),
    /*     name: yup.string().required("Campo obrigatório"), */
    /*     confirmPassword: yup
      .string()
      .required("Campo obrigatório") 
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"), */
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataFormProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: dataFormProps) => {
    console.log({ data });
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container style={{ marginTop: 60 }}>
      <View style={styles.areaLogo}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <Elipse9 style={styles.elipse} />
      <Elipse10 style={styles.elipse10} />
      <Spacer height={50} />

      <Content>
        <View>
          <Title>Sign In</Title>
        </View>
        <Input.Root>
          <Input.Content errors={errors?.email!}>
            <Input.TextInput
              placeholder="E-mail"
              control={control}
              name="email"
            />
          </Input.Content>
        </Input.Root>
        <Spacer height={20} />
        <Input.Root>
          <Input.Content errors={errors?.password!}>
            <Input.TextInput
              placeholder="Senha"
              control={control}
              name="password"
            />
            <Input.Icon icon={<NormalIcon />} iconError={<ErrorIcon />} />
          </Input.Content>
        </Input.Root>

        <Button.Root>
          <Button.Content onPress={handleSubmit(onSubmit)}>
            <Button.Icon icon={<IconeAdd />} />
            <Button.Text text="Sign In" />
          </Button.Content>
        </Button.Root>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  elipse: {
    position: "absolute",
    top: -10,
    right: 0,
  },
  elipse10: {
    position: "absolute",
    top: -10,
    right: 0,
  },
  logo: {
    width: 120,
    height: 120,
  },
  areaLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
