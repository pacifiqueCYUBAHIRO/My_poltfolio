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
          <p>Email: paccymaker@gmail.com</p>  
          <p>Tel: +250780670284</p>
          <button>Hire Me</button>
          </div>

          <div className='contact-form'>
            <h5 className='form-title'>Leave your Opinion</h5>
            <form>
              <input type='text' name='names' placeholder='Name' required></input>
              <input type='email' name='email' placeholder='Email' required></input>
              <textarea name='name' rows="10" placeholder=' Write message...' required></textarea>
              <button type='submit' name='submit'>Send</button>
              <br></br><br></br>
            </form>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Contacts
