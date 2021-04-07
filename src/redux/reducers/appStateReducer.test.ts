import * as action from "../actions/appStateActions";
import filterReducer from "./appStateReducer";
import appStateReducer, { initialState } from "./appStateReducer"

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(appStateReducer(undefined, { type: 'GET_STATE' }))
        .toEqual({
            "isLoading": true
        })
    })

    it('should handle START_LOADING', () => {
        expect(appStateReducer(initialState, {
            type: action.START_LOADING
        }))
        .toEqual({
            "isLoading": true
        })
    });

    it('should handle STOP_LOADING', () => {
        expect(appStateReducer(initialState, {
            type: action.STOP_LOADING
        }))
        .toEqual({
            "isLoading": false
        })   
    });

})

