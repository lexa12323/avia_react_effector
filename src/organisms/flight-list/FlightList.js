import React from 'react'
import { FlightItem } from 'molecules/flight-item'

export const FlightList = ({tickets}) => {
    return (
        <div>
            {tickets.map((ticket, index) => <FlightItem key={index} {...ticket}/>)}
        </div>
    )
}
