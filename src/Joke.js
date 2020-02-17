import React, { Component } from 'react';

class Joke extends Component {    
    render() {
        return (
            <div>
                <h2>{this.props.joke}</h2>
            </div>
        );
    }
}

export default Joke;