var express= require("express")
var db = require('../database/connection')
var cors = require('cors')
var router = express.Router()

router.get("/getItem", cors(), async function(req, res){
    try{
        let results = await db.getItem()
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

router.post("/insertItem", cors(), async function(req, res){
    try{
        // console.log(req)
        let name = req.body.name
        let price = req.body.price
        let results = await db.insertItem(name, price)
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

router.post("/editItem", cors(), async function(req, res){
    try{
        // console.log(req)
        let id = req.body.ID
        let name = req.body.name
        let price = req.body.price
        let results = await db.editItem(id, name, price)
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

router.get("/deleteItem/:id", cors(), async function(req, res){
    try{
        // console.log(req)
        let id = req.params.id
        let results = await db.deleteItem(id)
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router;
