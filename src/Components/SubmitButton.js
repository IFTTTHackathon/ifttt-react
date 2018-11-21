import React, { Component } from 'react';

var submitRequest = function (text) {
    //TODO : Hier kann ein Backend Request passieren
    //text beinhaltet den fertigen Satz (im Backend "parsen" ... ist ja hardcoded)
    //axios muss evtl oben importiert werden

    //Beispiel
    /*axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))*/
};

var SubmitButton = function (props) {
    return (
        <button onClick={() => submitRequest(props.text)}>WennDann erstellen</button>
    );
};

export default SubmitButton;