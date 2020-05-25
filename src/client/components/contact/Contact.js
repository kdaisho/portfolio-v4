import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
    state = {};

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
                                <label className="is-text-grey_" htmlFor="name">
                                    Name
                                </label>
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
                                <label className="is-text-grey_" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    className="text-input address"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                />
                            </div>
                            <div className="form-group">
                                <label className="is-text-grey_" htmlFor="email">
                                    Email
                                </label>
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
                                <label className="is-text-grey_" htmlFor="message">
                                    Message
                                </label>
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
                            <button className="button is-flat is-submit">SEND</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
