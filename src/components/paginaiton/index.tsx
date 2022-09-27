import React, { useEffect, useState } from 'react';

interface PropsPagination {
  // option: number;
  // totalRegister: number;
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (curPage: number) => void;
}

const Pagination: React.FC<PropsPagination> = ({
  // option,
  // totalRegister,
  totalPages,
  currentPage,
  handleCurrentPage,
}) => {
  const [showChoices, setShowChoices] = useState(3);
  // const totalPages = Math.ceil(totalRegister / option);

  useEffect(() => {
    currentPage > totalPages - 4
      ? setShowChoices(totalPages)
      : setShowChoices(currentPage + 4);
  }, [currentPage, totalPages]);

  // console.log('show' + showChoices, 'cur' + currentPage, 'total'+ totalPages)

  return (
    <ul className="list-unstyled d-flex align-items-center mt-3 ">
      <li
        className={`mt-3`}
        onClick={
          currentPage === 1
            ? () => {}
            : () => handleCurrentPage(currentPage - 1)
        }
      >
        <p
          className={`border rounded-start ${
            currentPage < 2 ? 'text-secondary' : 'text-primary btn-outline-light'
          }`}
          style={{ padding: '0.45rem 0.7rem' }}
          aria-disabled={currentPage < 2 ? true : false}
        >
          Previous
        </p>
      </li>

      {[...new Array(showChoices)].map((_, index) => {
        //active trang hien tai
        if (index === currentPage - 1)
          return (
            <li
              key={index}
              className="border"
              onClick={() => handleCurrentPage(index + 1)}
            >
              <button
                type="button"
                className="btn bg-primary text-white rounded-0"
                style={{ padding: '0.45rem 0.7rem' }}
              >
                {index + 1}
              </button>
            </li>
          );
        // hien thi trang cuoi
        if (index === showChoices - 1)
          return (
            <li
              key={index}
              className="border "
              onClick={() => handleCurrentPage(index + 1)}
            >
              <button
                type="button"
                className="btn btn-outline-light text-primary rounded-0"
                // style={{ padding: '0.4rem 0.7rem' }}
              >
                {totalPages}
              </button>
            </li>
          );

        if (currentPage < totalPages - 3 && index === showChoices - 2)
          return (
            <li key={index} className="border text-primary" 
            style={{ padding: '0.45rem 0.7rem' }}
            >
              ...
            </li>
          );

        //hien thi cac trang
        return (
          <li
            key={index}
            className="border"
            onClick={() => handleCurrentPage(index + 1)}
            // style={{ padding: '0.4rem 0.7rem' }}
          >
            <button
              type="button"
              className="btn btn-outline-light text-primary rounded-0"
            >
              {index + 1}
            </button>
          </li>
        );
      })}

      <li
        className={`mt-3`}
        onClick={
          currentPage === totalPages
            ? () => {}
            : () => handleCurrentPage(currentPage + 1)
        }
      >
        <p
          className={`border rounded-end ${
            currentPage === totalPages ? 'text-secondary' : 'text-primary btn-outline-light'
          }`}
          style={{ padding: '0.45rem 0.7rem' }}
          aria-disabled={currentPage === totalPages ? true : false}
        >
          Next
        </p>
      </li>
    </ul>
  );
};

export default Pagination;
