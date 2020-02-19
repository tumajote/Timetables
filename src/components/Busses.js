import React from 'react'
import Bus from './Bus'

const Busses = ({ busses }) => {
    return (
        <div className='uk-animation-slide-bottom-small'>
            {busses.itineraries.map(p => (
                <Bus key={p.startTime} bus={p} />
            ))}
        </div>
    )
}

export default Busses
