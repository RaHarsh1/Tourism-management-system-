import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageCustmer = () => {
  const [custmer, setcustmer] = useState([]);

  const fetchCustmer = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/cust");
      console.log(res);
      setcustmer(res.data);
    } catch (err) {
      console.error("Error fetching packages", err);
    }
  };

  useEffect(() => {
    fetchCustmer();
  }, []);

  return (
    <>
      <div className="card p-5 mb-5 ">
        <h3 className=" mb-4">Custmer List </h3>
        <div className="card">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>Mobile No</th>
                <th>Gender</th>
                <th>dob</th>
              </tr>
            </thead>
            <tbody>
              {custmer.map((cust) => (
                <tr key={cust._id}>
                  <td>{cust.first_name}</td>
                  <td>{cust.last_name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.phone_no}</td>
                  <td>{cust.gender}</td>
                  <td>{cust.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageCustmer;
