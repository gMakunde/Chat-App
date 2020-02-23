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
    	
    	let user = new User;
    	user.username = this.state.user;
    	this.state.user = user;
    	
    	let message = new Message;
    	message.user = this.state.user;
    	message.msg = this.state.user_message;
    	this.state.user_message = message;
    	
    	Socket.emit('new message', {
    		'user_message': this.state.user_message,
    		'user': this.state.user
    	});
    	
    	this.setState({
    	    user_message: '',
    	    user: ''
    	});
        
        console.log('Sent a message to server!',this);
        console.log('User Name:', this.state.user);
        console.log('User Message:', this.state.user_message);
    }
    
    handleChangeMessage(event) {
        this.setState({user_message: event.target.value});
        console.log('user_message', event.target.value);
    }
    
    handleChangeUser(event) {
        this.setState({user: event.target.value});
        console.log('user', event.target.value);
    }
    render() {
        return (
        <form onSubmit = {this.handleSubmit}>
            <div className="input-group" style={{paddingBottom:'5px'}}>
                <div className="input-group-append">
                	<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                </div>
                <textarea name="" value = {this.state.user} className="form-control type_msg_sm" onChange = {this.handleChangeUser} placeholder="Enter your username"></textarea>
            </div>
            
            <div className="input-group">
    			<div className="input-group-append">
    				<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
    			</div>
    			<textarea name="" value = {this.state.user_message} className="form-control type_msg" placeholder="Type your message..." onChange = {this.handleChangeMessage}></textarea>
    			<div className="input-group-append">
    				<button type="submit" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
    			</div>
    		</div>
    	</form>
            );
    }
}