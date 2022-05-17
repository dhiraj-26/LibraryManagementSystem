import React, { useState, useEffect } from "react";
import "./styles/BookList.css";
import axios from "axios";
export const BookList = () => {
  const [data, setdata] = useState({
    id: "",
    name: "",
    author: "",
    isbn: "",
    category: "",
  });

  //   TODO : set BookList here
    const [ bookList, setbooklist] = useState([])


  useEffect(() => {
    // TODO : Call the get all book API and set whole array into BookList
    axios.get('http://127.0.0.1:8000/api/book/').then(function (response) {
    setbooklist(response.data);
    })
  }, [])

  const handleInputChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };
  const editInfo = (book) => {
    console.log(book);
    setdata({
      id: book.id,
      name: book.name,
      author: book.author,
      isbn: book.isbn,
      category: book.category,
    });
  };

  const handleSubmit = (book_id) => {
    //   TODO : POST API HERE
    axios.put(`http://127.0.0.1:8000/api/book/${book_id}/`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deleteBook = (book_id) => {
    //   TODO : POST API of Delete HERE
    axios.delete(`http://127.0.0.1:8000/api/book/${book_id}/`, {book_id})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Category</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => {
              return (
                <tr>
                  <th scope="row">{book.id}</th>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.category}</td>
                  <td>
                    <i
                      className="bi bi-pencil-square cursor-pointer"
                      data-bs-target="#staticBackdrop"
                      data-bs-toggle="modal"
                      onClick={(event) => editInfo(book)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-trash3 cursor-pointer"
                      onClick={(event) => deleteBook(book.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Modal edit */}

        <div className="modal fade" id="staticBackdrop" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="input_name" className="form-label">
                    Edit for : {data.id}
                  </label>
                </div>
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
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(event)=>handleSubmit(data.id)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
