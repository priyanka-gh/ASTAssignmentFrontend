import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import {faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import UserTable from '../userTable/UserTable';
import PaginationButtons from '../paginationButtons/paginationButtons';
import ApiKey from '../apiKey/ApiKey';

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('table');
  const [userData, setUserData] = useState([]);


  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };


  return (
    <div className='dashboard'>
        <div className='sidebarContainer'>
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <h3 className='hey'>Hey There 👋  </h3>
        </div>
        <div className='rightSide'>
          <div className='dashboardContainer'>
            {activeTab === 'update' ? (
              <ApiKey />
            ) : (
              <UserTable userData={userData} />
            )}
          </div>
          <PaginationButtons updateUserData={updateUserData} />
        </div>
      </div>
  );
};

export default Dashboard;