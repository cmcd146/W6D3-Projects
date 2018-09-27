const APIUtil = require('./api_util.js');
class UsersSearch {
  constructor() {
    this.$el = $('.users-search');
    this.$ul = $('ul.users');
    this.$input = $('.susers-input');
    
    this.$input.on("input", this.handleInput.bind(this));
    
  }
  
  handleInput (e) {
    e.preventDefault();
    APIUtil.searchUsers(this.$input.val())
    .then((res)=>{
      this.$ul.empty();
      res.forEach((el)=>{
        let li = $('<li/>');
        li.text(el.username);
        this.$ul.append(li);
      });
    });

  }
}


 






module.exports = UsersSearch;