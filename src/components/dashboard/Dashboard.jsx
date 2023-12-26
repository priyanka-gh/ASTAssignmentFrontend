import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import {faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import ApiKey from '../apiKey/apiKey';
import UserTable from '../userTable/UserTable';
import PaginationButtons from '../paginationButtons/paginationButtons';

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('table');
  const [userData, setUserData] = useState([]);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Error during sign-out:", err);
    }
  };

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };


  return (
    <div className='dashboard'>
      <button className='offBtn'>
        <FontAwesomeIcon className='offBtnIcon' icon={faPowerOff} onClick={logOut} />
      </button>
      <div className='dashboard_container'>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className='userTable'>
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
