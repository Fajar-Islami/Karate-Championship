import React from 'react';
import { MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <MDBPagination circle>
      <MDBPageItem disabled={currentPage === 1 ? true : false}>
        <a href='#' onClick={() => paginate(1)} className='page-link'>
          First
        </a>
      </MDBPageItem>
      <MDBPageItem disabled={currentPage === 1 ? true : false}>
        <MDBPageNav
          className='page-link'
          aria-label='Previous'
          onClick={() => paginate(currentPage - 1)}>
          &laquo;
        </MDBPageNav>
      </MDBPageItem>
      {pageNumbers.map((number) => (
        <MDBPageItem
          key={number}
          id={number}
          active={currentPage === number ? true : false}>
          <a href='#' onClick={() => paginate(number)} className='page-link'>
            {number}
          </a>
        </MDBPageItem>
      ))}
      <MDBPageItem disabled={currentPage === pageNumbers.length ? true : false}>
        <MDBPageNav
          className='page-link'
          aria-label='Next'
          onClick={() => paginate(currentPage + 1)}>
          &raquo;
        </MDBPageNav>
      </MDBPageItem>
      <MDBPageItem disabled={currentPage === pageNumbers.length ? true : false}>
        <a
          href='#'
          onClick={() => paginate(pageNumbers.length)}
          className='page-link'>
          Last
        </a>
      </MDBPageItem>
    </MDBPagination>
  );
};

export default Pagination;
