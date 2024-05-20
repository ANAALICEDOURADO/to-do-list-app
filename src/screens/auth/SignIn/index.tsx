import { Input } from "../../../components/Input";
import { Container, Content } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Title } from "../../../global/styles/styles";
import NormalIcon from "../../../assets/icons/EyeClosed.svg";
import ErrorIcon from "../../../assets/icons/EyeClosedRed.svg";
import Elipse9 from "../../../assets/Ellipse 9.svg";
import Elipse10 from "../../../assets/Ellipse 10.svg";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { Modal1 } from "../../../components/Modal";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const { navigate } = useNavigation();

  const teste = () => {
    navigate("SignUp");
  };

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
  };

  return (
    <Container style={{ marginTop: 1 }}>
      <View style={styles.areaLogo}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

     {/*  <Elipse9 style={styles.elipse} />
      <Elipse10 style={styles.elipse10} /> */}
      <Spacer height={10} />

      <Content>
        <View>
          <Title>Sign In</Title>
        </View>

        <Spacer height={40} />
        
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
          <Button.Content marginTop={100} onPress={handleSubmit(onSubmit)}>
            <Button.Text text="Sign In" />
          </Button.Content>
        </Button.Root>

        <Spacer height={10} />

        <S.GoToSignUp onPress={teste}>
          <S.Text>Ainda não possui uma conta?</S.Text>
        </S.GoToSignUp>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  elipse: {
    position: "absolute",
    top: 20,
    right: 0,
  },
  elipse10: {
    position: "absolute",
    top: 20,
    right: 0,
  },
  logo: {
    width: 120,
    height: 120,
  },
  areaLogo: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 100,
  },
});
