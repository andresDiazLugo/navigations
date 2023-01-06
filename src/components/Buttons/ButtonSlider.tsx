import React from 'react'
import {FaHamburger} from "react-icons/fa"
import {ButtonProps} from "../../interface/interface"
import {clase} from "../../utils/className"
import "./ButtonSlider.scss"
export default function ButtonSlider({isOpen,setIsOpen}:ButtonProps) {
  return <button className={clase("containerbutton",!isOpen ? "collapsed": "")} onClick={()=>setIsOpen(!isOpen)}> 
            <div className='s1'></div>
            <div className='s2'></div>
         </button>
}
