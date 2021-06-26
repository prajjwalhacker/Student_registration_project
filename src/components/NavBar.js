import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom';
const NavBar = () => {
     const useStyles = makeStyles({
         header : {
             background : '#111111'
         },
         tabs : {
             color : '#ffffff',
             textDecoration : 'none',
             marginRight : 20,
             fontSize : 20
         }
     });
     const classes = useStyles()
     return (
         <AppBar position = "static" className = {classes.header}>
             <Toolbar>
                <Typography components = "h2" className = {classes.tabs}>Student Registration Platform</Typography>
                <NavLink to = "/add" exact className = {classes.tabs}>Add Student</NavLink>
                <NavLink to = "/" exact className = {classes.tabs}>All Students</NavLink>
                <NavLink to = "/sorted" exact className = {classes.tabs}>Students in Sorted Order</NavLink>
             </Toolbar>
         </AppBar>
     )
};


export default NavBar;