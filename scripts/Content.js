    
import * as React from 'react';

const userResponse = <div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									George is Awesome!
									<span className="msg_time">Username</span>
								</div>
							</div>;
							
const botResponse = <div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://www.cartoonbucket.com/wp-content/uploads/2017/04/Jenny-Wakeman-Smiling.png" className="rounded-circle user_img_msg"/>
								</div>
								<div style={{paddingRight:'10px'}}></div>
								<div className="msg_cotainer_send">
									Beep boop bop beep
									<span className="msg_time">Teenage Robot</span>
								</div>
							</div>;
							
const usersOnline = <li className="active">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" className="rounded-circle user_img"/>
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
									<span>Username</span>
									<p>Username is online</p>
								</div>
							</div>
						</li>;

const messageInput = < div>
							<div className="input-group" style={{paddingBottom:'5px'}}>
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" className="form-control type_msg_sm" placeholder="Enter your username"></textarea>
							</div>
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>;

const userCount = <span> 1 Person online </span>;

const chatWith = <span>Chat with Username</span>;

const messageCount = <p>1767 Messages</p>;

const userPanel = <div className="row justify-content-center h-100">
				<div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="caheader user_info">
					</div>
					<div className="card-body contacts_body">
						<ui className="contacts">
						</ui>
					</div>
					<div className="card-footer"></div>
				</div></div>
				</div>;

const messagePanel = <div className="container-fluid h-100">
			
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
						</div>
					</div>
				</div>
			</div>;

const title = <h1 style={{textAlign:"center", color:"white", paddingBottom:"20px", paddingTop:"20px"}}> Chat man, chat man, yea thats me! </h1>;

export class Content extends React.Component {
	constructor() {
		super();
		this.state = {
			usersList: [],
			messages: [],
			
		}
	};
    render() {
        return messagePanel;
        
    }
}