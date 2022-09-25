import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
/* import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.jpg' */

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Bookworms',
    github:'https://github.com/VALIANTGUARDIAN/BookWorms',
    demo:'https://bookworm-s.herokuapp.com/home'
  },
  {
    id:2,
    image: IMG2,
    title: 'Beta-Testing',
    github:'https://github.com/VALIANTGUARDIAN/BetaTesting/tree/master/masterTemplate-Angular-master',
    demo: ''

  },{
    id:3,
    image:IMG3,
    title:'Server Api Bookworms',
    github:'https://github.com/VALIANTGUARDIAN/serverApiBookworms',
    demo:''
  },
  {
    id:4,
    image: IMG4,
    title:'DigiPodium_IT',
    github:'https://github.com/VALIANTGUARDIAN/DigiPodium_IT',
    demo:''
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
              <a href={demo} className='btn btn-primary' target='_blank'style={{ display: demo ? "block" : "none" }}>Live Demo</a>
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