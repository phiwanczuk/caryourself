import React from 'react'

class Cars extends React.Component{

    state = {
        cars: null,
    }
    componentDidMount(){
        fetch(
            `${process.env.PUBLIC_URL}/MOCK_DATA.json`
        )
}
    render(){
        return(
                <div>Siema</div>
        );
    }
}
export default Cars