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
        <section className='uk-section uk-section-muted '>
            <div className='uk-container uk-container-small'>
                <header className='uk-text-center'>
                    <h1 className='uk-heading-primary'>Eficode</h1>
                    <p className='uk-width-3-5 uk-margin-auto'>
                        Don´t be late!
                    </p>
                </header>
                <div
                    className='uk-grid uk-grid-small uk-child-width-1-3@m uk-margin-medium-top uk-grid-match'
                    data-uk-grid
                >
                    <Bicycle bicycle={data.Bicycle.itineraries[0]} />
                    <Metros metros={data.Metros} />
                    <Busses busses={data.Busses} />
                </div>
            </div>
        </section>
    )
}
export default App
