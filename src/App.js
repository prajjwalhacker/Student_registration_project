import './App.css';
import NavBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudent';
import {BrowserRouter, Route} from "react-router-dom";
import EditStudent from './components/EditStudent';
import Sorted from './components/Sorted';
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Route exact strict path = "/" component = {AllStudents}/>
       <Route exact strict path = "/edit/:id" component = {EditStudent}/>
       <Route exact strict path = "/add" component = {AddStudent}/>
       <Route exact strict path = "/sorted" component = {Sorted}/>
    </BrowserRouter>
  );
}

export default App;
