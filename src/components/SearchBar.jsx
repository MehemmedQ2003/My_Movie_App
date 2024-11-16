import React from "react";

class SearchBar extends React.Component {
  state = {
    searchQuery: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5 mt-3">
          <div className="col-lg-12">
            <input
              onChange={(event) => this.setState({searchQuery: event.target.value})}
              value={this.state.searchQuery}
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
