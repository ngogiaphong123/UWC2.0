import style from './styles/ListEmployee.css'
import { FaFilter, FaSortAmountUp } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri"
//1 props gồm Url, Name, State, Dateonline, Timeonline, Group, Type
function EmployeeInfor(props) {
    let TypeClass = 'employeeinfor-jobtype'
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
                    <div className='employeeinfor-state-icon'></div>
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
                <RiMore2Fill className='employeeicon-3dot' size={30}/>
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
                            <div className='listemployee-filter'>Filer</div>
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
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='BACK OFFICIER' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='COLLECTOR' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                    <EmployeeInfor Url='https://bucket.nhanh.vn/store3/92233/ps/20221028/F7N3535_1__1_.jpg' Name='Lâm Điền Chinh' State='Online' Dateonline='May 26, 2019' Timeonline='6:30 PM' Group='None' Type='JANITOR' />
                </div>
            </div>
        </div>
    )
}
export default ListEmployee;