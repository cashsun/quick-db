var config = require('config').mongodb;
var port = config.port;
var username = config.username;
var password = config.password;
var db = config.db;
var mongodb = require('mongodb');
var Db = mongodb.Db;
var Server = mongodb.Server;



module.exports = function(){
    var database = new Db(db, new Server('localhost', port));

// Establish connection to db
    database.open(function (err, conn) {
        if (err) {
            return console.log(err);
        }

        console.log("Opened database");

        // Add a user to the database
        conn.addUser(username, password, {
            roles: [
                "readWrite"
            ]
        }, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Added.");
            conn.close();
        });
    });
};