(this["webpackJsonpclicky-findy"]=this["webpackJsonpclicky-findy"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(2),r=a.n(i),l=a(3),s=a(4),o=a(6),u=a(5),d=a(7);a(13);function m(e){return c.a.createElement("button",{className:"target",onClick:function(){return e.click(e.name)},key:e.index,id:e.index},"?")}a(14);function k(e){return c.a.createElement("li",{className:"row-items",key:e.index},c.a.createElement(m,{name:e.name,index:e.index,click:e.click}))}a(15);function h(e){var t=Object.keys(e.row1),a=Object.keys(e.row2),n=Object.keys(e.row3),i=Object.keys(e.row4),r=Object.keys(e.row5);return c.a.createElement("div",null,c.a.createElement("ul",{className:"rows"},t.map((function(t,a){return c.a.createElement(k,{name:t,key:t,index:a,click:e.click})}))),c.a.createElement("ul",{className:"rows"},a.map((function(t,a){return c.a.createElement(k,{name:t,key:t,index:a,click:e.click})}))),c.a.createElement("ul",{className:"rows"},n.map((function(t,a){return c.a.createElement(k,{name:t,key:t,index:a,click:e.click})}))),c.a.createElement("ul",{className:"rows"},i.map((function(t,a){return c.a.createElement(k,{name:t,key:t,index:a,click:e.click})}))),c.a.createElement("ul",{className:"rows"},r.map((function(t,a){return c.a.createElement(k,{name:t,key:t,index:a,click:e.click})}))))}a(16);function f(e){return c.a.createElement("button",{className:"reset-button",onClick:function(){return e.click(e.click)}},"AGAIN, AGAIN!")}a(17);var w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={squares:{row1:{"1a":{id:"1a"},"1b":{id:"1b"},"1c":{id:"1c"},"1d":{id:"1d"},"1e":{id:"1e"}},row2:{"2a":{id:"2a"},"2b":{id:"2b"},"2c":{id:"2c"},"2d":{id:"2d"},"2e":{id:"2e"}},row3:{"3a":{id:"3a"},"3b":{id:"3b"},"3c":{id:"3c"},"3d":{id:"3d"},"3e":{id:"3e"}},row4:{"4a":{id:"4a"},"4b":{id:"4b"},"4c":{id:"4c"},"4d":{id:"4d"},"4e":{id:"4e"}},row5:{"5a":{id:"5a"},"5b":{id:"5b"},"5c":{id:"5c"},"5d":{id:"5d"},"5e":{id:"5e"}}},target:{id:"1a"},displayStatus:!0},a.targetSet=function(){var e,t=a.state.squares,n=Object.keys(t);e=(e=t[n[n.length*Math.random()<<0]])[(n=Object.keys(e))[n.length*Math.random()<<0]],a.setState({target:e})},a.handleClick=function(e){e===a.state.target.id&&a.setState({displayStatus:!1})},a.handleReset=function(){a.targetSet(),a.setState({displayStatus:!0})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.targetSet()}},{key:"render",value:function(){return!0===this.state.displayStatus?c.a.createElement("main",{className:"App"},c.a.createElement("h1",null,"CLicKy-fINdY"),c.a.createElement(h,{target:this.state.target,row1:this.state.squares.row1,row2:this.state.squares.row2,row3:this.state.squares.row3,row4:this.state.squares.row4,row5:this.state.squares.row5,click:this.handleClick})):c.a.createElement("main",null,c.a.createElement("h1",null,"CLicKy-fINdY"),c.a.createElement("h2",null,"YOU FOUND IT!"),c.a.createElement("h3",null,"Ha ha HA ha HA ha!"),c.a.createElement("h4",null,"Wow!"),c.a.createElement(f,{click:this.handleReset}))}}]),t}(n.Component);w.defaultProps={};var y=w;a(18);r.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a04f68d8.chunk.js.map