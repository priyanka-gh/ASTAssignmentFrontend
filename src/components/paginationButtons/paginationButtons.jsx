import React,{useState, useEffect} from 'react'
import { fetchAllUsers, fetchUserData } from '../../apiCalls/apiCalls';
import "./paginationButtons.css"
import { faBackward, faForward, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaginationButtons = ({ updateUserData }) => {
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1 as a default
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);
    
    useEffect(() => {
      fetchAllUsers()
        .then(total => setTotalPages(total))
        .catch(error => console.error('Error fetching total pages:', error));
    }, []);

    useEffect(() => {
        fetchUserData(currentPage)
        .then(data => {
            setUserData(data)
            updateUserData(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [currentPage]);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
  
      fetchUserData(newPage)
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  return (
    <div className="paginationButtons">
        <button className='pagBtn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faBackward} />
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className='pagBtn' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default PaginationButtons