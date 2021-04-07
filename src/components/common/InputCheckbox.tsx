import React from "react"
import './InputCheckbox.scss'

export interface IPropsInputCheckbox {
    todoId: number
    dataTestId: string
    handleToggle: () => void
    checked: boolean
}
export const InputCheckbox: React.FC<IPropsInputCheckbox> = props => {
    return (
        <div className="input--rounded">
            <input 
                type="checkbox" 
                id={`checkbox-${props.todoId}`} 
                data-testid="input-checkbox" 
                checked={props.checked} 
                onChange={props.handleToggle}
            /> 
            <label htmlFor={`checkbox-${props.todoId}`}></label>
        </div>
    )
}