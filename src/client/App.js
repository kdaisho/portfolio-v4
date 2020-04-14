import React, { Component } from "react";

class App extends Component {
    state = {
        username: "",
        greeting: ""
    };

    componentDidMount() {
        fetch("/api/getUsername")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    sayHi = () => {
        fetch("/sayHi")
            .then(res => res.text())
            .then(greeting => this.setState({ greeting }));
    };

    render() {
        const { username, greeting } = this.state;
        return (
            <div>
                {username ? (
                    <h1>{`Hello ${username}`}</h1>
                ) : (
                    <h1>Loading...</h1>
                )}
                <div>
                    <h1>{greeting}</h1>
                    <button onClick={this.sayHi}>Say Hi</button>
                </div>
            </div>
        );
    }
}

export default App;
