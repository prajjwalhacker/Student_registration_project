import { FormGroup, InputLabel, Input, FormControl, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const initialValues = {
      name : '',
      email : '',
      phoneno : ''
};


const AddStudent = () => {

  const [student, setStudent] = useState(initialValues);
  const {name, email, phoneno} = student;
  


  const StudentAdd = async ( ) => {
    let url = 'https://studentruby.herokuapp.com/api/v1/students';
    
    let response = await axios.post(url, student);
    const history = useHistory();
    history.push('/');

  }

  const useStyle = makeStyles({
    container : {
      width : '50%',
      margin : '5% 0 0 25%'
    }
  })
   const oneChangeValue = (e) => {
        console.log(e.target.value);   
        setStudent({ ...student, [e.target.name] : e.target.value}); 
        console.log(student);
   }

const classes = useStyle();
    return (

      <FormGroup className = {classes.container}>
        <Typography varient = "h4">Add Student</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'email'/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'phoneno'/>
        </FormControl>
        <Button variant = "contained" color = "primary" onClick = {() => {StudentAdd();}}>Add Student</Button>
      </FormGroup>
      
    );
}

export default AddStudent;
