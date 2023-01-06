import React from 'react'
import {clase} from "../../utils/className"
import {SectionProfileProps} from "../../interface/interface"
import "./SectionProfile.scss"
export default function SectionProfile({isOpen}:SectionProfileProps) {
  return (
    <div className={clase("containerProfile",!isOpen ? "collapsed":"")}>
            <img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?tf=3840x' alt='imagen de perfil'/>
        <div>
            <span>mona_lisa231</span>
        </div>
    </div>
  )
}
