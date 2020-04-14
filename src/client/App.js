import React, { Component } from "react";
import Header from "./components/header/Header";

class App extends Component {
    state = {
        username: "",
        greeting: "",
    };

    socials = [
        { name: "linkedIn", url: "---" },
        { name: "github", url: "---" },
    ];

    menuItems = [
        {
            name: "Education",
        },
        {
            name: "Technologies",
        },
        {
            name: "Projects",
        },
        {
            name: "Contact",
        },
    ];

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
                <Header socials={this.socials} menuItems={this.menuItems} />
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
