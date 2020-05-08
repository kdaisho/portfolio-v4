import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";

const Main = () => {
    return (
        <div>
            {/* <Header socials={this.socials} menuItems={this.menuItems} /> */}
            <Header />
            <Hero />
            <Education />
        </div>
    );
};

export default Main;
