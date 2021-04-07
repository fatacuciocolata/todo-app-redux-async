import { START_LOADING, STOP_LOADING } from "../actions/appStateActions"

export type AppStateAction = 
    | { type: 'START_LOADING'}
    | { type: 'STOP_LOADING'}
    | { type: 'GET_STATE' }

export type AppState = {
    isLoading: boolean
}
export const initialState: AppState = {
    isLoading: true
}

export default function appStateReducer(state = initialState, action: AppStateAction): AppState {
    switch(action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default: 
            return state
    }
}


