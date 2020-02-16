import React from 'react'
import { convertTimeStamp, convertDuration } from '../utils/convertTimes'

const Bicycle = ({ bicycle }) => {
    const startTime = convertTimeStamp(bicycle.startTime)
    const endTime = convertTimeStamp(bicycle.endTime)
    const duration = convertDuration(bicycle.duration)
    return (
        <div className='uk-animation-slide-bottom-small'>
            <div
                className='uk-card uk-card-default uk-flex uk-flex-column'
            >
                <div className='uk-card-header uk-text-center'>
                    <h4 className='uk-text-bold'>Bicycle</h4>
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
        </div>
    )
}

export default Bicycle
