import { ReactNode } from "react"

interface ButtonIconProps {
    icon: ReactNode;
}

export const ButtonIcon = ({icon}:ButtonIconProps) => {
    return <>
    {icon}
    </>
}