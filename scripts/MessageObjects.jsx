import * as React from 'react';

export function User(username, profilePic, bot) {
  this.username = username;
  this.profilePic = profilePic;
  this.bot = bot;
}

export function Message(user, msg, attachment) {
	this.user = user;
	this.msg = msg;
	this.attachment = attachment;
}