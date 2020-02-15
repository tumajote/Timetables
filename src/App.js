import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import homeToEficode from './queries/homeToEficode'
import Metros from './components/Metros'
import Busses from './components/Busses'
import Bicycle from './components/Bicycle'

const App = () => {
    const { loading, error, data } = useQuery(homeToEficode, {
        pollInterval: 60000
    })

    if (loading) return null
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <Metros metros={data.Metros} />
            <Busses busses={data.Busses} />
            <Bicycle bicycle={data.Bicycle.itineraries[0]} />
        </div>
    )
}
export default App
