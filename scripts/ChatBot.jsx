import * as React from 'react';
import { Socket } from './Socket';
import {User, Message} from './MessageObjects';

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
    	});
    }
    
    handleBotMessage(){
        //todo print message when user enters
        let msg = this.state.user_message;
    	let botUser = new User('teenage chatbot', undefined , true);
    	let prevCommand = false;
    	
    	if(msg.msg.includes('!! about')){
    	    const aboutMsg = "Hey there big fella! My name is Jenny Wakeman, I am the teenage chatbot here to assist you. To see my commands type '!! help'";
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, aboutMsg)
    	    });
    	    prevCommand = true;
    	}
    	if(msg.msg.includes('!! help')){
    	    const helpMsg = `
    	    (!! about): gives you a description of who I am
    	    (!! help): gives you the list of all the commands
    	    (!! say)<something>: I will say anything you tell me to following that command
    	    (!! dior): I will recite the first bar of pop smokes song dior #RIPpopSmoke
    	    (!! me)<something>: I will say whatever you tell me to followed by "yea thatss meee!"
    	    `;
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, helpMsg)
    	    });
    	    prevCommand = true;
    	}
    	if(msg.msg.includes('!! dior')){
    	    const diorMsg = `Said I'm never lackin', always pistol packing
            With them automatics, we gon' send him to heaven
            Wait, wait, wait, wait, aye, aye, woo (aw, s**t), huh (ha ha)
            Oh you feelin' sturdy, huh? (you feelin' sturdy, man)
            Shake some
            Shake it huh, shake it huh, shake it huh`;
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, diorMsg)
    	    });
    	    prevCommand = true;
    	}
    	if(msg.msg.includes('!! say')){
    	    const replyIndex = 6 + msg.msg.search('!! say');
    	    const somethingMsg = msg.msg.slice(replyIndex, msg.msg.length);
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, somethingMsg)
    	    });
    	    prevCommand = true;
    	}
    	if(msg.msg.includes('!! me')){
    	    const replyIndex = 5 + msg.msg.search('!! me');
    	    const meMsg = msg.msg.slice(replyIndex, msg.msg.length) + " yea thatss meee!";
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, meMsg)
    	    });
    	    prevCommand = true;
    	}
    	if(msg.msg.includes('!!') && !prevCommand){
    	    const noticeMsg = "I noticed your message contained '!!' You're either really excited or.. you want to use a command. To see the commands type in '!! help'";
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, noticeMsg)
    	    });
    	}
    }
    
    render() {
        if(this.state.user_message && !this.state.user_message.user.bot){
            this.handleBotMessage();
        }
        return (
			<div />
            );
    }
}