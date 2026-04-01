import React from 'react'

const Clone = () => {
  return (
    <div className='clone'>
      <div className='clone_i'>
        <div className='clone_img'>
          <figure>
            <img src="./img/hoban.png" alt="hoban" />
          </figure>
        </div>
          <div className='clone_box'>
          <div className='clone_text'>
            <p>호반문화재단은 문화예술 생태계 구축과 예술 <br /> 대중화를 위해 아티스트의 창작 활동을 지원하고, <br />
            지역 간 문화 격차 해소에 앞장서는 열린 플랫폼입니다.</p>
          </div>
          <div className='clone_icon'>
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

export default Clone