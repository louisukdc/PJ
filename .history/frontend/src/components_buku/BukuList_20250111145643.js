import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BukuList = () => {
    const [buku, setBuku] = useState([]);

    useEffect(() => {
        getBuku();
    }, []);

    const getBuku = async () => {
        try {
            const response = await axios.get('http://localhost:5002/buku');
            setBuku(response.data);
        } catch (error) {
            console.error("Error fetching buku:", error);
        }
    }

    const deleteBuku = async (id) => {
        try {
          await axios.delete(`http://localhost:5002/buku/${id}`);
          getBuku();
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <center>
                    <h3 className="title is-5 is-center">Buku List</h3>
                </center>
                <table className="table is-striped is-fullwidth is-centered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul Buku</th>
                            <th>Penerbit</th>
                            <th>Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buku.map((buku, index) => (
                            <tr key={buku.id_buku}>
                                <td>{index + 1}</td>
                                <td>{buku.judul_buku}</td>
                                <td>{user.penerbit}</td>
                                <td>{user.stok}</td>
                                <td>
                                    <Link className='button is-small is-info' to={`/edit/${buku.id}`}>Edit</Link>
                                    <button onClick={() => deleteBuku(buku.id_buku)} className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className='button is-warning' to={`/add`}>Add</Link>
            </div>
        </div>
    );
}

export default BukuList;