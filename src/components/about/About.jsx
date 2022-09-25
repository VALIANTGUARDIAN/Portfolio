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
            <small>3 months of Internship</small>
          </article>
          <article className="about__card">
            <TbUsers className="about__icons"/>
            <h5>Clients</h5>
            <small>2 clients</small>
          </article>
          <article className="about__card">
            <MdOutlineLibraryAddCheck className="about__icons"/>
            <h5>Projects</h5>
            <small>4 Projects Completed</small>
          </article>
          
        </div>

        <p>
        I'm a web developer with a focus on the MEAN stack, MERN stack, and SEO
        but still exploring other technologies and frameworks that catch my interest! 
        If you're looking for a developer to add to your team, I'd love to hear from you!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
