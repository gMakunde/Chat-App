import * as React from 'react';
import { MessageSent } from './MessageSent'
import { Socket } from './Socket'

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
			<span className="msg_time">{props.user}</span>
		</div>
		);
	}
	return(
		<div className="msg_cotainer">
			{props.msg}
			<span className="msg_time">{props.user}</span>
		</div>
		);
}
//Todo make reply						
function Response(props) {
	if(props.bot){
		return(
		<div className="d-flex justify-content-start mb-4">
			<ProfilePicture bot={props.bot}/>
			<div style={{paddingRight:'10px'}}></div>
			<MessageBody msg={props.msg} user={props.user} bot={props.bot}/>
		</div>
		);
	}
	return (
		<div className="d-flex justify-content-start mb-4">
			<ProfilePicture pp={props.pp} botpp={false} />
			<MessageBody msg={props.msg} user={props.user} bot={props.bot} />
		</div>
	);
}

export class MessagePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	'messages': []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
    	Socket.on('message received', (data) =>{
    		this.state.messages.push(data['message']);
    		this.setState({
    			'messages': this.state.messages
    		});
    	})
    }
    
    render() {
    	let msgs = this.state.messages;
        return (
			<div className="col-md-8 col-xl-6 chat">
				<div className="card">
					<div className="card-header msg_head">
						<div className="user_info">
							<span>Chat it up!</span>
							<p>{msgs.length} Messages</p>
						</div>
					</div>
					<div className="card-body msg_card_body">
					{ msgs.map( msg =>
						<Response msg={msg.msg} user={msg.user.username} pp={msg.user.profilePic} bot={msg.user.bot} />
					)}
					</div>
					<div className="card-footer">
						<MessageSent />
					</div>
				</div>
			</div>
            );
    }
}