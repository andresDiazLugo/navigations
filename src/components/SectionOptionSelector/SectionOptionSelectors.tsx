import React from 'react'
import {SectionOptionSelectorProps} from "../../interface/interface"
import {clase} from "../../utils/className"
import "./SectionOptionSlector.scss" 
export default function SectionOptionSelectors({option, isOpen}:SectionOptionSelectorProps) {
  return (
    <div className={clase("containerOption", !isOpen? "collapsed" : "")}>
        {
            option.map((e,i)=><li key={i}><div><e.icon size="23"/> <span>{e.nameOpiton}</span></div></li>)
        }
    </div>
  )
}
