import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [judul_buku, setJudul_Buku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [stok, setstok] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBukuById();
  }, []);

  const updateBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5002/buku/${id}`, {
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
    const response = await axios.get(`http://localhost:5002/buku/${id}`);
    setName(response.data.judul_buku);
    setEmail(response.data.penerbit);
    setGender(response.data.stok);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
