import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import './styles.scss'

const MAX_ITEMS = 7;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="pagination">
      <li>
        <button
          className="anterior"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <IoIosArrowBack />
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'pagination__item--active'
                  : null
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
        className="proximo"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <IoIosArrowForward />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
