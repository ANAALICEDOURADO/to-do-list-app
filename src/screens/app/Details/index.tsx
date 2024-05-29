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
import { useTasks } from "../../../components/TaskProvider/TaskProvider";
import { useRoute } from "@react-navigation/native";

export const Details = () => {
  const { navigate } = useNavigation();
  //const { addTask } = useTasks();

  type dataTaskProps = {
    titulo: string;
    subtitulo: string;
  }
  

  const taskSchema = yup.object({
    titulo: yup.string().required("Campo obrigatório").max(20, "Máximo de 20 caracteres"),
    subtitulo: yup.string().required("Campo Obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataTaskProps>({
    resolver: yupResolver(taskSchema),
  });



  
  const updateTask = (data: dataTaskProps) => {
    console.log({ data });
    //addTask(data)
    navigate("Main");
  };

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <S.Header>
        <S.Back onPress={() => navigate("Main")}>
          <Feather name="arrow-left" size={25} color={theme.colors.white} />
        </S.Back>
        <S.Title>Editar Tarefa</S.Title>
      </S.Header>
      <S.Main>
        <Content>
          <Input.Root>
            <Input.Content errors={errors?.titulo!}>
              <Input.TextInput
                placeholder="Título"
                control={control}
                name="titulo"
              />
            </Input.Content>
          </Input.Root>
          <Spacer height={20} />
          <Input.Root>
            <Input.Content height={200} errors={errors?.subtitulo!}>
              <Input.TextInput
                placeholder="Subtítulo"
                control={control}
                name="subtitulo"
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
          <Feather name="check" size={30} color={theme.colors.white} />
        </S.AddTask>
      </S.Footer>
    </Container>
  );
};
