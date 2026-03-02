import React, { useState, useEffect } from "react";
import axios from "axios";

const PackageManagment = () => {
  const [formData, setFormData] = useState({
    package_name: "",
    package_type: "",
    destination: "",
    city_id: "",
    price: "",
    duration: "",
    image_url: "",
    description: "",
    bus_id: "",
    hotel_id: "",
    start_date: "",
    inclusive: "",
    exclusive: "",
    status: "Active",
  });

  const [packages, setPackages] = useState([]);

  // 3. Load Packages
  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/packages");
      setPackages(res.data);
    } catch (error) {
      console.error("Error fetching packages", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // 4. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 5. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/packages/add", formData);
      alert("Package Added!");
      fetchPackages();
      // Reset form if needed
    } catch (error) {
      console.error("Error adding package", error);
      alert("Failed to add.");
    }
  };

  // 6. Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Delete?")) {
      try {
        await axios.delete(`http://localhost:4000/api/packages/delete/${id}`);
        fetchPackages();
      } catch (error) {
        console.error("Error deleting", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      {/* --- FORM SECTION --- */}
      <div className="card shadow-sm p-4 mb-5">
        <h3 className="mb-3">Add Only Tour Package</h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Package Name */}
            <div className="col-md-6">
              <label className="form-label">Package Name:</label>
              <input
                type="text"
                name="package_name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Package Type */}
            <div className="col-md-6">
              <label className="form-label">Type:</label>
              <input
                type="text"
                name="package_type"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Destination */}
            <div className="col-md-4">
              <label className="form-label">Destination:</label>
              <input
                type="text"
                name="destination"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div className="col-md-4">
              <label className="form-label">Price:</label>
              <input
                type="number"
                name="price"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Duration */}
            <div className="col-md-4">
              <label className="form-label">Duration:</label>
              <input
                type="text"
                name="duration"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Start Date */}
            <div className="col-md-4">
              <label className="form-label">Start Date:</label>
              <input
                type="date"
                name="start_date"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* IDs */}
            <div className="col-md-4">
              <label className="form-label">City ID:</label>
              <select className=" form-select">
                <option></option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Bus ID:</label>
              <select className=" form-select">
                <option></option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Hotel ID:</label>
              <select className=" form-select">
                <option></option>
              </select>
            </div>

            {/* Details */}
            <div className="col-12">
              <label className="form-label">Description:</label>
              <textarea
                name="description"
                className="form-control"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Image Filename (e.g., goa.jpg):</label>
              <input
                type="text"
                name="image_url"
                className="form-control"
                placeholder="Paste the filename here"
                onChange={handleChange}
                required
              />
            </div>

            {/* Includes/Excludes */}
            <div className="col-md-6">
              <label className="form-label">Inclusive:</label>
              <input
                type="text"
                name="inclusive"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Exclusive:</label>
              <input
                type="text"
                name="exclusive"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            {/* Status */}
            <div className="col-md-4">
              <label className="form-label">Status:</label>
              <select
                name="status"
                className="form-select"
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Save Package
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* --- LIST SECTION --- */}
      <h3 className="mb-3">All Packages</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Destination</th>
            <th>Type</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td>
                <img
                  src={`http://localhost:4000/uploads/${pkg.image_url}`}
                  alt={pkg.package_name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{pkg.package_name}</td>
              <td>{pkg.destination}</td>
              <td>{pkg.package_type}</td>
              <td>${pkg.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(pkg._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageManagment;
