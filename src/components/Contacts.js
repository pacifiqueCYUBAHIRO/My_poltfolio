import React from 'react'
import "./contacts.css"

function Contacts() {
  return (
    <div>
      <div className='contact-container'>
        <h4 className='contact-title'>Contact Us</h4>
        <div className='contact-content'>
         
          <div className='contacts'>
             <h4 className='contacts-title'>Contacts</h4>
             
          <h5>Email: paccymaker@gmail.com</h5>  
          <h5>Tel: +250780670284</h5>
          <h4>I have been working in the field of software development for 3 years and have a strong background in Front-end.
            <br />
            

I am particularly passionate about [mention a specific area of development that you find most interesting or challenging], and I am always eager to stay updated on the latest industry trends and technologies.
          </h4>
          <button className='hire'>Hire Me</button>
          </div>

          <div className='contact-form'>
            <h5 className='form-title'>Leave your Opinion</h5>
            <form>
              <input type='text' name='names' placeholder='Name' required></input>
              <input type='email' name='email' placeholder='Email' required></input>
              <textarea name='name' rows="8" placeholder=' Write message...' required></textarea>
              <br></br><button type='submit' name='submit'>Send</button>
              
            </form>
            <br></br>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Contacts
