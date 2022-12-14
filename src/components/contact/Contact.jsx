import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_stpvybf', 'template_d66tcs2', form.current, 'Ym38qOLhbk6dIfaS4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="mailto:singhdigvijay0910@outlook.com" target='_blank'>Send Mail</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/" target='_blank'>Send</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+918960843600" target='_blank'>Send</a>
          </article>
        </div>

        {/* form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="10" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact