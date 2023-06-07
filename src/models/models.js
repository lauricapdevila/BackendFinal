import Sequelize from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite3"
})

export const Categoria = sequelize.define("Categoria", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING
    },
})

export const Productos = sequelize.define("Producto", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING
    },
    idcategoria: {
        type: Sequelize.INTEGER,
    },
    precioventa: {
        type: Sequelize.INTEGER,
    },
})

export const Cabecera = sequelize.define("Cabecera", {
    idmesa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idcliente: {
        type: Sequelize.INTEGER,
    },
    estado: {
        type: Sequelize.STRING
    },
    total: {
        type: Sequelize.INTEGER,
    },
    fechainicio: {
        type: Sequelize.DATEONLY
    },
    horainicio: {
        type: Sequelize.INTEGER,
    },
    fechafin: {
        type: Sequelize.DATEONLY
    },
    horafin: {
        type: Sequelize.INTEGER,
    },
})

export const Detalles = sequelize.define("Detalles", {
    idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cantidad: {
        type: Sequelize.INTEGER,
    },
})