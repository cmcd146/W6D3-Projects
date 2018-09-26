const FollowToggle = require('./follow_toggle.js');
const APIUtil = require("./api_util.js");
const UsersSearch = require("./users_search.js");

function createFollowToggle () {
  const foggle = new FollowToggle();
}

function  createUsersSearch () {
  const susers = new UsersSearch();
}

$(()=>{
  createFollowToggle();
  createUsersSearch();
});