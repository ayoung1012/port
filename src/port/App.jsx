import React, { useState, useEffect } from 'react'
import Main from './Main'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Portfolio from './Portfolio'
import Skill from './Skill'
import Profile from './Profile'
import Cretificate from './Cretificate'
import Branding from './Branding'
import Supreme from './Supreme'
import Uiux from './Uiux'
import Leica from './Leica'
import Contact from './Contact'
import Weather from './Weather'
import Clone from './Clone'
import Mobile from './Mobile'

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter basename="/port">
      {isMobile ? (
        <Mobile />
      ) : (
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='about' element={<Profile />} />
            <Route path='skill' element={<Skill />} />
            <Route path='cretificate' element={<Cretificate />} />
            <Route path='weather' element={<Weather />} />
            <Route path='clone' element={<Clone />} />
            <Route path='branding' element={<Branding />} />
            <Route path='supreme' element={<Supreme />} />
            <Route path='uiux' element={<Uiux />} />
            <Route path='leica' element={<Leica />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App