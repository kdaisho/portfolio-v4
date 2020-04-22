import React, { Component } from "react";
import "./match.css";

class Match extends Component {
    state = {
        lastPosition: "",
        tags: [],
        currentTag: "",
        indexFrom: "",
        indexTo: ""
    };

    list = [
        {
            id: 0,
            text: "CSS and Preprocessors"
        },
        {
            id: 1,
            text: "Office Politics"
        },
        {
            id: 2,
            text: "Nodejs"
        },
        {
            id: 3,
            text: "JavaScript Frameworks"
        },
        {
            id: 4,
            text: "Vanilla JavaScript"
        },
        {
            id: 5,
            text: "French"
        }
    ];

    spotsRef = [];

    componentDidMount() {
        this.init();
        // this.initTouch();
    }

    setOrder = () => {
        this.state.lastPosition &&
            this.spotsRef[this.state.lastPosition].classList.remove("hovered");
        this.setState({ tags: document.querySelectorAll(".tag") }, () =>
            console.log(this.state.tags)
        );
    };

    disableTags = index => {
        this.state.tags.forEach((tag, i) => {
            if (i !== index) {
                tag.classList.add("nope");
            }
        });
    };

    enableTags = () => {
        this.state.tags.forEach(tag => {
            tag.classList.remove("nope");
        });
    };

    dragStart = index => {
        this.setState(
            { currentTag: this.state.tags[this.getPosIndex()] },
            () => {
                this.setState({ indexFrom: this.getPosIndex() });
                setTimeout(() => {
                    this.state.currentTag.classList.add("invisible");
                    this.disableTags(index);
                }, 0);
            }
        );
    };

    dragEnd = () => {
        this.state.currentTag.classList.remove("invisible");
        this.enableTags();
        this.removeUpDownFromTags();
    };

    dragOver = (index, txt) => {
        event.preventDefault();
        this.spotsRef[index].classList.add("hovered");
    };

    dragEnter = position => {
        event.preventDefault();
        console.log("%cENTERING:", "background:red;color:#fff", position);
        this.setState({ indexTo: position }, () => {
            setTimeout(
                () => this.pushTags(this.state.indexFrom < this.state.indexTo),
                0
            );
        });
    };

    getPosIndex = () => {
        return parseInt(event.target.parentElement.dataset.position, 10);
    };

    dragLeave = index => {
        this.spotsRef[index].classList.remove("hovered");
        this.state.tags[index].classList.remove("up", "down");
    };

    dragDrop = (spots, posIndex) => {
        spots[posIndex].classList.remove("hovered");
        const refreshed = this.removeUpDownFromTags();
        refreshed && this.dropTags(posIndex);
        spots[posIndex].append(this.state.currentTag);
        setTimeout(() => this.setOrder(), 0);
    };

    dropTags = indexTo => {
        const appendTags = (initialIndex, endIndex, offset) => {
            for (let i = initialIndex; i <= endIndex; i++) {
                this.spotsRef[i + offset].append(this.state.tags[i]);
            }
        };
        this.state.indexFrom < this.state.indexTo
            ? appendTags(this.state.indexFrom + 1, indexTo, -1)
            : appendTags(this.state.indexTo, this.state.indexFrom - 1, 1);
    };

    pushTags = downwards => {
        const addClassName = (className, initialIndex, endIndex) => {
            for (let i = initialIndex; i <= endIndex; i++) {
                this.state.tags[i].classList.add(className);
            }
        };

        downwards
            ? addClassName("up", this.state.indexFrom + 1, this.state.indexTo)
            : addClassName(
                  "down",
                  this.state.indexTo,
                  this.state.indexFrom - 1
              );
    };

    removeUpDownFromTags = () =>
        [...this.state.tags].map(tag => tag.classList.remove("up", "down"));

    init = () => {
        this.setOrder();
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
                    {this.list.map(item => (
                        <div
                            key={item.id}
                            className="spot"
                            data-position={item.id}
                            onDragOver={() => this.dragOver(item.id)}
                            onDragEnter={() => this.dragEnter(item.id)}
                            onDragLeave={() => this.dragLeave(item.id)}
                            onDrop={() => this.dragDrop(this.spotsRef, item.id)}
                            ref={ref => (this.spotsRef[item.id] = ref)}
                        >
                            <div
                                className="tag"
                                draggable="true"
                                onDragStart={() => this.dragStart(item.id)}
                                onDragEnd={() => this.dragEnd()}
                                data-element={item.id}
                            >
                                <span className="text">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Match;
