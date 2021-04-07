import React from "react"
import './FilterStyled.scss'

export const FilterStyled:React.FC = props => {
    return (
        <div className="filter">
            {props.children}
        </div>
    )
}