var express = require("express")
var consolidate = require("consolidate")

var app = express()
app.listen(4004)

app.set('views','');
app.set('view engine','html')
app.engine('html',consolidate.ejs)

app.get('/',function(req,res){
    res.render('Warframe.ejs')
})

app.use(express.static(__dirname+''));