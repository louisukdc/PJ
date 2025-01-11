import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBuku = () => {
  const [judul_buku, setJudul_Buku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [stock, setStock] = useState("Male");
  const navigate = useNavigate();

  const saveBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/buku", {
        judul_buku,
        penerbit,
        stock,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveBuku}>
          <div className="field">
            <label className="label">Judul Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_buku}
                onChange={(e) => setJudul_Buku(e.target.value)}
                placeholder="Judul Buku"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penerbit</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="Penerbit"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stock</label>
            <div className="control">
                <div className="control">
                    <input
                        type="number"
                        className="input"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Stock"
                    />
                </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBuku;
