import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
// require('dotenv').config();

// console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: ""
  };

  async componentDidMount() {
    const response = await axios.get("https://api.themoviedb.org/3/list/8498687?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US");
    console.log(response.data.items)
    this.setState({ movies: response.data.items })
  }

  deleteMovie = async (movie) => {

    axios.post(`https://api.themoviedb.org/3/list/8498687/remove_item?media_id=${movie.id}&session_id=4e9ff43b10cc4aef878a0ba95d9fcf9b80a335d1&api_key=274c12e6e2e4f9ca265a01d107280eba`); 

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )

    this.setState({
      movies: newMovieList
    })
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    let filteredMovie = this.state.movies.filter((movie) => {
      return movie.title && movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
    })
    return (
      <div className="container">
        <div className="row px-5">
          <div className="col-lg-12 px-5">
            <SearchBar
              searchMovieProp={this.searchMovie}
            />
          </div>
          <div className="col-lg-12 px-5">
            <MovieList
              movies={filteredMovie}
              deleteMovieProp={this.deleteMovie}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;