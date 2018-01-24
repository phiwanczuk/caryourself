import React from 'react'
import CarSearchForm from './CarSearchForm'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'


class CarsView extends React.Component {


    state = {
        currentSearchPhrase: '',
        valueCapacity: {
            min: 250,
            max: 800
        },
        valueFuel: {
            min: 4,
            max: 15
        },
        valueSpeed: {
            min: 150,
            max: 240
        }

    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {
        const {cars} = this.props

        return (
            <div>
                <h1>Test</h1>
                <CarSearchForm
                    searchPhrase={this.state.currentSearchPhrase}
                    handleChange={this.handleSearchPhraseChange}
                />
                <ul>
                    {
                        cars && cars.filter(
                            cars => cars.name.toLowerCase().includes(this.state.currentSearchPhrase)
                        ).map(
                            ({id, name, fuel_consumption, capacity, max_speed}, index) => (
                                    <li key={id}>{name} {fuel_consumption} {capacity} {max_speed}</li>
                                )
                            )
                    }

                </ul>
                <InputRange
                    minValue={250}
                    maxValue={800}
                    value={this.state.valueCapacity}
                    onChange={valueCapacity => this.setState({valueCapacity})}
                />
            </div>



        )
    }
}


export default CarsView