(function(e){function t(t){for(var r,o,a=t[0],c=t[1],u=t[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/student-selected-seating-generator/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0551":function(e,t,n){},"0e01":function(e,t,n){e.exports=n.p+"img/desk.c58ff9d7.svg"},"1f49":function(e,t,n){"use strict";var r=n("5775"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("034f"),n("2877")),a={},c=Object(o["a"])(a,i,s,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"pure-menu"},[n("BaseHeader"),n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.newVersion}},[e._v("New")]),e._l(e.versions,(function(t){return n("li",{key:t.id,staticClass:"pure-menu-item pure-menu-link",on:{click:function(n){return e.loadVersion(t)}}},[e._v(e._s(t.name)+" "+e._s(t.createdAtDate().toLocaleString()))])}))],2)],1),e._m(0)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h2",[e._v("Welcome")]),n("p",[e._v("TODO")])])}],p=n("2f62"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Student Selected Seating Generator")])])}],v=(n("1f49"),{}),O=Object(o["a"])(v,h,m,!1,null,"3c68a752",null),b=O.exports,g={name:"version-selector",components:{BaseHeader:b},computed:Object(p["c"])(["versions"]),methods:{newVersion:function(){var e=this;this.$store.dispatch("newVersion").then((function(){e.$router.push({name:"desk-editor",props:{newVersion:!0}})}))},loadVersion:function(e){var t=this;this.$store.dispatch("loadVersion",e).then((function(){t.$router.push("desks")}))}}},j=g,k=Object(o["a"])(j,f,d,!1,null,null,null),y=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("nav",{staticClass:"pure-menu"},[n("BaseHeader"),n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.next}},[e._v("Next")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.addDesk}},[e._v("Add Desk")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.arrange}},[e._v("Arrange")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.startOver}},[e._v("Start Over")])])],1),n("main",[n("Room",{attrs:{editable:""}})],1)])},E=[],D=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"room"}},[n("h2",{staticClass:"name",attrs:{contenteditable:e.isEditable},domProps:{textContent:e._s(e.name)},on:{blur:e.onBlur,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyDown(t)}}}),e._l(e.allDesks,(function(t){return n("Desk",{key:t.id,attrs:{desk:t,editable:e.isEditable}})}))],2)},S=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"desk",style:{left:e.desk.position.x+"px",top:e.desk.position.y+"px"},attrs:{draggable:e.isEditable},on:{dragstart:e.onDragStart,touchstart:e.onDragStart,dragend:e.onDragEnd,touchend:e.onDragEnd}},[r("img",{attrs:{alt:"Desk",src:n("0e01")}}),r("div",{staticClass:"name"},[e._v(e._s(e.name()))]),e.editable?r("button",{on:{click:function(t){return e.removeDesk(e.desk)}}},[e._v("Delete")]):e._e()])},C=[];n("b0c0");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(D["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={name:"desk",props:{desk:Object,editable:Boolean},computed:{isEditable:function(){return this.editable}},data:function(){return{initialPosition:{}}},methods:R({},Object(p["b"])(["moveDesk","removeDesk"]),{name:function(){var e=this.desk;return null===e.student?"Desk":e.student.name},onDragStart:function(e){this.initialPosition={x:e.clientX,y:e.clientY}},onDragEnd:function(e){var t=this.desk,n=e.target,r=e.clientX-this.initialPosition.x+n.offsetLeft,i=e.clientY-this.initialPosition.y+n.offsetTop;r<0&&(r=0),i<0&&(i=0);var s=n.parentElement;if(s){var o=s.getBoundingClientRect(),a=n.getBoundingClientRect();r>o.width-a.width&&(r=o.width-a.width),i>o.height-a.height&&(i=o.height-a.height)}this.moveDesk({desk:t,x:r,y:i})}})},x=N,$=(n("f913"),Object(o["a"])(x,P,C,!1,null,"7f606536",null)),V=$.exports;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(D["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={name:"Room",props:{editable:Boolean},components:{Desk:V},computed:T({},Object(p["c"])(["allDesks","name"]),{isEditable:function(){return this.editable}}),methods:T({},Object(p["b"])(["editName"]),{onBlur:function(e){this.editName(e.target.innerText)},onKeyDown:function(e){e.preventDefault(),e.target.blur()}})},B=I,G=(n("58c5"),Object(o["a"])(B,w,S,!1,null,"78792791",null)),H=G.exports;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(D["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={name:"desk-editor",components:{Room:H,BaseHeader:b},methods:K({},Object(p["b"])(["addDesk","initialDesks"]),{arrange:function(){var e=this,t=document.getElementById("room").getBoundingClientRect(),n=document.getElementsByClassName("desk")[0].getBoundingClientRect();t&&0!=t.height||(t={width:1280,height:960}),n&&0!=n.height||(n={width:50,height:50});var r=Math.floor(t.width/n.width),i=Math.floor(t.height/n.height);if(r*i<this.$store.getters.deskCount)throw new Error("Too many desks to arrange");var s=Math.floor(r/(r+i)*this.$store.getters.deskCount),o=Math.ceil(i/(r+i)*this.$store.getters.deskCount),a=t.width/s,c=t.height/o,u=a/2-n.width/2,l=c/2-n.height/2;this.$store.getters.allDesks.forEach((function(t,n){var r=n%s,i=Math.floor(n/s);e.$store.dispatch("moveDesk",{desk:t,x:r*a+u,y:i*c+l})}))},next:function(){this.$router.push("students")},startOver:function(){this.$router.push("/")}}),beforeRouteEnter:function(e,t,n){n((function(e){e.$store.getters.isEmpty?e.$router.push("/"):e.$store.getters.newVersion&&(setTimeout(e.arrange,0),e.$store.dispatch("newVersion",!1))}))}},W=J,F=Object(o["a"])(W,_,E,!1,null,null,null),U=F.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("nav",{staticClass:"pure-menu"},[n("BaseHeader"),n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.next}},[e._v("Next")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.previous}},[e._v("Previous")])])],1),n("main",e._l(e.allStudents,(function(e){return n("Student",{key:e.id,attrs:{student:e}})})),1)])},X=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"student"},[n("input",{attrs:{type:"text"},domProps:{value:e.student.name},on:{input:e.onNameChange}}),n("multiselect",{attrs:{multiple:!0,value:e.preferences,options:e.otherStudents,label:"name","track-by":"id",searchable:!1,"close-on-select":!0,"allow-empty":!0},on:{select:e.onPreferenceSelect,remove:e.onPreferenceRemove}})],1)},q=[],Q=(n("7db0"),n("caad"),n("2532"),n("8e5f")),Z=n.n(Q);n("e607");function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){Object(D["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={name:"student",props:{student:Object},components:{Multiselect:Z.a},computed:{otherStudents:function(){var e=this,t=this.$store.getters.allStudents;return t.filter((function(t){return t!==e.student})).filter((function(e){return null!==e.name})).filter((function(t){return!e.student.preferences.includes(t)}))},preferences:function(){return this.student.preferences}},methods:te({},Object(p["b"])(["changeStudentName","addPreference","removePreference"]),{onNameChange:function(e){var t=this.student;this.changeStudentName({student:t,name:e.target.value})},onPreferenceSelect:function(e){var t=this.student,n=this.$store.getters.allStudents.find((function(t){return t.id===e.id}));this.addPreference({student:t,preference:n})},onPreferenceRemove:function(e){var t=this.student,n=this.$store.getters.allStudents.find((function(t){return t.id===e.id}));this.removePreference({student:t,preference:n})}})},re=ne,ie=Object(o["a"])(re,Y,q,!1,null,null,null),se=ie.exports,oe={name:"student-editor",components:{Student:se,BaseHeader:b},computed:Object(p["c"])(["allStudents"]),methods:{previous:function(){this.$router.push("desks")},next:function(){this.$router.push("report")}},created:function(){this.$store.getters.isEmpty&&this.$router.push("/"),this.$store.dispatch("normalize")}},ae=oe,ce=Object(o["a"])(ae,z,X,!1,null,null,null),ue=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("nav",{staticClass:"pure-menu"},[n("BaseHeader"),n("ul",{staticClass:"pure-menu-list"},[n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.previous}},[e._v("Previous")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.print}},[e._v("Print")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.save}},[e._v("Save")]),n("li",{staticClass:"pure-menu-item pure-menu-link",on:{click:e.startOver}},[e._v("Start Over")])])],1),n("main",[n("Room")],1)])},fe=[],de={name:"report",components:{Room:H,BaseHeader:b},methods:{previous:function(){this.$router.push("students")},print:function(){window.print()},save:function(){this.$store.dispatch("saveVersion")},startOver:function(){this.$router.push("/")}},created:function(){this.$store.getters.isEmpty&&this.$router.push("/"),this.$store.dispatch("arrange")}},pe=de,he=Object(o["a"])(pe,le,fe,!1,null,null,null),me=he.exports;r["a"].use(l["a"]);var ve=[{path:"/",name:"version-selector",component:y},{path:"/desks",name:"desk-editor",component:U,props:!0},{path:"/students",name:"student-editor",component:ue},{path:"/report",name:"report-viewer",component:me}],Oe=new l["a"]({routes:ve}),be=Oe,ge=(n("99af"),n("d81d"),n("d3b7"),n("8a79"),n("3ca3"),n("2ca0"),n("ddb0"),n("2909")),je=n("d4ec"),ke=n("bee2"),ye=n("99de"),_e=n("7e84"),Ee=n("262e"),De=(n("4fad"),n("53ca")),we=n("3835"),Se=0,Pe="__ref__",Ce="__class__",Ae="__object__",Re="id",Ne="object",xe=function(){function e(){Object(je["a"])(this,e),this.id=Se++}return Object(ke["a"])(e,[{key:"marshal",value:function(e){var t=Object(D["a"])({},Ce,this.constructor.name);e[this.id]=t;for(var n=function(t){var n=e[t.id];return n||(n=t.marshal(e)),Object(D["a"])({},Pe,n.id)},r=0,i=Object.entries(this);r<i.length;r++){var s=Object(we["a"])(i[r],2),o=s[0],a=s[1];switch(Object(De["a"])(a)){case Ne:null===a?t[o]=null:Array.isArray(a)?t[o]=a.map((function(e){return n(e)})):t[o]=n(a);break;default:t[o]=a}}return t}}]),e}(),$e=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(ye["a"])(this,Object(_e["a"])(t).call(this)),e.x=0,e.y=0,e}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"distance",value:function(e){return Math.sqrt(Math.pow(e.x-this.x,2)+Math.pow(e.y-this.y,2))}}]),t}(xe),Ve=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(ye["a"])(this,Object(_e["a"])(t).call(this)),e.student=null,e.position=new $e,e}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"move",value:function(e,t){this.position.x=e,this.position.y=t}},{key:"distance",value:function(e){return this.position.distance(e.position)}}]),t}(xe),Me=function(e){function t(){var e;return Object(je["a"])(this,t),e=Object(ye["a"])(this,Object(_e["a"])(t).call(this)),e.name=null,e.preferences=[],e}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"addPreference",value:function(e){this.preferences.push(e)}},{key:"removePreference",value:function(e){this.preferences=this.preferences.filter((function(t){return t!==e}))}}]),t}(xe),Te=function(e){function t(e){var n;return Object(je["a"])(this,t),n=Object(ye["a"])(this,Object(_e["a"])(t).call(this)),n.desks=[],n.students=[],n.arrangementStrategy=e,n.name="Room",n.createdAt=(new Date).toISOString(),n}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"addDesk",value:function(){var e=new Ve;return this.desks.push(e),e}},{key:"removeDesk",value:function(e){this.desks=this.desks.filter((function(t){return t.id!==e.id}))}},{key:"addStudent",value:function(){var e=new Me;return this.students.push(e),e}},{key:"arrange",value:function(){this.arrangementStrategy.arrange(this)}},{key:"findStudentDesk",value:function(e){return this.desks.find((function(t){return t.student===e}))}},{key:"createdAtDate",value:function(){return new Date(this.createdAt)}}]),t}(xe),Ie=(n("a630"),n("c975"),function(e){function t(){return Object(je["a"])(this,t),Object(ye["a"])(this,Object(_e["a"])(t).call(this))}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"arrange",value:function(e){}},{key:"distance",value:function(e,t,n){var r=e.findStudentDesk(t),i=e.findStudentDesk(n);return r&&i?r.distance(i):0}}]),t}(xe)),Be=function(e){function t(){return Object(je["a"])(this,t),Object(ye["a"])(this,Object(_e["a"])(t).call(this))}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"averageDistance",value:function(e,t){var n=this;if(0===t.preferences.length)return 0;var r=t.preferences.reduce((function(r,i){return r+n.distance(e,t,i)}),0);return r/t.preferences.length}},{key:"totalAverageDistance",value:function(e){var t=this;return e.students.reduce((function(n,r){return n+t.averageDistance(e,r)}),0)}},{key:"assignDesks",value:function(e,t){t.forEach((function(t,n){e.desks[n].student=e.students[t]}))}},{key:"arrange",value:function(e){var t=this,n=Object(ge["a"])(e.students.keys());this.assignDesks(e,n),e.students.forEach((function(r,i){var s=n.indexOf(i);n=n.reduce((function(n,r,i,o){t.assignDesks(e,n);var a=t.totalAverageDistance(e),c=Array.from(o);c[i]=o[s],c[s]=r,t.assignDesks(e,c);var u=t.totalAverageDistance(e);return u<a?c:n}),n),t.assignDesks(e,n)}))}}]),t}(Ie),Ge=(n("4e82"),function(e){function t(){return Object(je["a"])(this,t),Object(ye["a"])(this,Object(_e["a"])(t).call(this))}return Object(Ee["a"])(t,e),Object(ke["a"])(t,[{key:"arrange",value:function(e){var t=Object(ge["a"])(e.students);t.sort((function(){return Math.random()})),e.desks.forEach((function(e,n){e.student=t[n]}))}}]),t}(Ie)),He=[xe,Ie,Be,Ge,$e,Ve,Me,Te];var Le,Ke,Je=function e(t,n){var r=He.find((function(e){return e.name==t.__class__}));if(!r)throw new Error('Cannot find class "'.concat(t.__class__,'"'));var i=new r;n[t.id][Ae]=i;for(var s=function(t){var r=n[t.__ref__],i=r[Ae];return i||(i=e(r,n)),i},o=0,a=Object.entries(t);o<a.length;o++){var c=Object(we["a"])(a[o],2),u=c[0],l=c[1];if(u!==Re&&u!==Ae&&u!==Ce)switch(Object(De["a"])(l)){case Ne:null===l?i[u]=null:Array.isArray(l)?i[u]=l.map((function(e){return s(e)})):i[u]=s(l);break;default:i[u]=l}}return i};r["a"].use(p["a"]);var We="sssg-",Fe="-refs",Ue=6,ze=function(e){var t={},n=e.createdAt;window.localStorage.setItem("".concat(We).concat(n),JSON.stringify(e.marshal(t))),window.localStorage.setItem("".concat(We).concat(n).concat(Fe),JSON.stringify(t))},Xe=function(e){var t=JSON.parse(window.localStorage.getItem("".concat(e))),n=JSON.parse(window.localStorage.getItem("".concat(e).concat(Fe)));return Je(t,n)},Ye=new p["a"].Store({state:{room:new Te(new Be),versions:[],newVersion:!1},getters:{allDesks:function(e){return e.room.desks},deskCount:function(e){return e.room.desks.length},isEmpty:function(e){return 0===e.room.desks.length},allStudents:function(e){return e.room.students},studentCount:function(e){return e.room.students.length},versions:function(e){return e.versions},newVersion:function(e){return e.newVersion},name:function(e){return e.room.name}},actions:(Le={addDesk:function(e){var t=e.commit;t("ADD_DESK")},moveDesk:function(e,t){var n=e.commit,r=t.desk,i=t.x,s=t.y;n("EDIT_DESK_POSITION",{desk:r,x:i,y:s})},removeDesk:function(e,t){var n=e.commit;n("REMOVE_DESK",t)},arrange:function(e){var t=e.commit;t("ARRANGE")},addStudent:function(e){var t=e.commit;return t("ADD_STUDENT")},normalize:function(e){var t=e.getters.deskCount-e.getters.studentCount;t<0?Object(ge["a"])(Array(Math.abs(t))).forEach((function(){return e.dispatch("addDesk")})):t>0&&Object(ge["a"])(Array(t)).forEach((function(){return e.dispatch("addStudent")}))},changeStudentName:function(e,t){var n=e.commit,r=t.student,i=t.name;n("CHANGE_STUDENT_NAME",{student:r,name:i})},addPreference:function(e,t){var n=e.commit,r=t.student,i=t.preference;n("ADD_PREFERENCE",{student:r,preference:i})},removePreference:function(e,t){var n=e.commit,r=t.student,i=t.preference;n("REMOVE_PREFERENCE",{student:r,preference:i})}},Object(D["a"])(Le,"arrange",(function(e){var t=e.commit;t("ARRANGE")})),Object(D["a"])(Le,"newVersion",(function(e){return e.commit("CLEAR_ROOM"),e.dispatch("toggleNewVersion",!0).then((function(){return Promise.all(Object(ge["a"])(Array(Ue)).map((function(){e.dispatch("addDesk")})))})).then((function(){return e.dispatch("normalize")}))})),Object(D["a"])(Le,"versions",(function(e){var t=e.commit;t("CLEAR_VERSIONS"),Object(ge["a"])(Array(window.localStorage.length)).map((function(e,t){return window.localStorage.key(t)})).filter((function(e){return e.startsWith(We)})).filter((function(e){return!e.endsWith(Fe)})).forEach((function(e){var n;try{n=Xe(e)}catch(r){console.error(r)}t("ADD_VERSION",n)}))})),Object(D["a"])(Le,"loadVersion",(function(e,t){var n=e.commit;n("LOAD_ROOM",t)})),Object(D["a"])(Le,"saveVersion",(function(e){var t=e.state.room;ze(t),e.state.versions.includes(t)||e.commit("ADD_VERSION",t)})),Object(D["a"])(Le,"toggleNewVersion",(function(e,t){var n=e.commit;n("TOGGLE_NEW_VERSION",t)})),Object(D["a"])(Le,"editName",(function(e,t){var n=e.commit;n("EDIT_NAME",t)})),Le),mutations:(Ke={ADD_DESK:function(e){e.room.addDesk()},EDIT_DESK_POSITION:function(e,t){var n=t.desk,r=t.x,i=t.y;n.position.x=r,n.position.y=i},REMOVE_DESK:function(e,t){e.room.removeDesk(t)},ARRANGE:function(e){e.room.arrange()},ADD_STUDENT:function(e){var t=e.room.addStudent();t.name="Student ".concat(e.room.students.length)},CHANGE_STUDENT_NAME:function(e,t){var n=t.student,r=t.name;n.name=r},ADD_PREFERENCE:function(e,t){var n=t.student,r=t.preference;n.addPreference(r)},REMOVE_PREFERENCE:function(e,t){var n=t.student,r=t.preference;n.removePreference(r)}},Object(D["a"])(Ke,"ARRANGE",(function(e){e.room.arrange()})),Object(D["a"])(Ke,"CLEAR_ROOM",(function(e){e.room=new Te(new Be)})),Object(D["a"])(Ke,"LOAD_ROOM",(function(e,t){e.room=t})),Object(D["a"])(Ke,"CLEAR_VERSIONS",(function(e){e.versions=[]})),Object(D["a"])(Ke,"ADD_VERSION",(function(e,t){e.versions.push(t)})),Object(D["a"])(Ke,"TOGGLE_NEW_VERSION",(function(e){e.newVersion=!e.newVersion})),Object(D["a"])(Ke,"EDIT_NAME",(function(e,t){e.room.name=t})),Ke)});n("e811"),r["a"].config.productionTip=!1,new r["a"]({router:be,store:Ye,render:function(e){return e(u)},created:function(){this.$store.dispatch("versions")}}).$mount("#app")},5775:function(e,t,n){},"58c5":function(e,t,n){"use strict";var r=n("a707"),i=n.n(r);i.a},"85ec":function(e,t,n){},a707:function(e,t,n){},f913:function(e,t,n){"use strict";var r=n("0551"),i=n.n(r);i.a}});
//# sourceMappingURL=app.29b5de0e.js.map