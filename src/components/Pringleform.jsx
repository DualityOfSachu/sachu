import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Pringleform = () => {

    // const [count, setCount] = useState(0);
    const [form, setForm] = useState({
      id: '',
      pringleFlavour: '',
      productPrice: 0
    });

    function valueAdd() {
      axios.post('http://localhost:3000/products', form).then((res) => {
        alert("Data added");
      });
    }

    // function add() {
    //     setCount(count+1)
    // }

  return (
    <div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Product ID" name='id' variant="outlined" onChange={(event) => {
          setForm({...form, id: event.target.value})
        }} /></div>
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Pringle Flavour" name='pringleFlavour' variant="outlined" onChange={(event) => {
          setForm({...form, pringleFlavour: event.target.value})
        }}/></div>    
        <div><br></br></div>
        <div><TextField id="outlined-basic" label="Product Price" name='productPrice' variant="outlined" onChange={(event) => {
          setForm({...form, productPrice: event.target.value})
        }}/></div>
        <div><br></br></div>
        <Button variant="contained" onClick={valueAdd} style={{backgroundColor:"black"}}>ADD</Button>
        <div><br></br></div>
        {/* <small>The button is clicked {count}</small> */}
    </div>
  )
}

export default Pringleform
