import * as React from 'react';

const User = {
	username: '',
	profilePic: false,
	bot: false
}

const Message = {
	user: User,
	msg: ''
}

function MessageInput(props){ 
		
		return(
		<div>
			<div className="input-group" style={{paddingBottom:'5px'}}>
				<div className="input-group-append">
					<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
				</div>
				<textarea name="" id="username" className="form-control type_msg_sm" placeholder="Enter your username"></textarea>
			</div>
			<div className="input-group">
				<div className="input-group-append">
					<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
				</div>
				<textarea name="" id="message" className="form-control type_msg" placeholder="Type your message..."></textarea>
				<div className="input-group-append" id="send">
					<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
				</div>
			</div>
		</div>
	);
}

function ProfilePicture(props){
	if(props.bot) {
		return(
			<div className="img_cont_msg">
				<img src="https://www.cartoonbucket.com/wp-content/uploads/2017/04/Jenny-Wakeman-Smiling.png" className="rounded-circle user_img_msg"/>
			</div>
			);
	}
	else if(!props.pp){
		return(
			<div className="img_cont_msg">
				<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" className="rounded-circle user_img_msg"/>
			</div>
			);
	}
	return(
			<div className="img_cont_msg">
					<img src={props.pp} className="rounded-circle user_img_msg"/>
				</div>
			);
}

function MessageBody(props) {
	if(props.bot){
		return(
		<div className="msg_cotainer_send">
			{props.msg}
			<span className="msg_time">{props.username}</span>
		</div>
		);
	}
	return(
		<div className="msg_cotainer">
			{props.msg}
			<span className="msg_time">{props.username}</span>
		</div>
		);
}
							
function Response(props) {
	if(props.bot){
		return(
		<div className="d-flex justify-content-start mb-4">
			<ProfilePicture botpp={true}/>
			<div style={{paddingRight:'10px'}}></div>
			<MessageBody msg={props.msg} user={props.username} bot={props.bot}/>
		</div>
		);
	}
	return (
		<div className="d-flex justify-content-start mb-4">
			<ProfilePicture pp={props.pp} botpp={false} />
			<MessageBody msg={props.msg} user={props.username} bot={props.bot} />
		</div>
	);
}

export class MessagePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			messages: [],
        }
    };
    
    sendUserMessage(){
    	
    	this.setState({
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
						<MessageInput />
						</div>
					</div>
				</div>
			</div>
            );
    }
}