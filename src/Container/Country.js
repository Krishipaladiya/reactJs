import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            CountryName :'India'
        }
    }
    changeCountry = () => {
        this.setState({
            CountryName :'USA'
        })
    }
    
    render() {
        return (
            <div>
                <p>{ this.state.CountryName}</p>
                <button onClick={() =>this.changeCountry()}>changeCountry</button>
            </div>
        );
    }
}

export default Country;