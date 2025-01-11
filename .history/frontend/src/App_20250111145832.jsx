import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import Bukulist from "./components_buku/BukuList";
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

function App_Buku() {
    return ( 
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BukuList/>}/>          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;