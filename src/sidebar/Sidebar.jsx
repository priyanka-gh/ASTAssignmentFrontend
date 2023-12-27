import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faBars, faGear, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { fetchUserData} from '../apiCalls/apiCalls';
import { signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab, onTabChange }) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const activate = (state) => {
    onTabChange(state);
  }

  const logOut = async () => {
    console.log("logout")
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error("Error during sign-out:", err);
    }
  };


  return (
    <div className='sidebar'>
      <div className='insideSidebar'>
      <div className='logo'>
        <FontAwesomeIcon className='logoIcon' icon={faSlack} />
        <h4>AST</h4>
      </div>
      <h5 className={activeTab === 'table' ? 'activeTab' : 'notActive'} onClick={() => activate('table')}>
      <FontAwesomeIcon icon={faHouse} />User Table
      </h5>
      <h5 className={activeTab === 'update' ? 'activeTab' : 'notActive'} onClick={() => activate('update')}>
      <FontAwesomeIcon icon={faGear} />Update API Key
      </h5>
      </div>
      <div className='logoutContainer' onClick={() => {
          logOut();
        }}>
        <FontAwesomeIcon className='logout' icon={faRightFromBracket} />
        <h3 className="">Log Out</h3>
      </div>
    </div>
  )
}

export default Sidebar;
