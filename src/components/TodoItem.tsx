import React from "react"
import { useTodo } from "../hooks/useTodo"
import { ITodo } from "../redux/reducers/todosReducer"
import { TodoItemStyled } from "./common/TodoItemStyled"
import { Button } from "./common/Button"
import { InputCheckbox } from "./common/InputCheckbox"
import { Label } from "./common/Label"
import { DeleteIcon } from "./common/icons/DeleteIcon"
export interface ITodoItemProps {
    todo: ITodo;
}

export const TodoItem: React.FC<ITodoItemProps> = props => {
    const { removeTodo, toggleTodo } = useTodo()

    const handleClick = () => {
        removeTodo(props.todo.id)
    }
    const handleToggle = () =>{
        toggleTodo(props.todo)
    }
    
    return (
        <li>
            <TodoItemStyled>
                <InputCheckbox todoId={props.todo.id} dataTestId="input-checkbox" checked={props.todo.completed} handleToggle={handleToggle} />
                <Label completed={props.todo.completed} dataTestId="label-text">{props.todo.title}</Label>
                <Button dataTestId="button-delete" onClick={handleClick}><DeleteIcon style={{height:20, width: 20}} /></Button>
            </TodoItemStyled>
        </li>
    )
}