const express = require('express');
const routerUser = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/user get All Craftsmans works'})
})

router.post('/', (req,res) => {
    res.status(200).json({message: '/api/user add User'})
})

router.post('/', (req,res) => {
    res.status(200).json({message: '/api/user add Tmp Craftsman works'})
})

router.post('/', (req,res) => {
    res.status(200).json({message: '/api/user add Tmp Review works'})
})

/*
router.get('/', (req,res) => {
    res.status(200).json({message: '/api/user get works'})
})

router.get('/', (req,res) => {
    res.status(200).json({message: '/api/user get works'})
})
*/

module.exports = routerUser; 