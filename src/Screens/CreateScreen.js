import React, { Component } from 'react';
import CreationForm from '../Components/CreationForm.js';
import Sentence from '../Components/Sentence.js';
import SubmitButton from '../Components/SubmitButton.js';
import axios from 'axios';

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

        var self = this;
        this.state.interval = setInterval(function(){
            if (self.state.complete === false) {
                return;
            }

            axios.get('https://rest.ifttt.bnjmnrtl.com/hackrest/trigger?temp=28')
                .then(function (response) {
                    if (response.data.trigger === true) {
                        return;
                    }

                    var addValue = 50;

                    var delay = 50, count = 0;
                    function delayed () {
                        count += 1;

                        var newValue = document.getElementById('saved-amount').innerText;
                        var intValue = parseInt(newValue) + 1;
                        var formattedValue = ('000000000' + intValue).substr(-3);
                        document.getElementById('saved-amount').innerText = formattedValue;

                        var newBankValue = document.getElementById('bank-amount').innerText;
                        var intBankValue = parseInt(newBankValue) - 1;
                        var formattedBankValue = ('000000000' + intBankValue).substr(-3);
                        document.getElementById('bank-amount').innerText = formattedBankValue;

                        if (count < addValue) {
                            setTimeout(delayed, delay);
                        } else {
                            clearInterval(self.state.interval);
                        }
                    }
                    delayed();
                });
        }, 5000);

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
                text = "Wenn die Temperatur höher als 28°C, dann ##";
                nextStage = "action";
                break;
            case "mainAction":
                text = "Wenn die Temperatur höher als 28°C, dann spare ##€";
                nextStage = "actionValue";
                break;
            case "actionValue":
                text = "";
                nextStage = "completeSentence";
                this.setState({
                    complete: true
                });
                this.showWennDannBox();
                break;
        }
        this.setState({
            text: text,
            stage: nextStage
        });
    }

    showWennDannBox() {
        var wennDannTempBox = document.getElementsByClassName("wenn-dann-temp");
        wennDannTempBox[0].style = 'display: block; background-color: beige; height: 113px;';

        setTimeout(function(){
            wennDannTempBox[0].style = 'display: block; background-color: transparent; height: 113px;';
        }, 4000);
    }
}

export default CreateScreen;