import React,{useState, useEffect} from 'react'
import {fetchUserData } from '../../apiCalls/apiCalls';
import "./paginationButtons.css"
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaginationButtons = ({ updateUserData, totalpages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = (pageNumber) => {
    if(pageNumber == 1) return;
    console.log('prev')
    pageNumber--;
    setCurrentPage(pageNumber);
    updateUserData(pageNumber);
  }
  const nextPage = (pageNumber) => {
    if(pageNumber == totalpages) return;
    console.log('next')
    pageNumber++;
    setCurrentPage(pageNumber);
    updateUserData(pageNumber);
  }
  return (
    <div className="paginationButtons">
        <button className='pagBtn' onClick={() => prevPage(currentPage)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faBackward} />
        </button>
        <span>{`Page ${currentPage} of ${totalpages}`}</span>
        <button className='pagBtn' onClick={() => nextPage(currentPage)} disabled={currentPage === totalpages}>
        <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default PaginationButtons