import * as React from 'react';
import { Socket } from './Socket'

export class ChatBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	'user_message': '',
        	bot_user: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
    	Socket.on('message received', (data) =>{
    		this.setState({
    			'user_message': this.state.message
    		});
    	})
    }
    
    render() {
    	let msg = this.state.message;
    	let botUser = new User('teenage chatbot', undefined , true);
    	if(msg.msg.includes('!! about')){
    	    const aboutMsg = '';
    	    Socket.emit('new message', {
    		'user_message': new Message(botUser, aboutMsg)
    	});
    	    
    	}
    	
        return (
			<div />
            );
    }
}