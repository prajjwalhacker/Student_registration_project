import './App.css';
import NavBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudent';
import {BrowserRouter, Route} from "react-router-dom";
import EditStudent from './components/EditStudent';
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Route exact strict path = "/" component = {AllStudents}/>
       <Route exact strict path = "/edit/:id" component = {EditStudent}/>
       <Route exact strict path = "/add" component = {AddStudent}/>
    </BrowserRouter>
  );
}

export default App;
