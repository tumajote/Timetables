import React from 'react'
import Bus from './Bus'

const Busses = ({ busses }) => {
    return (
        <div>
            <h2>Busses</h2>
            {busses.itineraries.map(p => (
                <Bus key={p.startTime} bus={p} />
            ))}
        </div>
    )
}

export default Busses
