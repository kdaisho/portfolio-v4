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
                        <form id="form" name="myForm" action="/send" method="POST">
                            <h3 className="heading">Questions or comments?</h3>
                            <div className="form-child">
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="form-child" style={{ display: "none" }}>
                                <label htmlFor="address">Address:</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                />
                            </div>
                            <div className="form-child">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-child">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button id="submit" className="form-child">
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
