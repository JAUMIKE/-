var express = require("express");
var mysql = require("mysql");
const { isRegExp } = require("util");
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dbdowuiki"
})

connection.connect();
connection.query("select * from user",function (err,data) { 
    var myAccount = ["test@gmail.com","1qaz@WSX"]
    for(item of data){
        if(myAccount[0] == item.username && myAccount[1] ==item.password){
            console.log(myAccount + " login success");
        }
    }
 })