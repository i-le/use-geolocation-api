const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/yelpchamp", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to db!'))
.catch(error => console.log(error.message))
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

let Campground = mongoose.model("Campground", campgroundSchema)


app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    Campground.find({}, function(err, allCampgrounds){
        res.render("index", {campgrounds: allCampgrounds})
    })
    
})

app.post("/campgrounds", (req, res) => {
    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let newCampground = {name: name, image: image, description: description}
    Campground.create(newCampground, function(err, newlyCreated){
        res.redirect("/campgrounds")
    })
})

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, function(err, foundCampground) {
 res.render("show", {campground: foundCampground})
})
    })
    
   

app.listen(27017)