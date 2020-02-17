import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      jokes: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    const JOKES_URL = "https://icanhazdadjoke.com/";
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      const res = await axios.get(JOKES_URL, {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
    }
    if (jokes.length !== 10) {
      console.log("1", jokes.length);
      console.log(this.state.isLoading);
      this.setState((prevProps, prevState) => ({
        isLoading: !prevState.isLoading
      }));
    } else {
      console.log("2", jokes.length);
      this.setState(st => ({
        jokes: [...st.jokes, ...jokes]
      }));
    }
    console.log(jokes);
  }
  render() {
    const jokeList = this.state.jokes.map(joke => (
      <Joke key={joke} joke={joke} />
    ));
    return (
      <div className="JokeList">
        {this.state.isLoading ? (
          <div>
            <h5>Loading...</h5>
          </div>
        ) : (
          <div>
            <h1>Dad Jokes</h1>
            <div className="JokeList-jokes">{jokeList}</div>
          </div>
        )}
      </div>
    );
  }
}

export default JokeList;
