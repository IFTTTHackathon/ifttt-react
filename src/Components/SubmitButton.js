import React, { Component } from 'react';
import axios from 'axios';

//Dieser Button wird angezeigt, wenn complete in CreateScreen.js true ist (Zeile 22 auf true setzen)
var submitRequest = function (e) {
    console.log(e);
    console.log('abcdef');

    axios.get('https://rest.ifttt.bnjmnrtl.com/hackrest/trigger?temp=50')
    .then(response => console.log(response));

    e.preventDefault();
    e.stopPropagation();
};

var SubmitButton = function (e) {
    return (
        <button onClick={submitRequest}>WennDann erstellen</button>
    );
};

export default SubmitButton;