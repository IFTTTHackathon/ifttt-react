import React, { Component } from 'react';
import CreationForm from '../Components/CreationForm.js';
import Sentence from '../Components/Sentence.js';

class CreateScreen extends Component {
    constructor(props) {
        super(props);

        const conditions = [
            {
                options: ["Zahlungseingang", "Kontostand", "Temperatur", "Montsausgaben"],
                answer: null,
                text: null,
                addedText: {Durchschnittstemperatur: 'die monatliche Durchschnittstemperatur'},                
            }
        ];

        this.state = {
            formShown: true,
            conditions: conditions,
            complete: false
        };
    }

    render() {
        const inputComp = this.state.complete ? 
                          (<button>OK</button>) : <CreationForm options={this.nextUnanswered().options} onSelected={this.onSelected.bind(this)}/>;
        return (
            <div>
                <Sentence conditions={this.state.conditions}/>
                {inputComp}
            </div>
        );
    }

    onSelected(value) {
        var currentConditions = this.state.conditions;
        var answered = this.nextUnanswered();
        answered.answer = value;
        answered.text = answered.addedText[value];
        
        this.setState({
            conditions: currentConditions
        });

        const complete = this.state.conditions.filter(cond => !cond.answer).length < 1;
        this.setState({complete: complete});
    }

    nextUnanswered() {
        const unanswered = this.state.conditions.filter(cond => !cond.answer);
        return unanswered ? unanswered[0] : null;
    }
}

export default CreateScreen;