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
    	
    	
        return (
			<div />
            );
    }
}