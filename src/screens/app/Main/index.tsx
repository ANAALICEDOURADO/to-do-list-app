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
import { useTasks } from "../../../components/TaskProvider/TaskProvider";

type RootStackParamList = {
  Main: {
    newTask?: dataTaskProps;
    updatedTask?: dataTaskProps;
    showCompleted?: boolean;
  };
  AddTask: undefined;
};

type MainScreenRouteProp = RouteProp<RootStackParamList, "Main">;

export type dataTaskProps = {
  title: string;
  subtitle: string;
  id?: number;
  check: boolean;
};

export const Main = () => {
  const route = useRoute<MainScreenRouteProp>();
  const { navigate } = useNavigation();
  const { tasks, addTask, deleteTask, updateTask, checkTask } = useTasks();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<dataTaskProps | null>(null);
  const showCompleted = route.params?.showCompleted ?? false;

  const handleAddNewTask = () => {
    const newTask = route.params?.newTask;
    if (newTask) addTask(newTask);
  };

  const handleUpdateTask = (task: {
    id: string;
    title: string;
    subtitle: string;
  }) => {
    navigate("Details", { task });
  };

  const updatedTasks = () => {
    const updated = route.params?.updatedTask;
    if (updated) updateTask(updated);
  };

  const handleOpenTaskModal = (task: dataTaskProps) => {
    setSelectedTask(task);
    setModalVisible(true);
    console.log({ task });
  };

  useEffect(() => {
    handleAddNewTask();
  }, [route.params?.newTask]);

  useEffect(() => {
    updatedTasks();
  }, [route.params?.updatedTask]);

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.check)
    : tasks;
  console.log("Show Completed: ", showCompleted);
  console.log("Filtered Tasks: ", filteredTasks);

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <S.Header>
        <S.Title>MINHAS TAREFAS</S.Title>
        <S.CalendarBtn onPress={() => navigate('Info')}>
          <Feather name="calendar" size={25} color={theme.colors.white} />
        </S.CalendarBtn>
      </S.Header>

      <S.Main>
        <Content>
          <FlatList
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
            data={filteredTasks}
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
                onDelete={deleteTask}
                onCheck={() => checkTask(item.id)}
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
              <Modal1.Title
                title="Tarefa"
                fontSize={22}
                color={theme.colors.lime}
              />
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
