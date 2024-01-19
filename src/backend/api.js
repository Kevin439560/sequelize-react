'use strict';

const express = require("express");
const app = express();

const db = require('./models');

//http://localhost:3001/get/NomeDaTabela
app.get('/get/:table', async (req, res) => {

    const {table} = req.params;

    try{

        if(db[table]) {

            const Registros = await db[table].findAll();

            console.log("Dados Recuperados com sucesso!");

            res.status(200).json(records);

        }else{

            res.status(404).json({ message: `Tabela ${table} não encontrada` });

        } 
        
    } catch (error) {

        console.error(`Erro ao recuperar ${table}:`, error);

        res.status(500).json({ message: `Erro ao recuperar ${table}` });

    }

});

/*
EXEMPLO DE OBJETO PASSADO NO URL ('http://localhost:3001/create', data)

const data = {
  table: 'NomeDaTabela',(Cliente, Pedido, Produto)
  data: {
    coluna1: 'valor1',
    coluna2: 'valor2'
  }
};
*/

app.post('/create', async (req, res) => {

    const { table, data } = req.body;

    try{

        if(db[table]){

            const NovoRegistro = await db[table].create(data);

            console.log(`Novo(a) ${table} criado:`, NovoRegistro);

            res.status(201).json({message: `${table} criado com sucesso`, createdRecord});

        }else{

            res.status(404).json({message: `Tabela ${table} não encontrada`});

        }

    }catch(error){

        console.error(`Erro ao criar ${table}:`, error);

        res.status(500).json({ message: `Erro ao criar ${table}` });

    }

});

db.sequelize.sync().then((req) => {

    app.listen(3001, () => {

        console.log('Escutando na porta 3001...');

    });

});
