import React from 'react'
import './flight-item.sass'

const FlightDestination = ({origin, destination, date, stops, duration}) => {
    const stopsCount = stops.length
    const stopsStr = stops.join(', ');

    const dateObjectFrom = new Date(date);
    const timeFrom = dateObjectFrom.getHours() + ':' + dateObjectFrom.getMinutes();

    const dateObjectTo = new Date(dateObjectFrom.getTime() + duration*60*60);
    const timeTo = dateObjectTo.getHours() + ':' + dateObjectFrom.getMinutes();

    return (
        <div className="flight-item__destination">
            <div className="flight-item__time">
                <p className="flight-item__label">{ origin } - { destination }</p>
                <p className="flight-item__value"> { timeFrom } - { timeTo }</p>
            </div>
            <div className="flight-item__duration">
                <p className="flight-item__label">В пути</p>
                <p className="flight-item__value">{ duration }</p>
            </div>
            <div className="flight-item__stops">
                <p className="flight-item__label">{ stopsCount } пересадка</p>
                <p className="flight-item__value">{ stopsStr}</p>
            </div>
        </div>
    )
}

export const FlightItem = ({price, carrier, segments }) => {
    return (
        <div className="flight-item">
            <div className="flight-item__header">
                <div className="flight-item__price">{price} Р</div>
                <div className="flight-item__company">{carrier}</div>
            </div>
                { segments.map((segment, index) => <FlightDestination key={index} {...segment}/>) }
            <div>

            </div>
        </div>
    )
}
