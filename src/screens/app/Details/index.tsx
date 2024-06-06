import { KeyboardAvoidingView, StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Spacer } from "../../../components/Spacer";
import { Input } from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Subtitle } from "../../auth/Onboarding/styles";

type dataTaskProps = {
  id?: number;
  title: string;
  subtitle: string;
};

export const Details = () => {
  const route = useRoute();
  const { task } = route?.params;
  const { navigate } = useNavigation();

  const taskSchema = yup.object({
    id: yup.number(),
    title: yup
      .string()
      .required("Campo obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    subtitle: yup.string().required("Campo Obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<dataTaskProps>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      id: task.id,
      title: task.title,
      subtitle: task.subtitle,
    },
  });

  useEffect(() => {
    setValue("id", task.id);
    setValue("title", task.title);
    setValue("subtitle", task.subtitle);
  }, [task, setValue]);

  const updateTask = (data: dataTaskProps) => {
    navigate("Main", { updatedTask: data });
    console.log(data);
  };

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar
        translucent
        backgroundColor={"#85FD7F"}
        barStyle={"light-content"}
      />
      <S.Header>
        <S.Back onPress={() => navigate("Main")}>
          <Feather name="arrow-left" size={25} color={theme.colors.white} />
        </S.Back>
        <S.Title>Editar Tarefa</S.Title>
      </S.Header>
      <S.Main>
        <Content>
          <Input.Root>
            <Input.Content errors={errors?.title!}>
              <Input.TextInput
                placeholder="Título"
                control={control}
                name="title"
              />
            </Input.Content>
          </Input.Root>
          <Spacer height={20} />
          <Input.Root>
            <Input.Content height={200} errors={errors?.subtitle!}>
              <Input.TextInput
                placeholder="Subtítulo"
                control={control}
                name="subtitle"
              />
            </Input.Content>
          </Input.Root>
        </Content>
      </S.Main>
      <S.Footer>
        <S.AddTask
          onPress={handleSubmit(updateTask)}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <Feather name="check" size={30} color={theme.colors.third} />
        </S.AddTask>
      </S.Footer>
    </Container>
  );
};
