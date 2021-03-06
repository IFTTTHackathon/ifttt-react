import React, { Component } from 'react';

class Sentence extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        const conditionComponents = this.props.conditions.map(item => 
            this.textFor(item)
        );
        const segments = this.props.text.split('##');
        var segmentViews = [];
        var borderStyle = '2px solid red';
        for(var i = 0; i < segments.length; i++) {
            segmentViews.push(<span style={{fontWeight: 'normal'}}>{segments[i]}</span>);
            if(i < segments.length - 1 ) {
                segmentViews.push(
                <div 
                    style={{
                        display: 'inline-block', 
                        backgroundColor: '#fff', 
                        border: borderStyle,
                        cursor: 'pointer', 
                        width: '100px', 
                        height: '25px', 
                        verticalAlign: 'center',
                        borderRadius: '5px',
                        boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
                        marginRight: '5px'
                    }}>
                </div>);
            }
        }
        
        return (
            <div style={{marginTop: '20px', fontSize: '1.5em'}}>
                {segmentViews}
            </div>
        );
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