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
      },
      {
        id: 4,
        name: "Fetih 1453",
        rating: 8.5,
        overview: "A historical film about the conquest of Constantinople by Sultan Mehmed II.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/az/e/eb/F%C9%99th_1453_%28film%2C_2012%29.jpg",
      },
      {
        id: 5,
        name: "Alparslan Great Seljuks",
        rating: 9.2,
        overview: "A classic film depicting the life and times of Prophet Muhammad (s.a.s).",
        imageUrl: "https://m.media-amazon.com/images/I/71qMA0YsRwL.jpg",
      },
      {
        id: 6,
        name: "Ertugrul",
        rating: 9.7,
        overview: "A popular series about the life of Ertuğrul Bey, the father of Osman I, founder of the Ottoman Empire.",
        imageUrl: "https://m.media-amazon.com/images/I/61aiMK0teML._UF1000,1000_QL80_.jpg",
      }      
    ],

    searchQuery:""
  };

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