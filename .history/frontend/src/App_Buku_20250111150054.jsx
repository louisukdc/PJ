import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import BukuList from './components_buku/BukuList';


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

export default App_Buku;