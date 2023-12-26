import React from 'react'
import { faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteUser, blockUser } from '../../apiCalls/apiCalls';
import "./UserTable.css"

const UserTable = ({userData}) => {
    const handleDeleteUser = (telegramId) => {
        deleteUser(telegramId)
          .catch(error => console.error('Error deleting user:', error));
        window.location.reload()
      };
    
      const handleBlockUser = (telegramId) => {
        blockUser(telegramId)
        .catch(error => console.error('Error blocking user:', error));
        window.location.reload()

      }

  return (
    <div className='tableContainer'>
        <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Is Blocked</th>
            <th>Is Subscribed</th>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.isBlocked ? 'Yes' : 'No'}</td>
              <td>{user.isSubscribed ? 'Yes' : 'No'}</td>
              <td>{user.userName}</td>
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
    </div>
  )
}

export default UserTable