import { gql } from 'apollo-boost'

const homeToEficode = gql`
    {
        Metros: plan(
            from: { lat: 60.159581, lon: 24.858888 }
            to: { lat: 60.169407, lon: 24.925844 }
            numItineraries: 1
            transportModes: [{ mode: WALK }, { mode: SUBWAY }]
        ) {
            itineraries {
                startTime
                duration
                endTime
                walkDistance
            }
        }

        Busses: plan(
            from: { lat: 60.159581, lon: 24.858888 }
            to: { lat: 60.169407, lon: 24.925844 }
            numItineraries: 1
            transportModes: [{ mode: WALK }, { mode: BUS }]
        ) {
            itineraries {
                startTime
                duration
                endTime
                walkDistance
                legs {
                    route {
                        shortName
                    }
                }
            }
        }
        Bicycle: plan(
            from: { lat: 60.159581, lon: 24.858888 }
            to: { lat: 60.169407, lon: 24.925844 }
            numItineraries: 1
            transportModes: [{ mode: BICYCLE }]
        ) {
            itineraries {
                startTime
                duration
                endTime
            }
        }
    }
`

export default homeToEficode
