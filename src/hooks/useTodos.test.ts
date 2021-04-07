import { renderHook } from '@testing-library/react-hooks' // will attempt to auto-detect
import { useTodos } from "./useTodos"
import { useSelector } from "react-redux"
const mockFetchTodos = jest.fn()

jest.mock('../redux/actions/todosActions', () => ({
    fetchTodos: () => mockFetchTodos
}))

const mockDispatch = jest.fn()
jest.mock('react-redux', () => { 
    return {
        useSelector: jest.fn(() => null),
        useDispatch: () => mockDispatch,
}})

describe("useTodos", () => {
    afterEach( () => {
        jest.clearAllMocks()
    })

    
    // de verificat daca returneaza todo-urile date
    it('should return todos with mocked values after fetching', () => {
        const fakeTodos = [
            {
                userId: 1,
                id: 1,
                title: "ceva",
                completed: true
            },
            {
                userId: 1,
                id: 2,
                title: "altceva",
                completed: false
            },
        ];
        (useSelector as jest.Mock).mockImplementation(() => fakeTodos);
        const { result } = renderHook(() => useTodos())
        const todos = result.current.todos
        expect(todos).toEqual(fakeTodos)
    })

    // it('should dispatch an action to fetchTodos', () => {
    //     renderHook(() => useTodos())
    //     expect(mockDispatch).toHaveBeenCalledWith(mockFetchTodos)
    // })

    // todos ii null si de verificat daca intoarce array gol
    it('should return todos as empty array if null', () => {
        const { result } = renderHook(() => useTodos())
        const todos = result.current.todos
        // const mockTodos = []
        expect(todos).toEqual([])
    })


    // de verificat ca nu se apeleaza daca todos nu-i null
    it('should not call fetchTodos because todos is not null', () => {
        const mockTodosNotNull = [
            {
                userId: 1,
                id: 1,
                title: "ceva",
                completed: true
            },
            {
                userId: 1,
                id: 2,
                title: "altceva",
                completed: false
            },
        ]
        const mockDispatch = jest.fn()
        const mockFetchTodos = jest.fn()

        jest.mock('react-redux', () => ({
            useSelector: () => mockTodosNotNull,
            useDispatch: () => mockDispatch,
        }))
        renderHook(() => useTodos())
        // tohavebeencalledtimes0

        expect(mockDispatch).not.toHaveBeenCalledWith(mockFetchTodos)
    })
})