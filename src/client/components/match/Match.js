import React, { Component } from "react";
import "./match.css";

class Match extends Component {
    state = {
        lastPosition: "",
        spots: [],
        tags: [],
        currentTag: "",
        indexFrom: "",
        indexTo: ""
    };

    componentDidMount() {
        this.init();
        // this.initTouch();
    }

    setOrder = () => {
        this.state.lastPosition &&
            this.state.spots[this.state.lastPosition].classList.remove(
                "hovered"
            );
        // this.state.tags = document.querySelectorAll(".tag");
        this.setState({ tags: document.querySelectorAll(".tag") }, () =>
            console.log(this.state.tags)
        );
    };

    dragStart = event => {
        console.log("EVENT TARGET", event.target);
        this.setState({ currentTag: event.target }, () => {
            console.log("Drag start", this.state.currentTag);
            this.setState({ indexFrom: this.getPosIndex() }, () =>
                console.log("indexFrom INIT", this.state.indexFrom)
            );
            setTimeout(
                () => this.state.currentTag.classList.add("invisible"),
                0
            );
        });
    };

    dragEnd = () => {
        event.target.classList.remove("invisible");
    };

    dragOver = () => {
        event.preventDefault();
        event.target.classList.add("hovered");
    };

    dragEnter = position => {
        event.preventDefault();
        // this.state.indexTo = parseInt(
        //     event.target.getAttribute("data-position")
        // );
        this.setState(
            {
                indexTo: position
            },
            () => {
                setTimeout(
                    () =>
                        this.pushTags(
                            this.state.indexFrom < this.state.indexTo
                        ),
                    0
                );
            }
        );
        // setTimeout(
        //     () => this.pushTags(this.state.indexFrom < this.state.indexTo),
        //     0
        // );
    };

    getPosIndex = () => {
        return parseInt(event.target.parentElement.dataset.position, 10);
    };

    dragLeave = () => {
        event.target.classList.remove("hovered");
        for (let i = 0; i < this.state.tags.length; i++) {
            this.state.tags[i].classList.remove("up", "down");
        }
    };

    dragDrop = posIndex => {
        console.log("YA", posIndex);
        event.target.classList.remove("hovered");
        this.removeUpDownFromTags();
        this.dropTags(posIndex);
        event.target.append(this.state.currentTag);
        setTimeout(() => this.setOrder(), 0);
    };

    dropTags = indexTo => {
        console.log("SPOTS ARRAY?", this.state.spots);
        const appendTags = (initialIndex, endIndex, offset) => {
            for (let i = initialIndex; i <= endIndex; i++) {
                this.state.spots[i + offset].append(this.state.tags[i]);
                console.log(
                    "SPOTS ARRAY APPEND",
                    this.state.spots[i + offset].append
                );
            }
        };

        this.state.indexFrom < this.state.indexTo
            ? appendTags(this.state.indexFrom + 1, indexTo, -1)
            : appendTags(this.state.indexTo, this.state.indexFrom - 1, 1);
    };

    pushTags = downwards => {
        const addClassName = (className, initialIndex, endIndex) => {
            console.log("initial index:", initialIndex, endIndex);
            for (let i = initialIndex; i <= endIndex; i++) {
                this.state.tags[i].classList.add(className);
            }
        };
        // downwards
        //     ? addClassName("up", this.state.indexFrom + 1, this.state.indexTo)
        //     : addClassName(
        //           "down",
        //           this.state.indexTo,
        //           this.state.indexFrom - 1
        //       );
        if (downwards) {
            console.log(
                "DOWN PUSHING TAG INDEX TO:",
                this.state.indexTo,
                this.state.indexFrom
            );
            addClassName("up", this.state.indexFrom + 1, this.state.indexTo);
        } else {
            console.log(
                "UPWARDS PUSHING TAG INDEX TO:",
                this.state.indexTo,
                this.state.indexFrom
            );
            addClassName("down", this.state.indexTo, this.state.indexFrom - 1);
        }
    };

    init = () => {
        this.setState(
            { spots: document.getElementsByClassName("spot") },
            () => {
                console.log("INIT SPOTS", this.state.spots);
                this.setOrder();
            }
        );
    };

    // ********** TOUCH ***********
    // getPosition = (x, y) => {
    //     for (let i = 0; i < this.state.coordinates.length; i++) {
    //         if (
    //             x >= this.state.coordinates[i].x &&
    //             x <= this.state.coordinates[i].right &&
    //             y >= this.state.coordinates[i].y &&
    //             y <= this.state.coordinates[i].bottom
    //         ) {
    //             return i;
    //         }
    //     }
    // };

    removeUpDownFromTags = () => {
        for (let i = 0; i < this.state.tags.length; i++) {
            this.state.tags[i].classList.remove("up", "down");
        }
    };

    // touchStart = event => {
    //     this.state.indexFrom = this.getPosition(
    //         event.targetTouches[0].pageX,
    //         event.targetTouches[0].pageY
    //     );
    //     this.state.lastPosition = parseInt(
    //         event.target.parentElement.getAttribute("data-position")
    //     );
    //     this.state.initialX = event.targetTouches[0].pageX;
    //     this.state.initialY = event.targetTouches[0].pageY;
    // };

    // touchMove = event => {
    //     if (event.cancelable) event.preventDefault();
    //     if (!this.state.hasMoved) {
    //         this.state.hasMoved = true;
    //         event.target.style.zIndex = 100;
    //     }
    //     event.target.style.transform = `translate(${
    //         event.targetTouches[0].pageX - this.state.initialX
    //     }px, ${event.targetTouches[0].pageY - this.state.initialY}px)`;
    //     this.state.indexTo = this.getPosition(
    //         event.targetTouches[0].pageX,
    //         event.targetTouches[0].pageY
    //     );
    //     if (
    //         typeof this.state.indexFrom === "number" &&
    //         typeof this.state.indexTo === "number"
    //     ) {
    //         if (!this.state.wasInside) {
    //             this.state.lastSpot = this.state.indexTo;
    //             this.state.spots[this.state.indexTo] &&
    //                 this.state.spots[this.state.indexTo].classList.add(
    //                     "hovered"
    //                 );
    //             this.pushTags(this.state.indexFrom < this.state.indexTo);

    //             // this.state.wasInside = true;
    //             this.setState({ wasInside: true });
    //         }
    //     } else {
    //         if (this.state.wasInside) {
    //             this.state.spots[this.state.lastSpot] &&
    //                 this.state.spots[this.state.lastSpot].classList.remove(
    //                     "hovered"
    //                 );
    //             this.removeUpDownFromTags();
    //             // this.state.wasInside = false;
    //             this.setState({ wasInside: false });
    //         }
    //     }
    // };

    // touchEnd = event => {
    //     if (!this.state.hasMoved) return false;
    //     this.removeUpDownFromTags();
    //     if (typeof this.state.indexTo === "number") {
    //         this.state.spots[this.state.indexTo] &&
    //             this.state.spots[this.state.indexTo].classList.remove(
    //                 "hovered"
    //             );
    //         this.dropTags(this.state.indexTo);
    //         this.state.spots[this.state.indexTo].append(this);
    //         // this.state.hasMoved = false;
    //         this.setState({ hasMoved: false });
    //     }
    //     requestAnimationFrame(() => {
    //         event.target.removeAttribute("style");
    //         this.setOrder();
    //     });
    // };

    // initTouch = () => {
    //     this.state.coordinates = [];
    //     this.state.lastPosition = 0;
    //     this.state.wasInside = false;
    //     this.state.lastSpot = "";
    //     this.state.hasMoved = false;

    //     for (let i = 0; i < this.state.spots.length; i++) {
    //         this.state.coordinates.push(
    //             this.state.spots[i].getBoundingClientRect()
    //         );
    //     }
    //     for (let i = 0; i < this.state.tags.length; i++) {
    //         this.state.tags[i].addEventListener("touchstart", this.touchStart);
    //         this.state.tags[i].addEventListener("touchmove", this.touchMove, {
    //             passive: false
    //         });
    //         this.state.tags[i].addEventListener(
    //             "touchend",
    //             this.state.touchEnd
    //         );
    //     }
    // };

    // window.addEventListener("resize", () => {
    //     this.state.init();
    //     this.state.initTouch();
    // });

    render() {
        return (
            <section className="dd-container">
                <div className="heading">
                    <h1 className="heading">Skills</h1>
                    <p>
                        When you look for a developer, what skills do you expect
                        most? What do you expect least?
                    </p>
                    <p>
                        Drag & sort to rank the following skills in order. Click
                        Submit to compare to mine.
                    </p>
                </div>

                <div className="spots">
                    <div
                        className="spot"
                        data-position="0"
                        onDragOver={this.dragOver}
                        onDragEnter={() => this.dragEnter(0)}
                        onDragLeave={this.dragLeave}
                        onDrop={() => this.dragDrop(0)}
                    >
                        <div
                            className="tag"
                            draggable="true"
                            // onDragStart={() => this.dragStart(0)}
                            onDragStart={this.dragStart}
                            onDragEnd={this.dragEnd}
                            data-element="0"
                        >
                            <span className="text">CSS and Preprocessros</span>
                        </div>
                    </div>
                    <div
                        className="spot"
                        data-position="1"
                        onDragOver={this.dragOver}
                        onDragEnter={() => this.dragEnter(1)}
                        onDragLeave={this.dragLeave}
                        onDrop={() => this.dragDrop(1)}
                    >
                        <div
                            className="tag"
                            draggable="true"
                            onDragStart={this.dragStart}
                            onDragEnd={this.dragEnd}
                            data-element="1"
                        >
                            <span className="text">Office Politics</span>
                        </div>
                    </div>
                    <div
                        className="spot"
                        data-position="2"
                        onDragOver={this.dragOver}
                        onDragEnter={() => this.dragEnter(2)}
                        onDragLeave={this.dragLeave}
                        onDrop={() => this.dragDrop(2)}
                    >
                        <div
                            className="tag"
                            draggable="true"
                            onDragStart={this.dragStart}
                            onDragEnd={this.dragEnd}
                            data-element="2"
                        >
                            <span className="text">Nodejs</span>
                        </div>
                    </div>
                    {/* <div
                        className="spot"
                        data-position="3"
                        // onDragStart={this.dragStart}
                        // onDragEnd={this.dragEnd}
                    >
                        <div className="tag" draggable="true" data-element="3">
                            <span className="text">JavaScript Frameworks</span>
                        </div>
                    </div>
                    <div
                        className="spot"
                        data-position="4"
                        // onDragStart={this.dragStart}
                        // onDragEnd={this.dragEnd}
                    >
                        <div className="tag" draggable="true" data-element="4">
                            <span className="text">Vanilla JavaScript</span>
                        </div>
                    </div>
                    <div
                        className="spot"
                        data-position="5"
                        // onDragStart={this.dragStart}
                        // onDragEnd={this.dragEnd}
                    >
                        <div className="tag" draggable="true" data-element="5">
                            <span className="text">French</span>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Match;
