var express= require("express")
var db = require('../database/connection')
var router = express.Router()

router.get("/getItem", async function(req, res){
    try{
        let results = await db.getItem()
        res.json(results)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router;
