import { ReactNode } from "react"
import { View } from "react-native"

interface ButtonRootProps{
    children: ReactNode;
}

export const ButtonRoot = ({children}: ButtonRootProps) => {
    return(
        <View>
            {children}
        </View>
    )
}