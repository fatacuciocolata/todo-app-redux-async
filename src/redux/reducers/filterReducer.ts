import { FILTER_BY_ALL, FILTER_BY_COMPLETED, FILTER_BY_UNCOMPLETED } from "../actions/filterActions"

export type FilterAction = 
    | { type: 'FILTER_BY_ALL'; payload: string }
    | { type: 'FILTER_BY_COMPLETED'; payload: string }
    | { type: 'FILTER_BY_UNCOMPLETED'; payload: string }
    | { type: 'GET_STATE' }

export const initialState: string = "all"

export default function filterReducer(state = initialState, action: FilterAction):string {
    switch(action.type) {
        case FILTER_BY_ALL:
            return "all";
        case FILTER_BY_COMPLETED:
            return "checked"
        case FILTER_BY_UNCOMPLETED:
            return "unchecked"
        default: 
            return state
    }
}


