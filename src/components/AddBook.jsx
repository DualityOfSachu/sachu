import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddBook = () => {

    // const [count, setCount] = useState(0);
    const [form, setForm] = useState({
      id: '',
      bookname: '',
      bookprice: 0
    });

    function valueAdd() {
      axios.post('http://localhost:3000/products', form).then((res) => {
        alert("Data added");
      });
    }

  return (
    <div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Book ID" name='id' variant="outlined" onChange={(event) => {
          setForm({...form, id: event.target.value})
        }} /></div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Book Name" name='bookname' variant="outlined" onChange={(event) => {
          setForm({...form, bookname: event.target.value})
        }}/></div>    
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Book Price" name='bookprice' variant="outlined" onChange={(event) => {
          setForm({...form, bookprice: event.target.value})
        }}/></div>
        <div><br></br></div>
        <Button variant="contained" onClick={valueAdd} style={{backgroundColor:"black"}}>ADD</Button>
        <div><br></br></div>
    </div>
  )
}

export default AddBook
