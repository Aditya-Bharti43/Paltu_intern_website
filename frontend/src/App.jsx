import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Walkingdog from './components/WalkingDog/Walkingdog'
// import Sidebar from './components/Sidebar/Sidebar' // Import the new Sidebar component
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'

// Import all assets
import head_txt from './assets/header_txt.svg'
import dog_1 from './assets/dog_1.svg'
import building_1 from './assets/building_1.svg'
import frame_2 from './assets/Frame_2.svg'
import cat_1 from './assets/cat_1.svg'
import frame_1 from './assets/Frame_1.svg'
import txt_box_1 from './assets/txt_box_1.svg'
import txt_box_2 from './assets/txt_box_2.svg'
import txt_box_3 from './assets/txt_box_3.svg'
import cat_2 from './assets/cat_2.svg'
import frame_3 from './assets/frame_3.svg'
import register_1 from './assets/register_1.svg'
import bone_1 from './assets/bone_1.svg'
import cat_3 from './assets/cat_3.svg'
import name from './assets/name_txt.svg'
import email from './assets/email_txt.svg'
import phone from './assets/phone_txt.svg'

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_no: ''
  }) 

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/v1/user/register', formData)
      alert("User added successfully!")
      console.log(res.data)
    } catch (error) {
      console.error("Error submitting form", error.response?.data || error.message)
      alert("Failed to add user.")
    }
  }

  return (
    <div className="app-container">
      {/* <Sidebar /> Add the Sidebar component here */}
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img className='head-txt' src={head_txt} alt="Header Text" />
          <img className="dog-image" src={dog_1} alt="Dog" />
        </div>
      </section>
      
      {/* Building Section */}
      <section className="building-section">
        <img className='building-image' src={building_1} alt="Building" />
      </section>
      
      {/* Frame Section */}
      <section className="frame-section">
        <img className="frame-image" src={frame_1} alt="Frame 1" />
      </section>
      
      {/* Cat Section */}
      <section className="cat-section">
        <div className="cat-content">
          <img className='cat-image' src={cat_1} alt="Cat" />
          <img className="frame-image-2" src={frame_2} alt="Frame 2" />
        </div>
      </section>
      
      {/* Text Box Section */}
      <section className="textbox-section">
        <div className="textbox-container">
          <img className="textbox-1" src={txt_box_1} alt="Text Box 1" />
          <img className='textbox-2' src={txt_box_2} alt="Text Box 2" />
          <img className="textbox-3" src={txt_box_3} alt="Text Box 3" />
        </div>
      </section>
      
      {/* Frame and Cat 2 Section */}
      <section className="frame-cat-section">
        <img className="frame-3" src={frame_3} alt="Frame 3" />
        <img className="cat-2" src={cat_2} alt="Cat 2" />
      </section>
      
      {/* Bone Section */}
      <section className="bone-section">
        <img className="bone-image" src={bone_1} alt="Bone" />
      </section>
      
      {/* Registration Form Section */}
      <section className="registration-section">
        <div className="registration-content">
          <img className="register-image" src={register_1} alt="Register" />
          <img className="cat-3" src={cat_3} alt="Cat 3" />
          
          <div className="form-container">
            <div className="form-group">
              <img className="input-label" src={name} alt="Name" />
              <input
                className="form-input"
                type="text"
                placeholder="Name"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <img className="input-label" src={email} alt="Email" />
              <input
                className="form-input"
                type="email"
                placeholder="loremipsum@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <img className="input-label" src={phone} alt="Phone" />
              <input
                className="form-input"
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                value={formData.phone_no}
                onChange={(e) => setFormData({ ...formData, phone_no: e.target.value })}
              />
            </div>
            
            <div className="button-container">
              <button className='submit-btn' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Walking Dog Section */}
      <section className="walking-dog-section">
        <img className='dog-left' src="https://s3-alpha-sig.figma.com/img/1d6d/1b37/e3ffaff74f67ff4371718bb0e0b3f0a7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB2ot340bIEMbv5Tagrw2pK841HlRI8QFpdpb~5zEjp3Non4xsZdTzDdwLmKko5OQbQ~XnwYxDjxn7kXs6DBCTsZeed5wqmFZse5Cf9e1tGet2yDojcrzn2jdjVJuz5~~3XBpYR39m4yohH2inKNe6~OXu2JPQ2usfsDjOmcxBhPikPyh6ZVNyaSrr8iU51NWfaJvbJj66IUsRk4TzxK3-Nsw8rhEnpeacrrZUgENSz9HZ8YW3Jh27pBVHx9vC8jQAvM67jOe4tcUtlao-Hld~j5urvjIDLU4qJMX-B1XTP9wRLoAt7IpaBYAfXSougnI0LoMGALKA9llQvmY4Otbw__" alt="Walking Dog" />
        <Walkingdog />
      </section>
      
      <Footer />
    </div>
  )
}

export default App