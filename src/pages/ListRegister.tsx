import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemPerPage from '../components/itemPerPage';
import Pagination from '../components/paginaiton';
import Table from '../components/table';
import { itemPerPage } from '../assets/data';
import { Form, Formik } from 'formik';
import { initialListRegister } from '../assets/initial';

const ListRegister = () => {
  //data lưu trong local
  const listRegister = JSON.parse(
    localStorage.getItem('register-form') || '[]'
  );

  const [search, setSearch] = useState('');
  const [registers, setRegisters] = useState(listRegister);// data sử dụng để hiển thị (ví dụ như lúc search or chưa search sẽ đk lưu vào đây)
  const [showItemPerPage, setShowItemPerPage] = useState(registers.slice(0, 2));// show số dòng hiển thị trong table cho mỗi trang
  const [option, setOption] = useState(2);//số dòng hiển thị trên table

  const [currentPage, setCurrentPage] = useState(1);

  const [start, setStart] = useState(0); //vị trí bắt đầu hiển thị (vd currentPage = 2 sẽ hiển thị phần tử thứ 2 và 3 trong registers (index bắt đầu từ 0), nên vị trí start = 2, end = 4)
  const [end, setEnd] = useState(2);// vị trí kết thúc

  const [totalPages, setTotalPages] = useState(
    Math.ceil(registers.length / option)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    const val = e.target.value;
    setSearch(val);
  };

  const handleShowItemPerPage = () => {
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
    setTotalPages(Math.ceil(registers.length / option));
    setShowItemPerPage(newData.slice(start, end));
  };

  // console.log(showItemPerPage)
  useEffect(() => {
    setStart((currentPage - 1) * option);
    setEnd((currentPage - 1) * option + option);
  }, [option, currentPage]);


  //for search
  useEffect(() => {
    const newList = listRegister.filter((item: any) =>
      Object.values(item)
        .join()
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );

    setRegisters(newList);

    setTotalPages(Math.ceil(registers.length / option));
    setShowItemPerPage(newList.slice(start, end));
  }, [search, start, end]);

  useEffect(() => {
    handleShowItemPerPage();
  }, [currentPage]);

  //xử lý số trang sau khi search
  useEffect(() => {
    if(totalPages < currentPage){
      setCurrentPage(1);
    } 
  }, [totalPages, search]);

  // console.log(registers);
  // console.log(totalPages)

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
                    // option={option}
                    // totalRegister={registers.length}
                    totalPages={totalPages}
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
