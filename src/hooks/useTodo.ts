import { useDispatch } from "react-redux"
import { addTodoActionCreator, removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todosActions"
import { ITodo } from "../redux/reducers/todosReducer"

export const useTodo = () => {
    
    const dispatch = useDispatch()

    const addTodo = (value:string) => {
        dispatch(addTodoActionCreator(value))
    }
    const removeTodo = (id:number) => {
        dispatch(removeTodoActionCreator(id))
    }
    const toggleTodo = (todo:ITodo) => {
        dispatch(toggleTodoActionCreator(todo))
    }
    
    return {
        addTodo,
        removeTodo,
        toggleTodo
    } 
}