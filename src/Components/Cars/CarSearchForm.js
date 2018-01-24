import React from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Modal,
    FormGroup
} from 'react-bootstrap'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

class CarSearchForm extends React.Component {

    state = {

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
    componentDidMount() {
        fetch(
            `${process.env.PUBLIC_URL}/MOCK_DATA.json`
        ).then(
            response => response.json()
        ).then(
            cars => this.setState({cars})
        );
        var {id, valueCapacity, valueFuel, valueSpeed} = cars;
    }


    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        return (
            <form>
                <h2>Wybierz auto</h2>
                <InputGroup>
                    <FormControl
                    onChange={this.props.handleChange}
                    type="text"
                    />

                </InputGroup>
                <InputRange
                    minValue={250}
                    maxValue={800}
                    value={this.state.valueCapacity}
                    onChange={valueCapacity => this.setState({valueCapacity})}
                />
            </form>

        );

    }
}

export default CarSearchForm;