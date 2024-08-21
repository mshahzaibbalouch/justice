import * as React from 'react';
import { Facebook, Linkedin, Telephone, Twitter, Youtube } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
const TopBar = () => {

  return (
    <div className='theme-bg py-2' id="topbar">
      <div className='container-sm'>
        <div className="text-end">
          <div className='gap-2'>
            <NavLink className={'text-decoration-none mx-2 fs-4'} to={""}><Twitter /></NavLink>
            <NavLink className={'text-decoration-none mx-2 fs-4'} to={""}><Linkedin /></NavLink>
            <NavLink className={'text-decoration-none mx-2 fs-4'} to={""}><Youtube /></NavLink>
            <NavLink className={'text-decoration-none mx-2 fs-4'} to={""}><Facebook /></NavLink>
            <NavLink className={'text-decoration-none mx-2 btn btn-outline-white'} to={"/"}>Pay Order</NavLink>
            <NavLink className={'text-decoration-none mx-2'} to={"tel:+6454680927"}><Telephone /> 0645 468 0927</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;