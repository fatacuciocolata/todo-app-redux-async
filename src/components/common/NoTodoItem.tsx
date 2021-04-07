import React from "react"
import './NoTodoItem.scss'

export const NoTodoItem:React.FC = props => {
    return (
        <div className="notodo__item">
            {props.children}
        </div>
    )
}