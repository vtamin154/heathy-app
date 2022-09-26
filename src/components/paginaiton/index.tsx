import React, { useEffect, useState } from 'react';

interface PropsPagination {
  // option: number;
  // totalRegister: number;
  totalPages:number;
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
  },[currentPage, totalPages]);

  // console.log('show' + showChoices, 'cur' + currentPage, 'total'+ totalPages)

  return (
    <ul className="list-unstyled d-flex align-items-center mt-3 ">
      <li
        role="button"
        className={`mt-3 ${
          currentPage < 2 ? 'text-secondary' : 'text-primary'
        }`}
        onClick={currentPage === 1 ? () => {} : () => handleCurrentPage(currentPage-1)}
      >
        <p
          className="border px-3 py-2 rounded-start"
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
              role="button"
              className="border px-3 py-2 text-white bg-primary"
              onClick={() => handleCurrentPage(index + 1)}
            >
              {index + 1}
            </li>
          );
        // hien thi trang cuoi
        if (index === showChoices - 1)
          return (
            <li
              key={index}
              role="button"
              className="border px-3 py-2 text-primary"
              onClick={() => handleCurrentPage(index + 1)}
            >
              {totalPages}
            </li>
          );

        if (
          currentPage < totalPages - 3 &&
          index === showChoices - 2
        )
          return (
            <li
              key={index}
              role="button"
              className="border px-3 py-2 text-primary"
            >
              ...
            </li>
          );

          //hien thi cac trang
        return (
          <li
            key={index}
            role="button"
            className="border px-3 py-2 text-primary"
            onClick={() => handleCurrentPage(index + 1)}
          >
            {index + 1}
          </li>
        );
      })}

      <li
        role="button"
        className={`mt-3 ${
          currentPage === totalPages ? 'text-secondary' : 'text-primary'
        }`}
        onClick={
          currentPage === totalPages ? () => {} : () => handleCurrentPage(currentPage + 1)
        }
      >
        <p
          className="border px-3 py-2 rounded-end"
          aria-disabled={currentPage === totalPages ? true : false}
        >
          Next
        </p>
      </li>
    </ul>
  );
};

export default Pagination;
