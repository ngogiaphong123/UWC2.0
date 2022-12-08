import React from 'react';
import { Link } from 'react-router-dom';
import './style/Sidebar.css';
// import { MdKeyboardBackspace } from "react-icons/md";

export default function Sidebar({ path }) {
    // const [__path, setPath] = useState("");
    // const navigate = useNavigate();
    // useEffect(() => {
    //     return navigate(__path)
    // },[__path])

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
                {/* <Link to='Home' className='item_name'><div className={onSelectColor('Home')}>Trang chủ</div></Link> */}
                <Link to='DSNV' className='item_name'><div className={onSelectColor('DSNV')}>DSNV</div></Link>
                <Link to='TB' className='item_name'><div className={onSelectColor('TB')}>Thông báo</div></Link>
                <Link to='Chat' className='item_name'><div className={onSelectColor('Chat')}>Trò chuyện</div></Link>
                <Link to='NV' className='item_name'><div className={onSelectColor('NV')}>Nhiệm vụ</div></Link>
            </div>
            <div className='sidebar__footer'>
                {/* <button
                    className='back__btn sidebar__item color__blue'
                    onClick={() => {
                        console.log(path);
                        let p = path.lastIndexOf('/');
                        let p2 = path.substr(0, p);
                        console.log(p2);
                        setPath(p2);
                    }}
                >
                    <MdKeyboardBackspace />  Trở về
                </button> */}
            </div>
        </div>
    );
}