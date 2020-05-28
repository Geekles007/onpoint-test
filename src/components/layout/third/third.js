import React from "react";

export default class Third extends React.Component {

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
        const isBrowser = typeof window !== `undefined`;
    
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
        );
    }
}
