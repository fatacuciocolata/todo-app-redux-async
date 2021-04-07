import { renderHook } from '@testing-library/react-hooks' 
import { useAppState } from './useAppState';

const mockIsLoading = true
jest.mock('react-redux', () => ({
    useSelector: () => mockIsLoading,
}))

describe("useAppState", () => {
    it('should return isLoading value', () => {
        const { result } = renderHook(() => useAppState())
        const isLoading = result.current.isLoading
        expect(isLoading).toBe(mockIsLoading)
    })
})