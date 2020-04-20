// var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')
const request = require('request');

async function getUsers_All() {
  const allUsers =  await user_service.getUsers_All();
  console.log("hahahahahaha")
  return allUsers;
}

async function getUser_ByID(user_id) {
 var theUser =  await user_service.getUser_ByID(user_id);
 return theUser;
}

async function createUser(theUser) {
 const created_user =  await user_service.createUser(theUser);
 return created_user;
}

async function login(user) {

  console.log("yoooooo" + user.email_address + " " + user.password)

  await request.post({url:'http://localhost:1000/api/users/login', form: {email_address: user.email_address, password: user.password}}, function(err,httpResponse,body) { 

    console.log("body " + body)
    return body
  /* ... */ })



  // return await request.post('http://localhost:1000/api/users/login', {form:{email_address: user.email_address, password: user.password}})

}

module.exports = {
  getUsers_All,
  getUser_ByID,
  createUser,
  login
};