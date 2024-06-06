import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { dataTaskProps } from "../../screens/app/Main";

interface Props extends TouchableOpacityProps {
  onDelete: (id: number) => void;
  onUpdate: () => void
  taskData: dataTaskProps;
}

export const Task = ({ taskData, onDelete, onUpdate }: Props) => {
  const [check, setCheck] = useState(false);
  const { navigate } = useNavigation();

  const handleUpdate = () => {
    onUpdate(taskData)
  }

  const handleDelete = () => {
    onDelete(taskData.id);
  };

  return (
    <S.TaskOpacity>
      <S.AreaTask
        style={[
          styles.areaTask,
          {
            backgroundColor: check ? theme.colors.lime : theme.colors.secondary,
          },
        ]}
      >
        <S.AreaTextos style={{ flexWrap: "wrap" }}>
          <S.Title numberOfLines={1} ellipsizeMode="tail">{taskData.title}</S.Title>
          <S.Subtitle numberOfLines={1} ellipsizeMode="tail">
            {taskData.subtitle}
          </S.Subtitle>
        </S.AreaTextos>
        <S.AreaBtn>
          <S.Btn onPress={handleUpdate}>
            <Feather name="edit" size={25} color={theme.colors.third} />
          </S.Btn>
          <S.Btn onPress={handleDelete}>
            <Feather name="trash-2" size={25} color={theme.colors.third} />
          </S.Btn>
          <S.Btn onPress={() => setCheck(!check)}>
            {check ? (
              <Feather
                name="check-square"
                size={25}
                color={theme.colors.third}
              />
            ) : (
              <Feather name="square" size={25} color={theme.colors.third} />
            )}
          </S.Btn>
        </S.AreaBtn>
      </S.AreaTask>
    </S.TaskOpacity>
  );
};

const styles = StyleSheet.create({
  areaTask: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
});
