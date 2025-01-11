import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Buku = db.define('buku', {
    id_buku: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul_buku: {
        type: DataTypes.STRING,
        allowNull: false
    },
    penerbit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Buku;

(async() => {
    await db.sync();
})();