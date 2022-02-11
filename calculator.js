//jshint esversion:6

const express = require("express");
const {response} = require("express");

const app = express();

app.get("/", function (request,response){
    response.send("<h1>Testing</h1>");
});

app.get("/about", function (req,res){
    res.send("Hello, This is Rob");
});


app.listen(3000, function (){
    console.log("server started on 3000")
});

function downloadValue(x){
    document.getElementById('window').value += x;
}
function clearInput(y){
    document.getElementById('window').value = y;
}
function resultCalc(){
    var result = eval(document.getElementById('window').value);
    document.getElementById('window').value = result;
}