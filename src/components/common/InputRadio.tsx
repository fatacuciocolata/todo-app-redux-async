import React from "react"
import './InputRadio.scss'

export interface IPropsInputRadio {
    dataTestId: string
    onChange: () => void
    checked: boolean
    id: string
    value: string
}
export const InputRadio: React.FC<IPropsInputRadio> = props => {
    return (
        <label className={`input__label ${props.checked ? "input__label--bold" : ""}`}>
            <input 
                data-testid={props.dataTestId}
                className="input__radio--hidden"
                type="radio" 
                id={props.id} 
                value={props.value}
                checked={props.checked} 
                onChange={props.onChange}
            /> {props.children}
        </label> 
    )
}