import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {   
    // handleVote() {
    //     this.props.handleVote(this.props.id, 1);
    // } 
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up" onClick={() => this.props.handleVote(this.props.id, 1)}></i>
                    <span>{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={() => this.props.handleVote(this.props.id, -1)}></i>
                </div>
                <div className="Joke-text">
                    {this.props.joke}
                </div>
            </div>
        );
    }
}

export default Joke;