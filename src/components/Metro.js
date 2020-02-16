import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Metro = ({ metro }) => {
    const startTime = convertTimeStamp(metro.startTime)
    const endTime = convertTimeStamp(metro.endTime)
    const duration = convertDuration(metro.duration)
    return (
        <div
            className='uk-card uk-card-default uk-flex uk-flex-column'
        >
            <div className='uk-card-header uk-text-center'>
                <h4 className='uk-text-bold'>Metro</h4>
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

export default Metro
