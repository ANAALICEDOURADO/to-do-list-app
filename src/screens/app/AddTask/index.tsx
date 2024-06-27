import { StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Spacer } from "../../../components/Spacer";
import { Input } from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { dataTaskProps } from "../Main";
import { useTasks } from "../../../components/TaskProvider/TaskProvider";

export const AddTask = () => {
  const { navigate } = useNavigation();
  const {addTask} = useTasks()

  const taskSchema = yup.object({
    id: yup.number(),
    title: yup
      .string()
      .required("Campo obrigatório")
      .max(30, "Máximo de 30 caracteres"),
    subtitle: yup.string().required("Campo Obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataTaskProps>({
    resolver: yupResolver(taskSchema),
  });

  const addNewTask = (data: dataTaskProps) => {
    const IdUnico = Math.floor(Math.random() * 10000);
    const dataTask = {
      ...data,
      id: IdUnico,
    };
    addTask(dataTask)
    navigate("Main");
    console.log(dataTask)
    //navigate("Main", { newTask: dataTask });
  };

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <S.Header>
        <S.Back onPress={() => navigate("Main")}>
          <Feather name="arrow-left" size={25} color={theme.colors.white} />
        </S.Back>
        <S.Title>Nova Tarefa</S.Title>
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
          onPress={handleSubmit(addNewTask)}
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
          <Feather name="check" size={30} color={theme.colors.white} />
        </S.AddTask>
      </S.Footer>
    </Container>
  );
};
