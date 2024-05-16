import { Input } from "../../../components/Input";
import { Container, Content } from "../../../global/styles/styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Text, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/Spacer";

import IconNormal from "../../../assets/icons/EyeClosed.svg";
import IconError from "../../../assets/icons/EyeClosedRed.svg";

export const SignIn = () => {
  const formSchema = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Digite pelo menos 8 dígitos"),
    email: yup.string().required("Campo obrigatório").email(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string }>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Spacer height={50} />
      <Content>
        <Input.Root>
          <Input.Label label="Nome" errors={errors?.name!} />
          <Input.Content errors={errors?.name!}>
            <Input.TextInput
              control={control}
              name="name"
              placeholder="digite o seu nome"
            />
            <Input.Icon icon={<IconNormal />} iconError={<IconError />} />
          </Input.Content>
        </Input.Root>
        <Spacer height={20} />
        <Input.Root>
          <Input.Label label="E-mail" errors={errors?.email!} />
          <Input.Content errors={errors?.email!}>
            <Input.TextInput
              control={control}
              name="email"
              placeholder="digite seu e-mail"
            />
            <Input.Icon icon={<IconNormal />} iconError={<IconError />} />
          </Input.Content>
        </Input.Root>

        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ color: "#FFF", fontSize: 18 }}>Salvar</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};
