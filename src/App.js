import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import './App.css';

import stone from "./stone.png";

import Third from './components/layout/third/third.js';
import Blink from "./components/blink/blink.js";
import arrow from "./arrow.png";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 1998,
      left: 0,
      theposition: 0
    }
  }

  scroll = (e) => {
    window.scroll({
      top: e.target.getAttribute('value'), 
      left: 0, 
      behavior: 'smooth'
    });
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
  
    this.setState({
      theposition: winScroll,
    });

    if(this.state.theposition < 786 / 2) {
      a1.classList.add('activated');
      a2.classList.remove('activated');
    } else if(this.state.theposition < 786) {
      a2.classList.add('activated');
      a1.classList.remove('activated');
      a3.classList.remove('activated');
    } else if(this.state.theposition >= 1536) {
      a3.classList.add('activated');
      a2.classList.remove('activated');
    }

    console.log(this.state.theposition);
  }

  render() {
    
    return (
      <div className="App">
        <div className="nav">
            <a onClick={this.scroll} id="a1" value="0"></a>
            <a onClick={this.scroll} id="a2" value="786"></a>
            <a onClick={this.scroll} id="a3" value="1536"></a>
        </div>
        <section className="first" id="first">
            <h2>Всегда ли цели терапии СД2 на поверхности?</h2>
            <Blink name="Цель по НьА1с" status="top" width="200px" height="200px"></Blink>
            <Blink name="Гипогликемия" status="left" width="120px" height="120px"></Blink>
            <Blink name="СС риски" status="right" width="70px" height="70px"></Blink>
            <Blink name="Осложнения СД" status="bottom" width="50px" height="50px"></Blink>
            <a onClick={this.scroll} value="786" className="scroll_down">
                <span>Листайте вниз</span>
                <img src={arrow} alt="arrow" />
            </a>
            <div className="light"></div>
        </section>
        <section className="second" id="second">
          <img src={stone} alt="stone" />

          <div className="title">
            <span>Основа терапии - патогенез СД2</span>
          </div>
        </section>
        <Third id="third"></Third>
      </div>
    );
  }
  
}
