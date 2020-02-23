import * as React from 'react';
import { MessageSent } from './MessageSent'

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
        super();
    }
    
    render() {
        return (
            <div className="container-fluid h-100">
				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<Response />
							<div className="d-flex bd-highlight">
								<div className="user_info">
								</div>
							</div>
						</div>
						<div className="card-body msg_card_body">
						</div>
						<div className="card-footer">
							<Button />
						</div>
					</div>
				</div>
			</div>
            );
    }
}