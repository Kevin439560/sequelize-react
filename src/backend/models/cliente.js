'use strict';

module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente",{

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
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        }

    });

    return Cliente;
}