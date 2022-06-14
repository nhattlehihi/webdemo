import React from 'react';
import {Link} from 'react-router-dom';
import { Input } from 'antd';
const { Search } = Input;

const Dropdown = ({isOpen,toggle}) => {
const onSearch = value => console.log(value);
    return (
        <div className={isOpen?'dropdownmenu':'hidden'}
            onClick={toggle}
        >
                <Link className='dropdown-items' to='/'>Home</Link>
                <Link className='dropdown-items' to='/menu'>Menu</Link>
                <Link className='dropdown-items' to='/services'>Service</Link>
                <Link className='dropdown-items' to='/shop'>Shop</Link>
                <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> 
        </div>
    );
};

export default Dropdown;