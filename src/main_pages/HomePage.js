import React from 'react'
import {Image } from 'react-bootstrap';
import "./CSS/HomePage.css"
import bannerImage from './MainMenuPictures/WebBanner3.png'
function HomePage() {
  return (
    <div>
      <Image src={bannerImage} fluid style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}/>

      <footer className='footer'>
      <p>&copy; 2023 PhishShield, developed by Kehinde Oduyeye 1814493</p>
      </footer>

    </div>
  )
}

export default HomePage

