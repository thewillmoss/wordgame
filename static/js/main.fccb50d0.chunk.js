(this.webpackJsonpwordgame=this.webpackJsonpwordgame||[]).push([[0],{25:function(e,t,r){e.exports=r(33)},30:function(e,t,r){},31:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(21),i=r.n(o),c=(r(30),r(31),r(8)),l=r(9),s=r(13),u=r(12),d=r(10),v=r(4),h="tile",f=r(36),m=function(e){var t=e.color,r=e.location,n=e.children,o=Object(f.a)({accept:h,drop:function(){return{color:t,location:r}},canDrop:function(){return!0}}),i=Object(v.a)(o,2),c=(i[0].isOver,i[1]);return a.a.createElement("div",{ref:c,style:{backgroundColor:t,borderRadius:"10%",width:"100%",height:0,paddingBottom:"100%"}},n)},p=r(24),g={position:"relative",width:"100%",color:"#3b2c13",borderRadius:"10%",height:"0",paddingBottom:"100%"},b={margin:0,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},E=function(e){e.letter;var t=e.color;return a.a.createElement("div",{style:Object(p.a)({},g,{backgroundColor:t||"#D2B48C"})},a.a.createElement("div",{style:b}))},T=r(37),y=function(e){var t=e.letter,r=e.tileId,n=e.moveFunction,o=Object(T.a)({item:{type:h,tileId:r},end:function(e,t){return t.getDropResult()&&n(r,t.getDropResult().location)},collect:function(e){return{isDragging:!!e.isDragging()}}}),i=Object(v.a)(o,2),c=(i[0].isDragging,i[1]);return a.a.createElement("div",{ref:c,style:{opacity:1,fontSize:"100%",fontWeight:"bold",cursor:""}},a.a.createElement(E,{letter:t,color:"darkgoldenrod"}))},w=function(e){var t=e.tileIndexToLetter,r=e.activeTileLocMap,n=e.moveFunction;return a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},O(t,r,n))},O=function(e,t,r){console.log(t.keys());for(var n=[],a=0;a<225;a++)e.has(a)?n.push(D(a,k(a,e,t,r))):n.push(D(a));return n},D=function(e,t){var r=I(e);return a.a.createElement("div",{key:e,style:{width:"calc(100% / 15)",height:"calc(100% / 15)",backgroundColor:"#e9dabd"}},a.a.createElement("div",{style:{padding:"2%"}},a.a.createElement(m,{location:e,color:r},t)))},k=function(e,t,r,n){var o=t.has(e),i=r.has(e);if(o)return i?a.a.createElement(y,{letter:t.get(e),tileId:r.get(e),moveFunction:n}):a.a.createElement(E,{letter:t.get(e)})},I=function(e){var t=e%15,r=Math.floor(e/15);return 3==C[r][t]?"#9D6055":2==C[r][t]?"#D2AFB5":3==j[r][t]?"#05A4CB":2==j[r][t]?"#B6CBCC":"#DDC7A9"},j=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,3,1,1,1,3,1,1,1,1,1],[1,1,1,1,1,1,2,1,2,1,1,1,1,1,1],[2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,3,1,1,1,3,1,1,1,3,1,1,1,3,1],[1,1,2,1,1,1,2,1,2,1,1,1,2,1,1],[1,1,1,2,1,1,1,1,1,1,1,2,1,1,1],[1,1,2,1,1,1,2,1,2,1,1,1,2,1,1],[1,3,1,1,1,3,1,1,1,3,1,1,1,3,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,1,1,1,1,1,1,2,1,1,1,1,1,1,2],[1,1,1,1,1,1,2,1,2,1,1,1,1,1,1],[1,1,1,1,1,3,1,1,1,3,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],C=[[3,1,1,1,1,1,1,3,1,1,1,1,1,1,3],[1,2,1,1,1,1,1,1,1,1,1,1,1,2,1],[1,1,2,1,1,1,1,1,1,1,1,1,2,1,1],[1,1,1,2,1,1,1,1,1,1,1,2,1,1,1],[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[3,1,1,1,1,1,1,2,1,1,1,1,1,1,3],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,2,1,1,1,1,1,2,1,1,1,1],[1,1,1,2,1,1,1,1,1,1,1,2,1,1,1],[1,1,2,1,1,1,1,1,1,1,1,1,2,1,1],[1,2,1,1,1,1,1,1,1,1,1,1,1,2,1],[3,1,1,1,1,1,1,3,1,1,1,1,1,1,3]],L=function(e){var t=e.letterMap,r=e.moveFunction,n=Object(f.a)({accept:h,drop:function(){return{location:void 0}},canDrop:function(){return!0}}),o=Object(v.a)(n,2),i=(o[0].isOver,o[1]);return a.a.createElement("div",{ref:i,style:{width:"100%",height:"100%",backgroundColor:"saddlebrown",display:"flex",flexWrap:"wrap",justifyContent:"center"}},M(t,r))},M=function(e,t){var r=[];return e.forEach((function(e,n){r.push(a.a.createElement("div",{style:{width:"calc(100% / 15)",height:"calc(100% / 15)",padding:"1%"}},a.a.createElement(y,{tileId:n,moveFunction:t,letter:e})))})),r},B=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={activeTiles:n.resetActiveTiles(n.props.frame)},n.moveTile=n.moveTile.bind(Object(d.a)(n)),n}return Object(l.a)(r,[{key:"resetActiveTiles",value:function(e){console.log(e);for(var t=[],r=0;r<e.length;r++)t.push({letter:e[r]});return t}},{key:"moveTile",value:function(e,t){if(console.log("tileID:",e),console.log("loc:",t),console.log(this.props.frame),this&&this.state&&this.state.activeTiles){var r=this.state.activeTiles;if(t){if(this.props.board[t]&&" "==this.props.board[t]){for(var n=0;n<r.length;n++)r[n].loc===t&&(r[n].loc=void 0);r[e]&&(r[e].loc=t),this.setState({activeTiles:r})}}else r[e].loc=void 0,this.setState({activeTiles:r})}}},{key:"getTileIdNoLocToLetter",value:function(e){for(var t=new Map,r=0;r<e.length;r++)e[r].loc||t.set(r,e[r].letter);return t}},{key:"tileLocToID",value:function(e){for(var t=new Map,r=0;r<e.length;r++)e[r].loc&&t.set(e[r].loc,r);return t}},{key:"createLetterMap",value:function(e,t){for(var r=new Map,n=0;n<e.length;n++)" "!=e[n]&&r.set(n,e[n]);for(var a=0;a<t.length;a++)r.set(t[a].loc,t[a].letter);return r}},{key:"render",value:function(){return a.a.createElement("div",{style:{width:"100%"}},a.a.createElement(w,{activeTileLocMap:this.tileLocToID(this.state.activeTiles),tileIndexToLetter:this.createLetterMap(this.props.board,this.state.activeTiles),moveFunction:this.moveTile}),a.a.createElement(L,{letterMap:this.getTileIdNoLocToLetter(this.state.activeTiles),moveFunction:this.moveTile}))}}]),r}(n.Component),F=r(35),A=r(23),x=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={board:N,frame:["A","B","C","D","E","F","G"]},n}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement(F.a,{backend:A.a},a.a.createElement("div",{className:"UI"},a.a.createElement(B,{board:this.state.board,frame:this.state.frame})))}}]),r}(n.Component),N=[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","I"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","M"," "," "," "," "," "," "," "," ","E","N","D"," "," "," ","P"," "," "," "," "," "," "," "," ","V"," "," ","A","U","G","I","T","E"," "," "," "," "," "," ","O"," "," ","D"," ","O"," "," "," "," "," "," "," "," "," ","H","M"," ","Z"," ","J","E","D","I","S"," "," "," "," "," ","E","Y","R","E"," ","I","W","I"," ","T"," "," "," "," "," "," ","X","E","D"," "," "," ","Y","G","O"," "," "," "," "," "," ","O","F"," "," "," "," ","A"," ","L"," "," "," "," "," "," "," "," "," "," "," "," ","N","U","N"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];var W=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.fccb50d0.chunk.js.map