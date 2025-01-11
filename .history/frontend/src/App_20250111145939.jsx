import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import BukuList from './components_buku/BukuList';

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

export default App, App_Buku;