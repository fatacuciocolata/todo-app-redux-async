import React from "react"
import './TodoItem.scss'

export const TodoItemStyled:React.FC = props => {
    return (
        <div className="todo__item">
            {props.children}
        </div>
    )
}