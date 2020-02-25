import * as React from 'react';
import { Socket } from './Socket'

function ProfilePicture(props){
    if(!props.pp){
        return (
            <div className="img_cont">
				<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" className="rounded-circle user_img"/>
				<span className="online_icon"></span>
			</div>
        );
    }
    return (
        <div className="img_cont">
			<img src={props.pp} className="rounded-circle user_img"/>
			<span className="online_icon"></span>
		</div>
        );
}

function UserDetails(props){
    return (
        <div className="user_info">
			<span>{props.user}</span>
			<p>{props.user} is online</p>
		</div>
    );
}

function UsersOnline(props){
    return (
        <li>
			<div className="d-flex bd-highlight">
				<ProfilePicture pp={props.pp} />
				<UserDetails user={props.user} />
			</div>
		</li>
	);
}

export class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	'users': []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.avoidDuplicateUsers = this.avoidDuplicateUsers.bind(this);
    }
    
    avoidDuplicateUsers(value, data){
    	
    }
    
    componentDidMount(){
    	//todo emit users list
    	Socket.on('user received', (data) =>{
    		const duplicate = this.state.users.map( user => {
    			return user.username == data['user'].username;
    		});
    		
    		if(!duplicate.includes(true)){
    			this.state.users.push(data['user'])
	    		this.setState({
	    			'users': this.state.users
	    		});
	    		Socket.emit('users list', {
		    		'users_list': this.state.users
		    	});
    		}
    	});
    }
    
    render() {
    	let users = this.state.users;
        return (
			<div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
				<div className="caheader user_info">
				    <span> {users.length} Users Online </span>
				</div>
				<div className="card-body contacts_body">
					<ui className="contacts">
					{users.map(user =>
					    <UsersOnline user={user.username} pp={user.profilePic} />
					)}
					</ui>
				</div>
				<div className="card-footer"></div>
			</div></div>
            );
    }
}