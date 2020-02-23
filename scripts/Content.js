    
import * as React from 'react';
import {MessagePanel} from './MessagePanel'
							
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
        return (
        	<div>
        	{title}
        	<MessagePanel />
        	</div>
        	);
        
    }
}