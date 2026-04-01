import React from 'react'
import './Contents.css'

const Weather = () => {
  return (
    <div className='weather'>
      <div className='weather_i'>
        <div className='weather_img'>
          <img src="./img/we.png" alt="we" />
        </div>
        <div className='weather_box'>
          <div className='weather_text'>
            <p>날씨 확인이 일상의 놀이가 되는 곳 , <br />레트로 테마의 날씨 애플리케이션입니다.</p>
          </div>
          <div className='weather_icon'>
            <div className='link'>
              <a href="https://ayoung1012.github.io/weather/">
                <figure>
                  <img src="./img/Link.png" alt="Link" />
                </figure>
              </a>
            </div>
            <div className='git'>
              <a href="https://github.com/ayoung1012/weather">
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

export default Weather