import * as action from "../actions/todosActions";
import filterReducer, { ITodo } from "./todosReducer";
import todosReducer, { initialState } from "./todosReducer"

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(todosReducer(initialState, { type: "GET_STATE" })).toEqual(null)
    })

    it('should handle FETCH_TODOS', () => {
        const mockTodos = [
            {
                userId: 1,
                id: 1,
                title: "first",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "second",
                completed: false
            },
        ];

        expect(todosReducer(initialState, {
            type: action.FETCH_TODOS,
            payload: mockTodos
        }))
        .toEqual(mockTodos)
    });

    it('should handle ADD_TODO', () => {
        const mockTodo = {
            userId: 1,
            id: 2,
            title: "second",
            completed: false
        }

        expect(todosReducer(initialState, {
            type: action.ADD_TODO,
            payload: mockTodo
        }))
        .toEqual([mockTodo])
    });

    it('should handle REMOVE_TODO', () => {
        const mockTodos = [
            {
                userId: 1,
                id: 1,
                title: "first",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "second",
                completed: false
            },
        ];

        expect(todosReducer(mockTodos, {
            type: action.REMOVE_TODO,
            payload: 2
        }))
        .toEqual(mockTodos.filter(x => x.id !== 2))
    });

    it('should handle TOGGLE_TODO', () => {
        const mockTodos = [
            {
                userId: 1,
                id: 1,
                title: "first",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "second",
                completed: false
            },
        ];

        const mockTodo = {
            userId: 1,
            id: 2,
            title: "second",
            completed: true
        };

        const expectedMockTodo = [...mockTodos];
        expectedMockTodo[1] = mockTodo;

        expect(todosReducer(mockTodos, {
            type: action.TOGGLE_TODO,
            payload: mockTodo
        }))
        .toEqual(expectedMockTodo)
    });
})

