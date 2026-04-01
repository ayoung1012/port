import React from 'react'
import './Main.css'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Portfolio from './Portfolio'
import Skill from './Skill'

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로가 '/'가 아니라면 (즉, 특정 박스를 클릭했다면) 팝업을 보여줌
  const isPopupOpen = location.pathname !== '/';

  return (
    <div id='allbox'>
      <header className='header_title'>
      <h1>GWON AH YEONG</h1>
      </header>

      <div className='boardbox'>
        <div className='boardbox_i'>

          {/* 스타트 타일 */}
          <Link to='/portfolio' className='start'>
            <figure className='start_tile'>
            <img src="/port/img/start.png" alt="start" />
            </figure>
            <figure className='star'>
            <img src="/port/img/star.png" alt="star" />
            </figure>
            <p className='start_text'>START</p>
            <figure className='arrow'>
              <img src="/port/img/arrow.png" alt="arrow" />
            </figure>
          </Link>

          {/* 첫번째 타일 */}
          <div className='box1'>
            <figure className='box1_tile'>
              <img src="/port/img/1.png" alt="1" />
            </figure>
            <figure className='peo'>
              <img src="/port/img/peo.png" alt="peo" />
            </figure>
          </div>

          {/* 두번째 타일 */}
          <Link to="/about" className='box2'>
            <figure className='box2_tile'>
              <img src="/port/img/2.png" alt="2" />
            </figure>
            <figure className='girl'>
              <img src="/port/img/girl.png" alt="gril" />
            </figure>
            <h2 className='box2_text'>ABOUT</h2>
          </Link>

          {/* 세번째 타일 */}
          <Link to="/skill" className='box3'>
            <figure className='box3_tile'>
              <img src="/port/img/3.png" alt="3" />
            </figure>
            <figure className='jusa1'>
              <img src="/port/img/jusa1.png" alt="jusa1" />
            </figure>
            <h2 className='box3_text'>SKILL</h2>
            <figure className='jusa2'>
              <img src="/port/img/jusa2.png" alt="jusa2" />
            </figure>
          </Link>

          {/* 네번쨰 타일 */}
          <Link to="/cretificate" className='box4'>
            <figure className='box4_tile'>
              <img src="/port/img/4.png" alt="4" />
            </figure>
            <figure className='box4_text'>
              <img src="/port/img/CRETIFICATE.png" alt="CRETIFICATE"/>
            </figure>
            <figure className='tro'>
              <img src="/port/img/tro.png" alt="tro" />
            </figure>
          </Link>

          {/* 다섯번쨰 타일 */}
          <Link to='/weather' className='box5'>
            <figure className='box5_tile'>
              <img src="/port/img/5.png" alt="5" />
            </figure>
            <figure className='bagu1'>
              <img src="/port/img/bagu1.png" alt="bagu1" />
            </figure>
            <h2 className='box5_text'>WEATHER</h2>
          </Link>

          {/* 여섯번째 타일 */}
          <Link to='/clone' className='box6'>
            <figure className='box6_tile'>
              <img src="/port/img/6.png" alt="6" />
            </figure>
            <h2 className='box6_text'>CLONE CODING</h2>
            <figure className='colo'>
              <img src="/port/img/colo.png" alt="colo" />
            </figure>
          </Link>


          {/* 일곱번쨰 타일 */}
          <div className='box7'>
            <figure className='box7_tile'>
              <img src="/port/img/7.png" alt="7" />
            </figure>
            <figure className='pung'>
              <img src="/port/img/pung.png" alt="pung" />
            </figure>
            <figure className='gg'>
              <img src="/port/img/gg.png" alt="gg" />
            </figure>
          </div>

          {/* 여덟번쨰 타일 */}
          <Link to='/branding' className='box8'>
            <figure className='box8_tile'>
              <img src="/port/img/8.png" alt="8" />
            </figure>
            <figure className='ang'>
              <img src="/port/img/ang.png" alt="ang" />
            </figure>
            <h2 className='box8_text'>BRANDING</h2>
          </Link>

          {/* 아홉번째 타일 */}
          <Link to='/supreme' className='box9'>
            <figure className='box9_tile'>
              <img src="/port/img/9.png" alt="9" />
            </figure>
            <figure className='sup'>
              <img src="/port/img/sup.png" alt="sup" />
            </figure>
            <h2 className='box9_text'>SUPREME</h2>
          </Link>

        {/* 열번째 타일 */}
        <Link to='/uiux' className='box10'>
          <figure className='box10_tile'>
            <img src="/port/img/10.png" alt="10" />
          </figure>
          <figure className='wat'>
            <img src="/port/img/wat.png" alt="wat" />
          </figure>
          <h2 className='box10_text'>UI/UX</h2>
        </Link>

        {/* 열한번째 타일 */}
        <div className='box11'>
          <figure className='box11_tile'>
            <img src="/port/img/11.png" alt="11" />
          </figure>
          <figure className='hac'>
            <img src="/port/img/hac.png" alt="hac" />
          </figure>
          <figure className='pick'>
            <img src="/port/img/PICK.png" alt="PICK" />
          </figure>
        </div>

        {/* 열두번째 타일 */}
        <Link to='/leica' className='box12'>
          <figure className='box12_tile'>
            <img src="/port/img/12.png" alt="12" />
          </figure>
          <h2 className='box12_text'>LEICA</h2>
          <figure className='ca'>
            <img src="/port/img/ca.png" alt="ca" />
          </figure>
        </Link>

        {/* 열세번째 타일 */}
        <Link to='/contact' className='box13'>
          <figure className='box13_tile'>
            <img src="/port/img/13.png" alt="13" />
          </figure>
          <h2 className='box13_text'>CONTACT</h2>
          <figure className='heart_1'>
            <img src="/port/img/heart1.png" alt="heart1" />
          </figure>
          <figure className='heart_2'>
            <img src="/port/img/heart2.png" alt="heart2" />
          </figure>
        </Link>

        {/* contents 팝업 영역 */}
        {isPopupOpen && (
          <div className='contents open'>
            <div className='contents_i'>
              <figure>
                <img src="/port/img/contents.png" alt="contents" className='contents_img'/>
              </figure>
              <Outlet/>
            </div>
          </div>
        )}

        
        </div>
      </div>
    </div>
  )
}

export default Main