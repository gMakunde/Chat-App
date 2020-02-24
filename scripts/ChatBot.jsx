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
        console.log('hi there')
        let msg = this.state.user_message;
    	let botUser = new User('teenage chatbot', undefined , true);
    	if(msg.msg.includes('!! about')){
    	    const aboutMsg = 'Hello, my name is Jenny Wakeman, I am the teenage chatbot here to assist you';
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, aboutMsg)
    	    });
    	}
    	if(msg.msg.includes('!! help')){
    	    const helpMsg = `
    	    !! about: gives you a description of who I am
    	    !! help: gives you the list of all the commands
    	    !! say<something>: I will say anything you tell me to following that command
    	    !! dior: I will recite the first bar of pop smokes song dior #RIPpopSmoke
    	    !! me<something>: I will say whatever you tell me to followed by "yea thatss meee!"
    	    `;
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, helpMsg)
    	    });
    	}
    	if(msg.msg.includes('!! say')){
    	    const replyIndex = 6 + msg.msg.search('!! say');
    	    const somethingMsg = msg.msg.slice(replyIndex, msg.msg.length);
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, somethingMsg)
    	    });
    	}
    }
    
    render() {
        console.log('hi there')
        if(this.state.user_message){
            this.handleBotMessage();
        }
        return (
			<div />
            );
    }
}