import * as action from "../actions/appStateActions"
describe('AppState actions', () => {
  it('should create an action to filterByAllAllActionCreator', () => {
    const expectedAction = {
      type: action.START_LOADING
    }
    expect(action.startLoadingActionCreator()).toEqual(expectedAction)
  })

  it('should create an action to filterByCompletedActionCreator', () => {
    const expectedAction = {
      type: action.STOP_LOADING
    }
    expect(action.stopLoadingActionCreator()).toEqual(expectedAction)
  })
})