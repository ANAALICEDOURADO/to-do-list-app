import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const TaskOpacity = styled.TouchableHighlight`
margin: 0 5px;
`

export const AreaTask =  styled.View`
    
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    max-height: 110px;
`

export const AreaTextos = styled.View`
`
export const Title = styled.Text`
font-family: ${theme.fonts.semibold};
color: ${theme.colors.third};
font-size: 20px;
`
export const Subtitle = styled.Text`
font-family: ${theme.fonts.medium};
font-size: 16px;
max-width: 160px;
`

export const AreaBtn = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Btn = styled.TouchableOpacity`
padding: 10px;
`