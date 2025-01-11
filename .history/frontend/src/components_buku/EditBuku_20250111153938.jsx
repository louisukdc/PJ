import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBuku = () => {
  const [judul_buku, setjudul_buku] = useState("");
  const [penerbit, setpenerbit] = useState("");
  const [stock, setstock] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBukuById();
  }, []);

  const updateBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/buku/${id}`, {
        judul_buku,
        penerbit,
        stock,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getBukuById = async () => {
    const response = await axios.get(`http://localhost:5002/buku/${id}`);
    setjudul_buku(response.data.judul_buku);
    setpenerbit(response.data.penerbit);
    setstock(response.data.stock);
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
                onChange={(e) => setjudul_buku(e.target.value)}
                placeholder="judul_buku"
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
                onChange={(e) => setpenerbit(e.target.value)}
                placeholder="penerbit"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stock</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={stock}
                onChange={(e) => setstock(e.target.value)}
                placeholder="stock"
              />
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
