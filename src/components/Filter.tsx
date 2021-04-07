import React from "react"
import { useFilter } from "../hooks/useFilter";
import { InputRadio } from "./common/InputRadio"
import { FilterStyled } from "./common/FilterStyled" 

export interface IFilterProps {
    filter: string
}

export const Filter: React.FC<IFilterProps> = props => {
    const { filterByAll, filterByCompleted, filterByUncompleted } = useFilter()
    
    return (
        <FilterStyled>
            <InputRadio 
                dataTestId="filter-all-input-radio" 
                id="all"
                value="all"
                checked={props.filter === "all"} 
                onChange={() => filterByAll()}
                >All
            </InputRadio>
            <InputRadio 
                dataTestId="filter-checked-input-radio" 
                id="checked"
                value="checked"
                checked={props.filter === "checked"} 
                onChange={() => filterByCompleted()}
                >Completed
            </InputRadio>
            <InputRadio 
                dataTestId="filter-unchecked-input-radio" 
                id="unchecked"
                value="unchecked"
                checked={props.filter === "unchecked"} 
                onChange={() => filterByUncompleted()}
                >Uncompleted
            </InputRadio>
        </FilterStyled>     
    )
}