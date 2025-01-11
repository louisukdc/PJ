import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Peminjaman from "./peminjaman.js";

const { DataTypes } = Sequelize;

const Pengembalian = db.define('pengembalian', {
    id_pengembalian: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_peminjaman: {
        type: DataTypes.INTEGER,
        references: {
            model: Peminjaman,
            key: 'id_peminjaman'
        }
    },
    tanggal_pengembalian: {
        type: DataTypes.DATE,
        allowNull: false
    },
    denda: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    }
}, {
    freezeTableName: true
});

export default Pengembalian;

(async() => {
    await db.sync();
})();