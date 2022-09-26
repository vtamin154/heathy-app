import React from 'react';
import { Link } from 'react-router-dom';
import { TValuesForm } from '../../assets/type';

interface PropsTable {
  data: TValuesForm[];
  handleRemove: (id: string) => void;
}

const Table: React.FC<PropsTable> = ({ data, handleRemove }) => {
  const handleRemoveItem = (id: string) => {
    const isConfirm = window.confirm(
      'Do you want to delete form with ID:' + id
    );
    if (isConfirm) handleRemove(id);
  };

  return (
    <table className="table">
      <thead>
        <tr className="table-success">
          <th>#</th>
          <th>Form ID</th>
          <th>Full Name</th>
          <th>Object</th>
          <th>Date of birth</th>
          <th>Gender</th>
          <th>Contact Province</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/edit/${row.id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  className="btn"
                  onClick={() => handleRemoveItem(row.id)}
                >
                  <i className="fa-solid fa-trash-can text-danger"></i>
                </button>
                {row.id}
              </td>
              <td>{row.fullname}</td>
              <td>{row.nationality}</td>
              <td>{new Date(row.birth).toLocaleDateString('en-US')}</td>
              <td>{row.gender}</td>
              <td>{row.province}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center fs-5" colSpan={7}>
             No Declarations
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
