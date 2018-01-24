import React from 'react'
import CarSearchForm from './CarSearchForm'



class CarsView extends React.Component {

     state={
          currentSearchPhrase: '',
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
            </div>



        )
    }
}


export default CarsView