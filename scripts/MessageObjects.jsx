import * as React from 'react';

function User(username, profilePic, bot) {
  this.username = username;
  this.profilePic = profilePic;
  this.bot = bot;
}

function Message(user, msg, attachment) {
	this.user = user;
	this.msg = msg;
	this.attachment = attachment;
}