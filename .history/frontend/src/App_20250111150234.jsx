import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";

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