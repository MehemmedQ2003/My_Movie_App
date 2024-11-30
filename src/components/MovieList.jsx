const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img src={movie.imageUrl} className="card-img-top" style={{height: "450px"}} alt="movie 1"/>
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text text-muted">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" onClick={() => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                <h2><span className="badge badge-primary bg-primary">{movie.rating}</span></h2>
              </div>
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}

export default MovieList
