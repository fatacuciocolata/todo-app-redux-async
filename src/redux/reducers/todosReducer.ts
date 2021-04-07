import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todosActions"

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type TodoAction =
    | { type: 'FETCH_TODOS'; payload: ITodo[]}
    | { type: 'ADD_TODO'; payload: ITodo  }
    | { type: 'REMOVE_TODO'; payload: number }
    | { type: 'TOGGLE_TODO'; payload: ITodo }
    | { type: 'GET_STATE'; }

export const initialState: ITodo[] | null = null

export type TodosReducerState = ITodo[] | null

export default function todosReducer(state: TodosReducerState = initialState, action: TodoAction):ITodo[] | null{
    const stateArray = state ? state : []

    switch(action.type){
        case FETCH_TODOS:
            return [...stateArray, ...action.payload]

        case ADD_TODO: {
            return [...stateArray, action.payload]

        }
        case REMOVE_TODO: 
            return [...stateArray].filter(x => x.id !== action.payload)

        case TOGGLE_TODO:{
            const idx = stateArray.findIndex(x => x.id === action.payload.id)
            if (idx === -1) {
                return state
            }
            const newState = [...stateArray]
            newState[idx].completed = !newState[idx].completed
            return newState
        }

        default:
            return state
    }
}
