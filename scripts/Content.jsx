import * as React from 'react';
import {MessagePanel} from './MessagePanel'
import {UserPanel} from './UserPanel'
							

const title = <h1 style={{textAlign:"center", color:"white", paddingBottom:"20px", paddingTop:"20px"}}> Chat man, chat man. Yea thats me! </h1>;


export class Content extends React.Component {
    render() {
        return (
        	<div>
        		{title}
	        	<div className="container-fluid h-100">
					<div className="row justify-content-center h-100">
						<UserPanel />
						<MessagePanel />
					</div>
				</div>
			</div>
        	);
        
    }
}