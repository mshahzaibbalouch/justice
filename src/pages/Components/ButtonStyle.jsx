import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonStyle = ({title}) => {
  return (
    <div>
        <NavLink to={'/'} className={'btn w-100 btn-primary text-uppercase'}>{title}</NavLink>
    </div>
  )
}

export default ButtonStyle;