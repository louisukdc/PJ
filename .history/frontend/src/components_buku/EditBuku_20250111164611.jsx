import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBuku = () => {
  const [judul_buku, setJudul_Buku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [stok, setstok] = useState("");
  const navigate = useNavigate();
  const { id_buku } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const updateBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5002/buku/${id_buku}`, {
        judul_buku,
        penerbit,
        stok,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getBukuById = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/buku/${id_buku}`);
      if (response.data) {
        setJudul_Buku(response.data.judul_buku || "");
        setPenerbit(response.data.penerbit || "");
        setstok(response.data.stok || "");
      } else {
        console.warn("No data found for this ID");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };
  
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBuku}>
          <div className="field">
            <label className="label">Judul Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_buku}
                onChange={(e) => setJudul_Buku(e.target.value)}
                placeholder="Name"
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
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stok</label>
            <div className="control">
            <div className="control">
              <input
                type="text"
                className="input"
                value={stok}
                onChange={(e) => setstok(e.target.value)}
                placeholder="Email"
              />
            </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBuku;
