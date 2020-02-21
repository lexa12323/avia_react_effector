import React, { useEffect } from 'react'
import { FlightList } from 'organisms/flight-list'
import { fetchTickers, $tickets, $isLoadFail, fetchSearch, $searchId } from './tickets-store'
import { $filter } from '../FilterContainer/filter-store'
import { $sort } from '../SortContainer/sort-store'
import { useStore } from 'effector-react'

export const TicketsContainer = () => {

    const tickets = useStore($tickets)
    const filter = useStore($filter)
    const isLoadFail = useStore($isLoadFail)
    const searchId = useStore($searchId)
    const sort = useStore($sort)

    const filterChecked = filter.filter(item => item.checked)
    
    const filteredTickets = tickets && tickets.filter(item => {
        return item.segments.every((segment)=> {
                return filterChecked.some( filter => segment.stops.length === filter.id )
        })
    })

    const {func:sortFunc} = sort.find(item => item.active)

    if (filteredTickets){ 
        filteredTickets.sort(sortFunc)
    }

    useEffect(()=> {
        !searchId && fetchSearch()
        searchId && longPolling(searchId)
    }, [searchId])

    const longPolling = async (searchId) => {
        let stopCondition = false
        do {
            const { stop } = await fetchTickers(searchId);
            stopCondition = stop
        } while (stopCondition === false)
    }



    return (
        <div>
            { isLoadFail && 'Ошибка. Не все результаты будут отображены' }
            { filteredTickets && <FlightList tickets={filteredTickets.slice(0,10)} /> }
        </div>
    )
}
