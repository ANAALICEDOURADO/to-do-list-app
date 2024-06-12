import { FlatList, StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Task } from "../../../components/Task";
import { Spacer } from "../../../components/Spacer";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Modal1 } from "../../../components/Modal";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<dataTaskProps | null>(null);
  const [taskChecked, setTaskChecked] = useState(false)

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

  const handleOpenTaskModal = (task: dataTaskProps) => {
    setSelectedTask(task);
    setModalVisible(true);
    console.log({ task });
  };

  const handleCheckState = (check: boolean) => {
    const isChecked = check;
    setTaskChecked(isChecked)
  }

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
                onOpenTask={() => handleOpenTaskModal(item)}
                onUpdate={handleUpdateTask}
                taskData={item}
                onDelete={handleDeleteTask}
                onCheck={handleCheckState}
              />
            )}
          />
        </Content>

        <Modal1.Root marginTop={50}>
          <Modal1.Content
            backgroundColor={theme.colors.white}
            modalVisible={modalVisible}
          >
            <Modal1.View
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
            >
              <Modal1.Title title="Tarefa" fontSize={22} color={theme.colors.lime} />
              <Modal1.Actions
                borderRadius={50}
                backgroundColor={theme.colors.white}
                padding={1}
                height={25}
                onClose={() => setModalVisible(false)}
              >
                <Modal1.Icon
                  name="x"
                  size={25}
                  color={theme.colors.lime}
                  icon={Feather}
                />
              </Modal1.Actions>
            </Modal1.View>
            <Spacer height={20} />
            <Modal1.View alignItems="flex-start">
              <Modal1.Title
                title={selectedTask?.title || "ahahaha"}
                textAlign="justify"
              />
              <Modal1.Subtitle
                subtitle={selectedTask?.subtitle || "hohohohoh"}
                textAlign="justify"
              />
            </Modal1.View>
          </Modal1.Content>
        </Modal1.Root>
      </S.Main>
    </Container>
  );
};
