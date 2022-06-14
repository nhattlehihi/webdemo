import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import logo from '../images/logo.svg'
const { Search } = Input;
const Navbar = ({toggle}) =>{
const onSearch = value => console.log(value);
        return (
                <nav className='navbar-card '
                role='navigation'
                >
                    <div className="div-logo">
                    <Link to='/' className='2xl:pl-32 md:pl-8'>
                        <img src={logo} alt="logo" />
                    </Link>
                    </div>
                    <div className=" cursor-pointer lg:hidden" onClick={toggle}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </div>
                    <div className="menu-navbar lg:flex hidden">
                        <div>
                        <Link className='nav-bar-item' to='/'>Home</Link>
                        <Link className='nav-bar-item' to='/shop'>About</Link>
                        <Link className='nav-bar-item' to='/services'>Service</Link>
                        <Link className='nav-bar-item' to='/menu'>Shop</Link>
                        </div>
                        <Search placeholder="Search" style={{ width: 200 }} />
                    </div>
                </nav>
                
        )
    };
export default Navbar;