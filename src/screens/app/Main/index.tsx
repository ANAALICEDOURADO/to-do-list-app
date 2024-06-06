import { FlatList, StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Task } from "../../../components/Task";
import { Spacer } from "../../../components/Spacer";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

type RootStackParamList = {
  Main: { newTask?: dataTaskProps; updatedTask?: dataTaskProps };
  AddTask: undefined;
};

type MainScreenRouteProp = RouteProp<RootStackParamList, "Main">;

export type dataTaskProps = {
  title: string;
  subtitle: string;
  id?: number;
};

export const Main = () => {
  const route = useRoute<MainScreenRouteProp>();
  const { navigate } = useNavigation();
  const [tasks, setTasks] = useState<dataTaskProps[]>([]);

  const handleDeleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleAddNewTask = () => {
    const newTask = route.params?.newTask;
    if (newTask) setTasks((tasks) => [...tasks, newTask]);
  };

  const handleUpdateTask = (task: {
    id: string;
    title: string;
    subtitle: string;
  }) => {
    console.log(task);
    navigate("Details", { task });
  };

  const updatedTasks = () => {
    const updated = route.params?.updatedTask;
    if (updated)
      setTasks((tasks) =>
        tasks.map((task) => (task.id === updated.id ? updated : task))
      );
  };

  useEffect(() => {
    handleAddNewTask();
  }, [route.params?.newTask]);

  useEffect(() => {
    updatedTasks();
  }, [route.params?.updatedTask]);

  console.log({ tasks });

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
            keyExtractor={(item) => {
              const id = item.id;
              return id?.toString()!;
            }}
            ItemSeparatorComponent={() => <Spacer height={20} />}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            bounces={false}
            renderItem={({ item }) => (
              <Task
                onUpdate={handleUpdateTask}
                taskData={item}
                onDelete={handleDeleteTask}
              />
            )}
          />
        </Content>
      </S.Main>
    </Container>
  );
};
