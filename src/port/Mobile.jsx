import React, { useState } from 'react'
import './Main.css'
import './Mobile.css'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Mobile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 현재 경로가 '/'가 아니라면 팝업 노출
    const isPopupOpen = location.pathname !== '/';

    return (
        <div className='mo_allbox'>
            <header>
                <h1>GWON AH YEONG</h1>
            </header>

            <div className='mo_box'>

                <div className='contents_box1'>
                <Link to='/about' className='box1'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_g.png" alt="mo_g" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>ABOUT</p>
                    </div>
                </Link>

                <div className='box2'></div>

                <Link to='/skill' className='box3'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_j.png" alt="mo_j" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>SKILL</p>
                    </div>
                </Link>
                </div>

                <div className='contents_box2'>
                <Link to='/cretificate' className='box4'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_t.png" alt="mo_t" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>CRETIFICATE</p>
                    </div>
                </Link>

                <Link to='/weather' className='box5'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_b.png" alt="mo_b" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>WEATHER</p>
                    </div>
                </Link>

                <Link to='/clone' className='box6'>
                    <div className='b_text'>
                        <p>CLONE  <br /> CODING</p>
                    </div>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_c.png" alt="mo_c" />
                        </figure>
                    </div>
                </Link>
                </div>


                <div className='contents_box3'>
                <Link to='/branding' className='box7'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_a.png" alt="mo_a" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>BRANDING</p>
                    </div>
                </Link>

                <div className='box8'></div>

                <Link to='/supreme' className='box9'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_s.png" alt="mo_s" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>SUPREME</p>
                    </div>
                </Link>
                </div>



                <div className='contents_box4'>
                <Link to='/uiux' className='box10'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_w.png" alt="mo_W" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>UIUX</p>
                    </div>
                </Link>

                <Link to='/leica' className='box11'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_ca.png" alt="mo_ca" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>LEICA</p>
                    </div>
                </Link>

                <Link to='/contact' className='box12'>
                    <div className='b_img'>
                        <figure>
                            <img src="/port/img/mo_h.png" alt="mo_h" />
                        </figure>
                    </div>
                    <div className='b_text'>
                        <p>CONTACT</p>
                    </div>
                </Link>
                </div>

                {/* 모바일 팝업 영역: 경로가 '/'가 아닐 때만 노출 */}
                {isPopupOpen && (
                    <div className='contents open'>
                        <figure>
                            <img src="/port/img/mob_con.png" alt="mob_con" />
                        </figure>
                        <button type='button' onClick={() => navigate('/')}>닫기</button>
                        <div className='mo_outlet_box'>
                            <Outlet />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Mobile