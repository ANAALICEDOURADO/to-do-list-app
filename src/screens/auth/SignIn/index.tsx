import { Input } from "../../../components/Input";
import { Container, Content, theme } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, StyleSheet, Image } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Title } from "../../../global/styles/styles";
import NormalIcon from "../../../assets/icons/EyeClosed.svg";
import ErrorIcon from "../../../assets/icons/EyeClosedRed.svg";
import { Button } from "../../../components/Button";
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
        <Spacer height={30} />
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

        <View style={{marginTop: 170}} >
          <Content>
            <Button.Root >
              <Button.Content 
              backgroundColor={theme.colors.white}
              onPress={teste} >
                <Button.Text fontSize={14} color={theme.colors.third} text="Ainda não possui uma conta? | Sign Up" />
              </Button.Content>
            </Button.Root>
          </Content>
        </View>
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
    justifyContent: "center",
    marginTop: 100,
  },
});
