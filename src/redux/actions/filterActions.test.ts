import * as action from "../actions/filterActions"
describe('Filter actions', () => {
  it('should create an action to filterByAllAllActionCreator', () => {
    const expectedAction = {
      type: action.FILTER_BY_ALL
    }
    expect(action.filterByAllActionCreator()).toEqual(expectedAction)
  })

  it('should create an action to filterByCompletedActionCreator', () => {
    const expectedAction = {
      type: action.FILTER_BY_COMPLETED
    }
    expect(action.filterByCompletedActionCreator()).toEqual(expectedAction)
  })

  it('should create an action to filterByUncompletedActionCreator', () => {
    const expectedAction = {
      type: action.FILTER_BY_UNCOMPLETED
    }
    expect(action.filterByUncompletedActionCreator()).toEqual(expectedAction)
  })
})