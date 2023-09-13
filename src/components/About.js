import React, { Component } from 'react';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
import UserContext from '../utils/UserContext';

class About extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => {
    }

    render () {
        return (
            <div>
                <h1>About Us</h1>
                <UserContext.Consumer>
                    {({user}) => (<h1>{`${user.name} - ${user.email}`}</h1>)}
                </UserContext.Consumer>
                <p>Description</p>
                <ProfileClass name={'First'} />       
            </div>
        )
    }
}

export default About