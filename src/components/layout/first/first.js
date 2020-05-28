import React from "react";

export default class First extends React.Component {

    render() {
        return (
            <section className="first" id="first">
                <h2>Всегда ли цели терапии СД2 на поверхности?</h2>
                <Blink name="Цель по НьА1с" status="top" width="200px" height="200px"></Blink>
                <Blink name="Гипогликемия" status="left" width="120px" height="120px"></Blink>
                <Blink name="СС риски" status="right" width="70px" height="70px"></Blink>
                <Blink name="Осложнения СД" status="bottom" width="50px" height="50px"></Blink>
                <a className="scroll_down">
                    <span>Листайте вниз</span>
                    <img src={arrow} alt="arrow" />
                </a>
                <div className="light"></div>
            </section>
        )
    }
}