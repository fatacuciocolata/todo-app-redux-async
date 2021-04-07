import { useSelector } from "react-redux"
import { IReducerState } from "../redux/rootReducer";

export const useAppState = () => {
    const isLoading = useSelector((state: IReducerState) => state.appState.isLoading)

    return {
        isLoading
    }
}