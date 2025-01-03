import React from 'react'
import './ContactUs.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Walkingdog from '../WalkingDog/Walkingdog'
import location_logo from '../../assets/location-2950.svg'
import phone_icon from '../../assets/phone-519.svg'
import mail_icon from '../../assets/mail-5886.svg'

function ContactUs() {
  return (
    <div>


      <Header/>

      <div className="contact-us-main">
        <div className='contact-and-cat'>
          <div className='contact-heading'>
            <span>contact</span> us
            <div className="divider-contact"></div>
            <div className="contact-content">
              we'll assist you in your pet-parenting journey. We 
              <p className='contact-extended-para'>are just one call away</p> 
            </div>
          </div>
          <div className='contact-cat'>
            <img className='contact-cat-1' src="https://www.mypaaltu.com/wp-content/uploads/2022/11/18.png" alt="" />
          </div>
        </div>
        <div className='contact-credentials'>
          <div className='contact-location'>
            <img className="location-logo"src={location_logo} alt="" />
            <p>Gurugram,Haryana</p>
          </div>
          <div className='contact-phone'>
            <img className='phone-logo' src={phone_icon} alt="" />
            <p>+91 7528000776</p>
          </div>
          <div className='contact-mail'>
            <img className='mail-logo' src={mail_icon} alt="" />
            <p>support@mypaaltu.com</p>
          </div>
        </div>
        <div className='join-and-user-credentials'>
          <div className='contact-join-us-content'>
            <p className='contact-para-1'>Join us</p>
            <p className='contact-para-2'> <span>We're here for</span> <br/> <span>anything</span> You might<br/> need </p>
            <p className='contact-para-3'>
            Feel free to reach out if you have any<br/> questions regarding the services we provide,<br/> or if you need a counselling in this
            regard or<br/> even if you have any pet related query. Drop <br/> a message, we will make sure to<br/> get back to you.
            </p>
          </div>
          <div className='contact-user-box'>
            <div className='contact-name-field'>
              <input type="text" placeholder='Name' />
            </div>
            <div className='contact-phone-field'>
            <input type="text" placeholder='Phone' />
            </div>
            <div className='contact-email-field'>
            <input type="text" placeholder='Email' />
            </div>
            <div className='contact-message-field'>
            <input type="text" placeholder='Message' />
            </div>
            <div className="contact-button-field">
              <button className='contact-call-button'> <p>Call Me Back</p></button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      <Walkingdog/>
      
    </div>
  )
}

export default ContactUs
