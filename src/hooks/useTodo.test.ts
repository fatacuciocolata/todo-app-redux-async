import { renderHook, act } from '@testing-library/react-hooks' // will attempt to auto-detect
import { useTodo } from "./useTodo"

const mockDispatch = jest.fn();
const mockAddTodoActionCreator = jest.fn()
const mockRemoveTodoActionCreator = jest.fn()
const mockToggleTodoActionCreator = jest.fn()

jest.mock('../redux/actions/todosActions', () => ({
    addTodoActionCreator: () => mockAddTodoActionCreator,
    removeTodoActionCreator: () => mockRemoveTodoActionCreator,
    toggleTodoActionCreator: () => mockToggleTodoActionCreator
}))

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}))

describe("useTodo", () => {
    test('addTodo should call dispatch', () => {
        const { result } = renderHook(() => useTodo())
        const value = "al doilea ceva"
        act(() => {
            result.current.addTodo(value)
        })
        expect(mockDispatch).toHaveBeenCalledWith(mockAddTodoActionCreator)
    })

    test('toggleTodo should call dispatch', () => {
        const { result } = renderHook(() => useTodo())
        const id = 2
        act(() => {
            result.current.removeTodo(id)
        })
        expect(mockDispatch).toHaveBeenCalledWith(mockRemoveTodoActionCreator)
    })

    test('removeTodo should call dispatch', () => {
        const { result } = renderHook(() => useTodo())
        const todo = {
            userId: 1,
            id: 1,
            title: "ceva",
            completed: false
        }
        act(() => {
            result.current.toggleTodo(todo)
        })

        expect(mockDispatch).toHaveBeenCalledWith(mockToggleTodoActionCreator)
    })
 
})