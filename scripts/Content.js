    
import * as React from 'react';

const htmlBody = <div className="container-fluid h-100">
            <h1 style={{textAlign:"center", color:"white", paddingBottom:"20px", paddingTop:"20px"}}> Chat man, chat man, yea thats me! </h1>
			<div className="row justify-content-center h-100">
				<div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="caheader">
						
					</div>
					<div className="card-body contacts_body">
						<ui className="contacts">
						<li className="active">
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
						</li>
						</ui>
					</div>
					<div className="card-footer"></div>
				</div></div>
				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span>Chat with Username</span>
									<p>1767 Messages</p>
								</div>
								
							</div>
							
						</div>
						<div className="card-body msg_card_body">
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									George is Awesome!
									<span className="msg_time">Username</span>
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://www.cartoonbucket.com/wp-content/uploads/2017/04/Jenny-Wakeman-Smiling.png" className="rounded-circle user_img_msg"/>
								</div>
								<div style={{paddingRight:'10px'}}></div>
								<div className="msg_cotainer_send">
									Beep boop bop beep
									<span className="msg_time">Teenage Robot</span>
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="input-group" >
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" className="form-control type_msg_sm" placeholder="Enter your username"></textarea>
							</div>
							<div style={{paddingBottom:'10px'}}></div>
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;

export class Content extends React.Component {
    render() {
        return htmlBody;
        
    }
}