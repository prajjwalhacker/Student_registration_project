import { useEffect, useState } from "react";
import axios from 'axios';
import { Table, TableRow, TableCell, TableHead, TableBody, makeStyles, Button } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import {Link} from 'react-router-dom';

const Sorted = () => {
    const [students, setStudents] = useState([]);
    
    const useStyle = makeStyles({
       table : {
           width : '90%',
           margin : '50px 0 0 50px'
       },
       thead : {
           '& > *' : {
               background : '#000000',
               color : '#ffffff',
               fontSize : 20
           }
       }
    });
    

    useEffect( () => {
        getAllStudents();
    }, []);
    

    const getAllStudents = async () => {
         let url = 'https://studentruby.herokuapp.com/api/v1/students';
         let response = await axios.get(url);
         let data = response.data.data;
         data.sort(function(a, b){
             if(a.name.toLowerCase() < b.name.toLowerCase()) {
                 return -1;
             }
             else {
                 return 0;
             }
         });
         setStudents(data);
    }

    const deleteStudent = async (id) => {
        let url = `https://studentruby.herokuapp.com/api/v1/students/${id}`;

        let response = await axios.delete(url);

        getAllStudents();
    }

    const classes = useStyle();

    return (
        <div>
        <Table className = {classes.table}>
            <TableHead>
                <TableRow className = {classes.thead}>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    students.map( student => (
                        <TableRow>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.phoneno}</TableCell>
                            <TableCell><Button to = {`/edit/${student.id}`} component = {Link}>Edit</Button></TableCell>
                            <TableCell><Button onClick = { () => { deleteStudent(student.id);}}>Delete</Button></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </div>
    );
}


export default Sorted;
