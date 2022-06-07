const mysql=require('mysql');
var mysqlConnection=require('mysqlConnection');
let Connection=mysql.createConnection;
host:'localhost',
user:'root',
password:'',
database:sql_login 
Connection.connect(function(err))
{
    if(err) throw err;
    console.log('connection established with my sql connection');
}
module.exports=connection;