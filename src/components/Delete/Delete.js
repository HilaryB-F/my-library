import './Delete.scss';
import axios from 'axios';
import React from 'react'


export default function Delete({setOpenDelete, selectedBook, getBooks}) {
const id = selectedBook.id
console.log(id)
  const deleteBook = (id, e) =>{
    // e.preventDefault();
    axios.delete(`http://localhost:8080/library/${id}`)
    .then(getBooks)
    .catch((error) => {
      console.log(error, "Error");
    });
    setOpenDelete(false)
  };
  

  return (
    <div className="delete__modal">
      <h2 className="delete__text" onClick ={deleteBook(id)}>Yes</h2>
      <h2 className="delete__text delete__text-right" onClick={()=>{setOpenDelete(false)}}>Cancel</h2>
    </div>
  )
}
