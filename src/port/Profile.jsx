import React from 'react'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile_i'>
        <div className='profile_img'>
          <figure>
            <img src="./img/profile.jpg" alt="profile" />
          </figure>
        </div>
        <div className='profile_text'>
        <p>이름 : 권아영</p>
        <p>생년월일 : 1999년 10월 12일</p>
        <p>이메일 : axyxxo@naver.com</p>
        <p>전화번호 : 010-4821-3344</p>
        </div>
      </div>

    </div>
  )
}

export default Profile