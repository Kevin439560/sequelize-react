'use strict';

module.exports = (sequelize, DataTypes) => {

    const Pedido = sequelize.define("Pedido",{
        
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            required: true
        },

    });



    return Pedido;
}



/*
//ASSOCIAÇÕES

//chave estrangeira que faz referencia a tabela Cliente
db.Cliente.hasMany(db.Pedido, {
    foreignKey: {
      name: "ClientId",
      type: Sequelize.DataTypes.INTEGER,
      allowNull:false
    }
  });
  db.Pedido.belongsTo(db.Cliente, {
    foreignKey: {
      name: "ClientId",
      type: Sequelize.DataTypes.INTEGER,
      allowNull:false
    }
  });
  
  
  //chave estrangeira que faz referencia a tabela Produto
  db.Produto.hasMany(db.Pedido, {
    foreignKey: {
      name: "ProdutoId",
      type: Sequelize.DataTypes.INTEGER,
      allowNull:false
    }
  });
  db.Pedido.belongsTo(db.Produto, {
    foreignKey: {
      name: "ProdutoId",
      type: Sequelize.DataTypes.INTEGER,
      allowNull:false
    }
  });
*/