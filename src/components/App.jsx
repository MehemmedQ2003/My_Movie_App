import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: ""
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:5174/movies");
    this.setState({ movies: response.data })
  }

  // ! ***************** Fetch Api delete ***************** \\
  // deleteMovie = async (movie) => {

  //   const baseUrl = `http://localhost:5174/movies/${movie.id}`;
  //   await fetch(baseUrl, {
  //     method: "DELETE"
  //   })

  //   const newMovieList = this.state.movies.filter(
  //     m => m.id !== movie.id
  //   )

  //   this.setState({
  //     movies: newMovieList
  //   })
  // }

  // ! ***************** Axios delete ***************** \\
  deleteMovie = async (movie) => {

    axios.delete(`http://localhost:5174/movies/${movie.id}`);

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
      return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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