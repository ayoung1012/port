import React from 'react'
import './Contents.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact_i'>
            <div className='call'>
                <a href="tel:010-4821-3344">
            <figure>
                <img src="./img/call.png" alt="call" />
            </figure>
                </a>
            </div>
            <div className='insta'>
                <a href="https://www.instagram.com/axyxxo_" target='blank'>
                <img src="./img/insta.png" alt="insta" />
                </a>
            </div>

            <div className='kakao'>
                <a href="https://open.kakao.com/o/s392Ujni">
                <img src="./img/talk.png" alt="talk" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact