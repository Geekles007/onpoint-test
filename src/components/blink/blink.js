import React from "react";
import './blink.css';

export default class Blink extends React.Component{
    render() {
        return <div className={this.props.status === "top" ? "item top" : this.props.status === "bottom" ? "item bottom" : this.props.status === "right" ? "item right" : "item left"}>
            <span>{this.props.name}</span>
            <div style={{width: `${this.props.width}`, height: `${this.props.height}`}} className="contain">
                <div className="blink point pulser"></div>
                <div className="blink blk pulser"></div>
                <div className="blink borderer pulser"></div>
            </div>
        </div>
    }
}