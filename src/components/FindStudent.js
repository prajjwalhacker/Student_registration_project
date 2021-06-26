import { FormGroup, InputLabel, Input, FormControl, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



const Find = () => {
    const [id, setId] = useState('');

    const useStyle = makeStyles({
        container : {
          width : '50%',
          margin : '5% 0 0 25%'
        }
      })
    
    const onChangeValue = (e) => {
         setId(e.target.value);
    }
    const classes = useStyle();
    
    return (
      <div>
      
      <FormGroup className = {classes.container}>
        <FormControl>
          <InputLabel>Id</InputLabel>
          <Input onChange = {(e) => { onChangeValue(e)}} name = 'name'/>
        </FormControl>
        <Button to = {`/students/${id}`} component = {Link}>Find Student</Button>
      </FormGroup>
      </div>
    );
};

export default Find;