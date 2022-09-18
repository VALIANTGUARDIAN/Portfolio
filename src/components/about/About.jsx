import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from 'react-icons/fa';
import {TbUsers} from 'react-icons/tb';
import {MdOutlineLibraryAddCheck} from 'react-icons/md';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icons"/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className="about__card">
            <TbUsers className="about__icons"/>
            <h5>Clients</h5>
            <small>3 clients world wide</small>
          </article>
          <article className="about__card">
            <MdOutlineLibraryAddCheck className="about__icons"/>
            <h5>Projects</h5>
            <small>9+ Completed Projects</small>
          </article>
          
        </div>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eum vitae amet.
             Totam nemo explicabo vel corporis neque autem atque hic quidem fugiat eveniet,
             nostrum provident nam id accusantium ratione.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
