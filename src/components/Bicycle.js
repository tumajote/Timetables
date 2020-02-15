import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Bicycle = ({ bicycle }) => {
    const startTime = convertTimeStamp(bicycle.startTime)
    const endTime = convertTimeStamp(bicycle.endTime)
    const duration = convertDuration(bicycle.duration)
    return (
        <div>
            <h2>Bicycle</h2>
            <p>
                Lähtö: {startTime} Kesto: {duration} min Saapuminen: {endTime}{' '}
            </p>
        </div>
    )
}

export default Bicycle
