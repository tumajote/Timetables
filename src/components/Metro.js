import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Metro = ({ metro }) => {
    const startTime = convertTimeStamp(metro.startTime)
    const endTime = convertTimeStamp(metro.endTime)
    const duration = convertDuration(metro.duration)
    return (
        <div>
            <p key={metro.startTime}>
                Lähtö: {startTime} Kesto: {duration} min Saapuminen: {endTime}{' '}
            </p>
        </div>
    )
}

export default Metro
