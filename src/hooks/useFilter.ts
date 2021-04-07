import { useDispatch, useSelector } from "react-redux"
import { IReducerState } from "../redux/rootReducer";

import { filterByAllActionCreator, filterByCompletedActionCreator, filterByUncompletedActionCreator } from "../redux/actions/filterActions"

export const useFilter = () => {
    const filter = useSelector((state: IReducerState) => state.filter)
    const dispatch = useDispatch()

    const filterByAll = () => {
        dispatch(filterByAllActionCreator())
    }
    
    const filterByCompleted = () => {
        dispatch(filterByCompletedActionCreator())
    }

    const filterByUncompleted = () => {
        dispatch(filterByUncompletedActionCreator())
    }

    return {
        filter,
        filterByAll,
        filterByCompleted,
        filterByUncompleted
    }
}