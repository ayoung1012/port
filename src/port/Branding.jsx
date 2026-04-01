import React from 'react'
import './Contents.css'

const Branding = () => {
  return (
    <div className='branding'>
      <div className='branding_i'>
        <div className='branding_img'>
          <figure>
            <img src="./img/branding.png" alt="branding" />
          </figure>
        </div>
      <div className='branding_box'>
        <div className='branding_text'>    
        <p>ANG. 는 패션의류를 판매하는 브랜드이며, <br />
          일상생활에서 편하고 쉽게 입을수 있는 컨셉들과 독특한 패턴을 이용하여 다양성을 추구하는 옷을 기획하여 좋은 퀄리티와 가격으로 만족감을 주는 브랜드입니다.</p>
        </div>
        <div className='branding_icon'>
          <div className='link'>
            <a href="https://ayoung1012.github.io/branding/">
            <figure>
              <img src="./img/Link.png" alt="link" />
            </figure>
            </a>
          </div>
          <div className='git'>
            <a href="https://github.com/ayoung1012/branding">
            <figure>
              <img src="./img/github.png" alt="git" />
            </figure>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Branding