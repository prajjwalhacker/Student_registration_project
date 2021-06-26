import { useEffect, useState } from "react";
import axios from 'axios';
import { Table, TableRow, TableCell, TableHead, TableBody, makeStyles, Button } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import {Link} from 'react-router-dom';

const Student = (props) => {
    const [student, setStudent] = useState([]);
    
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
        getStudent();
    }, []);
    

    const getStudent = async () => {
         let url = `https://studentruby.herokuapp.com/api/v1/students/${props.match.params.id}`;
         let response = await axios.get(url);
         let arr = [];
         arr.push(response.data.data);
         setStudent(arr);
    }

    const classes = useStyle();

    return (
        <Table className = {classes.table}>
            <TableHead>
                <TableRow className = {classes.thead}>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    student.map( stud => (
                        <TableRow>
                            <TableCell>{stud.id}</TableCell>
                            <TableCell>{stud.name}</TableCell>
                            <TableCell>{stud.email}</TableCell>
                            <TableCell>{stud.phoneno}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}


export default Student;
