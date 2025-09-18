import{_ as l,g as ot,s as ct,v as lt,t as ut,a as dt,b as ft,c as ce,d as pe,aq as ht,ar as mt,as as kt,e as yt,at as gt,au as pt,j as de,l as be,av as vt,aw as Ne,ax as Be,ay as Tt,az as bt,aA as xt,aB as _t,aC as wt,aD as Dt,aE as St,aF as qe,aG as Ge,aH as He,aI as Xe,aJ as Ue,aK as Ct,k as Et,A as Mt,aL as Je,r as It,u as At,aM as Ie}from"./md-gs6tCKWA.js";import"./modules/vue-CvjR9cJg.js";import"./monaco/bundled-types-ClnUT3dW.js";import"./modules/file-saver-DnRyLYBS.js";import"./lz-string-DHL27hw0.js";import"./index-CNpXpCqI.js";import"./modules/shiki-BE4ErvX9.js";import"./slidev/default-b867RgRe.js";import"./slidev/context-CDJPmaAZ.js";var Lt=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/isoWeek.js"(e,i){(function(r,a){typeof e=="object"&&typeof i<"u"?i.exports=a():typeof define=="function"&&define.amd?define(a):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_isoWeek=a()})(e,function(){var r="day";return function(a,n,k){var f=l(function(M){return M.add(4-M.isoWeekday(),r)},"a"),w=n.prototype;w.isoWeekYear=function(){return f(this).year()},w.isoWeek=function(M){if(!this.$utils().u(M))return this.add(7*(M-this.isoWeek()),r);var g,I,O,P,N=f(this),S=(g=this.isoWeekYear(),I=this.$u,O=(I?k.utc:k)().year(g).startOf("year"),P=4-O.isoWeekday(),O.isoWeekday()>4&&(P+=7),O.add(P,r));return N.diff(S,"week")+1},w.isoWeekday=function(M){return this.$utils().u(M)?this.day()||7:this.day(this.day()%7?M:M-7)};var Y=w.startOf;w.startOf=function(M,g){var I=this.$utils(),O=!!I.u(g)||g;return I.p(M)==="isoweek"?O?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(M,g)}}})}}),Ft=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/customParseFormat.js"(e,i){(function(r,a){typeof e=="object"&&typeof i<"u"?i.exports=a():typeof define=="function"&&define.amd?define(a):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_customParseFormat=a()})(e,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,k=/\d\d/,f=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,Y={},M=l(function(p){return(p=+p)+(p>68?1900:2e3)},"a"),g=l(function(p){return function(C){this[p]=+C}},"f"),I=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(C){if(!C||C==="Z")return 0;var L=C.match(/([+-]|\d\d)/g),F=60*L[1]+(+L[2]||0);return F===0?0:L[0]==="+"?-F:F}(p)}],O=l(function(p){var C=Y[p];return C&&(C.indexOf?C:C.s.concat(C.f))},"u"),P=l(function(p,C){var L,F=Y.meridiem;if(F){for(var q=1;q<=24;q+=1)if(p.indexOf(F(q,0,C))>-1){L=q>12;break}}else L=p===(C?"pm":"PM");return L},"d"),N={A:[w,function(p){this.afternoon=P(p,!1)}],a:[w,function(p){this.afternoon=P(p,!0)}],Q:[n,function(p){this.month=3*(p-1)+1}],S:[n,function(p){this.milliseconds=100*+p}],SS:[k,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[f,g("seconds")],ss:[f,g("seconds")],m:[f,g("minutes")],mm:[f,g("minutes")],H:[f,g("hours")],h:[f,g("hours")],HH:[f,g("hours")],hh:[f,g("hours")],D:[f,g("day")],DD:[k,g("day")],Do:[w,function(p){var C=Y.ordinal,L=p.match(/\d+/);if(this.day=L[0],C)for(var F=1;F<=31;F+=1)C(F).replace(/\[|\]/g,"")===p&&(this.day=F)}],w:[f,g("week")],ww:[k,g("week")],M:[f,g("month")],MM:[k,g("month")],MMM:[w,function(p){var C=O("months"),L=(O("monthsShort")||C.map(function(F){return F.slice(0,3)})).indexOf(p)+1;if(L<1)throw new Error;this.month=L%12||L}],MMMM:[w,function(p){var C=O("months").indexOf(p)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,g("year")],YY:[k,function(p){this.year=M(p)}],YYYY:[/\d{4}/,g("year")],Z:I,ZZ:I};function S(p){var C,L;C=p,L=Y&&Y.formats;for(var F=(p=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,T,m){var _=m&&m.toUpperCase();return T||L[m]||r[m]||L[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(c,u,h){return u||h.slice(1)})})).match(a),q=F.length,G=0;G<q;G+=1){var Q=F[G],H=N[Q],y=H&&H[0],b=H&&H[1];F[G]=b?{regex:y,parser:b}:Q.replace(/^\[|\]$/g,"")}return function(x){for(var T={},m=0,_=0;m<q;m+=1){var c=F[m];if(typeof c=="string")_+=c.length;else{var u=c.regex,h=c.parser,d=x.slice(_),v=u.exec(d)[0];h.call(T,v),x=x.replace(v,"")}}return function(s){var o=s.afternoon;if(o!==void 0){var t=s.hours;o?t<12&&(s.hours+=12):t===12&&(s.hours=0),delete s.afternoon}}(T),T}}return l(S,"l"),function(p,C,L){L.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(M=p.parseTwoDigitYear);var F=C.prototype,q=F.parse;F.parse=function(G){var Q=G.date,H=G.utc,y=G.args;this.$u=H;var b=y[1];if(typeof b=="string"){var x=y[2]===!0,T=y[3]===!0,m=x||T,_=y[2];T&&(_=y[2]),Y=this.$locale(),!x&&_&&(Y=L.Ls[_]),this.$d=function(d,v,s,o){try{if(["x","X"].indexOf(v)>-1)return new Date((v==="X"?1e3:1)*d);var t=S(v)(d),A=t.year,D=t.month,E=t.day,j=t.hours,W=t.minutes,V=t.seconds,$=t.milliseconds,se=t.zone,ne=t.week,fe=new Date,he=E||(A||D?1:fe.getDate()),oe=A||fe.getFullYear(),z=0;A&&!D||(z=D>0?D-1:fe.getMonth());var U,B=j||0,ie=W||0,J=V||0,re=$||0;return se?new Date(Date.UTC(oe,z,he,B,ie,J,re+60*se.offset*1e3)):s?new Date(Date.UTC(oe,z,he,B,ie,J,re)):(U=new Date(oe,z,he,B,ie,J,re),ne&&(U=o(U).week(ne).toDate()),U)}catch{return new Date("")}}(Q,b,H,L),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),m&&Q!=this.format(b)&&(this.$d=new Date("")),Y={}}else if(b instanceof Array)for(var c=b.length,u=1;u<=c;u+=1){y[1]=b[u-1];var h=L.apply(this,y);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}u===c&&(this.$d=new Date(""))}else q.call(this,G)}}})}}),Yt=Ie({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/advancedFormat.js"(e,i){(function(r,a){typeof e=="object"&&typeof i<"u"?i.exports=a():typeof define=="function"&&define.amd?define(a):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_advancedFormat=a()})(e,function(){return function(r,a){var n=a.prototype,k=n.format;n.format=function(f){var w=this,Y=this.$locale();if(!this.isValid())return k.bind(this)(f);var M=this.$utils(),g=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(I){switch(I){case"Q":return Math.ceil((w.$M+1)/3);case"Do":return Y.ordinal(w.$D);case"gggg":return w.weekYear();case"GGGG":return w.isoWeekYear();case"wo":return Y.ordinal(w.week(),"W");case"w":case"ww":return M.s(w.week(),I==="w"?1:2,"0");case"W":case"WW":return M.s(w.isoWeek(),I==="W"?1:2,"0");case"k":case"kk":return M.s(String(w.$H===0?24:w.$H),I==="k"?1:2,"0");case"X":return Math.floor(w.$d.getTime()/1e3);case"x":return w.$d.getTime();case"z":return"["+w.offsetName()+"]";case"zzz":return"["+w.offsetName("long")+"]";default:return I}});return k.bind(this)(g)}}})}}),Se=function(){var e=l(function(_,c,u,h){for(u=u||{},h=_.length;h--;u[_[h]]=c);return u},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],a=[1,27],n=[1,28],k=[1,29],f=[1,30],w=[1,31],Y=[1,32],M=[1,33],g=[1,34],I=[1,9],O=[1,10],P=[1,11],N=[1,12],S=[1,13],p=[1,14],C=[1,15],L=[1,16],F=[1,19],q=[1,20],G=[1,21],Q=[1,22],H=[1,23],y=[1,25],b=[1,35],x={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(c,u,h,d,v,s,o){var t=s.length-1;switch(v){case 1:return s[t-1];case 2:this.$=[];break;case 3:s[t-1].push(s[t]),this.$=s[t-1];break;case 4:case 5:this.$=s[t];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(s[t].substr(11)),this.$=s[t].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=s[t].substr(18);break;case 19:d.TopAxis(),this.$=s[t].substr(8);break;case 20:d.setAxisFormat(s[t].substr(11)),this.$=s[t].substr(11);break;case 21:d.setTickInterval(s[t].substr(13)),this.$=s[t].substr(13);break;case 22:d.setExcludes(s[t].substr(9)),this.$=s[t].substr(9);break;case 23:d.setIncludes(s[t].substr(9)),this.$=s[t].substr(9);break;case 24:d.setTodayMarker(s[t].substr(12)),this.$=s[t].substr(12);break;case 27:d.setDiagramTitle(s[t].substr(6)),this.$=s[t].substr(6);break;case 28:this.$=s[t].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=s[t].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(s[t].substr(8)),this.$=s[t].substr(8);break;case 33:d.addTask(s[t-1],s[t]),this.$="task";break;case 34:this.$=s[t-1],d.setClickEvent(s[t-1],s[t],null);break;case 35:this.$=s[t-2],d.setClickEvent(s[t-2],s[t-1],s[t]);break;case 36:this.$=s[t-2],d.setClickEvent(s[t-2],s[t-1],null),d.setLink(s[t-2],s[t]);break;case 37:this.$=s[t-3],d.setClickEvent(s[t-3],s[t-2],s[t-1]),d.setLink(s[t-3],s[t]);break;case 38:this.$=s[t-2],d.setClickEvent(s[t-2],s[t],null),d.setLink(s[t-2],s[t-1]);break;case 39:this.$=s[t-3],d.setClickEvent(s[t-3],s[t-1],s[t]),d.setLink(s[t-3],s[t-2]);break;case 40:this.$=s[t-1],d.setLink(s[t-1],s[t]);break;case 41:case 47:this.$=s[t-1]+" "+s[t];break;case 42:case 43:case 45:this.$=s[t-2]+" "+s[t-1]+" "+s[t];break;case 44:case 46:this.$=s[t-3]+" "+s[t-2]+" "+s[t-1]+" "+s[t];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:a,14:n,15:k,16:f,17:w,18:Y,19:18,20:M,21:g,22:I,23:O,24:P,25:N,26:S,27:p,28:C,29:L,30:F,31:q,33:G,35:Q,36:H,37:24,38:y,40:b},e(i,[2,7],{1:[2,1]}),e(i,[2,3]),{9:36,11:17,12:r,13:a,14:n,15:k,16:f,17:w,18:Y,19:18,20:M,21:g,22:I,23:O,24:P,25:N,26:S,27:p,28:C,29:L,30:F,31:q,33:G,35:Q,36:H,37:24,38:y,40:b},e(i,[2,5]),e(i,[2,6]),e(i,[2,17]),e(i,[2,18]),e(i,[2,19]),e(i,[2,20]),e(i,[2,21]),e(i,[2,22]),e(i,[2,23]),e(i,[2,24]),e(i,[2,25]),e(i,[2,26]),e(i,[2,27]),{32:[1,37]},{34:[1,38]},e(i,[2,30]),e(i,[2,31]),e(i,[2,32]),{39:[1,39]},e(i,[2,8]),e(i,[2,9]),e(i,[2,10]),e(i,[2,11]),e(i,[2,12]),e(i,[2,13]),e(i,[2,14]),e(i,[2,15]),e(i,[2,16]),{41:[1,40],43:[1,41]},e(i,[2,4]),e(i,[2,28]),e(i,[2,29]),e(i,[2,33]),e(i,[2,34],{42:[1,42],43:[1,43]}),e(i,[2,40],{41:[1,44]}),e(i,[2,35],{43:[1,45]}),e(i,[2,36]),e(i,[2,38],{42:[1,46]}),e(i,[2,37]),e(i,[2,39])],defaultActions:{},parseError:l(function(c,u){if(u.recoverable)this.trace(c);else{var h=new Error(c);throw h.hash=u,h}},"parseError"),parse:l(function(c){var u=this,h=[0],d=[],v=[null],s=[],o=this.table,t="",A=0,D=0,E=2,j=1,W=s.slice.call(arguments,1),V=Object.create(this.lexer),$={yy:{}};for(var se in this.yy)Object.prototype.hasOwnProperty.call(this.yy,se)&&($.yy[se]=this.yy[se]);V.setInput(c,$.yy),$.yy.lexer=V,$.yy.parser=this,typeof V.yylloc>"u"&&(V.yylloc={});var ne=V.yylloc;s.push(ne);var fe=V.options&&V.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function he(X){h.length=h.length-2*X,v.length=v.length-X,s.length=s.length-X}l(he,"popStack");function oe(){var X;return X=d.pop()||V.lex()||j,typeof X!="number"&&(X instanceof Array&&(d=X,X=d.pop()),X=u.symbols_[X]||X),X}l(oe,"lex");for(var z,U,B,ie,J={},re,K,je,ge;;){if(U=h[h.length-1],this.defaultActions[U]?B=this.defaultActions[U]:((z===null||typeof z>"u")&&(z=oe()),B=o[U]&&o[U][z]),typeof B>"u"||!B.length||!B[0]){var we="";ge=[];for(re in o[U])this.terminals_[re]&&re>E&&ge.push("'"+this.terminals_[re]+"'");V.showPosition?we="Parse error on line "+(A+1)+`:
`+V.showPosition()+`
Expecting `+ge.join(", ")+", got '"+(this.terminals_[z]||z)+"'":we="Parse error on line "+(A+1)+": Unexpected "+(z==j?"end of input":"'"+(this.terminals_[z]||z)+"'"),this.parseError(we,{text:V.match,token:this.terminals_[z]||z,line:V.yylineno,loc:ne,expected:ge})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+z);switch(B[0]){case 1:h.push(z),v.push(V.yytext),s.push(V.yylloc),h.push(B[1]),z=null,D=V.yyleng,t=V.yytext,A=V.yylineno,ne=V.yylloc;break;case 2:if(K=this.productions_[B[1]][1],J.$=v[v.length-K],J._$={first_line:s[s.length-(K||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(K||1)].first_column,last_column:s[s.length-1].last_column},fe&&(J._$.range=[s[s.length-(K||1)].range[0],s[s.length-1].range[1]]),ie=this.performAction.apply(J,[t,D,A,$.yy,B[1],v,s].concat(W)),typeof ie<"u")return ie;K&&(h=h.slice(0,-1*K*2),v=v.slice(0,-1*K),s=s.slice(0,-1*K)),h.push(this.productions_[B[1]][0]),v.push(J.$),s.push(J._$),je=o[h[h.length-2]][h[h.length-1]],h.push(je);break;case 3:return!0}}return!0},"parse")},T=function(){var _={EOF:1,parseError:l(function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},"parseError"),setInput:l(function(c,u){return this.yy=u||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var u=c.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:l(function(c){var u=c.length,h=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var v=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[v[0],v[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(c){this.unput(this.match.slice(c))},"less"),pastInput:l(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var c=this.pastInput(),u=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:l(function(c,u){var h,d,v;if(this.options.backtrack_lexer&&(v={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(v.yylloc.range=this.yylloc.range.slice(0))),d=c[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var s in v)this[s]=v[s];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,u,h,d;this._more||(this.yytext="",this.match="");for(var v=this._currentRules(),s=0;s<v.length;s++)if(h=this._input.match(this.rules[v[s]]),h&&(!u||h[0].length>u[0].length)){if(u=h,d=s,this.options.backtrack_lexer){if(c=this.test_match(h,v[s]),c!==!1)return c;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(c=this.test_match(u,v[d]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var u=this.next();return u||this.lex()},"lex"),begin:l(function(u){this.conditionStack.push(u)},"begin"),popState:l(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:l(function(u){this.begin(u)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(u,h,d,v){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return _}();x.lexer=T;function m(){this.yy={}}return l(m,"Parser"),m.prototype=x,x.Parser=m,new m}();Se.parser=Se;var Wt=Se,Vt=de(It()),Z=de(Je()),Ot=de(Lt()),Pt=de(Ft()),zt=de(Yt());Z.default.extend(Ot.default);Z.default.extend(Pt.default);Z.default.extend(zt.default);var Ze={friday:5,saturday:6},ee="",Ae="",Le=void 0,Fe="",me=[],ke=[],Ye=new Map,We=[],xe=[],ue="",Ve="",Ke=["active","done","crit","milestone","vert"],Oe=[],ye=!1,Pe=!1,ze="sunday",_e="saturday",Ce=0,Rt=l(function(){We=[],xe=[],ue="",Oe=[],ve=0,Me=void 0,Te=void 0,R=[],ee="",Ae="",Ve="",Le=void 0,Fe="",me=[],ke=[],ye=!1,Pe=!1,Ce=0,Ye=new Map,Mt(),ze="sunday",_e="saturday"},"clear"),jt=l(function(e){Ae=e},"setAxisFormat"),Nt=l(function(){return Ae},"getAxisFormat"),Bt=l(function(e){Le=e},"setTickInterval"),qt=l(function(){return Le},"getTickInterval"),Gt=l(function(e){Fe=e},"setTodayMarker"),Ht=l(function(){return Fe},"getTodayMarker"),Xt=l(function(e){ee=e},"setDateFormat"),Ut=l(function(){ye=!0},"enableInclusiveEndDates"),Zt=l(function(){return ye},"endDatesAreInclusive"),Qt=l(function(){Pe=!0},"enableTopAxis"),$t=l(function(){return Pe},"topAxisEnabled"),Jt=l(function(e){Ve=e},"setDisplayMode"),Kt=l(function(){return Ve},"getDisplayMode"),er=l(function(){return ee},"getDateFormat"),tr=l(function(e){me=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),rr=l(function(){return me},"getIncludes"),ir=l(function(e){ke=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),ar=l(function(){return ke},"getExcludes"),sr=l(function(){return Ye},"getLinks"),nr=l(function(e){ue=e,We.push(e)},"addSection"),or=l(function(){return We},"getSections"),cr=l(function(){let e=Qe();const i=10;let r=0;for(;!e&&r<i;)e=Qe(),r++;return xe=R,xe},"getTasks"),et=l(function(e,i,r,a){return a.includes(e.format(i.trim()))?!1:r.includes("weekends")&&(e.isoWeekday()===Ze[_e]||e.isoWeekday()===Ze[_e]+1)||r.includes(e.format("dddd").toLowerCase())?!0:r.includes(e.format(i.trim()))},"isInvalidDate"),lr=l(function(e){ze=e},"setWeekday"),ur=l(function(){return ze},"getWeekday"),dr=l(function(e){_e=e},"setWeekend"),tt=l(function(e,i,r,a){if(!r.length||e.manualEndTime)return;let n;e.startTime instanceof Date?n=(0,Z.default)(e.startTime):n=(0,Z.default)(e.startTime,i,!0),n=n.add(1,"d");let k;e.endTime instanceof Date?k=(0,Z.default)(e.endTime):k=(0,Z.default)(e.endTime,i,!0);const[f,w]=fr(n,k,i,r,a);e.endTime=f.toDate(),e.renderEndTime=w},"checkTaskDates"),fr=l(function(e,i,r,a,n){let k=!1,f=null;for(;e<=i;)k||(f=i.toDate()),k=et(e,r,a,n),k&&(i=i.add(1,"d")),e=e.add(1,"d");return[i,f]},"fixTaskDates"),Ee=l(function(e,i,r){r=r.trim();const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(n!==null){let f=null;for(const Y of n.groups.ids.split(" ")){let M=ae(Y);M!==void 0&&(!f||M.endTime>f.endTime)&&(f=M)}if(f)return f.endTime;const w=new Date;return w.setHours(0,0,0,0),w}let k=(0,Z.default)(r,i.trim(),!0);if(k.isValid())return k.toDate();{be.debug("Invalid date:"+r),be.debug("With date format:"+i.trim());const f=new Date(r);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+r);return f}},"getStartDate"),rt=l(function(e){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),it=l(function(e,i,r,a=!1){r=r.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(k!==null){let g=null;for(const O of k.groups.ids.split(" ")){let P=ae(O);P!==void 0&&(!g||P.startTime<g.startTime)&&(g=P)}if(g)return g.startTime;const I=new Date;return I.setHours(0,0,0,0),I}let f=(0,Z.default)(r,i.trim(),!0);if(f.isValid())return a&&(f=f.add(1,"d")),f.toDate();let w=(0,Z.default)(e);const[Y,M]=rt(r);if(!Number.isNaN(Y)){const g=w.add(Y,M);g.isValid()&&(w=g)}return w.toDate()},"getEndDate"),ve=0,le=l(function(e){return e===void 0?(ve=ve+1,"task"+ve):e},"parseId"),hr=l(function(e,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;const a=r.split(","),n={};Re(a,n,Ke);for(let f=0;f<a.length;f++)a[f]=a[f].trim();let k="";switch(a.length){case 1:n.id=le(),n.startTime=e.endTime,k=a[0];break;case 2:n.id=le(),n.startTime=Ee(void 0,ee,a[0]),k=a[1];break;case 3:n.id=le(a[0]),n.startTime=Ee(void 0,ee,a[1]),k=a[2];break}return k&&(n.endTime=it(n.startTime,ee,k,ye),n.manualEndTime=(0,Z.default)(k,"YYYY-MM-DD",!0).isValid(),tt(n,ee,ke,me)),n},"compileData"),mr=l(function(e,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;const a=r.split(","),n={};Re(a,n,Ke);for(let k=0;k<a.length;k++)a[k]=a[k].trim();switch(a.length){case 1:n.id=le(),n.startTime={type:"prevTaskEnd",id:e},n.endTime={data:a[0]};break;case 2:n.id=le(),n.startTime={type:"getStartDate",startData:a[0]},n.endTime={data:a[1]};break;case 3:n.id=le(a[0]),n.startTime={type:"getStartDate",startData:a[1]},n.endTime={data:a[2]};break}return n},"parseData"),Me,Te,R=[],at={},kr=l(function(e,i){const r={section:ue,type:ue,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:e,classes:[]},a=mr(Te,i);r.raw.startTime=a.startTime,r.raw.endTime=a.endTime,r.id=a.id,r.prevTaskId=Te,r.active=a.active,r.done=a.done,r.crit=a.crit,r.milestone=a.milestone,r.vert=a.vert,r.order=Ce,Ce++;const n=R.push(r);Te=r.id,at[r.id]=n-1},"addTask"),ae=l(function(e){const i=at[e];return R[i]},"findTaskById"),yr=l(function(e,i){const r={section:ue,type:ue,description:e,task:e,classes:[]},a=hr(Me,i);r.startTime=a.startTime,r.endTime=a.endTime,r.id=a.id,r.active=a.active,r.done=a.done,r.crit=a.crit,r.milestone=a.milestone,r.vert=a.vert,Me=r,xe.push(r)},"addTaskOrg"),Qe=l(function(){const e=l(function(r){const a=R[r];let n="";switch(R[r].raw.startTime.type){case"prevTaskEnd":{const k=ae(a.prevTaskId);a.startTime=k.endTime;break}case"getStartDate":n=Ee(void 0,ee,R[r].raw.startTime.startData),n&&(R[r].startTime=n);break}return R[r].startTime&&(R[r].endTime=it(R[r].startTime,ee,R[r].raw.endTime.data,ye),R[r].endTime&&(R[r].processed=!0,R[r].manualEndTime=(0,Z.default)(R[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tt(R[r],ee,ke,me))),R[r].processed},"compileTask");let i=!0;for(const[r,a]of R.entries())e(r),i=i&&a.processed;return i},"compileTasks"),gr=l(function(e,i){let r=i;ce().securityLevel!=="loose"&&(r=(0,Vt.sanitizeUrl)(i)),e.split(",").forEach(function(a){ae(a)!==void 0&&(nt(a,()=>{window.open(r,"_self")}),Ye.set(a,r))}),st(e,"clickable")},"setLink"),st=l(function(e,i){e.split(",").forEach(function(r){let a=ae(r);a!==void 0&&a.classes.push(i)})},"setClass"),pr=l(function(e,i,r){if(ce().securityLevel!=="loose"||i===void 0)return;let a=[];if(typeof r=="string"){a=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<a.length;k++){let f=a[k].trim();f.startsWith('"')&&f.endsWith('"')&&(f=f.substr(1,f.length-2)),a[k]=f}}a.length===0&&a.push(e),ae(e)!==void 0&&nt(e,()=>{At.runFunc(i,...a)})},"setClickFun"),nt=l(function(e,i){Oe.push(function(){const r=document.querySelector(`[id="${e}"]`);r!==null&&r.addEventListener("click",function(){i()})},function(){const r=document.querySelector(`[id="${e}-text"]`);r!==null&&r.addEventListener("click",function(){i()})})},"pushFun"),vr=l(function(e,i,r){e.split(",").forEach(function(a){pr(a,i,r)}),st(e,"clickable")},"setClickEvent"),Tr=l(function(e){Oe.forEach(function(i){i(e)})},"bindFunctions"),br={getConfig:l(()=>ce().gantt,"getConfig"),clear:Rt,setDateFormat:Xt,getDateFormat:er,enableInclusiveEndDates:Ut,endDatesAreInclusive:Zt,enableTopAxis:Qt,topAxisEnabled:$t,setAxisFormat:jt,getAxisFormat:Nt,setTickInterval:Bt,getTickInterval:qt,setTodayMarker:Gt,getTodayMarker:Ht,setAccTitle:ft,getAccTitle:dt,setDiagramTitle:ut,getDiagramTitle:lt,setDisplayMode:Jt,getDisplayMode:Kt,setAccDescription:ct,getAccDescription:ot,addSection:nr,getSections:or,getTasks:cr,addTask:kr,findTaskById:ae,addTaskOrg:yr,setIncludes:tr,getIncludes:rr,setExcludes:ir,getExcludes:ar,setClickEvent:vr,setLink:gr,getLinks:sr,bindFunctions:Tr,parseDuration:rt,isInvalidDate:et,setWeekday:lr,getWeekday:ur,setWeekend:dr};function Re(e,i,r){let a=!0;for(;a;)a=!1,r.forEach(function(n){const k="^\\s*"+n+"\\s*$",f=new RegExp(k);e[0].match(f)&&(i[n]=!0,e.shift(1),a=!0)})}l(Re,"getTaskTags");var De=de(Je()),xr=l(function(){be.debug("Something is calling, setConf, remove the call")},"setConf"),$e={monday:St,tuesday:Dt,wednesday:wt,thursday:_t,friday:xt,saturday:bt,sunday:Tt},_r=l((e,i)=>{let r=[...e].map(()=>-1/0),a=[...e].sort((k,f)=>k.startTime-f.startTime||k.order-f.order),n=0;for(const k of a)for(let f=0;f<r.length;f++)if(k.startTime>=r[f]){r[f]=k.endTime,k.order=f+i,f>n&&(n=f);break}return n},"getMaxIntersections"),te,wr=l(function(e,i,r,a){const n=ce().gantt,k=ce().securityLevel;let f;k==="sandbox"&&(f=pe("#i"+i));const w=k==="sandbox"?pe(f.nodes()[0].contentDocument.body):pe("body"),Y=k==="sandbox"?f.nodes()[0].contentDocument:document,M=Y.getElementById(i);te=M.parentElement.offsetWidth,te===void 0&&(te=1200),n.useWidth!==void 0&&(te=n.useWidth);const g=a.db.getTasks();let I=[];for(const y of g)I.push(y.type);I=H(I);const O={};let P=2*n.topPadding;if(a.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const y={};for(const x of g)y[x.section]===void 0?y[x.section]=[x]:y[x.section].push(x);let b=0;for(const x of Object.keys(y)){const T=_r(y[x],b)+1;b+=T,P+=T*(n.barHeight+n.barGap),O[x]=T}}else{P+=g.length*(n.barHeight+n.barGap);for(const y of I)O[y]=g.filter(b=>b.type===y).length}M.setAttribute("viewBox","0 0 "+te+" "+P);const N=w.select(`[id="${i}"]`),S=ht().domain([mt(g,function(y){return y.startTime}),kt(g,function(y){return y.endTime})]).rangeRound([0,te-n.leftPadding-n.rightPadding]);function p(y,b){const x=y.startTime,T=b.startTime;let m=0;return x>T?m=1:x<T&&(m=-1),m}l(p,"taskCompare"),g.sort(p),C(g,te,P),yt(N,P,te,n.useMaxWidth),N.append("text").text(a.db.getDiagramTitle()).attr("x",te/2).attr("y",n.titleTopMargin).attr("class","titleText");function C(y,b,x){const T=n.barHeight,m=T+n.barGap,_=n.topPadding,c=n.leftPadding,u=gt().domain([0,I.length]).range(["#00B9FA","#F95002"]).interpolate(pt);F(m,_,c,b,x,y,a.db.getExcludes(),a.db.getIncludes()),q(c,_,b,x),L(y,m,_,c,T,u,b),G(m,_),Q(c,_,b,x)}l(C,"makeGantt");function L(y,b,x,T,m,_,c){y.sort((o,t)=>o.vert===t.vert?0:o.vert?1:-1);const h=[...new Set(y.map(o=>o.order))].map(o=>y.find(t=>t.order===o));N.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(o,t){return t=o.order,t*b+x-2}).attr("width",function(){return c-n.rightPadding/2}).attr("height",b).attr("class",function(o){for(const[t,A]of I.entries())if(o.type===A)return"section section"+t%n.numberSectionStyles;return"section section0"}).enter();const d=N.append("g").selectAll("rect").data(y).enter(),v=a.db.getLinks();if(d.append("rect").attr("id",function(o){return o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?S(o.startTime)+T+.5*(S(o.endTime)-S(o.startTime))-.5*m:S(o.startTime)+T}).attr("y",function(o,t){return t=o.order,o.vert?n.gridLineStartPadding:t*b+x}).attr("width",function(o){return o.milestone?m:o.vert?.08*m:S(o.renderEndTime||o.endTime)-S(o.startTime)}).attr("height",function(o){return o.vert?g.length*(n.barHeight+n.barGap)+n.barHeight*2:m}).attr("transform-origin",function(o,t){return t=o.order,(S(o.startTime)+T+.5*(S(o.endTime)-S(o.startTime))).toString()+"px "+(t*b+x+.5*m).toString()+"px"}).attr("class",function(o){const t="task";let A="";o.classes.length>0&&(A=o.classes.join(" "));let D=0;for(const[j,W]of I.entries())o.type===W&&(D=j%n.numberSectionStyles);let E="";return o.active?o.crit?E+=" activeCrit":E=" active":o.done?o.crit?E=" doneCrit":E=" done":o.crit&&(E+=" crit"),E.length===0&&(E=" task"),o.milestone&&(E=" milestone "+E),o.vert&&(E=" vert "+E),E+=D,E+=" "+A,t+E}),d.append("text").attr("id",function(o){return o.id+"-text"}).text(function(o){return o.task}).attr("font-size",n.fontSize).attr("x",function(o){let t=S(o.startTime),A=S(o.renderEndTime||o.endTime);if(o.milestone&&(t+=.5*(S(o.endTime)-S(o.startTime))-.5*m,A=t+m),o.vert)return S(o.startTime)+T;const D=this.getBBox().width;return D>A-t?A+D+1.5*n.leftPadding>c?t+T-5:A+T+5:(A-t)/2+t+T}).attr("y",function(o,t){return o.vert?n.gridLineStartPadding+g.length*(n.barHeight+n.barGap)+60:(t=o.order,t*b+n.barHeight/2+(n.fontSize/2-2)+x)}).attr("text-height",m).attr("class",function(o){const t=S(o.startTime);let A=S(o.endTime);o.milestone&&(A=t+m);const D=this.getBBox().width;let E="";o.classes.length>0&&(E=o.classes.join(" "));let j=0;for(const[V,$]of I.entries())o.type===$&&(j=V%n.numberSectionStyles);let W="";return o.active&&(o.crit?W="activeCritText"+j:W="activeText"+j),o.done?o.crit?W=W+" doneCritText"+j:W=W+" doneText"+j:o.crit&&(W=W+" critText"+j),o.milestone&&(W+=" milestoneText"),o.vert&&(W+=" vertText"),D>A-t?A+D+1.5*n.leftPadding>c?E+" taskTextOutsideLeft taskTextOutside"+j+" "+W:E+" taskTextOutsideRight taskTextOutside"+j+" "+W+" width-"+D:E+" taskText taskText"+j+" "+W+" width-"+D}),ce().securityLevel==="sandbox"){let o;o=pe("#i"+i);const t=o.nodes()[0].contentDocument;d.filter(function(A){return v.has(A.id)}).each(function(A){var D=t.querySelector("#"+A.id),E=t.querySelector("#"+A.id+"-text");const j=D.parentNode;var W=t.createElement("a");W.setAttribute("xlink:href",v.get(A.id)),W.setAttribute("target","_top"),j.appendChild(W),W.appendChild(D),W.appendChild(E)})}}l(L,"drawRects");function F(y,b,x,T,m,_,c,u){if(c.length===0&&u.length===0)return;let h,d;for(const{startTime:D,endTime:E}of _)(h===void 0||D<h)&&(h=D),(d===void 0||E>d)&&(d=E);if(!h||!d)return;if((0,De.default)(d).diff((0,De.default)(h),"year")>5){be.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const v=a.db.getDateFormat(),s=[];let o=null,t=(0,De.default)(h);for(;t.valueOf()<=d;)a.db.isInvalidDate(t,v,c,u)?o?o.end=t:o={start:t,end:t}:o&&(s.push(o),o=null),t=t.add(1,"d");N.append("g").selectAll("rect").data(s).enter().append("rect").attr("id",function(D){return"exclude-"+D.start.format("YYYY-MM-DD")}).attr("x",function(D){return S(D.start)+x}).attr("y",n.gridLineStartPadding).attr("width",function(D){const E=D.end.add(1,"day");return S(E)-S(D.start)}).attr("height",m-b-n.gridLineStartPadding).attr("transform-origin",function(D,E){return(S(D.start)+x+.5*(S(D.end)-S(D.start))).toString()+"px "+(E*y+.5*m).toString()+"px"}).attr("class","exclude-range")}l(F,"drawExcludeDays");function q(y,b,x,T){let m=vt(S).tickSize(-T+b+n.gridLineStartPadding).tickFormat(Ne(a.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||n.tickInterval);if(c!==null){const u=c[1],h=c[2],d=a.db.getWeekday()||n.weekday;switch(h){case"millisecond":m.ticks(Ue.every(u));break;case"second":m.ticks(Xe.every(u));break;case"minute":m.ticks(He.every(u));break;case"hour":m.ticks(Ge.every(u));break;case"day":m.ticks(qe.every(u));break;case"week":m.ticks($e[d].every(u));break;case"month":m.ticks(Be.every(u));break}}if(N.append("g").attr("class","grid").attr("transform","translate("+y+", "+(T-50)+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||n.topAxis){let u=Ct(S).tickSize(-T+b+n.gridLineStartPadding).tickFormat(Ne(a.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(c!==null){const h=c[1],d=c[2],v=a.db.getWeekday()||n.weekday;switch(d){case"millisecond":u.ticks(Ue.every(h));break;case"second":u.ticks(Xe.every(h));break;case"minute":u.ticks(He.every(h));break;case"hour":u.ticks(Ge.every(h));break;case"day":u.ticks(qe.every(h));break;case"week":u.ticks($e[v].every(h));break;case"month":u.ticks(Be.every(h));break}}N.append("g").attr("class","grid").attr("transform","translate("+y+", "+b+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(q,"makeGrid");function G(y,b){let x=0;const T=Object.keys(O).map(m=>[m,O[m]]);N.append("g").selectAll("text").data(T).enter().append(function(m){const _=m[0].split(Et.lineBreakRegex),c=-(_.length-1)/2,u=Y.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",c+"em");for(const[h,d]of _.entries()){const v=Y.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttribute("alignment-baseline","central"),v.setAttribute("x","10"),h>0&&v.setAttribute("dy","1em"),v.textContent=d,u.appendChild(v)}return u}).attr("x",10).attr("y",function(m,_){if(_>0)for(let c=0;c<_;c++)return x+=T[_-1][1],m[1]*y/2+x*y+b;else return m[1]*y/2+b}).attr("font-size",n.sectionFontSize).attr("class",function(m){for(const[_,c]of I.entries())if(m[0]===c)return"sectionTitle sectionTitle"+_%n.numberSectionStyles;return"sectionTitle"})}l(G,"vertLabels");function Q(y,b,x,T){const m=a.db.getTodayMarker();if(m==="off")return;const _=N.append("g").attr("class","today"),c=new Date,u=_.append("line");u.attr("x1",S(c)+y).attr("x2",S(c)+y).attr("y1",n.titleTopMargin).attr("y2",T-n.titleTopMargin).attr("class","today"),m!==""&&u.attr("style",m.replace(/,/g,";"))}l(Q,"drawToday");function H(y){const b={},x=[];for(let T=0,m=y.length;T<m;++T)Object.prototype.hasOwnProperty.call(b,y[T])||(b[y[T]]=!0,x.push(y[T]));return x}l(H,"checkUnique")},"draw"),Dr={setConf:xr,draw:wr},Sr=l(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Cr=Sr,Or={parser:Wt,db:br,renderer:Dr,styles:Cr};export{Or as diagram};
