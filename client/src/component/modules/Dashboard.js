import React from "react";
import {  Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from "../UI/Sidebar";
import './styles/Dashboard.css';
import ListEmployee from "./ListEmployee";
import Task from "./Task";

export default function Dashboard(){
    let location = useLocation();
    console.log(location);
    return (
        <div className="Dashboard">
            <div className="sidebar">
                <Sidebar path = {location.pathname}/>
            </div>
            <div className="element">
                <Routes>
                    <Route path = 'DSNV' element = {<ListEmployee/>}/>
                    <Route path = 'NV' element = {<Task/>}/>
                </Routes>
            </div>
        </div>
    );
}