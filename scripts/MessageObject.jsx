import * as React from 'react';

export function Message(user, msg, attachment, imageLink, hyperLink) {
	this.user = user;
	this.msg = msg;
	this.imageLink = imageLink;
	this.hyperLink = hyperLink;
}