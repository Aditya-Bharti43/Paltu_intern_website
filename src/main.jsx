import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'


createRoot(document.getElementById('root')).render(
  
  
  <BrowserRouter>
  
  <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/blogs' element={<Blogs/>}></Route>
  <Route path='/aboutus' element={<AboutUs/>}></Route>
  <Route path='/contactus' element={<ContactUs/>}></Route>
  </Routes>
  
  </BrowserRouter>
    
  
)
