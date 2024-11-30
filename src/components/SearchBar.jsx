import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="row my-3 d-flex">
          <div className="col-lg-10 col-md-10 col-sm-12 my-2">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              placeholder="Search movie"
              className="form-control w-100"
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 my-2">
            <Link to="/add" type="button" className="btn btn-md btn-danger w-100" style={{float: "right"}}>
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
