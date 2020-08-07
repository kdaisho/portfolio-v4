import React, { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import WorkLog from "./components/workLog/WorkLog";
import Toolset from "./components/toolset/Toolset";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.css";

const App = () => {
    const [openPane, setOpenPane] = useState("");

    const togglePane = (name) => {
        setOpenPane(this.state.openPane ? "" : name);
    };

    const scrollTo = (destinationId) => {
        const button = event.target;
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 150);
        document.getElementById(destinationId).scrollIntoView({ behavior: "smooth" });
    };

    const handleFilterChange = (value, filterWords, setter) => {
        const copy = [...filterWords];
        if (event.target.checked) {
            setter((prevFilterWords) => [...prevFilterWords, value]);
        } else {
            const index = filterWords.indexOf(value);
            if (index >= 0) {
                copy.splice(index, 1);
                setter(copy);
            }
        }
    };

    return (
        <div className="component-wrap">
            {openPane && <div className="backdrop" onClick={() => togglePane(openPane)}></div>}
            <Header togglePane={togglePane} openPane={openPane} scrollTo={scrollTo} />
            <Hero />
            <WorkLog />
            <Toolset
                togglePane={togglePane}
                openPane={openPane}
                handleFilterChange={handleFilterChange}
            />
            <Projects
                togglePane={togglePane}
                openPane={openPane}
                handleFilterChange={handleFilterChange}
            />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
