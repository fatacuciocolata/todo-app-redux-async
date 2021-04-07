import React from "react"
import './Label.scss'

export interface ILabelProps {
    completed: boolean
    dataTestId: string
    htmlFor?: string
}
export const Label: React.FC<ILabelProps> = props => {
    return (
        <label
            className={`label ${props.completed ? 'label--completed' : ''}`}
            htmlFor={props.htmlFor}
            data-testid={props.dataTestId}
                >{props.children}
        </label> 
    )
}