import { render, fireEvent } from '@testing-library/react'
import { TodoItem } from "./TodoItem"

const mockTodo = {
    userId: 1,
    id: 1,
    title: "Do the shopping",
    completed: true
}
const mockToggleTodo = jest.fn()
const mockRemoveTodo = jest.fn()

jest.mock("../hooks/useTodo", () => ({
    useTodo: () => ({ toggleTodo: mockToggleTodo, removeTodo: mockRemoveTodo })
})); 

describe("TodoItem" ,() => {
    it("should call toggleTodo when clicking on input checkbox", () => {
        const renderComponent = () => render(<TodoItem todo={mockTodo} />)
        const { getByTestId } = renderComponent()
        const input = getByTestId("input-checkbox")
        fireEvent.click(input)
        expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo)
        expect(mockToggleTodo).toHaveBeenCalledTimes(1)
    })
    it("should call removeTodo when clicking on delete button", () => {
        const renderComponent = () => render(<TodoItem todo={mockTodo} />)
        const { getByTestId } = renderComponent()
        const button = getByTestId("button-delete")
        fireEvent.click(button)
        expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id)
        expect(mockRemoveTodo).toHaveBeenCalledTimes(1)
    })
    it("displays correctly the label text", () => {
        const renderComponent = () => render(<TodoItem todo={mockTodo} />)
        const { getByTestId } = renderComponent()
        const label = getByTestId("label-text")
        expect(label).toHaveTextContent(mockTodo.title)
    })
    it("should be checked because todo is completed", () => {
        const renderComponent = () => render(<TodoItem todo={mockTodo} />)
        const { getByTestId } = renderComponent()
        const input = getByTestId("input-checkbox")
        expect(input).toBeChecked()
    })
    // it("displays the text delete on button correctly", () => {
    //     const renderComponent = () => render(<TodoItem todo={mockTodo} />)
    //     const { getByTestId } = renderComponent()
    //     const button = getByTestId("button-delete")
    //     expect(button).toHaveTextContent("Delete")
    // })

})