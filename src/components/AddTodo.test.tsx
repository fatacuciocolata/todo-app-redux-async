import { render, fireEvent } from '@testing-library/react'
import { AddTodo } from './AddTodo';
 
const mockAddTodo = jest.fn()

jest.mock("../hooks/useTodo", () => ({
    useTodo: () => ({ addTodo: mockAddTodo })
})); 

describe("AddTodo", () => {
    it('should call addTodo after submitting the form with value "ceva"', () => {
        const renderComponent = () => render(<AddTodo />)
        const { getByTestId } = renderComponent()
        const form = getByTestId("addtodo-form")
        const input = getByTestId("addtodo-input")
        fireEvent.change(input, { target: { value: "ceva" } })
        fireEvent.submit(form)
        expect(mockAddTodo).toHaveBeenCalledWith("ceva")
    })
    it('should clear input after submitting', () => {
        const renderComponent = () => render(<AddTodo />)
        const { getByTestId } = renderComponent()
        const form = getByTestId("addtodo-form")
        const input = getByTestId("addtodo-input")
        fireEvent.change(input, { target: { value: "ceva" } })
        fireEvent.submit(form)
        expect(input).toHaveValue("")
    })
})