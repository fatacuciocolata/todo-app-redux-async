import { renderHook } from '@testing-library/react-hooks' // will attempt to auto-detect
import { useFilter } from './useFilter';

const mockFilter = "all"
const mockDispatch = jest.fn()

const mockFilterByAllActionCreator = {
    type: "FILTER_BY_ALL"
}
const mockFilterByCompletedActionCreator = {
    type: "FILTER_BY_COMPLETED"
}
const mockfFlterByUncompletedActionCreator = {
    type: "FILTER_BY_UNCOMPLETED"
}

jest.mock('react-redux', () => ({
    useSelector: () => mockFilter,
    useDispatch: () => mockDispatch,
}))

describe("useFilter", () => {
    it('should return filter all', () => {
        const { result } = renderHook(() => useFilter())
        const filter = result.current.filter
        expect(filter).toBe(mockFilter)
    })

    it('should dispatch filterByAllActionCreator', () => {
        const { result } = renderHook(() => useFilter())
        result.current.filterByAll()
        expect(mockDispatch).toHaveBeenCalledWith(mockFilterByAllActionCreator)
    })

    it('should dispatch filterByCompletedActionCreator', () => {
        const { result } = renderHook(() => useFilter())
        result.current.filterByCompleted()
        expect(mockDispatch).toHaveBeenCalledWith(mockFilterByCompletedActionCreator)
    })

    it('should dispatch filterByUncompletedActionCreator', () => {
        const { result } = renderHook(() => useFilter())
        result.current.filterByUncompleted()
        expect(mockDispatch).toHaveBeenCalledWith(mockfFlterByUncompletedActionCreator)
    })
})