import {useState} from "react"
import ButtonSlider from "../Buttons/ButtonSlider"
import SectionProfile from "../SectionProfile/SectionProfile"
import SectionOptionSelectors from "../SectionOptionSelector/SectionOptionSelectors"
import {FcAbout,FcAssistant,FcAddDatabase,FcAdvertising,FcAddressBook} from "react-icons/fc"
import {OptionSelctor} from "../../interface/interface"
import "./SliderMenu.scss"
import {clase} from "../../utils/className"
export default function SliderMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const optionsSelectors:OptionSelctor[] = [
    {
      icon : FcAbout,
      nameOpiton: "About"  
    },
    {
      icon : FcAssistant,
      nameOpiton: "Assitant"  
    },
    {
      icon : FcAddDatabase,
      nameOpiton: "dataBase"  
    },
    {
      icon : FcAbout,
      nameOpiton: "About"  
    },
    {
      icon : FcAdvertising,
      nameOpiton: "Advertising"  
    },
    {
      icon : FcAddressBook,
      nameOpiton: "Contacts"  
    },
  ]
  
  return (
    <nav className={clase("containerNav",!isOpen ? "collapsed": "")}>
        <div className="button">
          <ButtonSlider isOpen={isOpen} setIsOpen={setIsOpen}/>
            {/**we will place the button to open and close the navigation */}
        </div>
        <section>
            {/**  we will place the profile component*/}
          <SectionProfile isOpen={isOpen} />
        </section>
        <section>
          <SectionOptionSelectors option={optionsSelectors} isOpen={isOpen}/>
            {/**we will place the options selectors components */}
        </section>
    </nav>
  )
}
