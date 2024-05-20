import { ElementType } from "react"
import { theme } from "../../../global/styles/theme"

interface ModalIconProps {
    icon: ElementType
}

export const ModalIcon = ({icon: Icon}: ModalIconProps) => {
    return (
        <Icon name='check' size={60} color={theme.colors.third}/>
    )
}