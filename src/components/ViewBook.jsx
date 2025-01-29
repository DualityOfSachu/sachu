import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';

const ViewBook = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products').then((res) => {
            setRows(res.data);
        })
    });

    const [fname, setName] = useState('The Pringle Owner');

    function changeVal() {
        setName('Bomber Boy');
    }

  return (
    <div id='div1' style={{paddingTop:"20px"}}>
        <h3> Welcome {fname} to Pringles </h3>
        <Button variant='outlined' onClick={changeVal} style={{borderColor:"black", borderRadius:"30px", color:"black", backgroundColor:"#FFC785"}}>Change Name</Button>
        <TableContainer style={{margin:'1%', width:'100%'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product id</TableCell>
                        <TableCell align="right">Product flavour</TableCell>
                        <TableCell align="right">Product price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component="th" scope="row"> {row.id} </TableCell>
                            <TableCell align="right">{row.bookname}</TableCell>
                            <TableCell align="right">{row.bookprice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewBook
