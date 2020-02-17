import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import uuid from "uuid/v4";
import "./JokeList.css";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      jokes: JSON.parse(localStorage.getItem("jokes")) || [],
      isLoading: false
    };
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    const JOKES_URL = "https://icanhazdadjoke.com/";
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const res = await axios.get(JOKES_URL, {
        headers: { Accept: "application/json" }
      });
      jokes.push({ joke: res.data.joke, votes: 0, id: uuid() });
    }
    this.setState(st => ({
      jokes: [...st.jokes, ...jokes]
    }));
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
    console.log(this.state.jokes);
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      )
    }));
  }

  render() {
    const jokeList = this.state.jokes.map(joke => (
      <Joke
        key={joke.id}
        joke={joke.joke}
        votes={joke.votes}
        upVote={() => this.handleVote(joke.id, 1)}
        downVote={() => this.handleVote(joke.id, -1)}
      />
    ));
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/preview/8927/small_1x_d07b14ae-d290-4913-83e1-01f345289349.png"
            alt="emoji"
          />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-jokes">{jokeList}</div>
      </div>
    );
  }
}

export default JokeList;
