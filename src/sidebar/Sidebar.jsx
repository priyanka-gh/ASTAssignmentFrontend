import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { fetchUserData} from '../apiCalls/apiCalls';

const Sidebar = ({ activeTab, onTabChange }) => {
  const [userData, setUserData] = useState([]);

  const activate = (state) => {
    onTabChange(state);
  }

  useEffect(() => {
    fetchUserData()
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='sidebar'>
      <div className='insideSidebar'>
      <div className='logo'>
        <FontAwesomeIcon className='logoIcon' icon={faSlack} />
        <h4>AST</h4>
      </div>
      <h5 className={activeTab === 'table' ? 'activeTab' : 'notActive'} onClick={() => activate('table')}>
        <FontAwesomeIcon icon={faBars} />User Table
      </h5>
      <h5 className={activeTab === 'update' ? 'activeTab' : 'notActive'} onClick={() => activate('update')}>
        <FontAwesomeIcon icon={faBars} />Update API Key
      </h5>
      </div>
    </div>
  )
}

export default Sidebar;
