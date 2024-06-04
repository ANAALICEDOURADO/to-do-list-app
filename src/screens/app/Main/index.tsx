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
  Main: { newTask?: dataTaskProps };
  AddTask: undefined;
};

type MainScreenRouteProp = RouteProp<RootStackParamList, "Main">;

type dataTaskProps = {
  titulo: string;
  subtitulo: string;
  id: number;
};

export const Main = () => {
  const route = useRoute<MainScreenRouteProp>();
  const { navigate } = useNavigation();
  const [tasks, setTasks] = useState<dataTaskProps[]>([]);

  useEffect(() => {
    const newTask = route.params?.newTask;
    if (newTask) {
      const IdUnico = Math.floor(Math.random() * 10000);
      setTasks((tasks) => [...tasks, { ...newTask, id: IdUnico }]);
    }
  }, [route.params?.newTask]);

  const handleDeleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
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
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                onDelete={handleDeleteTask}
                title={item.titulo}
                subtitle={item.subtitulo}
              />
            )}
            ItemSeparatorComponent={() => <Spacer height={20} />}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            bounces={false}
          />
        </Content>
      </S.Main>
    </Container>
  );
};
