import React, { Component } from "react";
import blackball from "../assets/blackball.png";
import whiteball from "../assets/whiteball.png";
import blackballblurry from "../assets/blackballblurry.png";
import whiteballblurry from "../assets/whiteballblurry.png";
import goldball from "../assets/goldball.png";
import goldenblackball from "../assets/goldenblackball.png";
import design from "../assets/design.png";
import coding from "../assets/coding.png";
import goldtriangle from "../assets/goldtriangle.png";
import gbb from "../assets/gbb.png";
import LouaiPic from "../assets/LouaiPic.png";
import About from "./About";
import Contact from "./Contact";
import Cftr from "./cftr";

class MainPage extends Component {
  // handleHoverCoding = (e) => {
  //   console.log(e);
  //   console.log("Mouse over Coding");
 
  // };
  render() {
    return (
      <div className="mainpage">
        <img src={blackballblurry} alt="blackballblurry" id="blackballblurry" />
        <img src={whiteballblurry} alt="whiteballblurry" id="whiteballblurry" />
        <div className="design">
          <div id="buttond">
            <img src={design} alt="design" id="design" />
            <img src={gbb} alt="gbb" id="gbb" />
          </div>
          <img src={whiteball} alt="whiteball" id="whiteballd" />
          <img
            src={goldenblackball}
            alt="goldenblackball"
            id="goldenblackballd"
          />
          <img src={goldtriangle} alt="goldtriangle" id="goldtriangled" />
        </div>
        <div className="picdesc">
          <img src={LouaiPic} alt="" id="picture" />
          <div id="description">
            <h1> LOUAI BOUZAHER </h1>
            <h3 id="whoami"> Student and sometimes a designer </h3>
            <h4> Just another portfolio </h4>
          </div>
        </div>
        <div className="coding">
          <div id="buttonc"> 
            <img src={coding} alt="coding" id="coding" />
            <img src={goldball} alt="goldball" id="goldballc" />
          </div>
          <img src={blackball} alt="blackballc" id="blackballc" />
          <img src={whiteball} alt="whiteball" id="whiteballc" />
        </div>
      
     <div id='def'>
     <About />
      <Contact />
      <Cftr />
     </div>
      </div>
    );
  }
}

export default MainPage;
