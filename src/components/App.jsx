import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery:""
  };

  async componentDidMount(){
    const baseUrl = "http://localhost:5174/movies";
    const response = await fetch(baseUrl);
    console.log(response);
    const data = await response.json();
    console.log(data)
    this.setState({movies: data})
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )

    this.setState(state => ({
      movies: newMovieList
    }))
  }

  searchMovie = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  render(){
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