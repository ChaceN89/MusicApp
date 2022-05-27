import React from 'react'

import { BsHeadphones, BsMusicNoteBeamed } from 'react-icons/bs' // icons
import { Link, useNavigate } from 'react-router-dom' // routing
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Header() {
    //javascript here to determin login status and submition of search bars etc

  return (
    <header>
        <div>
        <Link to='/'>
            <BsHeadphones/> Dashboard
        </Link>
        </div>
        <div>
        <Link to='/login'>
            <BsMusicNoteBeamed/> Login
        </Link>
        </div>
    </header>

  )
}

export default Header