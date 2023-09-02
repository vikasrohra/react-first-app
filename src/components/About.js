import React, { Component } from 'react';
import Profile from './Profile';
import ProfileClass from './ProfileClass';

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
                <p>Description</p>
                <ProfileClass name={'First'} />       
            </div>
        )
    }
}

export default About