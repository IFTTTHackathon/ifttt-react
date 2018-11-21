import React, { Component } from 'react';
import CreationForm from '../Components/CreationForm.js';
import Sentence from '../Components/Sentence.js';
import SubmitButton from '../Components/SubmitButton.js';

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
            complete: false,
            text: "Wenn ##, Dann ##"
        };
    }

    render() {
        const inputComp = this.state.complete ? 
                          '' : <CreationForm stage={this.state.stage} onSubmit={this.onSubmit.bind(this)}/>;
        return (
            <div>
                {inputComp}
                <Sentence text={this.state.text} conditions={this.state.conditions}/>
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

    onSubmit(value) {
        var text = "";
        var nextStage = "";
        switch(value) {
            case "categories":
                text = "Wenn die Temperatur ## als ##°C, dann ##";
                nextStage = "temperature";
                break;
            case "temperature":
                text = "Wenn die Temperatur höher als 25°C, dann ##";
                nextStage = "action";
                break;
            case "mainAction":
                text = "Wenn die Temperatur höher als 25°C, dann investiere ##€";
                nextStage = "actionValue";
                break;
            case "actionValue":
                text = "Wenn die Temperatur höher als 25°C, dann investiere 50€";
                // nextStage = "actionValue";
                break;
        }
        this.setState({
            text: text,
            stage: nextStage
        });
    }
}

export default CreateScreen;