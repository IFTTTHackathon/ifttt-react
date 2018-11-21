import React, { Component } from 'react';

class Sentence extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        const conditionComponents = this.props.conditions.map(item => 
            this.textFor(item)
        );
        
        return (
            <div>
                <span style={{fontWeight: 'bold'}}>Wenn </span>
                {conditionComponents}
                <span style={{fontWeight: 'bold'}}>Dann</span>
            </div>
        )
    }

    textFor(item) {
        if(item.answer || item.text) {
            const text = item.text ? item.text : item.answer;
            return (<span key={item}>{text} </span>);
        }
        return <div style={{display: 'inline-block', backgroundColor: '#aaa', border: '2px solid #333', cursor: 'pointer', width: '80px', height: '20px', verticalAlign: 'middle'}} key="gap"></div>;
    }
}

export default Sentence;