import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BukuList from './components_buku/BukuList';
import AddBuku from './components_buku/AddBuku';
import EditBuku from './components_buku/EditBuku';

function App_Buku() {
    return ( 
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BukuList/>}/>
            <Route path="add" element={<AddBuku/>}/>
            <Route path="edit/:id_buku" element={<EditBuku/>}/>
                      </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App_Buku;