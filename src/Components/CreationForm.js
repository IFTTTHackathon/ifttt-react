import React, { Component } from 'react';

class CreationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainSelected: null
        };
    }
    render() {
        return (
            <div>
                <select onChange={this.mainChanged.bind(this)}>
                    <option value="zahlungseingang">Zahlungseingang</option>
                    <option value="kontostand">Kontostand</option>
                </select>
            </div>
        );
    }

    mainChanged(event) {
        this.setState({
            mainSelected: event.target.value
        });        
    }

}

export default CreationForm;