import React, { Component } from 'react';

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
                <select defaultValue="">
                    <option value="" disabled>Vergleich</option>
                    <option value="Niedriger als">Niedriger als</option>
                    <option value="Höher als">Höher als</option>
                </select>
                <input style={{textAlign: 'right'}} size="2" type="text"></input>
                <span>°C</span>
                <button style={{marginLeft: '5px'}} onClick={() => this.submitChanges("temperature")}>OK</button>
            </div>
        );
    }

    renderMainAction() {
        return (
            <div>
                <select defaultValue="" onChange={() => this.submitChanges("mainAction")}>
                    <option value="" disabled>Auswahl</option>
                    <option value="ueberweise">Überweise</option>
                    <option value="investiere">Investiere</option>
                    <option value="kontostand">Benachrichtige</option>
                </select>
            </div>
        );
    }

    renderActionValue() {
        return (
            <div>
                <select value="investiere">
                    <option value="investiere">Investiere</option>
                </select>
                <input style={{textAlign: 'right'}} size="2" type="text"></input>
                <span>EUR</span>
                <button onClick={() => this.submitChanges("actionValue")}>OK</button>
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