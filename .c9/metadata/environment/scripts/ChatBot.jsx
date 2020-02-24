{"filter":false,"title":"ChatBot.jsx","tooltip":"/scripts/ChatBot.jsx","undoManager":{"mark":30,"position":30,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":["export class MessagePanel extends React.Component {","    constructor(props) {","        super(props);","        this.state = {","        \t'messages': []","        };","        this.componentDidMount = this.componentDidMount.bind(this);","    }","    ","    componentDidMount(){","    \tSocket.on('message received', (data) =>{","    \t\tthis.state.messages.push(data['message']);","    \t\tthis.setState({","    \t\t\t'messages': this.state.messages","    \t\t});","    \t})","    }","    ","    render() {","    \tlet msgs = this.state.messages;","        return (","\t\t\t<div className=\"col-md-8 col-xl-6 chat\">","\t\t\t\t<div className=\"card\">","\t\t\t\t\t<div className=\"card-header msg_head\">","\t\t\t\t\t\t<div className=\"user_info\">","\t\t\t\t\t\t\t<span>Chat it up!</span>","\t\t\t\t\t\t\t<p>{msgs.length} Messages</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-body msg_card_body\">","\t\t\t\t\t{ msgs.map( msg =>","\t\t\t\t\t\t<Response msg={msg.msg} user={msg.user.username} pp={msg.user.profilePic} bot={msg.user.bot} />","\t\t\t\t\t)}","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-footer\">","\t\t\t\t\t\t<MessageSent />","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","            );","    }","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":33},"action":"insert","lines":["import * as React from 'react';","import { MessageSent } from './MessageSent'","import { Socket } from './Socket'"],"id":3}],[{"start":{"row":0,"column":31},"end":{"row":1,"column":43},"action":"remove","lines":["","import { MessageSent } from './MessageSent'"],"id":4}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":25},"action":"remove","lines":["MessagePanel"],"id":5},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["g"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["e"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["M"],"id":6},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["s"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["s"],"id":7},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"remove","lines":["s"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["e"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["M"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":["t"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["g"]}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["C"],"id":8},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["h"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["a"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["t"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["B"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["o"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["s"],"id":9}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["]"],"id":10},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["["]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":22},"action":"insert","lines":["''"],"id":11}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"remove","lines":["s"],"id":12}],[{"start":{"row":13,"column":45},"end":{"row":14,"column":48},"action":"remove","lines":["","    \t\tthis.state.messages.push(data['message']);"],"id":13}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"remove","lines":["s"],"id":14}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":["s"],"id":15}],[{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"remove","lines":["s"],"id":16}],[{"start":{"row":21,"column":34},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":22,"column":0},"end":{"row":22,"column":5},"action":"insert","lines":["    \t"]}],[{"start":{"row":24,"column":8},"end":{"row":41,"column":9},"action":"remove","lines":["className=\"col-md-8 col-xl-6 chat\">","\t\t\t\t<div className=\"card\">","\t\t\t\t\t<div className=\"card-header msg_head\">","\t\t\t\t\t\t<div className=\"user_info\">","\t\t\t\t\t\t\t<span>Chat it up!</span>","\t\t\t\t\t\t\t<p>{msgs.length} Messages</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-body msg_card_body\">","\t\t\t\t\t{ msgs.map( msg =>","\t\t\t\t\t\t<Response msg={msg.msg} user={msg.user.username} pp={msg.user.profilePic} bot={msg.user.bot} />","\t\t\t\t\t)}","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-footer\">","\t\t\t\t\t\t<MessageSent />","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>"],"id":18}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"insert","lines":["/"],"id":19},{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"insert","lines":[">"]}],[{"start":{"row":21,"column":34},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":22,"column":0},"end":{"row":22,"column":5},"action":"insert","lines":["    \t"]}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["u"],"id":21},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["s"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["e"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["r"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["_"]}],[{"start":{"row":7,"column":27},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":8,"column":0},"end":{"row":8,"column":9},"action":"insert","lines":["        \t"]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":11},"action":"insert","lines":["''"],"id":23}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["u"],"id":24},{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["s"]},{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":["e"]},{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["r"]},{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["_"]}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"remove","lines":["'"],"id":25},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"remove","lines":["'"]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["b"],"id":26},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["o"]},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["_"],"id":27},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["u"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["s"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["e"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":[":"],"id":28}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":21},"action":"insert","lines":["''"],"id":30}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":[","],"id":31}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":28},"end":{"row":7,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582515837487,"hash":"4deffb7b72ef7db58083f1d5a6a023637fcba260"}