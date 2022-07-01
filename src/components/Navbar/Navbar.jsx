import React from 'react'
import style from './styles.module.css'

function Navbar() {
  return (
    <div className={style.navbar}>
      <img className={style.logo} src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix logo" />
      <img className={style.avatar} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="avatar" />
    </div>
  )
}

export default Navbar