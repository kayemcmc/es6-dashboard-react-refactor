import React, {Component} from 'react';
//userData

class User extends Component {
    render(){
        return (
        <div>
        <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-3">
                <img className="img-fluid mb-2" src={this.props.userData.avatar} />
                <a href={this.props.userData.homeUrl} target="_blank" className="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div className="col-md-9">
                <span className="badge badge-primary mb-3 mr-2 p-2"> Public Repos: {this.props.userData.publicRepos} </span>
                <span className="badge badge-secondary mb-3 mr-2 p-2"> Public Gists: {this.props.userData.publicGists}</span>
                <span className="badge badge-success mb-3 mr-2 p-2"> Followers: {this.props.userData.followers}</span>
                <span className="badge badge-info mb-3 mr-2 p-2"> Following: {this.props.userData.following}</span>
                <br/><br/>
                <ul className="list-group">
                    <li className="list-group-item">Company:{this.props.userData.company} </li>
                    <li className="list-group-item">Website/Blog: {this.props.userData.blog}</li>
                    <li className="list-group-item">Location: {this.props.userData.location} </li>
                    <li className="list-group-item">Member Since:</li>
                </ul>
            </div> 
        </div>
    </div>
    </div>
        )
    }
}

export default User;