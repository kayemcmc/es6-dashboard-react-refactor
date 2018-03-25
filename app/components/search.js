import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
            <div className="search card card-body"><h1>Search Github Users</h1>
            <p className="lead">Fetch a user profile and repos</p>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Github Username"
                />   
            </div>
        </div>
        )
    }
}

export default Search;