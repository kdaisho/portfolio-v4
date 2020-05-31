import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        address: "",
        requestCopy: false
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const params = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            address: this.state.address,
            requestCopy: this.state.requestCopy
        };
        const response = await fetch("/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });
        const result = await response.json();
        console.log("DONE:::", result);
    };

    handleChange = (event) => {
        const { target } = event;
        this.setState({
            [target.name]: target.name === "requestCopy" ? target.checked : target.value
        });
    };

    render() {
        return (
            <section className="section is-contact">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side title-group">
                        <h2 className="title">Contact</h2>
                        <p className="subtitle is-text-grey font-large">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                        </p>
                    </div>
                    <div className="right-side">
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group is-address">
                                <label htmlFor="address">Address</label>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="text-input"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    rows="6"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="receive-copy-check">
                                    <input
                                        type="checkbox"
                                        name="requestCopy"
                                        checked={this.state.requestCopy}
                                        onChange={this.handleChange}
                                    />
                                    <span className="dummy">
                                        {this.state.requestCopy ? String.fromCharCode(10004) : ""}
                                    </span>
                                    I want to receive a copy
                                </label>
                            </div>
                            <button className="button is-flat is-submit outline-button">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
