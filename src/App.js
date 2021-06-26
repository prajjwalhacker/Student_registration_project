import './App.css';
import NavBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudent';
import {BrowserRouter, Route} from "react-router-dom";
import EditStudent from './components/EditStudent';
import Sorted from './components/Sorted';
import Find from './components/FindStudent';
import Student from './components/Student';
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Route exact strict path = "/" component = {AllStudents}/>
       <Route exact strict path = "/edit/:id" component = {EditStudent}/>
       <Route exact strict path = "/add" component = {AddStudent}/>
       <Route exact strict path = "/sorted" component = {Sorted}/>
       <Route exact strict path = "/findbyid" component = {Find}/>
       <Route exact strict path = "/students/:id" component = {Student}/>
    </BrowserRouter>
  );
}

export default App;
