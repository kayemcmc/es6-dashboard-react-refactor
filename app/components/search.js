import React, {Component} from 'react';

//getUsers

class Search extends Component {
    submitForm(e) {
        e.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value = '';
    }
    render() {
        return (
            <div>
            <div className="search card card-body"><h1>Search Github Users</h1>
            <p className="lead">Fetch a user profile and repos</p>
                <form onSubmit={this.submitForm.bind(this)}>
                <input 
                    type="search"
                    ref="username"
                    className="form-control" 
                    placeholder="Github Username"
                />   </form>
            </div>
        </div>
        )
    }
}

export default Search;