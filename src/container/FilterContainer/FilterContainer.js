import React from 'react'
import { FlightFilter } from 'molecules/filter'
import { $filter, toggleFilter } from './filter-store'
import { useStore } from 'effector-react'

export const FilterContainer = () => {
    const filter = useStore($filter)
    return (
        <div>
            <FlightFilter filter={filter} toggleFilter={toggleFilter}>dfs</FlightFilter>
        </div>
    )
}
