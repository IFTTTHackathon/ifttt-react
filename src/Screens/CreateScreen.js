import React, { Component } from 'react';
import CreationForm from '../Components/CreationForm.js';
import Sentence from '../Components/Sentence.js';

class CreateScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formShown: true
        };
    }

    render() {
        return (
            <div>
                <Sentence onGapClicked={this.onGapCliked}/>
                <CreationForm />
            </div>
        );
    }

    onGapClicked() {
        
    }
}

export default CreateScreen;