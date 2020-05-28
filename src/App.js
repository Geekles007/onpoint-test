import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import './App.css';

import stone from "./stone.png";

import Third from './components/layout/third/third.js';
import First from './components/layout/first/first';
import Nav from './components/layout/nav/nav';

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
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
  
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight;
    //   console.log(height);
  
    // const scrolled = winScroll / height
  
    this.setState({
      theposition: winScroll,
    });

    console.log(this.state.theposition);
  }

  render() {
    
    return (
      <div className="App">
        <div className="nav">
            <a className={this.props.theposition <= 785 ? "activated" : ""} onClick={this.scroll} value="0"></a>
            <a className={this.props.theposition > 786 ? "activated" : ""} onClick={this.scroll} value="786"></a>
            <a className={this.props.theposition >= 1300 ? "activated" : ""} onClick={this.scroll} value="1536"></a>
        </div>
        <First id="first"></First>
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
