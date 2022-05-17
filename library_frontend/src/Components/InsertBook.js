import React, { useState } from "react";
import axios from "axios";
export const InsertBook = () => {
  const [data, setdata] = useState({
    name: "",
    author: "",
    isbn: "",
    category: "",
  });
  const handleInputChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    //   TODO : POST API HERE
    axios.post('http://127.0.0.1:8000/api/book/', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="input_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="input_name"
              value={data.name}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="input_author" className="form-label">
              Author
            </label>
            <input
              type="text"
              name="author"
              className="form-control"
              id="input_author"
              value={data.author}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="input_isbn" className="form-label">
              ISBN
            </label>
            <input
              type="text"
              name="isbn"
              className="form-control"
              id="input_isbn"
              value={data.isbn}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="input_category" className="form-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="form-control"
              id="input_category"
              value={data.category}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
