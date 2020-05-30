import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
    state = {
        name: "testman",
        email: "testman@test.com",
        message: "This is a test"
    };

    send = (event) => {
        event.preventDefault();

        const params = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        console.log("TRYING TO SEND:::", params);
        fetch("/send", {
            method: "post",
            body: JSON.stringify(params)
        })
            .then((response) => {
                console.log("WHAT IS RESPONSE?:::", response);
                return response.json();
            })
            .then((data) => {
                console.lg.log("MESSAGE SENT:", params);
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
                        <form
                            className="contact-form"
                            name="contactForm"
                            action="/send"
                            method="POST"
                        >
                            {/* <h3 className="heading">Questions or comments?</h3> */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    className="text-input name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="form-group" style={{ display: "none" }}>
                                <label htmlFor="address">Address</label>
                                <input
                                    id="address"
                                    className="text-input address"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="text-input email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="message"
                                    placeholder="Message"
                                    name="message"
                                    rows="6"
                                />
                            </div>
                            <div className="form-group">
                                <label className="receive-copy-check">
                                    <input
                                        type="checkbox"
                                        // name={item.type}
                                        // checked={this.state.type}
                                        // onChange={() => this.handleChange(item.type)}
                                    />
                                    I want to receive a copy
                                </label>
                            </div>
                            <button className="button is-flat is-submit" onClick={this.send}>
                                SEND
                            </button>
                            {/* <button className="button is-flat is-submit">SEND</button> */}
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
