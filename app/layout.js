"use client";
import { useState } from 'react';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'
import HomeHeader from './components/header/homeHeader';

const metadata = {
  title: 'Tennis Ranker . MPR',
  description: 'Tennis Score Ranking Website',
}

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <html lang="en">
      <body>
        <div> 
          {isLoggedIn ?
          <Header /> :
          <HomeHeader />
          }
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
