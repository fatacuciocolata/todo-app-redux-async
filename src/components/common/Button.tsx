import React from "react"
import './Button.scss'

export interface IPropsButton {
    type?: string
    dataTestId: string
    onClick?: () => void
}

export const Button: React.FC<IPropsButton> = props => {
    return (
        <button 
            className="button" 
            data-testid={props.dataTestId} 
            onClick={props.onClick}
                >{props.children}
        </button>
    )
}