const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Blog")
const blogmodel = require("../Models/blog");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())
router.get("/?", async (req, res) => {
    // console.log(req.query.search)
    try {
        const blog = await blogmodel.find({ topic: req.query.search }, { __v: 0 }).limit(req.query.page * 5);
        res.json({
            status: "success",
            result: blog
        });
    }
    catch (e) {
      res.json({
        result:"failure",
        message:e.message
      })
    }
})
// updtae method
router.put("/:id", async (req, res) => {
    try{
        await blogmodel.updateMany({ _id: req.params.id }, req.body);
        const blog = await blogmodel.find({ _id: req.params.id })
        res.json({
            response: "Success",
            result: blog
        })
    }
    catch(e){
        res.json({
            result:"failure",
            message:e.message
        })
    }
   
})


router.delete("/:id", async (req, res) => {
    console.log(req.params.id)
    try{
        const blog = await blogmodel.find({ _id: req.params.id })
        res.send(blog);
        await blogmodel.deleteOne({ _id: req.params.id })
    }
    catch(e){
        res.json({
            result:"failure",
            message:e.message
        })
    }

 
})

// inserting data to database
router.post("/", async (req, res) => {
   try {
    const blog = {
        topic: req.body.topic,
        description: req.body.description,
        posted_at: req.body.posted_at,
        posted_by: req.body.posted_by
    }
    await blogmodel.create(blog);
    res.json({
        response: "Success",
        result: blog
    })
    console.log(blog);
}
    catch(e){
        res.json({
            result:"failure",
            message:e.message
        })
    }
})
module.exports = router;