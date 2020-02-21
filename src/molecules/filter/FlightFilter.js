import React from 'react'
import { Checkbox } from 'atoms/checkbox'
import './filter.sass'
export const FlightFilter = ({children, filter, toggleFilter}) => { 
    return (
        <div className="filter">
            <div className="filter__group">
                <p>Фильтры</p>
                { filter.map(({id, label, checked}) => <Checkbox key={id} id={id} checked={checked} toggleFilter={toggleFilter}>{label}</Checkbox>) }
            </div>
        </div>
    )
}
