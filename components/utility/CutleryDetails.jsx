"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../ui/button";

const CutleryDetails = () => {
  const [cutlery, setCutlery] = useState({
    isAvailable: true,
    price: 0,
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cutlery");
        const { isAvailable, price } = response.data.cutlery;

        setCutlery({ isAvailable, price });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditModeToggle = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCutlery((prevState) => ({
      ...prevState,
      [name]: name === "isAvailable" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/cutlery", {
        isAvailable: cutlery.isAvailable,
        price: cutlery.price,
      });
      if (res.data.success === true) {
        alert("Cutlery details updated successfully");
      } else {
        alert(res.data.error);
      }
      setEditMode(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl font-semibold mb-5 text-center">
        Cutlery Details
      </h1>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-5">
            <div>
              <label>
                <strong>Is Available:</strong>
                <select
                  name="isAvailable"
                  value={cutlery.isAvailable}
                  onChange={handleChange}
                  className="ml-2"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <strong>Price:</strong>
                <input
                  type="number"
                  name="price"
                  value={cutlery.price}
                  onChange={handleChange}
                  className="ml-2"
                />
              </label>
            </div>
          </div>

          <Button type="submit" className="mr-5">
            Save
          </Button>
          <Button type="button" onClick={handleEditModeToggle}>
            Cancel
          </Button>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          <p>
            <strong>Is Available:</strong> {cutlery.isAvailable ? "Yes" : "No"}
          </p>
          <p>
            <strong>Price:</strong>
            {cutlery.price}
          </p>
          <Button type="button" onClick={handleEditModeToggle}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default CutleryDetails;
