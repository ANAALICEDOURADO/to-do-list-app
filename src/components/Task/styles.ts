import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const TaskOpacity = styled.TouchableHighlight`
`

export const AreaTask =  styled.View`
display: flex;
    background-color: ${theme.colors.secondary};
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
`

export const AreaTextos = styled.View`

`
export const Title = styled.Text`
font-family: ${theme.fonts.semibold};
color: ${theme.colors.third};
font-size: 20px;
`
export const Subtitle = styled.Text`
font-family: ${theme.fonts.regular};
font-size: 16px;
`

export const AreaBtn = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Btn = styled.TouchableOpacity`
padding: 10px;
`
/* export const Btn2 = styled.TouchableOpacity`
padding: 10px;
`
export const Btn3 = styled.TouchableOpacity`
padding: 10px;
` */