import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemPerPage from '../components/itemPerPage';
import Pagination from '../components/paginaiton';
import Table from '../components/table';
import { itemPerPage } from '../assets/data';
import { Form, Formik } from 'formik';
import { initialListRegister } from '../assets/initial';

const ListRegister = () => {
  const listRegister = JSON.parse(
    localStorage.getItem('register-form') || '[]'
  );

  const [search, setSearch] = useState('');
  const [registers, setRegisters] = useState(listRegister);
  const [showItemPerPage, setShowItemPerPage] = useState(registers.slice(0, 2));
  const [option, setOption] = useState(2);

  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    const val = e.target.value;
    setSearch(val);
  };

  const handleShowItemPerPage = () => {
    setRegisters(listRegister);
    setShowItemPerPage(registers.slice(start, end));
  };

  const handleCurrentPage = (curPage: number) => {
    setCurrentPage(curPage);
  };

  const handleChangeOption = (option: number) => {
    setOption(option);
  };

  const handleRemove = (id: string) => {
    const newData = listRegister.filter((item: any) => item.id !== id);

    localStorage.setItem('register-form', JSON.stringify(newData));
    setRegisters(newData);
    setShowItemPerPage(newData.slice(start, end));
  };

  // console.log(showItemPerPage)
  useEffect(() => {
    setStart((currentPage - 1) * option);
    setEnd((currentPage - 1) * option + option);
  }, [option, currentPage]);

  useEffect(() => {
    const newList = listRegister.filter((item: any) =>
      Object.values(item).join().toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setRegisters(newList);
    setShowItemPerPage(newList.slice(start, end));
  }, [search, start, end]);

  useEffect(() => {
    handleShowItemPerPage();
  }, [start, end]);

  // console.log(registers);

  return (
    <div className="list-register container">
      <div className="row">
        <h1 className="text-center pt-5 mb-4">
          Vietnam Health Declaration for foreign entry
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <input
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="col-lg-8 mt-1 text-end">
          <Link className="btn btn-success text-white mb-4" to="/declaration">
            New Form
          </Link>
        </div>

        <div className="col-lg-12">
          <Table
            data={showItemPerPage.length > 0 ? showItemPerPage : []}
            handleRemove={handleRemove}
          />
        </div>

        <div className="col-lg-12 text-center">
          <Formik
            initialValues={initialListRegister}
            onSubmit={(values, _) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <div className="d-flex justify-content-center align-items-center">
                  <Pagination
                    option={option}
                    totalRegister={registers.length}
                    currentPage={currentPage}
                    handleCurrentPage={handleCurrentPage}
                  />
                  <ItemPerPage
                    options={itemPerPage}
                    handleChangeOption={handleChangeOption}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ListRegister;
