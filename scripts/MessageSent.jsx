import * as React from 'react';
import { Socket } from './Socket'
import {Message} from './MessageObjects'
import { Login } from './Login'


export class MessageSent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			user_message: '',
			user: '',
			
        };
        
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeClicked = this.canBeClicked.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
    	Socket.on('user received', (data) =>{
    		console.log('message sent hi there')
    		this.state.user = data['user']
    		});
    }
    
    handleSubmit(event){
    	event.preventDefault();
    	Socket.on('user received', (data) =>{
    		this.state.user = data['user']
    	});
    	
    	let message = new Message(this.state.user, this.state.user_message);
    	this.state.user_message = message;
    	
    	Socket.emit('new message', {
    		'user_message': this.state.user_message
    	});
    	
    	this.setState({
    	    user_message: ''
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
    
    canBeClicked() {
    console.log('user:', this.state.user)
    const {user_message} = this.state;
    const {user} = this.state;
    return ((user_message.length > 0) && (user.username.length > 0));
    }
    
    render() {
        let isEnabled = this.canBeClicked();
        return (
        <div>
            <Login />
            <div style={{paddingBottom:'5px'}}/>
            <div className="input-group">
    			<div className="input-group-append">
    				<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
    			</div>
    			<textarea name="" value = {this.state.user_message} className="form-control type_msg" placeholder="Type your message..." onChange = {this.handleChangeMessage}></textarea>
    			<div className="input-group-append">
    				<button disabled= {!isEnabled } onClick={this.handleSubmit} className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
    			</div>
    		</div>
    	</div>
            );
    }
}