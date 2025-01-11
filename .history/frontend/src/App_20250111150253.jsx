import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import List from "./components/BukuList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
    return ( 
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="add" element={<AddUser/>}/>
            <Route path="edit/:id" element={<EditUser/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;