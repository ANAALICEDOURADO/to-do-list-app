import * as S from "./styles";
import {Feather} from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export const Task = () => {
    const teste = () => {
        console.log('testeeeeeeeeeeeeeeeee')
    }

  return (
    <S.TaskOpacity onPress={teste} >
      <S.AreaTask>
        <S.AreaTextos>
          <S.Title>Titulo</S.Title>
          <S.Subtitle>Subtitulo</S.Subtitle>
        </S.AreaTextos>
        <S.AreaBtn>
          <S.Btn>
            <Feather name="edit" size={25} color={theme.colors.third} />
          </S.Btn>
          <S.Btn>
          <Feather name="trash-2" size={25} color={theme.colors.third} />
          </S.Btn>
          <S.Btn>
          <Feather name="check-square" size={25} color={theme.colors.third} />
          </S.Btn>
        </S.AreaBtn>
      </S.AreaTask>
    </S.TaskOpacity>
  );
};
