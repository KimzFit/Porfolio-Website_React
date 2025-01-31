import React from 'react'

const ThemeItem = ({img , color, changeColor}) => {
  return (
    <img src={img} className='theme__img' onClick={()=> changeColor(color)}/>
  )
}

export default ThemeItem