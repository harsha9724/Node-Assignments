const mongoose=require("mongoose");
mongoose.pluralize(false)
const blogSchema=new mongoose.Schema({
    id:Number,
    topic:String,
    description:String,
    posted_at:{
        type:Date,
        default:  Date.now()
    },
    posted_by:String
});
const blogModel=new mongoose.model("blog",blogSchema);
module.exports=blogModel;