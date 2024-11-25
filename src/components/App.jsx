import React from "react";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import axios from "axios";
import {  Route, Routes } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: ""
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:5174/movies");
    this.setState({ movies: response.data })
  }

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
          <Routes>
            <Route path="/add" element={<AddMovie />}></Route>
            <Route exact path="/" element={
                <React.Fragment>
                <div className="row px-5">
                  <div className="col-lg-12 px-5">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div> 
                </div>
                <MovieList movies={filteredMovie} deleteMovieProp={this.deleteMovie} />
              </React.Fragment>
            }>
            </Route>
          </Routes>
        </div>
    )
  }
};

export default App;