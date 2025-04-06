// import logo_img from './assets/header_1_logo.svg'
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
import Walkingdog from './components/WalkingDog/Walkingdog'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
 

  return (
    <>
     
        <Header/>
      <div className="container">
        <img className='head_txt' src={head_txt} alt="" />
        <img className="dog_1" src={dog_1} alt="" />

      </div>
      <div className="build_container">
        <img className='building_1' src={building_1} alt="" />
      </div>


      <img className="frame_1" src={frame_1} alt="" />




      <div className="cat_cont">
        <img className='cat_1' src={cat_1} alt="" />
        <img className="frame_2" src={frame_2} alt="" />
      </div>

      <div className="txt_box_container">

        <img className="txt_box_1" src={txt_box_1} alt="" />
        <img className='txt_box_2' src={txt_box_2} alt="" />
        <img className="txt_3" src={txt_box_3} alt="" />
      </div>


      <img className="frame_3" src={frame_3} alt="" />
      <img className="cat_2" src={cat_2} alt="" />

      <img className="bone_1" src={bone_1} alt="" />
      {/* <img src={wind_dog} alt="" />   */}


      <img className="register" src={register_1} alt="" />
      <img className="cat_3" src={cat_3} alt="" />
      <img id='n1' src={name} alt="" />
      <img id="p1" src={phone} alt="" />
      <img id="e1" src={email} alt="" />



      <input className="name_1" type="text" placeholder='Name' />


      <input className="email" type="text" placeholder='+91 XXXXXXXXXX' />
      <input className="phone_no" type="text" placeholder='loremipsum@gmail.com' />




      <div className="but_cont">
        <button className='submit_btn'>Submit</button>
      </div>


      <img className='dog_lft' src="https://s3-alpha-sig.figma.com/img/1d6d/1b37/e3ffaff74f67ff4371718bb0e0b3f0a7?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB2ot340bIEMbv5Tagrw2pK841HlRI8QFpdpb~5zEjp3Non4xsZdTzDdwLmKko5OQbQ~XnwYxDjxn7kXs6DBCTsZeed5wqmFZse5Cf9e1tGet2yDojcrzn2jdjVJuz5~~3XBpYR39m4yohH2inKNe6~OXu2JPQ2usfsDjOmcxBhPikPyh6ZVNyaSrr8iU51NWfaJvbJj66IUsRk4TzxK3-Nsw8rhEnpeacrrZUgENSz9HZ8YW3Jh27pBVHx9vC8jQAvM67jOe4tcUtlao-Hld~j5urvjIDLU4qJMX-B1XTP9wRLoAt7IpaBYAfXSougnI0LoMGALKA9llQvmY4Otbw__" alt="" />

     
      <Footer/>

      <Walkingdog/>


    </>
  )
}



export default App
