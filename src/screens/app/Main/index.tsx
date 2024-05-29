import { FlatList, StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Task } from "../../../components/Task";
import { Spacer } from "../../../components/Spacer";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRoute, } from "@react-navigation/native";
import { useTasks } from "../../../components/TaskProvider/TaskProvider";

type RootStackParamList = {
  Main: { newTask?: dataTaskProps };
  AddTask: undefined;
};

type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type dataTaskProps = {
  titulo: string;
  subtitulo: string;
};

export const Main = () => {
  //const { tasks } = useTasks();
  const route = useRoute<MainScreenRouteProp>();
  //const newTaskData = route.params?.newTask;
  const { navigate } = useNavigation();
  const [tasks, setTasks] = useState<dataTaskProps[]>([]);

  

   useEffect(() => {
    const newTask = route.params?.newTask;
    if (newTask) {
      setTasks((tasks) => [...tasks, newTask]);
    }
  }, [route.params?.newTask]);

  const handleAddTask = () => {
    navigate("AddTask");
  };

  

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <S.Header>
        <S.Title>MINHAS TAREFAS</S.Title>
        <Feather name="calendar" size={25} color={theme.colors.white} />
      </S.Header>

      <S.Main>
        <Content>
          <FlatList
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Task title={item.titulo} subtitle={item.subtitulo} />
            )}
            ItemSeparatorComponent={() => <Spacer height={20} />}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            bounces={false}
          />
        </Content>
      </S.Main>

      <S.Footer>
        <S.BtnFooter>
          <Feather name="list" size={25} color={theme.colors.white} />
          <S.BtnFooterText>Todas</S.BtnFooterText>
        </S.BtnFooter>
        <S.AddTask
          onPress={handleAddTask}
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
          <Feather name="plus" size={30} color={theme.colors.third} />
        </S.AddTask>

        <S.BtnFooter>
          <Feather name="check" size={25} color={theme.colors.white} />
          <S.BtnFooterText>Completas</S.BtnFooterText>
        </S.BtnFooter>
      </S.Footer>
    </Container>
  );
};
