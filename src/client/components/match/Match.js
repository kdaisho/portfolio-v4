import React, { Component } from "react";
import "./match.css";

class Match extends Component {
    state = {
        tags: [],
        currentTag: "",
        indexFrom: "",
        indexTo: "",
        coordinates: [],
        lastPosition: 0,
        wasInside: false,
        lastSpot: "",
        hasMoved: false,
        unlocked: false
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
        this.initTouch();
    }

    setOrder = () => {
        console.log("%cSET ORDER", "color: purple");
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

    getPosIndex = type => {
        console.log(
            `%cPARENT POSITION ${type}`,
            "color:red",
            event.target.parentElement.dataset.position
        );
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
    getPosition = (x, y) => {
        for (let i = 0; i < this.state.coordinates.length; i++) {
            if (
                x >= this.state.coordinates[i].x &&
                x <= this.state.coordinates[i].right &&
                y >= this.state.coordinates[i].y &&
                y <= this.state.coordinates[i].bottom
            ) {
                return i;
            }
        }
    };

    touchStart = index => {
        console.log("EVENT:", index, event.target);
        this.setState(
            {
                indexFrom: this.getPosition(
                    event.targetTouches[0].pageX,
                    event.targetTouches[0].pageY
                )
                // indexFrom: this.getPosIndex("Start")
            },
            () => {
                console.log("INDEX FROM:", this.state.indexFrom);
                // this.disableTags(index);
                this.disableTags(this.state.indexFrom);
            }
        );
        //this.state.lastPosition = parseInt(
        // event.target.parentElement.getAttribute("data-position")
        //);
        // console.log("POS INdex:", this.getPosIndex());
        this.setState(
            {
                lastPosition: this.getPosIndex("Start 2"),
                // lastPosition: this.getPosition(
                //     event.targetTouches[0].pageX,
                //     event.targetTouches[0].pageY
                // ),
                initialX: event.targetTouches[0].pageX,
                initialY: event.targetTouches[0].pageY
            },
            () => this.setState({ unlocked: true })
        );
        // const ha = this.removeUpDownFromTags();
        // console.log("HA?", ha);
    };

    touchMove = index => {
        if (event.cancelable) event.preventDefault();
        if (this.state.unlocked === false) return;
        if (!this.state.hasMoved) {
            // this.state.hasMoved = true;
            this.setState({ hasMoved: true });
            // event.target.style.zIndex = 100;
            this.state.tags[this.state.lastPosition].style.zIndex = 100;
        }
        // event.target.style.transform = `translate(${
        //     event.targetTouches[0].pageX - this.state.initialX
        // }px, ${event.targetTouches[0].pageY - this.state.initialY}px)`;
        this.state.tags[this.state.lastPosition].style.transform = `translate(${
            event.targetTouches[0].pageX - this.state.initialX
        }px, ${event.targetTouches[0].pageY - this.state.initialY}px)`;
        this.setState(
            {
                indexTo: this.getPosition(
                    event.targetTouches[0].pageX,
                    event.targetTouches[0].pageY
                )
            },
            () => {
                console.log(
                    "NOT NUMBER?:",
                    this.state.indexFrom,
                    this.state.indexTo
                );
                if (
                    typeof this.state.indexFrom === "number" &&
                    typeof this.state.indexTo === "number"
                ) {
                    if (!this.state.wasInside) {
                        this.state.lastSpot = this.state.indexTo;
                        this.spotsRef[this.state.indexTo] &&
                            this.spotsRef[this.state.indexTo].classList.add(
                                "hovered"
                            );
                        this.pushTags(
                            this.state.indexFrom < this.state.indexTo
                        );
                        this.setState({ wasInside: true });
                    }
                } else {
                    if (this.state.wasInside) {
                        this.spotsRef[this.state.lastSpot] &&
                            this.spotsRef[this.state.lastSpot].classList.remove(
                                "hovered"
                            );
                        this.removeUpDownFromTags();
                        this.setState({ wasInside: false });
                    }
                }
            }
        );
    };

    touchEnd = index => {
        console.log("END index:", index);
        if (!this.state.hasMoved) return false;
        const refreshed = this.removeUpDownFromTags();
        if (typeof this.state.indexTo === "number" && refreshed) {
            this.spotsRef[this.state.indexTo] &&
                this.spotsRef[this.state.indexTo].classList.remove("hovered");
            this.dropTags(this.state.indexTo);
            // this.spotsRef[this.state.indexTo].append(this.state.tags[index]);
            this.spotsRef[this.state.indexTo].append(
                this.state.tags[this.state.lastPosition]
            );
            // this.state.hasMoved = false;
            this.setState({ hasMoved: false });
        }
        requestAnimationFrame(() => {
            // event.target.removeAttribute("style");
            this.enableTags();
            this.state.tags[this.state.lastPosition].removeAttribute("style");
            this.setOrder();
            this.setState({ unlocked: false });
        });
    };

    initTouch = () => {
        const coordinates = [];
        for (let i = 0; i < this.spotsRef.length; i++) {
            coordinates.push(this.spotsRef[i].getBoundingClientRect());
        }
        this.setState({ coordinates }, () =>
            console.log("COORDINATES:", this.state.coordinates)
        );
    };

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
                                onTouchStart={() => this.touchStart(item.id)}
                                onTouchMove={() => this.touchMove(item.id)}
                                onTouchEnd={() => this.touchEnd(item.id)}
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
