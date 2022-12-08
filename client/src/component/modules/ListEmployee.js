import './styles/ListEmployee.css'
import { FaFilter, FaSortAmountUp } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri"
//1 props gồm Url, Name, State, Dateonline, Timeonline, Group, Type
function EmployeeInfor(props) {
    let TypeClass = 'employeeinfor-jobtype'
    let StateClass = 'employeeinfor-state-icon'
    if (props.State === 'Bận') StateClass = 'employeeinfor-state-icon-1'
    if (props.Type === 'COLLECTOR') TypeClass = 'employeeinfor-jobtype-1'
    else if (props.Type === 'JANITOR') TypeClass = 'employeeinfor-jobtype-2'
    return (
        <div className='employeeinfor-wrap'>
            <div className='employeeinfor-col1'>
                <div className='employeeinfor-img'>
                    <img className='employee-img' src={props.Url} alt='avatar'></img>
                </div>
            </div>
            <div className='employeeinfor-col2'>
                <div className='employeeinfor-name'>
                    {props.Name}
                </div>
                <div className='employeeinfor-state'>
                    <div className={StateClass}></div>
                    <div className='employee-state'>{props.State}</div>
                </div>
            </div>
            <div className='employeeinfor-col3'>
                {props.Group}
            </div>
            <div className='employeeinfor-col4'>
                <div className='employeeinfor-date'>
                    {props.Dateonline}
                </div>
                <div className='employeeinfor-time'>
                    {props.Timeonline}
                </div>
            </div>
            <div className='employeeinfor-col5'>
                <div className={TypeClass}>
                    {props.Type}
                </div>
            </div>
            <div className='employeeinfor-col6'>
                <RiMore2Fill className='employeeicon-3dot' size={30} />
            </div>
        </div >
    )
}
function ListEmployee() {
    return (
        <div className='listemployee-wrap'>
            <div className='listemployee-col1'>
            </div>
            <div className='listemployee-col1'>
                <div className='listemployee-header'>
                    <div className='listemployee-header-1'>
                        Danh sách nhân viên
                    </div>
                    <div className='listemployee-header-2'>
                        <div className='listemployee-header-sort'>
                            <div className='listemployee-sort'>Sort</div>
                            <FaSortAmountUp />
                        </div>
                        <div className='listemployee-header-filter'>
                            <div className='listemployee-filter'>Filter</div>
                            <FaFilter />
                        </div>
                    </div>
                </div>
                <div className='listemployee-1'>
                    <div className='listemployee-title'>
                        <div className='employeeinfor-col1'></div>
                        <div className='employeeinfor-col2'>
                            Tên nhân viên
                        </div>
                        <div className='employeeinfor-col3'>
                            Nhóm
                        </div>
                        <div className='employeeinfor-col4'>
                            Date
                        </div>
                        <div className='employeeinfor-col5'>
                            Type
                        </div>
                        <div className='employeeinfor-col6'></div>
                    </div>
                    <EmployeeInfor Url='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/254934762_1495378747514937_1789751764774909895_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=q9IabUvzyCkAX9M5qj-&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfC9OAcPT_-zTiFnaXPLWwFJwaRSaFjsooYlQXELTFgZkQ&oe=63921107' Name='Lâm Điền Chinh' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/284236746_1472332759866746_7286972288137256893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fT4je0z_49AAX9odBSW&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAN2cgqWGkEYDNGRy1I0mSnDiF-jS9Q7DIPg5YtwHshtQ&oe=639292CE' Name='Hà Việt Đức' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://scontent.fsgn13-3.fna.fbcdn.net/v/t31.18172-8/883636_150884578611082_1416228407169249202_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=68LV9NThNZYAX-LPw5c&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCKDVIE9cq-7S8fUMUdVZfLG_-f9J5o0nweK15FJU5gJQ&oe=63B56104' Name='Nguyễn Lê Minh Bảo' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/241165952_1026387737900382_1868740738965933353_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=6hPH_Do9w7gAX_Bt3bx&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfBfqNuERhr6cHNO4lQ4Kj9SBLwXkty4g8_3vyYUvBiy-w&oe=6392BE3A' Name='Nguyễn Minh Mỹ' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/81331171_761868444289043_4413290011462467584_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=n7m_N9qr5dsAX9U0pqi&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfBQEJpSag6Re4SlcgtEecPYg50cA3HXHYaXgAa6HfU2lA&oe=63B5913D' Name='Hồ Đức Hưng' State='Bận' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/120356166_2440643712911870_6782207268216428328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=ctgf0ihdmMYAX9PsH_9&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfC5Xo-CQWcJhTuo3F213DmPvzv0_Uk-isAArdFz-m5igg&oe=63B59569' Name='Ngô Gia Phong' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/214121599_1446056779062324_6045996696883671384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=w8rYs-Afj0gAX-jJA38&tn=hg5fY3A91yeyguVJ&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfALNYLVzBh7HJymcT6BYoaXQN2UGmBud6WCHB2TLqybtA&oe=639224CA' Name='Lê Trí Nguyên' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                </div>
            </div>
        </div>
    )
}
export default ListEmployee;