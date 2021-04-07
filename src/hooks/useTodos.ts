import { useEffect } from "react";
import { useDispatch, useSelector }  from "react-redux"
import { fetchTodos } from "../redux/actions/todosActions";
import { IReducerState } from "../redux/rootReducer";

export const useTodos = () => {
    const todos = useSelector((state: IReducerState) => state.todos);
    const dispatch = useDispatch()

    useEffect(() => {

        if(todos === null) {
            dispatch(fetchTodos())
        } 
    }, [todos, dispatch])

    return {
        todos: todos || []
    }

}