import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Model from "./Model";
import UserTable from "./UserTable";
import { Button } from "react-bootstrap";

export default function User() {
  useEffect(() => {
    getData();
  }, []);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allData, setAllData] = useState({});
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/event", allData);
    setAllData({});
    console.log(allData);
    handleClose();
    getData();
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/event");
    console.log(res);
    setUser(res.data);
  };

  const handleUpdate = (id) => {
    setShow(true);
    setEdit(true);
    const val = user.find((item) => item.id === id);
    setAllData(val);
  };
  const onEditData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/event/${allData.id}`, allData);
    setShow(false);
    getData();
  };

  const handleAdd = () => {
    setShow(true);
    setEdit(false);
    setAllData({});
  };
  // const handleDelete = async (id) => {
  //   const res = await axios.delete(`http://localhost:3002/event/${id}`);
  //   console.log(res, "pppp");
  //   getData();
  // };
  return (
    <div>
      {/* <Button variant="primary" onClick={handleAdd}>
        add
      </Button> */}
      <UserTable
        handleUpdate={handleUpdate}
        handleAdd={handleAdd}
        show={show}
        user={user}
        // handleDelete={handleDelete}
      />
      <Model
        handleClose={handleClose}
        handleShow={handleShow}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        show={show}
        alldata={allData}
        edit={edit}
        onEditData={onEditData}
      />
    </div>
  );
}
