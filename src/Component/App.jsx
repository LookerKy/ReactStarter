import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "../styles/styleIndex";

class App extends Component {
  state = {};
  API_URL = `https://yts.am/api/v2/list_movies.json`;
  componentDidMount() {
    this._getMovieToAxios();
  }

  // _getMovie = async () => {
  //   const movies = await this._callApiWithAxios();
  //   this.setState({ movies });
  // };

  _getMovieToAxios = async () => {
    const movies = await this._callApiWithAxios();
    this.setState({ movies });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(movieData => {
        return movieData.json();
      })
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _callApiWithAxios = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios(this.API_URL, {
      params: {
        sort_by: "download_count"
      }
    });
    return movies;
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={`#${index + 1} ${movie.title_english}`}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          rating={movie.rating}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
