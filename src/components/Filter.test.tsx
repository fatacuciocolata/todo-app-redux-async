import { render, fireEvent } from '@testing-library/react';
import { Filter } from "./Filter"

const mockFilterAll = "all"
const mockFilterChecked = "checked"

const mockFilterByAll = jest.fn()
const mockFilterByCompleted = jest.fn()
const mockFilterByUncompleted = jest.fn()

jest.mock("../hooks/useFilter", () => ({
    useFilter: () => ({ 
        filter: mockFilterAll, 
        filterByAll: mockFilterByAll, 
        filterByCompleted: mockFilterByCompleted,
        filterByUncompleted: mockFilterByUncompleted
    })
})); 

describe("Filter", () => {
    it("should call filterByCompleted when clicking input 'all'", () => {
        const renderComponent = () => render(<Filter filter={mockFilterChecked}  />)
        const { getByTestId } = renderComponent()
        const input = getByTestId("filter-all-input-radio")
        fireEvent.click(input)
        expect(mockFilterByAll).toHaveBeenCalled();
    })
    it("should call filterByCompleted when clicking input 'checked'", () => {
        const renderComponent = () => render(<Filter filter={mockFilterAll}  />)
        const { getByTestId } = renderComponent()
        const input = getByTestId("filter-checked-input-radio")
        fireEvent.click(input)
        expect(mockFilterByCompleted).toHaveBeenCalled();
    })
    it("should call filterByUncompleted when clicking input 'unchecked'", () => {
        const renderComponent = () => render(<Filter filter={mockFilterAll}  />)
        const { getByTestId } = renderComponent()
        const input = getByTestId("filter-unchecked-input-radio")
        fireEvent.click(input)
        expect(mockFilterByUncompleted).toHaveBeenCalled();
    })

})