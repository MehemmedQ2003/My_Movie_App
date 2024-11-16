import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row my-3">
          <div className="col-lg-12">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              placeholder="Search movie"
              className="form-control"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
