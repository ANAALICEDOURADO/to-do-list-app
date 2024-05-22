import { StatusBar } from "react-native";
import { Container, Content, theme } from "../../../global/styles/styles";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import { Task } from "../../../components/Task";
import { Spacer } from "../../../components/Spacer";
import { Button } from "../../../components/Button";

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
          <Feather name="list" size={30} color={theme.colors.white} />
          <S.BtnFooterText>Todas</S.BtnFooterText>
        </S.BtnFooter>

        
        
        <S.BtnFooter>
          <Feather name="check" size={30} color={theme.colors.white} />
          <S.BtnFooterText>Completas</S.BtnFooterText>
        </S.BtnFooter>
      </S.Footer>
    </Container>
  );
};
