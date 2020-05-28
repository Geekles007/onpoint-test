import React, {useEffect, useState, useLayoutEffect} from 'react';
import './App.css';

import arrow from "./arrow.png";
import stone from "./stone.png";
import Blink from "./components/blink/blink.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 1998,
      left: 0
    }
  }
  
  onInput() {
    var input = document.getElementById("ranger");
    var currentVal = input.value;
    var left = currentVal == 1998 ? "translateX(-" + 0 + "px)" : currentVal == 2009 ? "translateX(-" + 1024 + "px)" : "translateX(-" + 2048 + "px)";
    console.log("left element", left);
    this.setState({
      value: currentVal,
      left: left
    })
  }

  render() {
    document.querySelectorAll(".slider").forEach(function(ctrl) {
      var el = ctrl.querySelector('input'); 
      el.oninput =function(){
        
        ctrl.querySelectorAll("option").forEach(function(opt) {
          if(opt.value<=el.valueAsNumber)                
            opt.style.backgroundColor = 'rgb(133, 193, 250)';
          else
            opt.style.backgroundColor = 'rgb(209, 233, 255)';
        });           
        
        var valPercent = (el.valueAsNumber  - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));            
        var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+
        valPercent+', rgb(133, 193, 250)), color-stop('+
        valPercent+', rgb(209, 233, 255)));';
        el.style = style;
      }
    });

    window.onresize = function(){
      document.querySelectorAll(".slider").forEach(function(ctrl) {
        var el = ctrl.querySelector('input');    
        el.oninput();    
      });
    }
    
    return (
      <div className="App">
        <div className="nav">
          <a className="activated" href="#first"></a>
          <a href="#second"></a>
          <a href="#third"></a>
        </div>
        <section className="first" id="first">
          <h2>Всегда ли цели терапии СД2 на поверхности?</h2>
          <Blink name="Цель по НьА1с" status="top" width="200px" height="200px"></Blink>
          <Blink name="Гипогликемия" status="left" width="120px" height="120px"></Blink>
          <Blink name="СС риски" status="right" width="70px" height="70px"></Blink>
          <Blink name="Осложнения СД" status="bottom" width="50px" height="50px"></Blink>
          <a href="#" className="scroll_down">
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
        <section className="third" id="third">
          <div className="slider">
            <input id="ranger" type="range" min="1998" max="2020" className="ranger" list="years" step="11" onInput={this.onInput.bind(this)}/>
            <datalist id="years">
              <option value="1998"></option>
              <option value="2009"></option>
              <option value="2020"></option>
            </datalist>
            <div className="options">
              <span>1998</span>
              <span>2009</span>
              <span>2020</span>
            </div>
          </div>
          <div style={{transform: this.state.left}} className="thrd one">
            
          </div>
          <div style={{transform: this.state.left}} className="thrd two">
            
          </div>
          <div style={{transform: this.state.left}} className="thrd three">
            
          </div>
        </section>
      </div>
    );
  }
  
}
