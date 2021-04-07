import * as action from "../actions/filterActions";
import filterReducer from "./filterReducer";
import { initialState } from "./filterReducer"

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(filterReducer(undefined, { type: 'GET_STATE' })).toEqual("all")
    })

    it('should handle FILTER_BY_ALL', () => {
        expect(filterReducer(initialState, {
            type: action.FILTER_BY_ALL,
            payload: 'all'
        }))
        .toEqual("all")
    });

    it('should handle FILTER_BY_COMPLETED', () => {
        expect(filterReducer(initialState, {
            type: action.FILTER_BY_COMPLETED,
            payload: 'checked'
        }))
        .toEqual("checked")
    });

    it('should handle FILTER_BY_UNCOMPLETED', () => {
        expect(filterReducer(initialState, {
            type: action.FILTER_BY_UNCOMPLETED,
            payload: 'unchecked'
        }))
        .toEqual("unchecked")
    });

})

