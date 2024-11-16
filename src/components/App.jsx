import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Peygamber(s.a.s)",
        rating: 10,
        overview: "This film was very well received in the Islamic community",
        imageUrl: "https://www.hdfilmizle.to/v/15122/poster/watch/hz-muhammed-allahin-elcisi.jpg",
      },
      {
        id: 2,
        name: "Hz Omer",
        rating: 9.5,
        overview: "This film was very well received in the Islamic community",
        imageUrl: "https://upload.wikimedia.org/wikipedia/tr/d/d2/Omar_%28TV_Series%29.jpg",
      },
      {
        id: 3,
        name: "Caghri",
        rating: 9,
        overview: "This film was very well received in the Islamic community",
        imageUrl: "https://tr.web.img3.acsta.net/pictures/22/03/16/14/34/3489890.jpg",
      }
    ]
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )

    this.setState(state => ({
      movies: newMovieList
    }))
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>
        <MovieList 
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    )
  }
};

export default App;