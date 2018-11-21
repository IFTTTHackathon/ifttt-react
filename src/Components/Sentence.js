import React, { Component } from 'react';

class Sentence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: ["condition1", "NULL"],
            action: []
        };
    }
    render() {
        const conditionComponents = this.state.condition.map(item => 
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
        if(item !== "NULL")
            return (<span key={item}>{item} </span>);
        return <pre onClick={this.props.onGapClicked} style={{display: 'inline', backgroundColor: '#aaa', border: '2px solid #333', cursor: 'pointer'}} key="gap">       </pre>;
    }
}

export default Sentence;