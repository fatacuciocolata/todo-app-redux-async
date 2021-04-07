import * as action from "../actions/todosActions"

const makeJestMockFetch = (mockTodo: any) => jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockTodo),
        ok: true
    } as Response)
);

describe('Todos actions', () => {

    // fetchTodos
    it('should call fetch when calling fetchTodos', async () => {
        const mockTodo = [{}, {}]
        global.fetch = makeJestMockFetch(mockTodo);
        const dispatchSpy = jest.fn()
        await action.fetchTodos()(dispatchSpy)
        expect(fetch).toHaveBeenCalledTimes(1);
    })
    // fetchTodos
    it('should call dispatch with expected actions when calling fetchTodos', async () => {
        const mockTodos = [
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
            }
        ]
        global.fetch = makeJestMockFetch(mockTodos);
        const expectedAction = {
            type: action.FETCH_TODOS,
            payload: mockTodos
        }
        const dispatchSpy = jest.fn()
        await action.fetchTodos()(dispatchSpy)
        expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
    })

    // addTodo
    it('should call fetch when calling addTodoActionCreator', async () => {
        const title = "adaugat dupa"
        const mockTodo = {
                userId: 1,
                id: 3,
                title: title,
                completed: false
            }
        global.fetch = makeJestMockFetch(mockTodo);
        const dispatchSpy = jest.fn()
        await action.addTodoActionCreator(title)(dispatchSpy)
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    // addTodo
    it('should call dispatch with expected action when calling addTodoActionCreator', async () => {
        const title = "adaugat dupa"
        const mockTodo = {
                userId: 1,
                id: 3,
                title: title,
                completed: false
            }
        global.fetch = makeJestMockFetch(mockTodo);
        const expectedAction = {
            type: action.ADD_TODO,
            payload: mockTodo
        }
        const dispatchSpy = jest.fn()
        await action.addTodoActionCreator(title)(dispatchSpy)
        expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
    })

    // removeTodo
    it('should call fetch when calling addTodoActionCreator', async () => {
        const mockId = 1
        global.fetch = makeJestMockFetch(mockId);
        const dispatchSpy = jest.fn()
        await action.removeTodoActionCreator(mockId)(dispatchSpy)
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    // removeTodo
    it('should call dispatch with expected action when calling removeTodoActionCreator', async () => {
        const mockId = 1
        global.fetch = makeJestMockFetch(mockId);
        const expectedAction = {
            type: action.REMOVE_TODO,
            payload: mockId
        }
        const dispatchSpy = jest.fn()
        await action.removeTodoActionCreator(mockId)(dispatchSpy)
        expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
    })

    // toggleTodo
    it('should call fetch when calling toggleTodo', async () => {
        const mockTodo = {
            userId: 1,
            id: 3,
            title: "toggle todo",
            completed: false
        }
        global.fetch = makeJestMockFetch(mockTodo);
        const dispatchSpy = jest.fn()
        await action.toggleTodoActionCreator(mockTodo)(dispatchSpy)
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    // toggleTodo
    it('should call dispatch with expected action when calling removeTodoActionCreator', async () => {
        const mockTodo = {
            userId: 1,
            id: 3,
            title: "toggle todo",
            completed: true
        }
        global.fetch = makeJestMockFetch(mockTodo);
        const expectedAction = {
            type: action.TOGGLE_TODO,
            payload: mockTodo
        }
        const dispatchSpy = jest.fn()
        await action.toggleTodoActionCreator(mockTodo)(dispatchSpy)
        expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
    })   

})

// jest.spyOn(global, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//     json: () => Promise.resolve([ {}, {} ]),
//     ok: true
//     } as Response),
// );
// const initMockFetch = (mockTodo) => {
//     global.fetch = jest.fn(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(mockTodo),
//             ok: true
//         } as Response)
//     );
// }
    