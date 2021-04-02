// Establishes connection to model.js.
const { resolve } = require("path");
const connection = require("./model.js");

/* Example Query */

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

function getUsername(user_id){
    return new Promise((resolve,reject)=>{
        connection.query('SELECT username FROM users WHERE user_id = ?', [user_id],(err,data)=>{
            if(err){
                reject(err);
            } else{
                resolve(data[0].username);
            }
        });
    });
}

function getPassword(username){
    return new Promise((resolve,reject) =>{
        connection.query('SELECT password FROM users WHERE username = ?', [username], (err,data) =>{
            if(err){
                reject(err);
            } else{
                try{
                    const result = data[0].password;
                    resolve(result);                
                } catch(err){
                    reject(err);
                }
        }})
    });
}

function getApproved(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM sketches WHERE approved = 1', (error,data) =>{
            if(error){
                reject(error);
            } else{
                resolve(data)
            }
    });
    });
}

function getUnapproved(){
    return new Promise((resolve,reject) =>{
        connection.query('SELECT * FROM sketches WHERE approved = 0', (error,data)=>{
            if(error){
                reject(error);
            } else{
                resolve(data)
            }
        });
    });
}

function addSketch(sketchData){
    return new Promise((resolve,reject) => {
        connection.query('INSERT INTO sketches sketch_data VALUES(?)',[sketchData], error => {
            if(error){
                reject(error);
            } else {
                resolve();
            }
        });
    })
}

module.exports = {
    getUsername,
    getPassword,
    getApproved,
    getUnapproved,
    addSketch
}

// connection.end();

/* Queries */
