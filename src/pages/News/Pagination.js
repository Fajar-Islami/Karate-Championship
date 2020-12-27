import React from "react";
import { MDBPagination, MDBPageItem } from "mdbreact";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <MDBPagination circle>
      <MDBPageItem disabled={currentPage === 1 ? true : false}>
        <span onClick={() => paginate(1)} className='page-link'>
          First
        </span>
      </MDBPageItem>
      <MDBPageItem disabled={currentPage === 1 ? true : false}>
        <span className='page-link' aria-label='Previous' onClick={() => paginate(currentPage - 1)}>
          &laquo;
        </span>
      </MDBPageItem>
      {pageNumbers.map((number) => (
        <MDBPageItem key={number} id={number} active={currentPage === number ? true : false}>
          <span onClick={() => paginate(number)} className='page-link'>
            {number}
          </span>
        </MDBPageItem>
      ))}
      <MDBPageItem disabled={currentPage === pageNumbers.length ? true : false}>
        <span className='page-link' aria-label='Next' onClick={() => paginate(currentPage + 1)}>
          &raquo;
        </span>
      </MDBPageItem>
      <MDBPageItem disabled={currentPage === pageNumbers.length ? true : false}>
        <span span onClick={() => paginate(pageNumbers.length)} className='page-link'>
          Last
        </span>
      </MDBPageItem>
    </MDBPagination>
  );
};

export default Pagination;
