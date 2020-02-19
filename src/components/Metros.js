import React from 'react'
import Metro from './Metro'

const Metros = ({ metros }) => {
    return (
        <div className='uk-animation-slide-bottom-small'>
            {metros.itineraries.map(p => (
                <Metro key={p.startTime} metro={p} />
            ))}
        </div>
    )
}

export default Metros
