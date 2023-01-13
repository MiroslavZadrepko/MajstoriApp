const express = require('express');
const routerAdmin = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get All Users works'})
})

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get Tmp Craftsman works'})
})

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/admin get Tmp Review works'})
})

router.post('/', (req,res) => {
    res.status(200).json({message: '/api/admin add Craftsman works'})
})

router.post('/', (req,res) => {
    res.status(200).json({message: '/api/admin add Review works'})
})

router.delete('/', (req,res) => {
    res.status(200).json({message: '/api/admin delete Temp Crafstman works'})
})
router.delete('/', (req,res) => {
    res.status(200).json({message: '/api/admin delete Temp Review works'})
})

module.exports = routerAdmin;