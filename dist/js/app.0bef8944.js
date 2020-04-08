(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01be":function(e,t,n){e.exports=n.p+"img/print.1e46e84a.svg"},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"079c":function(e,t,n){},1018:function(e,t,n){"use strict";var r=n("7353"),s=n.n(r);s.a},"199c":function(e,t,n){n("e811")},"1f9e":function(e,t,n){e.exports=n.p+"img/drag.23dd63ac.svg"},"23be":function(e,t,n){"use strict";var r=n("199c"),s=n.n(r);t["default"]=s.a},"24e9":function(e,t,n){e.exports=n.p+"img/add.dfcc83ae.svg"},"2c46":function(e,t,n){e.exports=n.p+"img/delete.e7403043.svg"},"3dfd":function(e,t,n){"use strict";var r=n("5e54"),s=n("23be"),a=(n("034f"),n("2877")),i=Object(a["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("3dfd"),a=n("8c4f"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("BaseHamburger"),r("nav",{staticClass:"pure-menu"},[r("BaseHeader"),r("p",[e._v("Let's get started!")]),r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item pure-menu-link menu-new",on:{click:e.newVersion}},[r("img",{attrs:{src:n("24e9"),alt:"New"}}),e._v(" New ")])]),r("h3",[e._v("Saved")]),r("ul",{staticClass:"pure-menu-list menu-bottom"},e._l(e.versions,(function(t){return r("li",{key:t.id,staticClass:"pure-menu-item pure-menu-link",on:{click:function(n){return e.loadVersion(t)}}},[e._v(e._s(t.name)+" Created On "+e._s(t.createdAtDate().toLocaleString()))])})),0)],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"ribbon"},[n("a",{attrs:{href:"https://github.com/carsonreinke/student-selected-seating-generator"}},[n("img",{attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149",alt:"Fork me on GitHub"}})])]),n("h2",[e._v("Welcome")]),n("p",[e._v("This a simple tool to help teachers arrange students in a classroom based on their own preferences for each other. Students will be automatically selected for a particular desk based on proximity of their preferences.")]),n("p",[e._v(" A note on "),n("b",[e._v("privacy")]),e._v(", this tool has no tracking/analytics and all data saved is on your local web browser. ")]),n("p",{staticClass:"bottom"},[e._v(" Built by "),n("a",{attrs:{href:"https://reinke.co/"}},[e._v("Carson Reinke")])])])}],c=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"hamburger",on:{click:e.toggle}},[n("span")])},l=[],d={methods:{toggle:function(e){var t=document.getElementById("app");t.classList.contains("expanded")?t.classList.remove("expanded"):t.classList.add("expanded")}}},f=d,m=n("2877"),h=Object(m["a"])(f,u,l,!1,null,null,null),p=h.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Student Selected Seating Generator")])])}],b=(n("1018"),{}),O=Object(m["a"])(b,v,g,!1,null,"6298ff8e",null),k=O.exports,y={name:"version-selector",components:{BaseHamburger:p,BaseHeader:k},computed:Object(c["c"])(["versions"]),methods:{newVersion:function(){var e=this;this.$store.dispatch("newVersion").then((function(){e.$router.push({name:"desk-editor",props:{newVersion:!0}})}))},loadVersion:function(e){var t=this;this.$store.dispatch("loadVersion",e).then((function(){t.$router.push("desks")}))}}},E=y,_=(n("a73f"),Object(m["a"])(E,i,o,!1,null,"0f1c5571",null)),j=_.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("BaseHamburger"),r("nav",{staticClass:"pure-menu"},[r("BaseHeader"),r("p",[e._v("Provide the arrangement of desks for the room.")]),r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.next}},[r("img",{attrs:{src:n("6de5"),alt:"Next"}}),e._v(" Next ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.startOver}},[r("img",{attrs:{src:n("9558"),alt:"Start Over"}}),e._v(" Start Over ")])]),r("h3",[e._v("Edit")]),r("ul",{staticClass:"pure-menu-list menu-bottom"},[r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.addDesk}},[r("img",{attrs:{src:n("24e9"),alt:"Add Desk"}}),e._v(" Add Desk ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.arrange}},[r("img",{attrs:{src:n("8a5d"),alt:"Arrange"}}),e._v(" Arrange ")])])],1),r("main",[r("Room",{attrs:{editable:""}})],1)],1)},w=[],S=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"room"}},[n("div",{staticClass:"name"},[n("h2",{attrs:{contenteditable:e.isEditable},domProps:{textContent:e._s(e.name)},on:{blur:e.onBlur,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyDown(t)}}})]),e._l(e.allDesks,(function(t){return n("Desk",{key:t.id,attrs:{desk:t,editable:e.isEditable}})}))],2)},x=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{desk:!0,active:e.isDragging},style:{left:e.desk.position.x+"px",top:e.desk.position.y+"px",transform:"rotate("+e.desk.position.angle+"deg)"},attrs:{draggable:e.isEditable},on:{dragstart:e.onDragStart,dragend:e.onDragEnd,touchstart:e.onDragStart,touchend:e.onDragEnd}},[e._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"drag-handle"},[e.isEditable?r("img",{attrs:{alt:"Drag Me",src:n("1f9e")}}):e._e()]),r("div",{staticClass:"delete-handle"},[e.isEditable?r("img",{attrs:{alt:"Delete",src:n("2c46")},on:{click:function(t){return e.removeDesk(e.desk)}}}):e._e()]),r("div",{staticClass:"name"},[e._v(e._s(e.name()))]),r("div",{class:{"rotate-handle":!0,active:e.isRotating}},[e.isEditable?r("img",{attrs:{alt:"Rotate Me",src:n("600a")},on:{mousedown:e.onRotateStart,touchstart:e.onRotateStart}}):e._e()]),r("div",{staticClass:"clear"})])])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon"},[r("img",{attrs:{alt:"",src:n("8641")}})])}];n("b0c0");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(S["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=180/Math.PI,M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"touches";return e[t]?{x:e[t][0].clientX,y:e[t][0].clientY}:{x:e.clientX,y:e.clientY}},V={name:"desk",props:{desk:Object,editable:Boolean},computed:{isEditable:function(){return this.editable},isRotating:function(){return null!==this.rotating},isDragging:function(){return null!==this.initialPosition}},data:function(){return{initialPosition:{},rotating:null}},methods:A({},Object(c["b"])(["moveDesk","removeDesk","rotateDesk"]),{name:function(){var e=this.desk;return null===e.student?"Student":e.student.name},onDragStart:function(e){this.initialPosition=M(e)},onDragEnd:function(e){var t=this.desk,n=e.target;if(this.initialPosition){var r=M(e,"changedTouches"),s=r.x,a=r.y,i=s-this.initialPosition.x+n.offsetLeft,o=a-this.initialPosition.y+n.offsetTop;i<0&&(i=0),o<0&&(o=0);var c=n.parentElement;if(c){var u=c.getBoundingClientRect(),l=n.getBoundingClientRect();i>u.width-l.width&&(i=u.width-l.width),o>u.height-l.height&&(o=u.height-l.height)}this.moveDesk({desk:t,x:i,y:o}),this.initialPosition=null}},onRotateStart:function(e){var t=this.desk,n=e.target,r=n.parentElement.parentElement.getBoundingClientRect(),s=M(e),a=s.x,i=s.y;e.preventDefault(),e.stopPropagation(),this.rotating={angle:t.position.angle,rotation:0,start:0,events:{move:this.onRotate.bind(this),up:this.onRotateEnd.bind(this)},center:{x:r.left+r.width/2,y:r.top+r.height/2}};var o=a-this.rotating.center.x,c=i-this.rotating.center.y;this.rotating.start=$*Math.atan2(c,o),document.body.addEventListener("mousemove",this.rotating.events.move),document.body.addEventListener("mouseup",this.rotating.events.up),document.body.addEventListener("touchmove",this.rotating.events.move),document.body.addEventListener("touchend",this.rotating.events.up)},onRotateEnd:function(e){var t=this.desk;this.rotating&&(this.rotateDesk({desk:t,angle:this.rotating.angle+this.rotating.rotation}),document.body.removeEventListener("mousemove",this.rotating.events.move),document.body.removeEventListener("mouseup",this.rotating.events.up),document.body.removeEventListener("touchmove",this.rotating.events.move),document.body.removeEventListener("touchend",this.rotating.events.up),this.rotating=null)},onRotate:function(e){var t,n,r,s=this.desk,a=M(e,"changedTouches"),i=a.x,o=a.y;e.preventDefault(),e.stopPropagation(),this.rotating&&(n=i-this.rotating.center.x,r=o-this.rotating.center.y,t=$*Math.atan2(r,n),this.rotating.rotation=t-this.rotating.start,this.rotateDesk({desk:s,angle:this.rotating.angle+this.rotating.rotation}))}})},T=V,B=(n("60cb"),Object(m["a"])(T,C,R,!1,null,"00eb5d08",null)),I=B.exports;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(S["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={name:"Room",props:{editable:Boolean},components:{Desk:I},computed:H({},Object(c["c"])(["allDesks","name"]),{isEditable:function(){return this.editable}}),methods:H({},Object(c["b"])(["editName"]),{onBlur:function(e){this.editName(e.target.innerText)},onKeyDown:function(e){e.preventDefault(),e.target.blur()}})},K=G,U=(n("9688"),Object(m["a"])(K,P,x,!1,null,"0497e3a9",null)),J=U.exports;function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(S["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={name:"desk-editor",components:{Room:J,BaseHamburger:p,BaseHeader:k},methods:W({},Object(c["b"])(["addDesk","initialDesks"]),{arrange:function(){var e=this,t=document.getElementById("room").getBoundingClientRect(),n=document.getElementsByClassName("desk")[0].getBoundingClientRect();t&&0!=t.height||(t={width:1280,height:960}),n&&0!=n.height||(n={width:50,height:50});var r=Math.floor(t.width/n.width),s=Math.floor(t.height/n.height);if(r*s<this.$store.getters.deskCount)throw new Error("Too many desks to arrange");var a=Math.floor(r/(r+s)*this.$store.getters.deskCount),i=Math.ceil(s/(r+s)*this.$store.getters.deskCount),o=t.width/a,c=t.height/i,u=o/2-n.width/2,l=c/2-n.height/2;this.$store.getters.allDesks.forEach((function(t,n){var r=n%a,s=Math.floor(n/a);e.$store.dispatch("moveDesk",{desk:t,x:r*o+u,y:s*c+l})}))},next:function(){this.$router.push("students")},startOver:function(){this.$router.push("/")}}),beforeRouteEnter:function(e,t,n){n((function(e){e.$store.getters.isEmpty?e.$router.push("/"):e.$store.getters.newVersion&&(setTimeout(e.arrange,0),e.$store.dispatch("newVersion",!1))}))}},X=z,Y=Object(m["a"])(X,D,w,!1,null,null,null),q=Y.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("BaseHamburger"),r("nav",{staticClass:"pure-menu"},[r("BaseHeader"),r("p",[e._v("Provide the name of each student and their preferences.")]),r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.next}},[r("img",{attrs:{src:n("6de5"),alt:"Next"}}),e._v(" Next ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.previous}},[r("img",{attrs:{src:n("c9a6"),alt:"Previous"}}),e._v(" Previous ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.startOver}},[r("img",{attrs:{src:n("9558"),alt:"Start Over"}}),e._v(" Start Over ")])])],1),r("main",[r("h2",[e._v("Students")]),e._l(e.allStudents,(function(e){return r("Student",{key:e.id,attrs:{student:e}})}))],2)],1)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"student"},[n("div",{staticClass:"name"},[n("input",{attrs:{type:"text",placeholder:"Student name"},domProps:{value:e.student.name},on:{input:e.onNameChange}})]),n("multiselect",{attrs:{multiple:!0,value:e.preferences,options:e.otherStudents,label:"name","track-by":"id",searchable:!1,"close-on-select":!0,"allow-empty":!0,placeholder:"Student preferences"},on:{select:e.onPreferenceSelect,remove:e.onPreferenceRemove}})],1)},te=[],ne=(n("7db0"),n("caad"),n("2532"),n("8e5f")),re=n.n(ne);n("e607");function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(S["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie={name:"student",props:{student:Object},components:{Multiselect:re.a},computed:{otherStudents:function(){var e=this,t=this.$store.getters.allStudents;return t.filter((function(t){return t!==e.student})).filter((function(e){return null!==e.name})).filter((function(t){return!e.student.preferences.includes(t)}))},preferences:function(){return this.student.preferences}},methods:ae({},Object(c["b"])(["changeStudentName","addPreference","removePreference"]),{onNameChange:function(e){var t=this.student;this.changeStudentName({student:t,name:e.target.value})},onPreferenceSelect:function(e){var t=this.student,n=this.$store.getters.allStudents.find((function(t){return t.id===e.id}));this.addPreference({student:t,preference:n})},onPreferenceRemove:function(e){var t=this.student,n=this.$store.getters.allStudents.find((function(t){return t.id===e.id}));this.removePreference({student:t,preference:n})}})},oe=ie,ce=(n("a619"),Object(m["a"])(oe,ee,te,!1,null,null,null)),ue=ce.exports,le={name:"student-editor",components:{Student:ue,BaseHamburger:p,BaseHeader:k},computed:Object(c["c"])(["allStudents"]),methods:{previous:function(){this.$router.push("desks")},next:function(){this.$router.push("report")},startOver:function(){this.$router.push("/")}},created:function(){this.$store.getters.isEmpty&&this.$router.push("/"),this.$store.dispatch("normalize")}},de=le,fe=Object(m["a"])(de,Q,Z,!1,null,null,null),me=fe.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("BaseHamburger"),r("nav",{staticClass:"pure-menu"},[r("BaseHeader"),r("p",[e._v("Print, save for later, or start new.")]),r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.previous}},[r("img",{attrs:{src:n("c9a6"),alt:"Previous"}}),e._v(" Previous ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.startOver}},[r("img",{attrs:{src:n("9558"),alt:"Start Over"}}),e._v(" Start Over ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.print}},[r("img",{attrs:{src:n("01be"),alt:"Print"}}),e._v(" Print ")]),r("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.save}},[r("img",{attrs:{src:n("c64f"),alt:"Save"}}),e._v(" Save ")])])],1),r("main",[r("Room")],1)],1)},pe=[],ve={name:"report",components:{Room:J,BaseHamburger:p,BaseHeader:k},methods:{previous:function(){this.$router.push("students")},print:function(){window.print()},save:function(){this.$store.dispatch("saveVersion").then((function(){window.alert("Room has been saved")}))},startOver:function(){this.$router.push("/")}},created:function(){this.$store.getters.isEmpty&&this.$router.push("/"),this.$store.dispatch("arrange")}},ge=ve,be=Object(m["a"])(ge,he,pe,!1,null,null,null),Oe=be.exports;r["a"].use(a["a"]);var ke=[{path:"/",name:"version-selector",component:j},{path:"/desks",name:"desk-editor",component:q,props:!0},{path:"/students",name:"student-editor",component:me},{path:"/report",name:"report-viewer",component:Oe}],ye=new a["a"]({routes:ke}),Ee=ye,_e=(n("99af"),n("d81d"),n("fb6a"),n("d3b7"),n("8a79"),n("3ca3"),n("2ca0"),n("ddb0"),n("2909")),je=n("d4ec"),De=n("bee2"),we=n("99de"),Se=n("7e84"),Pe=n("262e"),xe=(n("4fad"),n("53ca")),Ce=n("3835"),Re=0,Ne="__ref__",Ae="__class__",$e="__object__",Me="id",Ve="object",Te=function(){function e(){Object(je["a"])(this,e),this.id=Re++}return Object(De["a"])(e,[{key:"marshal",value:function(e){var t=Object(S["a"])({},Ae,this.constructor.name);e[this.id]=t;for(var n=function(t){var n=e[t.id];return n||(n=t.marshal(e)),Object(S["a"])({},Ne,n.id)},r=0,s=Object.entries(this);r<s.length;r++){var a=Object(Ce["a"])(s[r],2),i=a[0],o=a[1];switch(Object(xe["a"])(o)){case Ve:null===o?t[i]=null:Array.isArray(o)?t[i]=o.map((function(e){return n(e)})):t[i]=n(o);break;default:t[i]=o}}return t}}]),e}(),Be=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(we["a"])(this,Object(Se["a"])(t).call(this)),e.x=0,e.y=0,e.angle=0,e}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"distance",value:function(e){return Math.sqrt(Math.pow(e.x-this.x,2)+Math.pow(e.y-this.y,2))}}]),t}(Te),Ie=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(we["a"])(this,Object(Se["a"])(t).call(this)),e.student=null,e.position=new Be,e}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"move",value:function(e,t){this.position.x=e,this.position.y=t}},{key:"distance",value:function(e){return this.position.distance(e.position)}}]),t}(Te),Le=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(we["a"])(this,Object(Se["a"])(t).call(this)),e.name=null,e.preferences=[],e}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"addPreference",value:function(e){this.preferences.push(e)}},{key:"removePreference",value:function(e){this.preferences=this.preferences.filter((function(t){return t!==e}))}}]),t}(Te),He=function(e){function t(e){var n;return Object(je["a"])(this,t),n=Object(we["a"])(this,Object(Se["a"])(t).call(this)),n.desks=[],n.students=[],n.arrangementStrategy=e,n.name="Room",n.createdAt=(new Date).toISOString(),n}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"addDesk",value:function(){var e=new Ie;return this.desks.push(e),e}},{key:"removeDesk",value:function(e){this.desks=this.desks.filter((function(t){return t.id!==e.id}))}},{key:"addStudent",value:function(){var e=new Le;return this.students.push(e),e}},{key:"removeStudent",value:function(e){this.students=this.students.filter((function(t){return t.id!==e.id}))}},{key:"arrange",value:function(){this.arrangementStrategy.arrange(this)}},{key:"findStudentDesk",value:function(e){return this.desks.find((function(t){return t.student===e}))}},{key:"createdAtDate",value:function(){return new Date(this.createdAt)}}]),t}(Te),Ge=(n("a630"),n("c975"),function(e){function t(){return Object(je["a"])(this,t),Object(we["a"])(this,Object(Se["a"])(t).call(this))}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"arrange",value:function(e){}},{key:"distance",value:function(e,t,n){var r=e.findStudentDesk(t),s=e.findStudentDesk(n);return r&&s?r.distance(s):0}}]),t}(Te)),Ke=function(e){function t(){return Object(je["a"])(this,t),Object(we["a"])(this,Object(Se["a"])(t).call(this))}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"averageDistance",value:function(e,t){var n=this;if(0===t.preferences.length)return 0;var r=t.preferences.reduce((function(r,s){return r+n.distance(e,t,s)}),0);return r/t.preferences.length}},{key:"totalAverageDistance",value:function(e){var t=this;return e.students.reduce((function(n,r){return n+t.averageDistance(e,r)}),0)}},{key:"assignDesks",value:function(e,t){t.forEach((function(t,n){e.desks[n].student=e.students[t]}))}},{key:"arrange",value:function(e){var t=this,n=Object(_e["a"])(e.students.keys());this.assignDesks(e,n),e.students.forEach((function(r,s){var a=n.indexOf(s);n=n.reduce((function(n,r,s,i){t.assignDesks(e,n);var o=t.totalAverageDistance(e),c=Array.from(i);c[s]=i[a],c[a]=r,t.assignDesks(e,c);var u=t.totalAverageDistance(e);return u<o?c:n}),n),t.assignDesks(e,n)}))}}]),t}(Ge),Ue=(n("4e82"),function(e){function t(){return Object(je["a"])(this,t),Object(we["a"])(this,Object(Se["a"])(t).call(this))}return Object(Pe["a"])(t,e),Object(De["a"])(t,[{key:"arrange",value:function(e){var t=Object(_e["a"])(e.students);t.sort((function(){return Math.random()})),e.desks.forEach((function(e,n){e.student=t[n]}))}}]),t}(Ge)),Je=[Te,Ge,Ke,Ue,Be,Ie,Le,He];var Fe,We,ze=function e(t,n){var r=Je.find((function(e){return e.name==t.__class__}));if(!r)throw new Error('Cannot find class "'.concat(t.__class__,'"'));var s=new r;n[t.id][$e]=s;for(var a=function(t){var r=n[t.__ref__],s=r[$e];return s||(s=e(r,n)),s},i=0,o=Object.entries(t);i<o.length;i++){var c=Object(Ce["a"])(o[i],2),u=c[0],l=c[1];if(u!==Me&&u!==$e&&u!==Ae)switch(Object(xe["a"])(l)){case Ve:null===l?s[u]=null:Array.isArray(l)?s[u]=l.map((function(e){return a(e)})):s[u]=a(l);break;default:s[u]=l}}return s};r["a"].use(c["a"]);var Xe="sssg-",Ye="-refs",qe=6,Qe=function(e){var t={},n=e.createdAt;window.localStorage.setItem("".concat(Xe).concat(n),JSON.stringify(e.marshal(t))),window.localStorage.setItem("".concat(Xe).concat(n).concat(Ye),JSON.stringify(t))},Ze=function(e){var t=JSON.parse(window.localStorage.getItem("".concat(e))),n=JSON.parse(window.localStorage.getItem("".concat(e).concat(Ye)));return ze(t,n)},et=new c["a"].Store({state:{room:new He(new Ke),versions:[],newVersion:!1},getters:{allDesks:function(e){return e.room.desks},deskCount:function(e){return e.room.desks.length},isEmpty:function(e){return 0===e.room.desks.length},allStudents:function(e){return e.room.students},studentCount:function(e){return e.room.students.length},versions:function(e){return e.versions},newVersion:function(e){return e.newVersion},name:function(e){return e.room.name}},actions:(Fe={addDesk:function(e){var t=e.commit;t("ADD_DESK")},moveDesk:function(e,t){var n=e.commit,r=t.desk,s=t.x,a=t.y;n("EDIT_DESK_POSITION",{desk:r,x:s,y:a})},rotateDesk:function(e,t){var n=e.commit,r=t.desk,s=t.angle;n("EDIT_DESK_ANGLE",{desk:r,angle:s})},removeDesk:function(e,t){var n=e.commit;n("REMOVE_DESK",t),t.student&&n("REMOVE_STUDENT",t.student)},arrange:function(e){var t=e.commit;t("ARRANGE")},addStudent:function(e){var t=e.commit;return t("ADD_STUDENT")},removeStudent:function(e,t){var n=e.commit;n("REMOVE_STUDENT",t),t.desk&&n("REMOVE_DESK",t.desk)},normalize:function(e){var t=e.getters.deskCount-e.getters.studentCount;t<0?e.getters.allStudents.slice(t).forEach((function(t){return e.dispatch("removeStudent",t)})):t>0&&Object(_e["a"])(Array(t)).forEach((function(){return e.dispatch("addStudent")}))},changeStudentName:function(e,t){var n=e.commit,r=t.student,s=t.name;n("CHANGE_STUDENT_NAME",{student:r,name:s})},addPreference:function(e,t){var n=e.commit,r=t.student,s=t.preference;n("ADD_PREFERENCE",{student:r,preference:s})},removePreference:function(e,t){var n=e.commit,r=t.student,s=t.preference;n("REMOVE_PREFERENCE",{student:r,preference:s})}},Object(S["a"])(Fe,"arrange",(function(e){var t=e.commit;t("ARRANGE")})),Object(S["a"])(Fe,"newVersion",(function(e){return e.commit("CLEAR_ROOM"),e.dispatch("toggleNewVersion",!0).then((function(){return Promise.all(Object(_e["a"])(Array(qe)).map((function(){e.dispatch("addDesk")})))})).then((function(){return e.dispatch("normalize")}))})),Object(S["a"])(Fe,"versions",(function(e){var t=e.commit;t("CLEAR_VERSIONS"),Object(_e["a"])(Array(window.localStorage.length)).map((function(e,t){return window.localStorage.key(t)})).filter((function(e){return e.startsWith(Xe)})).filter((function(e){return!e.endsWith(Ye)})).forEach((function(e){var n;try{n=Ze(e)}catch(r){console.error(r)}t("ADD_VERSION",n)}))})),Object(S["a"])(Fe,"loadVersion",(function(e,t){var n=e.commit;n("LOAD_ROOM",t)})),Object(S["a"])(Fe,"saveVersion",(function(e){var t=e.state.room;Qe(t),e.state.versions.includes(t)||e.commit("ADD_VERSION",t)})),Object(S["a"])(Fe,"toggleNewVersion",(function(e,t){var n=e.commit;n("TOGGLE_NEW_VERSION",t)})),Object(S["a"])(Fe,"editName",(function(e,t){var n=e.commit;n("EDIT_NAME",t)})),Fe),mutations:(We={ADD_DESK:function(e){e.room.addDesk()},EDIT_DESK_POSITION:function(e,t){var n=t.desk,r=t.x,s=t.y;n.position.x=r,n.position.y=s},EDIT_DESK_ANGLE:function(e,t){var n=t.desk,r=t.angle;n.position.angle=r},REMOVE_DESK:function(e,t){e.room.removeDesk(t)},ARRANGE:function(e){e.room.arrange()},ADD_STUDENT:function(e){var t=e.room.addStudent();t.name="Student ".concat(e.room.students.length)},REMOVE_STUDENT:function(e,t){e.room.removeStudent(t)},CHANGE_STUDENT_NAME:function(e,t){var n=t.student,r=t.name;n.name=r},ADD_PREFERENCE:function(e,t){var n=t.student,r=t.preference;n.addPreference(r)},REMOVE_PREFERENCE:function(e,t){var n=t.student,r=t.preference;n.removePreference(r)}},Object(S["a"])(We,"ARRANGE",(function(e){e.room.arrange()})),Object(S["a"])(We,"CLEAR_ROOM",(function(e){e.room=new He(new Ke)})),Object(S["a"])(We,"LOAD_ROOM",(function(e,t){e.room=t})),Object(S["a"])(We,"CLEAR_VERSIONS",(function(e){e.versions=[]})),Object(S["a"])(We,"ADD_VERSION",(function(e,t){e.versions.push(t)})),Object(S["a"])(We,"TOGGLE_NEW_VERSION",(function(e){e.newVersion=!e.newVersion})),Object(S["a"])(We,"EDIT_NAME",(function(e,t){e.room.name=t})),We)});r["a"].config.productionTip=!1,new r["a"]({router:Ee,store:et,render:function(e){return e(s["default"])},created:function(){this.$store.dispatch("versions")}}).$mount("#app")},"5c26":function(e,t,n){},"5e54":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))},"600a":function(e,t,n){e.exports=n.p+"img/rotate.8ed0114e.svg"},"60cb":function(e,t,n){"use strict";var r=n("92e8"),s=n.n(r);s.a},6138:function(e,t,n){},"6de5":function(e,t,n){e.exports=n.p+"img/forward.72ada97a.svg"},7353:function(e,t,n){},"85ec":function(e,t,n){},8641:function(e,t,n){e.exports=n.p+"img/desk.166fef72.svg"},"8a5d":function(e,t,n){e.exports=n.p+"img/arrange.88ef8655.svg"},"92e8":function(e,t,n){},9558:function(e,t,n){e.exports=n.p+"img/start-over.0e232086.svg"},9688:function(e,t,n){"use strict";var r=n("079c"),s=n.n(r);s.a},a619:function(e,t,n){"use strict";var r=n("6138"),s=n.n(r);s.a},a73f:function(e,t,n){"use strict";var r=n("5c26"),s=n.n(r);s.a},c64f:function(e,t,n){e.exports=n.p+"img/save.72c46d2a.svg"},c9a6:function(e,t,n){e.exports=n.p+"img/back.009be469.svg"}});
//# sourceMappingURL=app.0bef8944.js.map