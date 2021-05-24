import React from 'react';
import { Link } from 'gatsby';

import { PaginationStyled } from './styled';

const Pagination = ({ pageSize, totalCount, currentPage, skip, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const allPages = Array.from({ length: totalPages });

  return (
    <PaginationStyled>
      <Link
        to={`/${base}${hasPrevPage ? `/${prevPage}` : ''}`}
        disabled={!hasPrevPage}
      >
        &#8592; Prev
      </Link>

      {allPages.map((_, idx) => (
        <Link to={`/${base}/${idx + 1}`}>{idx + 1}</Link>
      ))}

      <Link to={`/${base}/${nextPage}`} disabled={!hasNextPage}>
        Next &#8594;
      </Link>
    </PaginationStyled>
  );
};

export default Pagination;
