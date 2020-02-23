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

function InputUsername(){
	return (
		<div className="input-group" style={{paddingBottom:'5px'}}>
			<div className="input-group-append">
				<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
			</div>
			<textarea name="" value = {this.state.message} className="form-control type_msg_sm" placeholder="Enter your username"></textarea>
		</div>
		);
}

function InputMessage(){
	return(
		<div className="input-group">
				<div className="input-group-append">
					<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
				</div>
				<textarea name="" id="message" className="form-control type_msg" placeholder="Type your message..."></textarea>
				<div className="input-group-append" id="send">
					<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
				</div>
			</div>
		);
}

export class MessagePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			message: '',
        };
        
        this.handeChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeClicked = this.canBeClicked.bind(this);
    }
    
    handleSubmit(event){
    	event.preventDefault();
    	
    	Socket.emit('new message', {
    		'message': this.state.user_message
    	});
    }
    
    render() {
        return (
            <div className="container-fluid h-100">
				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="user_info">
								</div>
							</div>
						</div>
						<div className="card-body msg_card_body">
						</div>
						<div className="card-footer">
							<InputUsername />
							<InputMessage />
						</div>
					</div>
				</div>
			</div>
            );
    }
}