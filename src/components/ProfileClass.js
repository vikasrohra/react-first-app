import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }

        console.log(this.props.name + " Child - Constructor");
    }

    componentDidMount = async () => {
        // const data = await fetch("https://api.github.com/users/vikasrohra");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo: json
        // });
        // console.log(this.props.name + " Child - componentDidMount");
        this.timer = setInterval(() => {
            console.log("Hello");
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            // some code
        }
        else {
            // some code
        }
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render () {
        console.log(this.props.name + " Child - Render");
        const {count} = this.state;
        return (
            <>
                <h1>Class Component Profile</h1>
                <h2>{this.state.userInfo.name}</h2>
                <p>{this.state.userInfo.location}</p>
                <img src={this.state.userInfo.avatar_url}></img>
            </>
        )
    }
}

export default Profile;