import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Bookworms',
    github:'https://github.com/VALIANTGUARDIAN/BookWorms',
    demo:'https://bookworm-s.herokuapp.com/home'
  }
]

const projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article className='project__item'>
          <div className="project__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>          
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default projects