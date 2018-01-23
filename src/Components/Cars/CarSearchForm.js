import React from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Modal,
    FormGroup
} from 'react-bootstrap'

class CarSearchForm extends React.Component {

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
            </form>

        );

    }
}

export default CarSearchForm;