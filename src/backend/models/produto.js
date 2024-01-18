'use strict';

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto",{

        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            required: true
        },
        Nome: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        Preco: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            required: true
        }

    });

    return Produto;
}