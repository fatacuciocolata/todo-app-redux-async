import React from "react"
import './InputText.scss'

export interface IInputProps {
    dataTestId: string
    onChange: (value:string) => void
    value: string
}

export const InputText: React.FC<IInputProps> = props => {
    return (
        <input 
            className="form__input" 
            type="text" 
            data-testid={props.dataTestId}
            onChange={e => props.onChange(e.target.value)} 
            value={props.value} 
            placeholder="Type something..."
        />
    )
}