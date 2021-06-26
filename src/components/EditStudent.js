import { FormGroup, InputLabel, Input, FormControl, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const initialValues = {
      name : '',
      email : '',
      phoneno : ''
};


const EditStudent = (props) => {
  
    
  
  const [student, setStudent] = useState(initialValues);
  const {name, email, phoneno} = student;
  

    useEffect ( () => {
        getStudent();
    }, []);
    
    const getStudent = async () => {
        let url = `https://studentruby.herokuapp.com/api/v1/students/${props.match.params.id}`;
    
        let response = await axios.get(url);
        let obj = response.data.data;

        setStudent({name : obj.name, email : obj.email, phoneno : obj.phoneno});

    }

  const updateDetails = async () => {
    let url = `https://studentruby.herokuapp.com/api/v1/students/${props.match.params.id}`;
    
    let response  = await axios.put(url, student);
    props.history.push("/");
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
        <Typography varient = "h4">Edit Details</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'name' value = {student.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'email' value = {student.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange = {(e) => { oneChangeValue(e)}} name = 'phoneno' value = {student.phoneno}/>
        </FormControl>
        <Button variant = "contained" color = "primary" onClick = {() => { updateDetails();}}>Edit Details</Button>
      </FormGroup>
      
    );
}

export default EditStudent;