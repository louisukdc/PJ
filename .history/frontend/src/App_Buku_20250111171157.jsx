import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BukuList from './components_buku/BukuList';
import AddBuku from './components_buku/AddBuku';
import UpdateBook from './components_buku/UpdateBook';

function App_Buku() {
    return ( 
      <div>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<BukuList/>}/>
                <Route path="add" element={<AddBuku/>}/>
                <Route path="/edit/:id_buku" element={<UpdateBook />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App_Buku;