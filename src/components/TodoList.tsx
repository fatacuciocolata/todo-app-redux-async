import React from "react"

import { TodoItem } from "./TodoItem"
import { NoTodoItem } from "./common/NoTodoItem"
import { ITodo } from "../redux/reducers/todosReducer"

export interface ITodoListProps {
    filter: string;
    todos: ITodo[];
}

export const TodoList: React.FC<ITodoListProps> = props => {

    const todosArrayFiltered = props.todos.filter(todo => {
        switch(props.filter){ 
            case "checked":
                return todo.completed
            case "unchecked":
                return !todo.completed
            default:
                return true;
        }})

    return (
        <>
            {todosArrayFiltered.length > 0 && todosArrayFiltered.map((todo: ITodo) => <ul><TodoItem key={todo.id} todo={todo} /></ul>)}
            {todosArrayFiltered.length === 0 && <ul><NoTodoItem>No todos!</NoTodoItem></ul>}
        </>
    )
}