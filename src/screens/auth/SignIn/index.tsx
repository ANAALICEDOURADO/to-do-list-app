import { Input } from "../../../components/Input";
import { Container, Content, theme } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Title } from "../../../global/styles/styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AuthScreenNavigationProp } from "../../../routes/auth.routes";

export const SignIn = () => {
  const { navigate } = useNavigation<AuthScreenNavigationProp>();

  const goToScreenSignUp = () => {
    navigate("SignUp"); //Aqui já deu certo tá vendo?
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
    navigate("Main"); //Esta daq vai ficar fora da tipagem, ela pertence a tipagem do app.routes.tsx e não do auth.routes.tsx, o que vai fazer com que vá para a página é se tem usuário e não a navegação
  };

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <Container>
      <StatusBar
        hidden
      />
      <Spacer height={30} />

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

        <Button.Root>
          <Button.Content marginTop={100} onPress={handleSubmit(onSubmit)}>
            <Button.Text text="Sign In" />
          </Button.Content>
        </Button.Root>

        <Spacer height={195} />

        <View>
          <Content>
            <Button.Root>
              <Button.Content
                backgroundColor={theme.colors.white}
                onPress={goToScreenSignUp}
              >
                <Button.Text
                  fontSize={14}
                  color={theme.colors.third}
                  text="Ainda não possui uma conta? | Sign Up"
                />
              </Button.Content>
            </Button.Root>
          </Content>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
  areaLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
