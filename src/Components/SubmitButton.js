import React from 'react';
import axios from 'axios';
import AppStyles from '../AppStyles';

//Dieser Button wird angezeigt, wenn complete in CreateScreen.js true ist (Zeile 22 auf true setzen)
var submitRequest = function (e) {
    var data = {
        targetTemperature: 25,
        amount: 50,
        sourceIban: "DE08 9999 9910 0000 1234 56",
        targetIban: "DE02 9999 9910 0198 1369 39",
    };

    axios.post('https://rest.ifttt.bnjmnrtl.com/hackrest/newIfttt', data)
    .then(response => console.log(response));

    e.preventDefault();
    e.stopPropagation();
};

var SubmitButton = function (e) {
    return (
        <button style={AppStyles.button} onClick={submitRequest}>WennDann erstellen</button>
    );
};

export default SubmitButton;