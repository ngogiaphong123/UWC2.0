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
                <div className='sidebar__item'>Danh sách nhân viên</div>
                <Link to='DSNV' className='item_name'><div className={onSelectColor('DSNV')}>DSNV</div></Link>
                <div className='sidebar__item'>Item1</div>
                <div className='sidebar__item'>Item1</div>
                <div className='sidebar__item'>Item1</div>
            </div>
        </div>
    );
}