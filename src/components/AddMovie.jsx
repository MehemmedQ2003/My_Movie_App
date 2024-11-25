import React from "react";

class AddMovie extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="mt-5">
                    <input className="form-control" id="disableInput" type="text" placeholder="Fill the for add the movie..." disabled/>
                    <div className="row my-3">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input type="text" className="form-control" name="rating"/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputİmage">Image URL</label>
                            <input type="text" className="form-control" name="imageURL"/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea className="form-control" name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger w-100 mb-5" value="Add movie"/>
                </form>
            </div>
        );
    }
}

export default AddMovie;

