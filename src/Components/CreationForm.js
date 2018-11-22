import React, { Component } from 'react';
import AppStyles from '../AppStyles';

class CreationForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.stage);

        if(this.props.stage === "temperature")
            return this.renderTemperature();
        if(this.props.stage === "action")
            return this.renderMainAction();
        if(this.props.stage === "actionValue")
            return this.renderActionValue();

        return this.renderMainCategories();
    }
    renderMainCategories() {
        return (
            <div>
                <select defaultValue="" onChange={() => this.submitChanges("categories")}>
                    <option value="" disabled>Auswahl</option>
                    <option value="zahlungseingang">Zahlungseingang</option>
                    <option value="kontostand">Kontostand</option>
                    <option value="temperatur">Temperatur</option>
                    <option value="ausgaben">Ausgaben</option>
                    <option value="kaufverhalten">Kaufverhalten</option>
                </select>
            </div>
        );
    }

    renderTemperature() {
        return (
            <div>
                <select value="temperatur" defaultValue="temperatur">
                    <option value="temperatur">Temperatur</option>
                </select>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <select defaultValue="">
                    <option value="" disabled>Vergleich</option>
                    <option value="Niedriger als">Niedriger als</option>
                    <option value="Höher als">Höher als</option>
                </select>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <input style={{textAlign: 'right'}} size="2" type="text"></input>
                <span>°C</span>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <button style={AppStyles.button} onClick={() => this.submitChanges("temperature")}>OK</button>
            </div>
        );
    }

    renderMainAction() {
        return (
            <div>
                <select defaultValue="" onChange={() => this.submitChanges("mainAction")}>
                    <option value="" disabled>Auswahl</option>
                    <option value="ueberweise">Überweise</option>
                    <option value="sparen">Spare</option>
                    <option value="kontostand">Benachrichtige</option>
                </select>
            </div>
        );
    }

    renderActionValue() {
        return (
            <div>
                <select value="spare">
                    <option value="spare">Spare</option>
                </select>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <input style={{textAlign: 'right'}} size="2" type="text"></input>
                <span>EUR</span>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <button style={AppStyles.button} onClick={() => this.submitChanges("actionValue")}>OK</button>
            </div>
        );
    }

    selectionChanged(event) {
        this.props.onSelected(event.target.value);
    }

    submitChanges(value) {
        this.props.onSubmit(value);
    }

}

export default CreationForm;