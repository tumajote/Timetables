import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Bus = ({ bus }) => {
    const startTime = convertTimeStamp(bus.startTime)
    const endTime = convertTimeStamp(bus.startTime)
    const duration = convertDuration(bus.duration)

    return (
        <div>
            <p>
                {' '}
                Bussi : {bus.legs[1].route.shortName} Lähtö: {startTime} Kesto:{' '}
                {duration} min Saapuminen: {endTime}{' '}
            </p>
        </div>
    )
}

export default Bus
