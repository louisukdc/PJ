import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Buku from "./buku.js";
import Anggota from "./AnggotaModel.js";

const { DataTypes } = Sequelize;

const Peminjaman = db.define('peminjaman', {
    id_peminjaman: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_buku: {
        type: DataTypes.INTEGER,
        references: {
            model: Buku,
            key: 'id_buku'
        }
    },
    id_anggota: {
        type: DataTypes.INTEGER,
        references: {
            model: Anggota,
            key: 'id_anggota'
        }
    },
    tanggal_peminjaman: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tanggal_batas: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status_peminjaman: {
        type: DataTypes.ENUM('Dipinjam', 'Dikembalikan'),
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Peminjaman;

(async() => {
    await db.sync();
})();