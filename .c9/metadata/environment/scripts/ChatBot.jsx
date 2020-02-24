{"filter":false,"title":"ChatBot.jsx","tooltip":"/scripts/ChatBot.jsx","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":["export class MessagePanel extends React.Component {","    constructor(props) {","        super(props);","        this.state = {","        \t'messages': []","        };","        this.componentDidMount = this.componentDidMount.bind(this);","    }","    ","    componentDidMount(){","    \tSocket.on('message received', (data) =>{","    \t\tthis.state.messages.push(data['message']);","    \t\tthis.setState({","    \t\t\t'messages': this.state.messages","    \t\t});","    \t})","    }","    ","    render() {","    \tlet msgs = this.state.messages;","        return (","\t\t\t<div className=\"col-md-8 col-xl-6 chat\">","\t\t\t\t<div className=\"card\">","\t\t\t\t\t<div className=\"card-header msg_head\">","\t\t\t\t\t\t<div className=\"user_info\">","\t\t\t\t\t\t\t<span>Chat it up!</span>","\t\t\t\t\t\t\t<p>{msgs.length} Messages</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-body msg_card_body\">","\t\t\t\t\t{ msgs.map( msg =>","\t\t\t\t\t\t<Response msg={msg.msg} user={msg.user.username} pp={msg.user.profilePic} bot={msg.user.bot} />","\t\t\t\t\t)}","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-footer\">","\t\t\t\t\t\t<MessageSent />","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>","            );","    }","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":33},"action":"insert","lines":["import * as React from 'react';","import { MessageSent } from './MessageSent'","import { Socket } from './Socket'"],"id":3}],[{"start":{"row":0,"column":31},"end":{"row":1,"column":43},"action":"remove","lines":["","import { MessageSent } from './MessageSent'"],"id":4}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":25},"action":"remove","lines":["MessagePanel"],"id":5},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["g"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["e"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["M"],"id":6},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["s"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["s"],"id":7},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"remove","lines":["s"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["e"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["M"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":["t"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["g"]}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["C"],"id":8},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["h"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["a"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["t"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["B"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["o"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["s"],"id":9}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["]"],"id":10},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["["]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":22},"action":"insert","lines":["''"],"id":11}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"remove","lines":["s"],"id":12}],[{"start":{"row":13,"column":45},"end":{"row":14,"column":48},"action":"remove","lines":["","    \t\tthis.state.messages.push(data['message']);"],"id":13}],[{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"remove","lines":["s"],"id":14}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":["s"],"id":15}],[{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"remove","lines":["s"],"id":16}],[{"start":{"row":21,"column":34},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":22,"column":0},"end":{"row":22,"column":5},"action":"insert","lines":["    \t"]}],[{"start":{"row":24,"column":8},"end":{"row":41,"column":9},"action":"remove","lines":["className=\"col-md-8 col-xl-6 chat\">","\t\t\t\t<div className=\"card\">","\t\t\t\t\t<div className=\"card-header msg_head\">","\t\t\t\t\t\t<div className=\"user_info\">","\t\t\t\t\t\t\t<span>Chat it up!</span>","\t\t\t\t\t\t\t<p>{msgs.length} Messages</p>","\t\t\t\t\t\t</div>","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-body msg_card_body\">","\t\t\t\t\t{ msgs.map( msg =>","\t\t\t\t\t\t<Response msg={msg.msg} user={msg.user.username} pp={msg.user.profilePic} bot={msg.user.bot} />","\t\t\t\t\t)}","\t\t\t\t\t</div>","\t\t\t\t\t<div className=\"card-footer\">","\t\t\t\t\t\t<MessageSent />","\t\t\t\t\t</div>","\t\t\t\t</div>","\t\t\t</div>"],"id":18}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"insert","lines":["/"],"id":19},{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"insert","lines":[">"]}],[{"start":{"row":21,"column":34},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":22,"column":0},"end":{"row":22,"column":5},"action":"insert","lines":["    \t"]}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["u"],"id":21},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["s"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["e"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["r"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["_"]}],[{"start":{"row":7,"column":27},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":8,"column":0},"end":{"row":8,"column":9},"action":"insert","lines":["        \t"]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":11},"action":"insert","lines":["''"],"id":23}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["u"],"id":24},{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["s"]},{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":["e"]},{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["r"]},{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["_"]}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"remove","lines":["'"],"id":25},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"remove","lines":["'"]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["b"],"id":26},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["o"]},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["_"],"id":27},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["u"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["s"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["e"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":[":"],"id":28}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":21},"action":"insert","lines":["''"],"id":30}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":[","],"id":31}],[{"start":{"row":23,"column":5},"end":{"row":23,"column":6},"action":"insert","lines":["i"],"id":32},{"start":{"row":23,"column":6},"end":{"row":23,"column":7},"action":"insert","lines":["f"]}],[{"start":{"row":23,"column":7},"end":{"row":23,"column":8},"action":"insert","lines":[" "],"id":33}],[{"start":{"row":23,"column":7},"end":{"row":23,"column":8},"action":"remove","lines":[" "],"id":34}],[{"start":{"row":23,"column":7},"end":{"row":23,"column":9},"action":"insert","lines":["()"],"id":35}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["m"],"id":36},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["s"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["g"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["."]}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["m"],"id":37},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["g"],"id":38}],[{"start":{"row":23,"column":15},"end":{"row":23,"column":17},"action":"insert","lines":["()"],"id":39}],[{"start":{"row":23,"column":15},"end":{"row":23,"column":17},"action":"remove","lines":["()"],"id":40}],[{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["."],"id":41},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["i"]},{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["c"],"id":42},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["l"]},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["u"]},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["d"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["e"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":24},"end":{"row":23,"column":26},"action":"insert","lines":["()"],"id":43}],[{"start":{"row":23,"column":25},"end":{"row":23,"column":27},"action":"insert","lines":["''"],"id":44}],[{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["!"],"id":45},{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["!"]}],[{"start":{"row":23,"column":28},"end":{"row":23,"column":29},"action":"insert","lines":[" "],"id":46},{"start":{"row":23,"column":29},"end":{"row":23,"column":30},"action":"insert","lines":["a"]},{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"insert","lines":["b"]},{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"insert","lines":["o"]},{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["u"]},{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":["{"],"id":47}],[{"start":{"row":23,"column":38},"end":{"row":25,"column":6},"action":"insert","lines":["","    \t    ","    \t}"],"id":48}],[{"start":{"row":22,"column":34},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":23,"column":0},"end":{"row":23,"column":5},"action":"insert","lines":["    \t"]},{"start":{"row":23,"column":5},"end":{"row":23,"column":6},"action":"insert","lines":["l"]},{"start":{"row":23,"column":6},"end":{"row":23,"column":7},"action":"insert","lines":["e"]},{"start":{"row":23,"column":7},"end":{"row":23,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":[" "],"id":50},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["b"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["o"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["t"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["-"]}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":["-"],"id":51}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["_"],"id":52},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["u"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["s"]},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["e"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":[" "],"id":53},{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["="]}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["n"],"id":55},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["e"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["w"]}],[{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":[" "],"id":56},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["U"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["s"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["r"],"id":57}],[{"start":{"row":23,"column":28},"end":{"row":23,"column":30},"action":"insert","lines":["()"],"id":58}],[{"start":{"row":23,"column":29},"end":{"row":23,"column":31},"action":"insert","lines":["''"],"id":59}],[{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"insert","lines":["t"],"id":60},{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"insert","lines":["e"]},{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["e"]},{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["n"]},{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":["a"]},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["g"]},{"start":{"row":23,"column":36},"end":{"row":23,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":[" "],"id":61},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"insert","lines":["c"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"insert","lines":["h"]},{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"insert","lines":["a"]},{"start":{"row":23,"column":41},"end":{"row":23,"column":42},"action":"insert","lines":["t"]},{"start":{"row":23,"column":42},"end":{"row":23,"column":43},"action":"insert","lines":["b"]}],[{"start":{"row":23,"column":43},"end":{"row":23,"column":44},"action":"insert","lines":["o"],"id":62},{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":[","],"id":63}],[{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":[" "],"id":64}],[{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":[","],"id":65}],[{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":[" "],"id":66}],[{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"insert","lines":["T"],"id":67}],[{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"remove","lines":["T"],"id":68}],[{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"insert","lines":["t"],"id":69},{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"insert","lines":["r"]},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"insert","lines":["u"]},{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["w"]}],[{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"remove","lines":["w"],"id":70}],[{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["e"],"id":71}],[{"start":{"row":24,"column":38},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":72},{"start":{"row":25,"column":0},"end":{"row":25,"column":9},"action":"insert","lines":["    \t    "]}],[{"start":{"row":25,"column":9},"end":{"row":27,"column":8},"action":"insert","lines":["Socket.emit('new message', {","    \t\t'user_message': this.state.user_message","    \t});"],"id":73}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":45},"action":"remove","lines":["this.state.user_message"],"id":74},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["n"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["e"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["w"]}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":[" "],"id":75}],[{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["M"],"id":76},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":26},"end":{"row":26,"column":28},"action":"remove","lines":["Me"],"id":77},{"start":{"row":26,"column":26},"end":{"row":26,"column":35},"action":"insert","lines":["Message()"]}],[{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["b"],"id":78},{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["o"]}],[{"start":{"row":26,"column":34},"end":{"row":26,"column":36},"action":"remove","lines":["bo"],"id":79},{"start":{"row":26,"column":34},"end":{"row":26,"column":42},"action":"insert","lines":["bot_user"]}],[{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"insert","lines":[","],"id":80}],[{"start":{"row":26,"column":43},"end":{"row":26,"column":44},"action":"insert","lines":[" "],"id":81}],[{"start":{"row":24,"column":38},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":82},{"start":{"row":25,"column":0},"end":{"row":25,"column":9},"action":"insert","lines":["    \t    "]}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["c"],"id":83},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["o"]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["n"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["s"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":[" "],"id":84}],[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["a"],"id":85},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["b"]},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["o"]},{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["u"]},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["M"],"id":86},{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["s"]},{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["g"]}],[{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"remove","lines":["u"],"id":87},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":["_"]}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["U"],"id":88}],[{"start":{"row":27,"column":34},"end":{"row":27,"column":42},"action":"remove","lines":["bot_user"],"id":89},{"start":{"row":27,"column":34},"end":{"row":27,"column":41},"action":"insert","lines":["botUser"]}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":[" "],"id":90},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["="]}],[{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":[" "],"id":91}],[{"start":{"row":25,"column":26},"end":{"row":25,"column":28},"action":"insert","lines":["''"],"id":92}],[{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["a"],"id":93},{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"insert","lines":["b"]},{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"insert","lines":["o"]}],[{"start":{"row":27,"column":43},"end":{"row":27,"column":46},"action":"remove","lines":["abo"],"id":94},{"start":{"row":27,"column":43},"end":{"row":27,"column":51},"action":"insert","lines":["aboutMsg"]}],[{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"insert","lines":[","],"id":95}],[{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"insert","lines":[" "],"id":96}],[{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"remove","lines":[" "],"id":97},{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"remove","lines":[","]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":[" "],"id":98},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["u"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":["n"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":["d"]}],[{"start":{"row":23,"column":47},"end":{"row":23,"column":50},"action":"remove","lines":["und"],"id":99},{"start":{"row":23,"column":47},"end":{"row":23,"column":56},"action":"insert","lines":["undefined"]}],[{"start":{"row":23,"column":64},"end":{"row":23,"column":65},"action":"insert","lines":[";"],"id":100}],[{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":[";"],"id":101}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":26},"end":{"row":23,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582516336561,"hash":"c597400514a6369b025980cc6119539e9417cf77"}