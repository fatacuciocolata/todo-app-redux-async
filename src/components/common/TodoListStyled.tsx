import React from "react"
import './TodoListStyled.scss'

export const TodoListStyled:React.FC = props => {
    return (
        <div className="todo__list">
            {props.children}
        </div>
    )
}