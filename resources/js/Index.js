import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/NameList';
import axios from './data/axios';

class Index extends Component {
    request () {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: 'john@doe.com',
                password: 'password'
            }).then(response2 => {
                console.log(response2)
            })
        })
    }

    goToDashboard () {
        axios.get('/api/user').then(response => {
            console.log(response);
        }).catch(error => {
            console.log('there was an error');
        })
    }

    logOut () {
        axios.post('/logout');
    }

    render () {
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={this.request}>Login</button>
                <button type="button" className="btn btn-primary" onClick={this.goToDashboard}>Dashboard</button>
                <button type="button" className="btn btn-primary" onClick={this.logOut}>Logout</button>
                <NameList />
            </div>
        );
    }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('index'));