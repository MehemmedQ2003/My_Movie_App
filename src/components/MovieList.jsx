const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className="card-img-top" alt="movie 1"/>
            <div className="card-body">
              <h5 className="card-title">
                {movie.title.length > 20 ? `${movie.title.substring(0, 24)}...` : movie.title}
              </h5>
              <p className="card-text">
                {movie.overview.length > 50 ? `${movie.overview.substring(0, 50)}...` : movie.overview}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button onClick={() => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                <h2><span className="badge badge-primary bg-primary">{movie.vote_average}</span></h2>
              </div>
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}

export default MovieList
