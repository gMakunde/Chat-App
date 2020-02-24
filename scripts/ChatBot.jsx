import * as React from 'react';
import { Socket } from './Socket'
import {User, Message} from './MessageObjects'

export class ChatBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	'user_message': false,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleBotMessage=this.handleBotMessage.bind(this);
    }
    
    componentDidMount(){
    	Socket.on('message received', (data) =>{
    		this.setState({
    			'user_message': data['message']
    		});
    	})
    }
    
    handleBotMessage(){
        let msg = this.state.user_message;
    	let botUser = new User('teenage chatbot', undefined , true);
    	if(msg.msg.includes('!! about')){
    	    const aboutMsg = 'Hello, my name is Jenny Wakeman, I am the teenage chatbot here to assist you';
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, aboutMsg)
    	    });
    	}
    }
    
    render() {
        if(this.state.user_message){
            this.handleBotMessage();
        }
        return (
			<div />
            );
    }
}