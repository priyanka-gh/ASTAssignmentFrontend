import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import UserTable from '../userTable/UserTable';
import PaginationButtons from '../paginationButtons/paginationButtons';
import ApiKey from '../apiKey/ApiKey';
import { fetchUserData } from '../../apiCalls/apiCalls';

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('table');
  const [userData, setUserData] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchUserData(1)
      .then(data => {
        setUserData(data?.users)
        setPages(data?.total_pages)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const updateUserData = (pageNumber) => {
    fetchUserData(pageNumber)
    .then(data => {
      setUserData(data?.users)
      setPages(data?.total_pages)
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className='dashboard'>
        <div className='sidebarContainer'>
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <h3 className='hey'>Hey There 👋  </h3>
        </div>
        <div className='rightSide'>
            {activeTab === 'update' ? (
              <ApiKey />
            ) : (
              <div className='dashboardContainer'>
                <UserTable userData={userData} />
                <PaginationButtons updateUserData={updateUserData} totalpages={pages}/>
              </div>
            )}
        </div>
      </div>
  );
};

export default Dashboard;