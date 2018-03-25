import React, {Component} from 'react';
import Header from './header';
import Search from './search';
import User from './user';


const API = 'https://api.github.com/users'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            avatar: '',
            repos:'',
            company: '',
            followers: '',
            following: '',
            homeUrl: '',
            blog: '',
            location: '',
            notFound: '',
            publicRepos: '',
            publicGists: '',
        };
    }
    componentWillMount() {
        this.getUsers();
    }

    getUsers(username) {
        let finalURL = `${API}/${username}`;

        fetch(finalURL)
        .then((res) => res.json())
        .then((data)=> {
            this.setState({
                username: data.login,
                avatar: data.avatar_url,
                homeUrl: data.html_url,
                company: data.company,
                blog: data.blog,
                location: data.location,
                publicRepos: data.public_repos,
                publicGists: data.public_gists,
                followers: data.followers,
                following: data.following
            }, () => {
                console.log(this.state);
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getUsers(this.state.username);
    }

    render() {
       return (
           <div>
            <Header children="Github Search React Refactor"/>
            <div className="container">
            <Search searchProfile={this.getUsers.bind(this)}/>
            <User userData={this.state}/>
            </div>
          
           </div>
       )
    }
}

export default App;