import * as React from 'react';
import { Socket } from './Socket'

const User = {
	username: '',
	profilePic: false,
	bot: false
}

const Message = {
	user: User,
	msg: ''
}


export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			user_message: '',
			user: ''
        };
        
        this.handeChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeClicked = this.canBeClicked.bind(this);
    }
    
    handleSubmit(event){
    	event.preventDefault();
    	
    	this.state.user = new User;
    	this.state.user.username = this.user_name;
    	this.state.user_message = new Message;
    	this.state.user_message.user = this.state.user;
    	this.state.user_message.msg = this.user_message;
    	
    	Socket.emit('new message', {
    		'user_message': this.state.user_message,
    		'user': this.state.user
    	});
    }
    
    render() {
        return (
        <div>
            <div className="input-group" style={{paddingBottom:'5px'}}>
                <div className="input-group-append">
                	<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                </div>
                <textarea name="" value = {this.user_name} className="form-control type_msg_sm" placeholder="Enter your username"></textarea>
            </div>
            
            <div className="input-group">
    			<div className="input-group-append">
    				<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
    			</div>
    			<textarea name="" value = {this.user_message} className="form-control type_msg" placeholder="Type your message..."></textarea>
    			<div className="input-group-append" id="send">
    				<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
    			</div>
    		</div>
    	</div>
            );
    }
}