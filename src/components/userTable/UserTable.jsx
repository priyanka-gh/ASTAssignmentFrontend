import React from 'react'
import { faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteUser, blockUser } from '../../apiCalls/apiCalls';
import "./UserTable.css"

const UserTable = ({userData}) => {

  const handleDeleteUser = (telegramId) => {
      deleteUser(telegramId)
        .catch(error => console.error('Error deleting user:', error));
  };
    
  const handleBlockUser = (telegramId) => {
    blockUser(telegramId)
    .catch(error => console.error('Error blocking user:', error));
  }

  return (
        <table>
        <thead>
          <tr>
            <th>FULL NAME</th>
            <th>BLOCKED STATUS</th>
            <th>SUBSCRIPTION STATUS</th>
            <th>USERNAME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td><div className={user.isBlocked ? 'blocked bullet':'unblocked bullet'}>{user.isBlocked ? 'Blocked' : 'Not Blocked'}</div></td>
              <td><div className={user.isSubscribed ? 'active bullet' : 'inactive bullet'}>{user.isSubscribed ? 'Active' : 'Inactive'}</div></td>
              <td>{user.userName || 'N/A'}</td>
              <td>
                <div className='icons'>
                  <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => handleDeleteUser(user.telegramId)}/>
                  <FontAwesomeIcon className='icon' icon={faBan} onClick={() => handleBlockUser(user.telegramId)}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default UserTable