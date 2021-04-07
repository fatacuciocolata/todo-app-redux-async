import React, { FormEvent } from "react"
import './Form.scss'

export interface IFormProps {
    dataTestId: string
    handleSubmit: (e:FormEvent<HTMLFormElement>) => void
}
export const Form: React.FC<IFormProps> = props => {

    return (
        <form className="form" onSubmit={props.handleSubmit} data-testid="addtodo-form">
            {props.children}
        </form>
    )   
}
