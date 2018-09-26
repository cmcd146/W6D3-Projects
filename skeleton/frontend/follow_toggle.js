const APIUtil = require("./api_util.js");

class FollowToggle{
  constructor () {
    const $el = $('.follow-toggle');
    this.$el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.$el.on("click", this.handleClick.bind(this));
    this.render();
  }
  
  render () {
    if (this.followState === true) {
      $(".button-text").text("Unfollow!");
    } else {
      $(".button-text").text("Follow!");
    }
  }
  
  handleClick(e) {
    e.preventDefault();
    this.$el.prop("disabled",true);
    if (this.followState) {
      APIUtil.unfollowUser(this.userId)
      .then(this.toggleFollow.bind(this));
    } else {
      APIUtil.followUser(this.userId)
      .then(this.toggleFollow.bind(this));
    }
  }
  
  toggleFollow () {
    if (this.followState) {
      this.followState = false;
      this.render();
    } else {
      this.followState = true;
      this.render();
    }
    this.$el.prop("disabled",false);
  }
}
module.exports = FollowToggle;