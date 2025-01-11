import { Sequelize } from "sequelize";

const db = new Sequelize('tugas3', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;