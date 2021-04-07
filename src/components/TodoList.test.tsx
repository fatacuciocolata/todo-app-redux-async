import { render } from '@testing-library/react';
import { TodoList } from "./TodoList"

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
    },
]
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}))

describe("TodoList", () => {
    it("should render todos", () => {
        const mockFilter = "all"
        const { getByText } = render(<TodoList filter={mockFilter} todos={mockTodos} />);
        mockTodos.map(x => {
            if(x.title){
                expect(getByText(x.title)).toBeInTheDocument()
            }
        })
    })
    it("should filter todos by completed", () => {
        const mockFilter = "checked"
        const { getByText, queryByText } = render(<TodoList filter={mockFilter} todos={mockTodos} />)
        mockTodos.map(x => {
            if(x.completed){
                expect(getByText(x.title)).toBeInTheDocument()
            }
            if(!x.completed){
                expect(queryByText(x.title)).not.toBeInTheDocument()
            }
        })
    })
    it("should filter todos by uncompleted", () => {
        const mockFilter = "unchecked"
        const { getByText, queryByText } = render(<TodoList filter={mockFilter} todos={mockTodos} />)
        mockTodos.map(x => {
            if(!x.completed){
                expect(getByText(x.title)).toBeInTheDocument()
            }
            if(x.completed){
                expect(queryByText(x.title)).not.toBeInTheDocument()
            }
        })
    })
});