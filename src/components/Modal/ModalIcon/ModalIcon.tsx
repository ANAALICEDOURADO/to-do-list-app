import { ElementType } from "react"
import { theme } from "../../../global/styles/theme"

interface ModalIconProps {
    icon: ElementType
    name?: string;
    size?: number;
    color?: string;
}

export const ModalIcon = ({icon: Icon, name, size, color}: ModalIconProps) => {
    return (
        <Icon name={name} size={size} color={color}/>
    )
}