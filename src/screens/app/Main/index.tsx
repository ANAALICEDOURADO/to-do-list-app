import { StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Task } from "../../../components/Task";
import { Spacer } from "../../../components/Spacer";

export const Main = () => {
  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      <S.Header>
        <S.Title>MINHAS TAREFAS</S.Title>
        <Feather name="calendar" size={25} color={theme.colors.white} />
      </S.Header>
      <S.Main>
        <Content>
          <Task />
          <Spacer height={15} />
          <Task />
        </Content>
      </S.Main>
      <S.Footer>
        <S.BtnFooter>
          <Feather name="list" size={25} color={theme.colors.white} />
          <S.BtnFooterText>Todas</S.BtnFooterText>
        </S.BtnFooter>
        <S.AddTask
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
