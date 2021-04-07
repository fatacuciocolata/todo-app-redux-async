import { combineReducers, Reducer } from "redux";
import todosReducer, { ITodo, TodoAction } from "./reducers/todosReducer";
import filterReducer, { FilterAction } from "./reducers/filterReducer"
import appStateReducer, { AppState, AppStateAction } from "../redux/reducers/appStateReducer"

export interface IReducerState {
  todos: ITodo[] | null
  filter: string
  appState: AppState
};

export type ActionType = TodoAction  | FilterAction | AppStateAction

export const rootReducer: Reducer<IReducerState, ActionType> = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  appState: appStateReducer
});
