import React, { Component } from 'react';

class CreationForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.item)
            return this.renderMainCategories();
        if(this.props.item === "Durschnittstemperatur")
            return this.renderTemperature();
    }
    renderMainCategories() {
        return (
            <div>
                <select defaultValue="" onChange={() => this.submitChanges("categories")}>
                    <option value="" disabled>Auswahl</option>
                    <option value="zahlungseingang">Zahlungseingang</option>
                    <option value="kontostandt">Kontostand</option>
                    <option value="temperatur">Durchschnittstemperatur</option>
                    <option value="ausgaben">Ausgaben</option>
                    <option value="kaufverhalten">Kaufverhalten</option>
                </select>
            </div>
        )
    }

    renderTemperature() {
        return (
            <div>
                <select defaultValue="">
                    <option value="" disabled>Vergleich</option>
                    <option value="Niedriger als">Niedriger als</option>
                    <option value="Höher als">Höher als</option>
                </select>
                <input style={{textAlign: 'right'}}size="2" type="text"></input>
                <span>°C</span>
                <button onClick={() => this.submitChanges("temperatur")}>OK</button>
            </div>
        )
    }

    selectionChanged(event) {
        this.props.onSelected(event.target.value);
    }

    submitChanges(value) {
        this.props.onSubmit(value);
    }

}

export default CreationForm;