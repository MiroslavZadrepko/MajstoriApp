const express = require('express');
const routerAdmin = express.Router();

routerAdmin.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get All Users works'})
})

routerAdmin.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get Tmp Craftsman works'})
})

routerAdmin.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get Tmp Review works'})
})

routerAdmin.post('/', (req,res) => {
    res.status(200).json({message: '/api/admin add Craftsman works'})
})

routerAdmin.post('/', (req,res) => {
    res.status(200).json({message: '/api/admin add Review works'})
})

routerAdmin.delete('/', (req,res) => {
    res.status(200).json({message: '/api/admin delete Temp Crafstman works'})
})
routerAdmin.delete('/', (req,res) => {
    res.status(200).json({message: '/api/admin delete Temp Review works'})
})

module.exports = routerAdmin;