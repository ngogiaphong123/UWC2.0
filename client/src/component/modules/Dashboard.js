import React from "react";
import {  Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from "../UI/Sidebar";
import './styles/Dashboard.css';
import ListEmployee from "./ListEmployee";
<<<<<<< HEAD
import Task from "./Task";

=======
import Notification from "./Notification";
import CollectorCalendar from "./CollectorCalendar";
import JanitorCalendar from "./JanitorCalendar";
>>>>>>> 8b60b26adea77dd82db1a0bbd6acc79164a9efa4
export default function Dashboard(){
    let location = useLocation();
    // console.log(location);
    return (
        <div className="Dashboard">
            <div className="sidebar">
                <Sidebar path = {location.pathname}/>
            </div>
            <div className="element">
                <Routes>
                    <Route path='' element={<ListEmployee />} />
                    <Route path = 'DSNV' element = {<ListEmployee/>}/>
<<<<<<< HEAD
                    <Route path = 'NV' element = {<Task/>}/>
=======
                    <Route path = 'DSNV/collectorCalendar' element = {<CollectorCalendar/>}/>
                    <Route path = 'DSNV/janitorCalendar' element = {<JanitorCalendar/>}/>
                    <Route path = 'TB' element = {<Notification/>}/>
                    {/* <Route path = 'NV' element = /> */}
>>>>>>> 8b60b26adea77dd82db1a0bbd6acc79164a9efa4
                </Routes>
            </div>
        </div>
    );
}