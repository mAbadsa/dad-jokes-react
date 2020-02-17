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
                    <i className="fas fa-arrow-up" onClick={this.props.upVote}></i>
                    <span className="Joke-votes">{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
                </div>
                <div className="Joke-text">
                    {this.props.joke}
                </div>
                <div className="Joke-smiley">
                    <i className="em em-rolling_on_the_floor_laughing"></i>
                </div>
            </div>
        );
    }
}

export default Joke;