import React from 'react';
import { Link } from 'react-router-dom';
import './style/Sidebar.css';


export default function Sidebar({ path }) {
    console.log(path);

    const onSelectColor = (item) => {
        let p = `/Dashboard/${item}`;
        if (path === '/Dashboard' || path !== p) {
            return 'sidebar__item';
        }
        return 'sidebar__item color__blue'
    }

    return (
        <div className='sidebar__'>
            <div className='sidebar_ctn'>
                <Link to='Home' className='item_name'><div className={onSelectColor('Home')}>Trang chủ</div></Link>
                <Link to='DSNV' className='item_name'><div className={onSelectColor('DSNV')}>DSNV</div></Link>
                <Link to='TB' className='item_name'><div className={onSelectColor('TB')}>Thông báo</div></Link>
                <Link to='Chat' className='item_name'><div className={onSelectColor('Chat')}>Trò chuyện</div></Link>
                <Link to='NV' className='item_name'><div className={onSelectColor('NV')}>Nhiệm vụ</div></Link>
            </div>
        </div>
    );
}