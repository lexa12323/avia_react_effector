import React from 'react'
import { $sort, changeActiveFilter } from './sort-store'
import { SortToggle } from 'molecules/sort-toggle'
import { useStore } from 'effector-react'

export const SortContainer = () => {
    const sort = useStore($sort)
    return (
        <SortToggle items={sort} changeActiveFilter={changeActiveFilter}/>
    )
}
