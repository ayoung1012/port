import React from 'react'
import './Contents.css'


const Leica = () => {
  return (
    <div className='leica'>
      <div className='leica_i'>

        <div className='leica_img'>
          <figure>
            <img src="./img/leica.png" alt="leica" />
          </figure>
        </div>

          <div className='leica_box'>
            <div className='leica_text'>
              <p> LEICA는 카메라를 대표하는 브랜드이며, <br />
               지난 수십년 간의 경험, 타협하지 않는 높은  <br /> 퀄리티 스탠더드, 전세계 전문가,유저와의 소통을 통한 혁신적인 발전한 브랜드입니다.</p>
            </div>
            <div className='leica_icon'>
              <div className='link'>
                <a href="https://ayoung1012.github.io/leica/">
                <figure>
                  <img src="./img/Link.png" alt="link" />
                </figure>
                </a>
              </div>

              <div className='git'>
                <a href="https://github.com/ayoung1012/leica">
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

export default Leica