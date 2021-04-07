import { Dispatch } from "react"
import { ITodo } from "../reducers/todosReducer"
import { ActionType } from "../rootReducer"
import { START_LOADING, STOP_LOADING } from "./appStateActions"

export const FETCH_TODOS = "FETCH_TODOS"
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const fetchTodos = () => async (dispatch: Dispatch<ActionType>): Promise<void>  => {
    dispatch({
        type: START_LOADING
    })
    let res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        method: 'GET'
    });
    let todos = await res.json();
    if (res.ok) {
        dispatch({
            type: FETCH_TODOS,
            payload: todos
        })
    } else {
        console.log(`HTTP error: ${res.status}`);
    }
    dispatch({
        type: STOP_LOADING
    })
}

export const addTodoActionCreator = (title:string) => async (dispatch: Dispatch<ActionType>): Promise<void>  => {
    dispatch({
        type: START_LOADING
    })
    let res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            userId: 1,
            completed: false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    let todo = await res.json();

    if(res.ok) {
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
    } else {
        console.log(`HTTP error: ${res.status}`);
    }
    dispatch({
        type: STOP_LOADING
    })
}

export const removeTodoActionCreator = (id:number) => async (dispatch: Dispatch<ActionType>): Promise<void>  => {
    dispatch({
        type: START_LOADING
    })
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
    });
    await res.json();
    if(res.ok) {
        dispatch({
            type: REMOVE_TODO,
            payload: id
        });
    } else {
        console.log(`HTTP error: ${res.status}`);
    }
    dispatch({
        type: STOP_LOADING
    })
}

export const toggleTodoActionCreator = (todo: ITodo) => async (dispatch: Dispatch<ActionType>): Promise<void>  => {
    dispatch({
        type: START_LOADING
    })
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const newTodo = await res.json();

    if(res.ok) {
        dispatch({
            type: TOGGLE_TODO,
            payload: newTodo
        });
    } else {
        console.log(`HTTP error: ${res.status}`);
    }
    dispatch({
        type: STOP_LOADING
    })
}