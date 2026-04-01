import React from 'react'
import './Contents.css'

const Supreme = () => {
  return (
    <div className='supreme'>
      <div className='supreme_i'>
        <div className='supreme_img'>
          <figure>
            <img src="./img/supreme.png" alt="supreme" />
          </figure>
        </div>

        <div className='supreme_box'>
          <div className='supreme_text'>
            <p>SUPREME은 미국의 스트릿 패션 브랜드이며 슈프림(supreme)의뜻은 <br/>'최고의(ultimate),최상의(greatest)'라는 <br /> 의미를 지니고 있고 스트릿 패션의 끝판왕이라 불리며 희귀성으로 유명한 브랜드입니다.</p>
          </div>
          <div className='supreme_icon'>
            <div className='link'> 
              <a href="https://ayoung1012.github.io/supreme/">
              <figure>
                <img src="./img/Link.png" alt="link" />
              </figure>
              </a>
            </div>
            <div className='git'>
              <a href="https://github.com/ayoung1012/supreme">
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

export default Supreme