import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Bus = ({ bus }) => {
    const startTime = convertTimeStamp(bus.startTime)
    const endTime = convertTimeStamp(bus.endTime)
    const duration = convertDuration(bus.duration)
    const lineNumber = bus.legs[1].route.shortName
    return (
        <div
            className='uk-card uk-card-default uk-flex uk-flex-column'
        >
            <div className='uk-card-header uk-text-center'>
                <h4 className='uk-text-bold'>Bus {lineNumber}</h4>
            </div>
            <div className='uk-card-body uk-flex-1'>
                <div className='uk-flex uk-flex-middle uk-flex-center'>
                    <span
                        style={{
                            fontSize: '4rem',
                            fontWeight: '200',
                            lineHeight: '1em'
                        }}
                    >
                        {startTime}
                    </span>
                </div>
                <div className='uk-text-small uk-text-center uk-text-muted'>
                    Leave
                </div>
            </div>
            <div className='uk-card-footer'>
                <div className='uk-card-body uk-flex-1'>
                    <div className='uk-flex uk-flex-middle uk-flex-center'>
                        <span
                            style={{
                                fontSize: '4rem',
                                fontWeight: '200',
                                lineHeight: '1em'
                            }}
                        >
                            {endTime}
                        </span>
                    </div>
                    <div className='uk-text-small uk-text-center uk-text-muted'>
                        Arrival
                    </div>
                </div>
            </div>
            <div className='uk-card-footer'>
                <div className='uk-card-body uk-flex-1'>
                    <div className='uk-flex uk-flex-middle uk-flex-center'>
                        <span
                            style={{
                                fontSize: '4rem',
                                fontWeight: '200',
                                lineHeight: '1em'
                            }}
                        >
                            {duration} min
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bus
