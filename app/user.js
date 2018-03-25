import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
        <div>
        <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-3">
                <img className="img-fluid mb-2" src="https://avatars0.githubusercontent.com/u/17115534?v=4" />
                <a href="" target="_blank" className="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary mb-3"> Public Repos: </span>
                <span class="badge badge-secondary mb-3"> Public Gists:</span>
                <span class="badge badge-success mb-3"> Followers:</span>
                <span class="badge badge-info mb-3"> Following: </span>
                <br/><br/>
                <ul class="list-group">
                    <li class="list-group-item">Company: </li>
                    <li class="list-group-item">Website/Blog: </li>
                    <li class="list-group-item">Location: </li>
                    <li class="list-group-item">Member Since:</li>
                </ul>
            </div> 
        </div>
    </div>
    </div>
        )
    }
}

export default User;