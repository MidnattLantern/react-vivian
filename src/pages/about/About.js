// functional
import React from "react";
// styles
import Styles from "../../styles/About.module.css";
import "../../global.css";

const About = () => {

    return(
        <>
          <div className={Styles.AboutContainer}>
              <h1>ABOUT VIVIAN</h1>
              <p>Vivian is an experimental portfolio project built on React/Node.js.</p>
              <p>Vivian is a logistics management tool. As of the latest release, users can create an address book, product list book, and a serial number list book. Users can also connect these three for organizational purposes.</p>
              <p>Vivian's GUI takes inspiration from early 2010's sci-fi games and anime mecha games. As a graphics design and web development graduate, I find front-end development to be the most fun part of programming.</p>
              <p>I made this app primarily to practice web development with React/Node.js. The source code for the front-end can be found on <a target="_blank" href="https://github.com/MidnattLantern/react-vivian">GitHub (new tab)</a>.</p>
              <p>The API is built with Django REST Framework in a separate private repository.</p>
          </div>
        </>
      );
      
};

export default About;
