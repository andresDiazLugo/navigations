

export interface OptionSelctor{
    icon:any,
    nameOpiton:string
}

export interface SectionOptionSelectorProps{
    option:OptionSelctor[],
    isOpen:boolean
}

export interface SectionProfileProps{
    isOpen:boolean
}  

export interface ButtonProps{
    isOpen:boolean,
    setIsOpen:(isOpne:boolean)=>void
}