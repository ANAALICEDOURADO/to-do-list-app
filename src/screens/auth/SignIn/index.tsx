import { Input } from "../../../components/Input";
import { Container, Content } from "../../../global/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { Title, theme } from "../../../global/styles/styles";
import NormalIcon from '../../../assets/icons/EyeClosed.svg'
import ErrorIcon from '../../../assets/icons/EyeClosedRed.svg'
import Elipse9 from '../../../assets/Ellipse 9.svg'
import Elipse10 from '../../../assets/Ellipse 10.svg'

export const SignIn = () => {
  type dataFormProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const formSchema = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email(),
    password: yup.string().required('Campo Obrigatório').min(8, 'Digite pelo menos 8 digitos'),
    confirmPassword: yup.string().required('Campo obrigatório').oneOf([yup.ref('password')], 'A confirmação deve ser igual a senha')
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataFormProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Elipse9 style={styles.elipse} />
      <Elipse10 style={styles.elipse10} />
      <Spacer height={50} />
      
      <Content>
      <View><Title>Sign In</Title></View>
        <Input.Root>
          <Input.Content errors={errors?.email!}>
            <Input.TextInput placeholder="E-mail" control={control} name="email" />
          </Input.Content>
        </Input.Root>
        <Spacer height={20} />
        <Input.Root>
          <Input.Content errors={errors?.password!}>
            <Input.TextInput placeholder="Senha" control={control} name="password" />
            <Input.Icon icon={<NormalIcon />} iconError={<ErrorIcon/>} />
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

const styles = StyleSheet.create({
  elipse:{
    position: 'absolute',
    top: -10,
    right: 0,
    //transform: [{ rotate: '90deg' }],
  },
  elipse10:{
    position: 'absolute',
    top: -10,
    right: 0
  }
})
