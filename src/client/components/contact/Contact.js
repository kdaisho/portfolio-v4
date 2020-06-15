import React, { Component, createRef } from "react";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        address: "",
        requestCopy: false,
        isFormActive: true,
        hasSent: false
    };

    componentDidMount() {
        this.contactForm = createRef();
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.throwEmail();
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
        this.setState({ hasSent: true });
        console.log("DONE:::", result);
    };

    handleChange = (event) => {
        const { target } = event;
        this.setState({
            [target.name]: target.name === "requestCopy" ? target.checked : target.value
        });
    };

    throwEmail = () => {
        this.contactForm.current.classList.add("fly");
        setTimeout(() => this.setState({ isFormActive: false }), 200);
    };

    render() {
        return (
            <section className="section is-contact">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side title-group">
                        <h2 className="title">Contact</h2>
                        <p className="subtitle font-large">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                        </p>
                    </div>
                    <div className="right-side">
                        <p className="thank-you-note">
                            {this.state.hasSent ? (
                                <span>
                                    Thank you {this.state.name}, I will get back to you soon!
                                </span>
                            ) : (
                                !this.state.isFormActive && <span>Sending...</span>
                            )}
                        </p>
                        <form
                            className="contact-form"
                            onSubmit={this.handleSubmit}
                            ref={this.contactForm}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="text-input"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    tabIndex={this.state.isFormActive ? "0" : "-1"}
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
                                    tabIndex={this.state.isFormActive ? "0" : "-1"}
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
                                    tabIndex={this.state.isFormActive ? "0" : "-1"}
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
                                        tabIndex={this.state.isFormActive ? "0" : "-1"}
                                    />
                                    <span className="dummy">
                                        {this.state.requestCopy ? String.fromCharCode(10004) : ""}
                                    </span>
                                    I want to receive a copy
                                </label>
                            </div>
                            <button
                                className="button is-flat is-submit outline-button"
                                tabIndex={this.state.isFormActive ? "0" : "-1"}
                            >
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
