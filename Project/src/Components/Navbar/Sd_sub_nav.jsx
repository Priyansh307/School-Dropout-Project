import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './CSS/Sd_sub_nav.css'



const Sd_sub_nav = () => {

  return (
    <div>
      <div className='sd_nav'>
        <ul className='sd_ul'>
            <li><Link to="/standard-wise-details">Standard Wise Details</Link></li>
            <li><Link>Attendance Section</Link></li>
            <li><Link>Marks Section</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sd_sub_nav
