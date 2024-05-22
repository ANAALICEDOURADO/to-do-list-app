import { Input } from "../../../components/Input";
import { Container, Content, theme } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, StyleSheet, StatusBar } from "react-native";
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
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
  const { navigate } = useNavigation();

  const teste = () => {
    navigate("SignIn");
  };

  type dataFormProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const formSchema = yup.object({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Digite pelo menos 8 digitos"),
    name: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataFormProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: dataFormProps) => {
    setModalVisible(true);
    console.log({ data });
  };

  return (
    <Container style={{marginTop: StatusBar.currentHeight, justifyContent: "space-between" }}>
      <Elipse9 style={styles.elipse} />
      <Elipse10 style={styles.elipse10} />

      <Content>
        <View style={{ width: 100 }}>
          <Button.Root>
            <Button.Content
              marginTop={0}
              backgroundColor={theme.colors.white}
              onPress={teste}
            >
              <Button.Icon
                icon={
                  <Feather
                    name="chevron-left"
                    size={25}
                    color={theme.colors.third}
                  />
                }
              />
              <Button.Text color={theme.colors.third} text="Voltar" />
            </Button.Content>
          </Button.Root>
        </View>

        <Spacer height={50} />

        <View>
          <Title>Sign Up</Title>
        </View>

        <Spacer height={40} />

        <Input.Root>
          <Input.Content errors={errors?.name!}>
            <Input.TextInput placeholder="Nome" control={control} name="name" />
          </Input.Content>
        </Input.Root>
        <Spacer height={30} />
        <Input.Root>
          <Input.Content errors={errors?.email!}>
            <Input.TextInput
              placeholder="E-mail"
              control={control}
              name="email"
            />
          </Input.Content>
        </Input.Root>
        <Spacer height={30} />
        <Input.Root>
          <Input.Content errors={errors?.password!}>
            <Input.TextInput
              secureTextEntry={isPasswordSecure}
              placeholder="Senha"
              control={control}
              name="password"
            />
            <Input.IconPassword
              secureTextActive={isPasswordSecure}
              errors={!!errors?.password}
              onPressButton={() => setIsPasswordSecure(!isPasswordSecure)}
            />
          </Input.Content>
        </Input.Root>
        <Spacer height={30} />
        <Input.Root>
          <Input.Content errors={errors?.confirmPassword!}>
            <Input.TextInput
              secureTextEntry={isConfirmPasswordSecure}
              placeholder="Confirme sua senha"
              control={control}
              name="confirmPassword"
            />
            <Input.IconPassword
              secureTextActive={isConfirmPasswordSecure}
              errors={!!errors?.confirmPassword}
              onPressButton={() => setIsConfirmPasswordSecure(!isConfirmPasswordSecure)}
            />
          </Input.Content>
        </Input.Root>

        <Button.Root>
          <Button.Content marginTop={100} onPress={handleSubmit(onSubmit)}>
            <Button.Text text="Sign Up" />
          </Button.Content>
        </Button.Root>

        <Spacer height={10} />

        <Modal1.Root>
          <Modal1.Content modalVisible={modalVisible}>
            <Modal1.Icon icon={Feather} />
            <Spacer height={30} />
            <Modal1.Title title="Perfil criado com sucesso!" />
            <Modal1.Subtitle subtitle="Agora você pode entrar em seu novo perfil a qualquer momento." />
            <Modal1.Actions onClose={() => setModalVisible(false)} />
          </Modal1.Content>
        </Modal1.Root>
      </Content>

      <View style={{ marginBottom: 30 }}>
        <Content>
          <Button.Root>
            <Button.Content
              backgroundColor={theme.colors.white}
              onPress={teste}
            >
              <Button.Text
                fontSize={14}
                color={theme.colors.third}
                text="Já possui uma conta? | Sign In"
              />
            </Button.Content>
          </Button.Root>
        </Content>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  elipse: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  elipse10: {
    position: "absolute",
    top: 0,
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
});
