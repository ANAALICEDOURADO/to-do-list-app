import { Input } from "../../../components/Input";
import { Container, Content } from "../../../global/styles/styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Text, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/Spacer";

import IconNormal from "../../../assets/icons/EyeClosed.svg";

export const SignIn = () => {
  const formSchema = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Digite pelo menos 8 dígitos"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Spacer height={50} />

      <Content>
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
