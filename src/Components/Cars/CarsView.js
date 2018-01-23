import React from 'react'

class CarsView extends React.Component {

    render() {
        const { cars } = this.props

        return (
            <div>
                <h1>Test</h1>
                <ul>
                    {
                        this.props.cars && cars.map(
                            ({id, name, fuel_consumption, capacity, max_speed}) => (
                                <li key={id}>{name}</li>
                            )
                        )
                    }

                </ul>
            </div>
        )
    }
}


        export default CarsView