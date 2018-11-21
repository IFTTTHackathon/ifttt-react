/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(bP,bO){var bN=[],bM=bP.document,bL=Object.getPrototypeOf,bJ=bN.slice,bH=bN.concat,bG=bN.push,bF=bN.indexOf,bE={},bD=bE.toString,bC=bE.hasOwnProperty,bB=bC.toString,bA=bB.call(Object),bz={};
function by(e,d){d=d||bM;
var f=d.createElement("script");
f.text=e,d.head.appendChild(f).parentNode.removeChild(f)
}var bw="3.1.1",bv=function(d,c){return new bv.fn.init(d,c)
},bu=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^-ms-/,bs=/-([a-z])/g,br=function(d,c){return c.toUpperCase()
};
bv.fn=bv.prototype={jquery:bw,constructor:bv,length:0,toArray:function(){return bJ.call(this)
},get:function(b){return null==b?bJ.call(this):b<0?this[b+this.length]:this[b]
},pushStack:function(d){var c=bv.merge(this.constructor(),d);
return c.prevObject=this,c
},each:function(b){return bv.each(this,b)
},map:function(b){return this.pushStack(bv.map(this,function(a,d){return b.call(a,d,a)
}))
},slice:function(){return this.pushStack(bJ.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var d=this.length,f=+e+(e<0?d:0);
return this.pushStack(f>=0&&f<d?[this[f]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:bG,sort:bN.sort,splice:bN.splice},bv.extend=bv.fn.extend=function(){var t,s,r,q,p,o,n=arguments[0]||{},m=1,l=arguments.length,k=!1;
for("boolean"==typeof n&&(k=n,n=arguments[m]||{},m++),"object"==typeof n||bv.isFunction(n)||(n={}),m===l&&(n=this,m--);
m<l;
m++){if(null!=(t=arguments[m])){for(s in t){r=n[s],q=t[s],n!==q&&(k&&q&&(bv.isPlainObject(q)||(p=bv.isArray(q)))?(p?(p=!1,o=r&&bv.isArray(r)?r:[]):o=r&&bv.isPlainObject(r)?r:{},n[s]=bv.extend(k,o,q)):void 0!==q&&(n[s]=q))
}}}return n
},bv.extend({expando:"jQuery"+(bw+Math.random()).replace(/\D/g,""),isReady:!0,error:function(b){throw new Error(b)
},noop:function(){},isFunction:function(b){return"function"===bv.type(b)
},isArray:Array.isArray,isWindow:function(b){return null!=b&&b===b.window
},isNumeric:function(d){var c=bv.type(d);
return("number"===c||"string"===c)&&!isNaN(d-parseFloat(d))
},isPlainObject:function(e){var d,f;
return !(!e||"[object Object]"!==bD.call(e))&&(!(d=bL(e))||(f=bC.call(d,"constructor")&&d.constructor,"function"==typeof f&&bB.call(f)===bA))
},isEmptyObject:function(d){var c;
for(c in d){return !1
}return !0
},type:function(b){return null==b?b+"":"object"==typeof b||"function"==typeof b?bE[bD.call(b)]||"object":typeof b
},globalEval:function(b){by(b)
},camelCase:function(b){return b.replace(bt,"ms-").replace(bs,br)
},nodeName:function(d,c){return d.nodeName&&d.nodeName.toLowerCase()===c.toLowerCase()
},each:function(f,e){var h,g=0;
if(bq(f)){for(h=f.length;
g<h;
g++){if(e.call(f[g],g,f[g])===!1){break
}}}else{for(g in f){if(e.call(f[g],g,f[g])===!1){break
}}}return f
},trim:function(b){return null==b?"":(b+"").replace(bu,"")
},makeArray:function(e,d){var f=d||[];
return null!=e&&(bq(Object(e))?bv.merge(f,"string"==typeof e?[e]:e):bG.call(f,e)),f
},inArray:function(e,d,f){return null==d?-1:bF.call(d,e,f)
},merge:function(g,f){for(var j=+f.length,i=0,h=g.length;
i<j;
i++){g[h++]=f[i]
}return g.length=h,g
},grep:function(j,i,p){for(var o,n=[],m=0,l=j.length,k=!p;
m<l;
m++){o=!i(j[m],m),o!==k&&n.push(j[m])
}return n
},map:function(i,g,n){var m,l,k=0,j=[];
if(bq(i)){for(m=i.length;
k<m;
k++){l=g(i[k],k,n),null!=l&&j.push(l)
}}else{for(k in i){l=g(i[k],k,n),null!=l&&j.push(l)
}}return bH.apply([],j)
},guid:1,proxy:function(g,f){var j,i,h;
if("string"==typeof f&&(j=g[f],f=g,g=j),bv.isFunction(g)){return i=bJ.call(arguments,2),h=function(){return g.apply(f||this,i.concat(bJ.call(arguments)))
},h.guid=g.guid=g.guid||bv.guid++,h
}},now:Date.now,support:bz}),"function"==typeof Symbol&&(bv.fn[Symbol.iterator]=bN[Symbol.iterator]),bv.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(d,c){bE["[object "+c+"]"]=c.toLowerCase()
});
function bq(e){var d=!!e&&"length" in e&&e.length,f=bv.type(e);
return"function"!==f&&!bv.isWindow(e)&&("array"===f||0===d||"number"==typeof d&&d>0&&d-1 in e)
}var bp=function(dl){var dk,dj,dh,dg,df,de,dd,db,c9,c8,c7,c6,c4,c3,c2,c1,c0,cZ,cY,cX="sizzle"+1*new Date,cW=dl.document,cV=0,cU=0,cT=dH(),cS=dH(),dR=dH(),dQ=function(d,c){return d===c&&(c7=!0),0
},dP={}.hasOwnProperty,dO=[],dM=dO.pop,dL=dO.push,dK=dO.push,dJ=dO.slice,dI=function(f,e){for(var h=0,g=f.length;
h<g;
h++){if(f[h]===e){return h
}}return -1
},dG="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dF="[\\x20\\t\\r\\n\\f]",dE="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",dD="\\["+dF+"*("+dE+")(?:"+dF+"*([*^$|!~]?=)"+dF+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+dE+"))|)"+dF+"*\\]",dC=":("+dE+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dD+")*)|.*)\\)|)",dB=new RegExp(dF+"+","g"),dz=new RegExp("^"+dF+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dF+"+$","g"),dy=new RegExp("^"+dF+"*,"+dF+"*"),dx=new RegExp("^"+dF+"*([>+~]|"+dF+")"+dF+"*"),dw=new RegExp("="+dF+"*([^\\]'\"]*?)"+dF+"*\\]","g"),dv=new RegExp(dC),du=new RegExp("^"+dE+"$"),dt={ID:new RegExp("^#("+dE+")"),CLASS:new RegExp("^\\.("+dE+")"),TAG:new RegExp("^("+dE+"|[*])"),ATTR:new RegExp("^"+dD),PSEUDO:new RegExp("^"+dC),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dF+"*(even|odd|(([+-]|)(\\d*)n|)"+dF+"*(?:([+-]|)"+dF+"*(\\d+)|))"+dF+"*\\)|)","i"),bool:new RegExp("^(?:"+dG+")$","i"),needsContext:new RegExp("^"+dF+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dF+"*((?:-\\d)?\\d*)"+dF+"*\\)|)(?=[^-]|$)","i")},ds=/^(?:input|select|textarea|button)$/i,dr=/^h\d$/i,dq=/^[^{]+\{\s*\[native \w/,dp=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,dX=/[+~]/,dn=new RegExp("\\\\([\\da-f]{1,6}"+dF+"?|("+dF+")|.)","ig"),dU=function(f,e,h){var g="0x"+e-65536;
return g!==g||h?e:g<0?String.fromCharCode(g+65536):String.fromCharCode(g>>10|55296,1023&g|56320)
},dA=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,c5=function(d,c){return c?"\0"===d?"\ufffd":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d
},cO=function(){c6()
},bb=dS(function(b){return b.disabled===!0&&("form" in b||"label" in b)
},{dir:"parentNode",next:"legend"});
try{dK.apply(dO=dJ.call(cW.childNodes),cW.childNodes),dO[cW.childNodes.length].nodeType
}catch(d0){dK={apply:dO.length?function(d,c){dL.apply(d,dJ.call(c))
}:function(f,e){var h=f.length,g=0;
while(f[h++]=e[g++]){}f.length=h-1
}}
}function dV(z,v,u,t){var q,p,n,m,i,g,c,B=v&&v.ownerDocument,A=v?v.nodeType:9;
if(u=u||[],"string"!=typeof z||!z||1!==A&&9!==A&&11!==A){return u
}if(!t&&((v?v.ownerDocument||v:cW)!==c4&&c6(v),v=v||c4,c2)){if(11!==A&&(i=dp.exec(z))){if(q=i[1]){if(9===A){if(!(n=v.getElementById(q))){return u
}if(n.id===q){return u.push(n),u
}}else{if(B&&(n=B.getElementById(q))&&cY(v,n)&&n.id===q){return u.push(n),u
}}}else{if(i[2]){return dK.apply(u,v.getElementsByTagName(z)),u
}if((q=i[3])&&dj.getElementsByClassName&&v.getElementsByClassName){return dK.apply(u,v.getElementsByClassName(q)),u
}}}if(dj.qsa&&!dR[z+" "]&&(!c1||!c1.test(z))){if(1!==A){B=v,c=z
}else{if("object"!==v.nodeName.toLowerCase()){(m=v.getAttribute("id"))?m=m.replace(dA,c5):v.setAttribute("id",m=cX),g=de(z),p=g.length;
while(p--){g[p]="#"+m+" "+dY(g[p])
}c=g.join(","),B=dX.test(z)&&cM(v.parentNode)||v
}}if(c){try{return dK.apply(u,B.querySelectorAll(c)),u
}catch(y){}finally{m===cX&&v.removeAttribute("id")
}}}}return db(z.replace(dz,"$1"),v,u,t)
}function dH(){var d=[];
function c(b,a){return d.push(b+" ")>dh.cacheLength&&delete c[d.shift()],c[b+" "]=a
}return c
}function dc(b){return b[cX]=!0,b
}function cP(e){var d=c4.createElement("fieldset");
try{return !!e(d)
}catch(f){return !1
}finally{d.parentNode&&d.parentNode.removeChild(d),d=null
}}function cb(f,d){var h=f.split("|"),g=h.length;
while(g--){dh.attrHandle[h[g]]=d
}}function d1(f,e){var h=e&&f,g=h&&1===f.nodeType&&1===e.nodeType&&f.sourceIndex-e.sourceIndex;
if(g){return g
}if(h){while(h=h.nextSibling){if(h===e){return -1
}}}return f?1:-1
}function dW(b){return function(a){var d=a.nodeName.toLowerCase();
return"input"===d&&a.type===b
}
}function dN(b){return function(a){var d=a.nodeName.toLowerCase();
return("input"===d||"button"===d)&&a.type===b
}
}function di(b){return function(a){return"form" in a?a.parentNode&&a.disabled===!1?"label" in a?"label" in a.parentNode?a.parentNode.disabled===b:a.disabled===b:a.isDisabled===b||a.isDisabled!==!b&&bb(a)===b:a.disabled===b:"label" in a&&a.disabled===b
}
}function cQ(b){return dc(function(a){return a=+a,dc(function(l,k){var j,i=b([],l.length,a),h=i.length;
while(h--){l[j=i[h]]&&(l[j]=!(k[j]=l[j]))
}})
})
}function cM(b){return b&&"undefined"!=typeof b.getElementsByTagName&&b
}dj=dV.support={},df=dV.isXML=function(d){var c=d&&(d.ownerDocument||d).documentElement;
return !!c&&"HTML"!==c.nodeName
},c6=dV.setDocument=function(d){var c,h,f=d?d.ownerDocument||d:cW;
return f!==c4&&9===f.nodeType&&f.documentElement?(c4=f,c3=c4.documentElement,c2=!df(c4),cW!==c4&&(h=c4.defaultView)&&h.top!==h&&(h.addEventListener?h.addEventListener("unload",cO,!1):h.attachEvent&&h.attachEvent("onunload",cO)),dj.attributes=cP(function(b){return b.className="i",!b.getAttribute("className")
}),dj.getElementsByTagName=cP(function(b){return b.appendChild(c4.createComment("")),!b.getElementsByTagName("*").length
}),dj.getElementsByClassName=dq.test(c4.getElementsByClassName),dj.getById=cP(function(b){return c3.appendChild(b).id=cX,!c4.getElementsByName||!c4.getElementsByName(cX).length
}),dj.getById?(dh.filter.ID=function(g){var e=g.replace(dn,dU);
return function(b){return b.getAttribute("id")===e
}
},dh.find.ID=function(g,e){if("undefined"!=typeof e.getElementById&&c2){var i=e.getElementById(g);
return i?[i]:[]
}}):(dh.filter.ID=function(g){var e=g.replace(dn,dU);
return function(b){var i="undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id");
return i&&i.value===e
}
},dh.find.ID=function(i,g){if("undefined"!=typeof g.getElementById&&c2){var m,l,k,j=g.getElementById(i);
if(j){if(m=j.getAttributeNode("id"),m&&m.value===i){return[j]
}k=g.getElementsByName(i),l=0;
while(j=k[l++]){if(m=j.getAttributeNode("id"),m&&m.value===i){return[j]
}}}return[]
}}),dh.find.TAG=dj.getElementsByTagName?function(g,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(g):dj.qsa?e.querySelectorAll(g):void 0
}:function(i,g){var m,l=[],k=0,j=g.getElementsByTagName(i);
if("*"===i){while(m=j[k++]){1===m.nodeType&&l.push(m)
}return l
}return j
},dh.find.CLASS=dj.getElementsByClassName&&function(g,e){if("undefined"!=typeof e.getElementsByClassName&&c2){return e.getElementsByClassName(g)
}},c0=[],c1=[],(dj.qsa=dq.test(c4.querySelectorAll))&&(cP(function(b){c3.appendChild(b).innerHTML="<a id='"+cX+"'></a><select id='"+cX+"-\r\\' msallowcapture=''><option selected=''></option></select>",b.querySelectorAll("[msallowcapture^='']").length&&c1.push("[*^$]="+dF+"*(?:''|\"\")"),b.querySelectorAll("[selected]").length||c1.push("\\["+dF+"*(?:value|"+dG+")"),b.querySelectorAll("[id~="+cX+"-]").length||c1.push("~="),b.querySelectorAll(":checked").length||c1.push(":checked"),b.querySelectorAll("a#"+cX+"+*").length||c1.push(".#.+[+~]")
}),cP(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var e=c4.createElement("input");
e.setAttribute("type","hidden"),g.appendChild(e).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&c1.push("name"+dF+"*[*^$|!~]?="),2!==g.querySelectorAll(":enabled").length&&c1.push(":enabled",":disabled"),c3.appendChild(g).disabled=!0,2!==g.querySelectorAll(":disabled").length&&c1.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),c1.push(",.*:")
})),(dj.matchesSelector=dq.test(cZ=c3.matches||c3.webkitMatchesSelector||c3.mozMatchesSelector||c3.oMatchesSelector||c3.msMatchesSelector))&&cP(function(b){dj.disconnectedMatch=cZ.call(b,"*"),cZ.call(b,"[s!='']:x"),c0.push("!=",dC)
}),c1=c1.length&&new RegExp(c1.join("|")),c0=c0.length&&new RegExp(c0.join("|")),c=dq.test(c3.compareDocumentPosition),cY=c||dq.test(c3.contains)?function(g,e){var j=9===g.nodeType?g.documentElement:g,i=e&&e.parentNode;
return g===i||!(!i||1!==i.nodeType||!(j.contains?j.contains(i):g.compareDocumentPosition&&16&g.compareDocumentPosition(i)))
}:function(g,e){if(e){while(e=e.parentNode){if(e===g){return !0
}}}return !1
},dQ=c?function(g,e){if(g===e){return c7=!0,0
}var i=!g.compareDocumentPosition-!e.compareDocumentPosition;
return i?i:(i=(g.ownerDocument||g)===(e.ownerDocument||e)?g.compareDocumentPosition(e):1,1&i||!dj.sortDetached&&e.compareDocumentPosition(g)===i?g===c4||g.ownerDocument===cW&&cY(cW,g)?-1:e===c4||e.ownerDocument===cW&&cY(cW,e)?1:c8?dI(c8,g)-dI(c8,e):0:4&i?-1:1)
}:function(j,i){if(j===i){return c7=!0,0
}var p,o=0,n=j.parentNode,m=i.parentNode,l=[j],k=[i];
if(!n||!m){return j===c4?-1:i===c4?1:n?-1:m?1:c8?dI(c8,j)-dI(c8,i):0
}if(n===m){return d1(j,i)
}p=j;
while(p=p.parentNode){l.unshift(p)
}p=i;
while(p=p.parentNode){k.unshift(p)
}while(l[o]===k[o]){o++
}return o?d1(l[o],k[o]):l[o]===cW?-1:k[o]===cW?1:0
},c4):c4
},dV.matches=function(d,c){return dV(d,null,null,c)
},dV.matchesSelector=function(f,c){if((f.ownerDocument||f)!==c4&&c6(f),c=c.replace(dw,"='$1']"),dj.matchesSelector&&c2&&!dR[c+" "]&&(!c0||!c0.test(c))&&(!c1||!c1.test(c))){try{var h=cZ.call(f,c);
if(h||dj.disconnectedMatch||f.document&&11!==f.document.nodeType){return h
}}catch(g){}}return dV(c,c4,null,[f]).length>0
},dV.contains=function(d,c){return(d.ownerDocument||d)!==c4&&c6(d),cY(d,c)
},dV.attr=function(d,c){(d.ownerDocument||d)!==c4&&c6(d);
var h=dh.attrHandle[c.toLowerCase()],g=h&&dP.call(dh.attrHandle,c.toLowerCase())?h(d,c,!c2):void 0;
return void 0!==g?g:dj.attributes||!c2?d.getAttribute(c):(g=d.getAttributeNode(c))&&g.specified?g.value:null
},dV.escape=function(b){return(b+"").replace(dA,c5)
},dV.error=function(b){throw new Error("Syntax error, unrecognized expression: "+b)
},dV.uniqueSort=function(g){var c,j=[],i=0,h=0;
if(c7=!dj.detectDuplicates,c8=!dj.sortStable&&g.slice(0),g.sort(dQ),c7){while(c=g[h++]){c===g[h]&&(i=j.push(h))
}while(i--){g.splice(j[i],1)
}}return c8=null,g
},dg=dV.getText=function(g){var e,j="",i=0,h=g.nodeType;
if(h){if(1===h||9===h||11===h){if("string"==typeof g.textContent){return g.textContent
}for(g=g.firstChild;
g;
g=g.nextSibling){j+=dg(g)
}}else{if(3===h||4===h){return g.nodeValue
}}}else{while(e=g[i++]){j+=dg(e)
}}return j
},dh=dV.selectors={cacheLength:50,createPseudo:dc,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){return b[1]=b[1].replace(dn,dU),b[3]=(b[3]||b[4]||b[5]||"").replace(dn,dU),"~="===b[2]&&(b[3]=" "+b[3]+" "),b.slice(0,4)
},CHILD:function(b){return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||dV.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&dV.error(b[0]),b
},PSEUDO:function(e){var d,f=!e[6]&&e[2];
return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":f&&dv.test(f)&&(d=de(f,!0))&&(d=f.indexOf(")",f.length-d)-f.length)&&(e[0]=e[0].slice(0,d),e[2]=f.slice(0,d)),e.slice(0,3))
}},filter:{TAG:function(d){var c=d.replace(dn,dU).toLowerCase();
return"*"===d?function(){return !0
}:function(b){return b.nodeName&&b.nodeName.toLowerCase()===c
}
},CLASS:function(d){var c=cT[d+" "];
return c||(c=new RegExp("(^|"+dF+")"+d+"("+dF+"|$)"))&&cT(d,function(b){return c.test("string"==typeof b.className&&b.className||"undefined"!=typeof b.getAttribute&&b.getAttribute("class")||"")
})
},ATTR:function(e,d,f){return function(b){var a=dV.attr(b,e);
return null==a?"!="===d:!d||(a+="","="===d?a===f:"!="===d?a!==f:"^="===d?f&&0===a.indexOf(f):"*="===d?f&&a.indexOf(f)>-1:"$="===d?f&&a.slice(-f.length)===f:"~="===d?(" "+a.replace(dB," ")+" ").indexOf(f)>-1:"|="===d&&(a===f||a.slice(0,f.length+1)===f+"-"))
}
},CHILD:function(j,i,p,o,n){var m="nth"!==j.slice(0,3),l="last"!==j.slice(-4),k="of-type"===i;
return 1===o&&0===n?function(b){return !!b.parentNode
}:function(z,y,x){var w,v,u,h,g,f,e=m!==l?"nextSibling":"previousSibling",d=z.parentNode,a=k&&z.nodeName.toLowerCase(),B=!x&&!k,A=!1;
if(d){if(m){while(e){h=z;
while(h=h[e]){if(k?h.nodeName.toLowerCase()===a:1===h.nodeType){return !1
}}f=e="only"===j&&!f&&"nextSibling"
}return !0
}if(f=[l?d.firstChild:d.lastChild],l&&B){h=d,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[j]||[],g=w[0]===cV&&w[1],A=g&&w[2],h=g&&d.childNodes[g];
while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if(1===h.nodeType&&++A&&h===z){v[j]=[cV,g,A];
break
}}}else{if(B&&(h=z,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[j]||[],g=w[0]===cV&&w[1],A=g),A===!1){while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if((k?h.nodeName.toLowerCase()===a:1===h.nodeType)&&++A&&(B&&(u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),v[j]=[cV,A]),h===z)){break
}}}}return A-=n,A===o||A%o===0&&A/o>=0
}}
},PSEUDO:function(f,d){var h,g=dh.pseudos[f]||dh.setFilters[f.toLowerCase()]||dV.error("unsupported pseudo: "+f);
return g[cX]?g(d):g.length>1?(h=[f,f,"",d],dh.setFilters.hasOwnProperty(f.toLowerCase())?dc(function(b,k){var j,i=g(b,d),e=i.length;
while(e--){j=dI(b,i[e]),b[j]=!(k[j]=i[e])
}}):function(b){return g(b,0,h)
}):g
}},pseudos:{not:dc(function(f){var e=[],h=[],g=dd(f.replace(dz,"$1"));
return g[cX]?dc(function(i,d,n,m){var l,k=g(i,null,m,[]),j=i.length;
while(j--){(l=k[j])&&(i[j]=!(d[j]=l))
}}):function(b,d,c){return e[0]=b,g(e,null,c,h),e[0]=null,!h.pop()
}
}),has:dc(function(b){return function(a){return dV(b,a).length>0
}
}),contains:dc(function(b){return b=b.replace(dn,dU),function(a){return(a.textContent||a.innerText||dg(a)).indexOf(b)>-1
}
}),lang:dc(function(b){return du.test(b||"")||dV.error("unsupported lang: "+b),b=b.replace(dn,dU).toLowerCase(),function(a){var d;
do{if(d=c2?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang")){return d=d.toLowerCase(),d===b||0===d.indexOf(b+"-")
}}while((a=a.parentNode)&&1===a.nodeType);
return !1
}
}),target:function(a){var d=dl.location&&dl.location.hash;
return d&&d.slice(1)===a.id
},root:function(b){return b===c3
},focus:function(b){return b===c4.activeElement&&(!c4.hasFocus||c4.hasFocus())&&!!(b.type||b.href||~b.tabIndex)
},enabled:di(!1),disabled:di(!0),checked:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&!!d.checked||"option"===c&&!!d.selected
},selected:function(b){return b.parentNode&&b.parentNode.selectedIndex,b.selected===!0
},empty:function(b){for(b=b.firstChild;
b;
b=b.nextSibling){if(b.nodeType<6){return !1
}}return !0
},parent:function(b){return !dh.pseudos.empty(b)
},header:function(b){return dr.test(b.nodeName)
},input:function(b){return ds.test(b.nodeName)
},button:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&"button"===d.type||"button"===c
},text:function(d){var c;
return"input"===d.nodeName.toLowerCase()&&"text"===d.type&&(null==(c=d.getAttribute("type"))||"text"===c.toLowerCase())
},first:cQ(function(){return[0]
}),last:cQ(function(d,c){return[c-1]
}),eq:cQ(function(e,d,f){return[f<0?f+d:f]
}),even:cQ(function(e,d){for(var f=0;
f<d;
f+=2){e.push(f)
}return e
}),odd:cQ(function(e,d){for(var f=1;
f<d;
f+=2){e.push(f)
}return e
}),lt:cQ(function(f,e,h){for(var g=h<0?h+e:h;
--g>=0;
){f.push(g)
}return f
}),gt:cQ(function(f,e,h){for(var g=h<0?h+e:h;
++g<e;
){f.push(g)
}return f
})}},dh.pseudos.nth=dh.pseudos.eq;
for(dk in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){dh.pseudos[dk]=dW(dk)
}for(dk in {submit:!0,reset:!0}){dh.pseudos[dk]=dN(dk)
}function d2(){}d2.prototype=dh.filters=dh.pseudos,dh.setFilters=new d2,de=dV.tokenize=function(t,s){var r,q,p,o,n,m,l,d=cS[t+" "];
if(d){return s?0:d.slice(0)
}n=t,m=[],l=dh.preFilter;
while(n){r&&!(q=dy.exec(n))||(q&&(n=n.slice(q[0].length)||n),m.push(p=[])),r=!1,(q=dx.exec(n))&&(r=q.shift(),p.push({value:r,type:q[0].replace(dz," ")}),n=n.slice(r.length));
for(o in dh.filter){!(q=dt[o].exec(n))||l[o]&&!(q=l[o](q))||(r=q.shift(),p.push({value:r,type:o,matches:q}),n=n.slice(r.length))
}if(!r){break
}}return s?n.length:n?dV.error(t):cS(t,m).slice(0)
};
function dY(f){for(var e=0,h=f.length,g="";
e<h;
e++){g+=f[e].value
}return g
}function dS(j,i,p){var o=i.dir,n=i.next,m=n||o,l=p&&"parentNode"===m,k=cU++;
return i.first?function(a,f,d){while(a=a[o]){if(1===a.nodeType||l){return j(a,f,d)
}}return !1
}:function(d,q,h){var g,f,e,a=[cV,k];
if(h){while(d=d[o]){if((1===d.nodeType||l)&&j(d,q,h)){return !0
}}}else{while(d=d[o]){if(1===d.nodeType||l){if(e=d[cX]||(d[cX]={}),f=e[d.uniqueID]||(e[d.uniqueID]={}),n&&n===d.nodeName.toLowerCase()){d=d[o]||d
}else{if((g=f[m])&&g[0]===cV&&g[1]===k){return a[2]=g[2]
}if(f[m]=a,a[2]=j(d,q,h)){return !0
}}}}}return !1
}
}function dm(b){return b.length>1?function(a,h,g){var f=b.length;
while(f--){if(!b[f](a,h,g)){return !1
}}return !0
}:b[0]
}function cR(g,f,j){for(var i=0,h=f.length;
i<h;
i++){dV(g,f[i],j)
}return j
}function cN(t,s,r,q,p){for(var o,n=[],m=0,l=t.length,k=null!=s;
m<l;
m++){(o=t[m])&&(r&&!r(o,q,p)||(n.push(o),k&&s.push(m)))
}return n
}function ab(h,g,l,k,j,i){return k&&!k[cX]&&(k=ab(k)),j&&!j[cX]&&(j=ab(j,i)),dc(function(z,y,x,w){var v,u,t,s=[],e=[],d=y.length,c=z||cR(g||"*",x.nodeType?[x]:x,[]),b=!h||!z&&g?c:cN(c,s,h,x,w),a=l?j||(z?h:d||k)?[]:y:b;
if(l&&l(b,a,x,w),k){v=cN(a,e),k(v,[],x,w),u=v.length;
while(u--){(t=v[u])&&(a[e[u]]=!(b[e[u]]=t))
}}if(z){if(j||h){if(j){v=[],u=a.length;
while(u--){(t=a[u])&&v.push(b[u]=t)
}j(null,a=[],v,w)
}u=a.length;
while(u--){(t=a[u])&&(v=j?dI(z,t):s[u])>-1&&(z[v]=!(y[v]=t))
}}}else{a=cN(a===y?a.splice(d,a.length):a),j?j(null,y,a,w):dK.apply(y,a)
}})
}function dZ(v){for(var u,t,s,r=v.length,q=dh.relative[v[0].type],p=q||dh.relative[" "],o=q?1:0,n=dS(function(b){return b===u
},p,!0),j=dS(function(b){return dI(u,b)>-1
},p,!0),d=[function(b,h,g){var f=!q&&(g||h!==c9)||((u=h).nodeType?n(b,h,g):j(b,h,g));
return u=null,f
}];
o<r;
o++){if(t=dh.relative[v[o].type]){d=[dS(dm(d),t)]
}else{if(t=dh.filter[v[o].type].apply(null,v[o].matches),t[cX]){for(s=++o;
s<r;
s++){if(dh.relative[v[s].type]){break
}}return ab(o>1&&dm(d),o>1&&dY(v.slice(0,o-1).concat({value:" "===v[o-2].type?"*":""})).replace(dz,"$1"),t,o<s&&dZ(v.slice(o,s)),s<r&&dZ(v=v.slice(s)),s<r&&dY(v))
}d.push(t)
}}return dm(d)
}function dT(g,d){var j=d.length>0,i=g.length>0,h=function(A,w,p,n,m){var e,c,b,a=0,H="0",G=A&&[],F=[],E=c9,D=A||i&&dh.find.TAG("*",m),C=cV+=null==E?1:Math.random()||0.1,B=D.length;
for(m&&(c9=w===c4||w||m);
H!==B&&null!=(e=D[H]);
H++){if(i&&e){c=0,w||e.ownerDocument===c4||(c6(e),p=!c2);
while(b=g[c++]){if(b(e,w||c4,p)){n.push(e);
break
}}m&&(cV=C)
}j&&((e=!b&&e)&&a--,A&&G.push(e))
}if(a+=H,j&&H!==a){c=0;
while(b=d[c++]){b(G,F,w,p)
}if(A){if(a>0){while(H--){G[H]||F[H]||(F[H]=dM.call(n))
}}F=cN(F)
}dK.apply(n,F),m&&!A&&F.length>0&&a+d.length>1&&dV.uniqueSort(n)
}return m&&(cV=C,c9=E),G
};
return j?dc(h):h
}return dd=dV.compile=function(h,g){var l,k=[],j=[],i=dR[h+" "];
if(!i){g||(g=de(h)),l=g.length;
while(l--){i=dZ(g[l]),i[cX]?k.push(i):j.push(i)
}i=dR(h,dT(j,k)),i.selector=h
}return i
},db=dV.select=function(v,u,t,s){var r,q,p,o,h,g="function"==typeof v&&v,d=!s&&de(v=g.selector||v);
if(t=t||[],1===d.length){if(q=d[0]=d[0].slice(0),q.length>2&&"ID"===(p=q[0]).type&&9===u.nodeType&&c2&&dh.relative[q[1].type]){if(u=(dh.find.ID(p.matches[0].replace(dn,dU),u)||[])[0],!u){return t
}g&&(u=u.parentNode),v=v.slice(q.shift().value.length)
}r=dt.needsContext.test(v)?0:q.length;
while(r--){if(p=q[r],dh.relative[o=p.type]){break
}if((h=dh.find[o])&&(s=h(p.matches[0].replace(dn,dU),dX.test(q[0].type)&&cM(u.parentNode)||u))){if(q.splice(r,1),v=s.length&&dY(q),!v){return dK.apply(t,s),t
}break
}}}return(g||dd(v,d))(s,u,!c2,t,!u||dX.test(v)&&cM(u.parentNode)||u),t
},dj.sortStable=cX.split("").sort(dQ).join("")===cX,dj.detectDuplicates=!!c7,c6(),dj.sortDetached=cP(function(b){return 1&b.compareDocumentPosition(c4.createElement("fieldset"))
}),cP(function(b){return b.innerHTML="<a href='#'></a>","#"===b.firstChild.getAttribute("href")
})||cb("type|href|height|width",function(e,d,f){if(!f){return e.getAttribute(d,"type"===d.toLowerCase()?1:2)
}}),dj.attributes&&cP(function(b){return b.innerHTML="<input/>",b.firstChild.setAttribute("value",""),""===b.firstChild.getAttribute("value")
})||cb("value",function(e,d,f){if(!f&&"input"===e.nodeName.toLowerCase()){return e.defaultValue
}}),cP(function(b){return null==b.getAttribute("disabled")
})||cb(dG,function(f,e,h){var g;
if(!h){return f[e]===!0?e.toLowerCase():(g=f.getAttributeNode(e))&&g.specified?g.value:null
}}),dV
}(bP);
bv.find=bp,bv.expr=bp.selectors,bv.expr[":"]=bv.expr.pseudos,bv.uniqueSort=bv.unique=bp.uniqueSort,bv.text=bp.getText,bv.isXMLDoc=bp.isXML,bv.contains=bp.contains,bv.escapeSelector=bp.escape;
var bo=function(g,f,j){var i=[],h=void 0!==j;
while((g=g[f])&&9!==g.nodeType){if(1===g.nodeType){if(h&&bv(g).is(j)){break
}i.push(g)
}}return i
},bm=function(e,d){for(var f=[];
e;
e=e.nextSibling){1===e.nodeType&&e!==d&&f.push(e)
}return f
},cp=bv.expr.match.needsContext,co=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,cn=/^.[^:#\[\.,]*$/;
function cm(e,d,f){return bv.isFunction(d)?bv.grep(e,function(b,c){return !!d.call(b,c,b)!==f
}):d.nodeType?bv.grep(e,function(b){return b===d!==f
}):"string"!=typeof d?bv.grep(e,function(b){return bF.call(d,b)>-1!==f
}):cn.test(d)?bv.filter(d,e,f):(d=bv.filter(d,e),bv.grep(e,function(b){return bF.call(d,b)>-1!==f&&1===b.nodeType
}))
}bv.filter=function(f,e,h){var g=e[0];
return h&&(f=":not("+f+")"),1===e.length&&1===g.nodeType?bv.find.matchesSelector(g,f)?[g]:[]:bv.find.matches(f,bv.grep(e,function(b){return 1===b.nodeType
}))
},bv.fn.extend({find:function(g){var f,j,i=this.length,h=this;
if("string"!=typeof g){return this.pushStack(bv(g).filter(function(){for(f=0;
f<i;
f++){if(bv.contains(h[f],this)){return !0
}}}))
}for(j=this.pushStack([]),f=0;
f<i;
f++){bv.find(g,h[f],j)
}return i>1?bv.uniqueSort(j):j
},filter:function(b){return this.pushStack(cm(this,b||[],!1))
},not:function(b){return this.pushStack(cm(this,b||[],!0))
},is:function(b){return !!cm(this,"string"==typeof b&&cp.test(b)?bv(b):b||[],!1).length
}});
var cl,ck=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ci=bv.fn.init=function(g,d,j){var i,h;
if(!g){return this
}if(j=j||cl,"string"==typeof g){if(i="<"===g[0]&&">"===g[g.length-1]&&g.length>=3?[null,g,null]:ck.exec(g),!i||!i[1]&&d){return !d||d.jquery?(d||j).find(g):this.constructor(d).find(g)
}if(i[1]){if(d=d instanceof bv?d[0]:d,bv.merge(this,bv.parseHTML(i[1],d&&d.nodeType?d.ownerDocument||d:bM,!0)),co.test(i[1])&&bv.isPlainObject(d)){for(i in d){bv.isFunction(this[i])?this[i](d[i]):this.attr(i,d[i])
}}return this
}return h=bM.getElementById(i[2]),h&&(this[0]=h,this.length=1),this
}return g.nodeType?(this[0]=g,this.length=1,this):bv.isFunction(g)?void 0!==j.ready?j.ready(g):g(bv):bv.makeArray(g,this)
};
ci.prototype=bv.fn,cl=bv(bM);
var cg=/^(?:parents|prev(?:Until|All))/,cf={children:!0,contents:!0,next:!0,prev:!0};
bv.fn.extend({has:function(e){var d=bv(e,this),f=d.length;
return this.filter(function(){for(var b=0;
b<f;
b++){if(bv.contains(this,d[b])){return !0
}}})
},closest:function(i,h){var n,m=0,l=this.length,k=[],j="string"!=typeof i&&bv(i);
if(!cp.test(i)){for(;
m<l;
m++){for(n=this[m];
n&&n!==h;
n=n.parentNode){if(n.nodeType<11&&(j?j.index(n)>-1:1===n.nodeType&&bv.find.matchesSelector(n,i))){k.push(n);
break
}}}}return this.pushStack(k.length>1?bv.uniqueSort(k):k)
},index:function(b){return b?"string"==typeof b?bF.call(bv(b),this[0]):bF.call(this,b.jquery?b[0]:b):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(d,c){return this.pushStack(bv.uniqueSort(bv.merge(this.get(),bv(d,c))))
},addBack:function(b){return this.add(null==b?this.prevObject:this.prevObject.filter(b))
}});
function ce(d,c){while((d=d[c])&&1!==d.nodeType){}return d
}bv.each({parent:function(d){var c=d.parentNode;
return c&&11!==c.nodeType?c:null
},parents:function(b){return bo(b,"parentNode")
},parentsUntil:function(e,d,f){return bo(e,"parentNode",f)
},next:function(b){return ce(b,"nextSibling")
},prev:function(b){return ce(b,"previousSibling")
},nextAll:function(b){return bo(b,"nextSibling")
},prevAll:function(b){return bo(b,"previousSibling")
},nextUntil:function(e,d,f){return bo(e,"nextSibling",f)
},prevUntil:function(e,d,f){return bo(e,"previousSibling",f)
},siblings:function(b){return bm((b.parentNode||{}).firstChild,b)
},children:function(b){return bm(b.firstChild)
},contents:function(b){return b.contentDocument||bv.merge([],b.childNodes)
}},function(d,c){bv.fn[d]=function(f,b){var a=bv.map(this,c,f);
return"Until"!==d.slice(-5)&&(b=f),b&&"string"==typeof b&&(a=bv.filter(b,a)),this.length>1&&(cf[d]||bv.uniqueSort(a),cg.test(d)&&a.reverse()),this.pushStack(a)
}
});
var cd=/[^\x20\t\r\n\f]+/g;
function cc(d){var c={};
return bv.each(d.match(cd)||[],function(b,e){c[e]=!0
}),c
}bv.Callbacks=function(t){t="string"==typeof t?cc(t):bv.extend({},t);
var s,r,q,p,o=[],n=[],m=-1,l=function(){for(p=t.once,q=s=!0;
n.length;
m=-1){r=n.shift();
while(++m<o.length){o[m].apply(r[0],r[1])===!1&&t.stopOnFalse&&(m=o.length,r=!1)
}}t.memory||(r=!1),s=!1,p&&(o=r?[]:"")
},k={add:function(){return o&&(r&&!s&&(m=o.length-1,n.push(r)),function a(c){bv.each(c,function(d,e){bv.isFunction(e)?t.unique&&k.has(e)||o.push(e):e&&e.length&&"string"!==bv.type(e)&&a(e)
})
}(arguments),r&&!s&&l()),this
},remove:function(){return bv.each(arguments,function(e,d){var f;
while((f=bv.inArray(d,o,f))>-1){o.splice(f,1),f<=m&&m--
}}),this
},has:function(b){return b?bv.inArray(b,o)>-1:o.length>0
},empty:function(){return o&&(o=[]),this
},disable:function(){return p=n=[],o=r="",this
},disabled:function(){return !o
},lock:function(){return p=n=[],r||s||(o=r=""),this
},locked:function(){return !!p
},fireWith:function(b,d){return p||(d=d||[],d=[b,d.slice?d.slice():d],n.push(d),s||l()),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!q
}};
return k
};
function b9(b){return b
}function b8(b){throw b
}function b7(f,e,h){var g;
try{f&&bv.isFunction(g=f.promise)?g.call(f).done(e).fail(h):f&&bv.isFunction(g=f.then)?g.call(f,e,h):e.call(void 0,f)
}catch(f){h.call(void 0,f)
}}bv.extend({Deferred:function(a){var j=[["notify","progress",bv.Callbacks("memory"),bv.Callbacks("memory"),2],["resolve","done",bv.Callbacks("once memory"),bv.Callbacks("once memory"),0,"resolved"],["reject","fail",bv.Callbacks("once memory"),bv.Callbacks("once memory"),1,"rejected"]],i="pending",h={state:function(){return i
},always:function(){return g.done(arguments).fail(arguments),this
},"catch":function(b){return h.then(null,b)
},pipe:function(){var b=arguments;
return bv.Deferred(function(c){bv.each(j,function(l,k){var f=bv.isFunction(b[k[4]])&&b[k[4]];
g[k[1]](function(){var d=f&&f.apply(this,arguments);
d&&bv.isFunction(d.promise)?d.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[k[0]+"With"](this,f?[d]:arguments)
})
}),b=null
}).promise()
},then:function(c,n,m){var l=0;
function k(f,q,p,o){return function(){var r=this,e=arguments,d=function(){var s,t;
if(!(f<l)){if(s=p.apply(r,e),s===q.promise()){throw new TypeError("Thenable self-resolution")
}t=s&&("object"==typeof s||"function"==typeof s)&&s.then,bv.isFunction(t)?o?t.call(s,k(l,q,b9,o),k(l,q,b8,o)):(l++,t.call(s,k(l,q,b9,o),k(l,q,b8,o),k(l,q,b9,q.notifyWith))):(p!==b9&&(r=void 0,e=[s]),(o||q.resolveWith)(r,e))
}},b=o?d:function(){try{d()
}catch(s){bv.Deferred.exceptionHook&&bv.Deferred.exceptionHook(s,b.stackTrace),f+1>=l&&(p!==b8&&(r=void 0,e=[s]),q.rejectWith(r,e))
}};
f?b():(bv.Deferred.getStackHook&&(b.stackTrace=bv.Deferred.getStackHook()),bP.setTimeout(b))
}
}return bv.Deferred(function(b){j[0][3].add(k(0,b,bv.isFunction(m)?m:b9,b.notifyWith)),j[1][3].add(k(0,b,bv.isFunction(c)?c:b9)),j[2][3].add(k(0,b,bv.isFunction(n)?n:b8))
}).promise()
},promise:function(b){return null!=b?bv.extend(b,h):h
}},g={};
return bv.each(j,function(d,c){var f=c[2],e=c[5];
h[c[1]]=f.add,e&&f.add(function(){i=e
},j[3-d][2].disable,j[0][2].lock),f.add(c[3].fire),g[c[0]]=function(){return g[c[0]+"With"](this===g?void 0:this,arguments),this
},g[c[0]+"With"]=f.fireWith
}),h.promise(g),a&&a.call(g,g),g
},when:function(i){var f=arguments.length,n=f,m=Array(n),l=bJ.call(arguments),k=bv.Deferred(),j=function(b){return function(a){m[b]=this,l[b]=arguments.length>1?bJ.call(arguments):a,--f||k.resolveWith(m,l)
}
};
if(f<=1&&(b7(i,k.done(j(n)).resolve,k.reject),"pending"===k.state()||bv.isFunction(l[n]&&l[n].then))){return k.then()
}while(n--){b7(l[n],j(n),k.reject)
}return k.promise()
}});
var b6=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
bv.Deferred.exceptionHook=function(a,d){bP.console&&bP.console.warn&&a&&b6.test(a.name)&&bP.console.warn("jQuery.Deferred exception: "+a.message,a.stack,d)
},bv.readyException=function(a){bP.setTimeout(function(){throw a
})
};
var b5=bv.Deferred();
bv.fn.ready=function(b){return b5.then(b)["catch"](function(c){bv.readyException(c)
}),this
},bv.extend({isReady:!1,readyWait:1,holdReady:function(b){b?bv.readyWait++:bv.ready(!0)
},ready:function(b){(b===!0?--bv.readyWait:bv.isReady)||(bv.isReady=!0,b!==!0&&--bv.readyWait>0||b5.resolveWith(bM,[bv]))
}}),bv.ready.then=b5.then;
function b3(){bM.removeEventListener("DOMContentLoaded",b3),bP.removeEventListener("load",b3),bv.ready()
}"complete"===bM.readyState||"loading"!==bM.readyState&&!bM.documentElement.doScroll?bP.setTimeout(bv.ready):(bM.addEventListener("DOMContentLoaded",b3),bP.addEventListener("load",b3));
var b2=function(t,s,r,q,p,o,n){var m=0,l=t.length,k=null==r;
if("object"===bv.type(r)){p=!0;
for(m in r){b2(t,s,m,r[m],!0,o,n)
}}else{if(void 0!==q&&(p=!0,bv.isFunction(q)||(n=!0),k&&(n?(s.call(t,q),s=null):(k=s,s=function(e,d,f){return k.call(bv(e),f)
})),s)){for(;
m<l;
m++){s(t[m],r,n?q:q.call(t[m],m,s(t[m],r)))
}}}return p?t:k?s.call(t):l?s(t[0],r):o
},b1=function(b){return 1===b.nodeType||9===b.nodeType||!+b.nodeType
};
function b0(){this.expando=bv.expando+b0.uid++
}b0.uid=1,b0.prototype={cache:function(d){var c=d[this.expando];
return c||(c={},b1(d)&&(d.nodeType?d[this.expando]=c:Object.defineProperty(d,this.expando,{value:c,configurable:!0}))),c
},set:function(g,f,j){var i,h=this.cache(g);
if("string"==typeof f){h[bv.camelCase(f)]=j
}else{for(i in f){h[bv.camelCase(i)]=f[i]
}}return h
},get:function(d,c){return void 0===c?this.cache(d):d[this.expando]&&d[this.expando][bv.camelCase(c)]
},access:function(e,d,f){return void 0===d||d&&"string"==typeof d&&void 0===f?this.get(e,d):(this.set(e,d,f),void 0!==f?f:d)
},remove:function(f,e){var h,g=f[this.expando];
if(void 0!==g){if(void 0!==e){bv.isArray(e)?e=e.map(bv.camelCase):(e=bv.camelCase(e),e=e in g?[e]:e.match(cd)||[]),h=e.length;
while(h--){delete g[e[h]]
}}(void 0===e||bv.isEmptyObject(g))&&(f.nodeType?f[this.expando]=void 0:delete f[this.expando])
}},hasData:function(d){var c=d[this.expando];
return void 0!==c&&!bv.isEmptyObject(c)
}};
var bZ=new b0,bY=new b0,bX=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bW=/[A-Z]/g;
function bV(b){return"true"===b||"false"!==b&&("null"===b?null:b===+b+""?+b:bX.test(b)?JSON.parse(b):b)
}function cB(g,f,j){var i;
if(void 0===j&&1===g.nodeType){if(i="data-"+f.replace(bW,"-$&").toLowerCase(),j=g.getAttribute(i),"string"==typeof j){try{j=bV(j)
}catch(h){}bY.set(g,f,j)
}else{j=void 0
}}return j
}bv.extend({hasData:function(b){return bY.hasData(b)||bZ.hasData(b)
},data:function(e,d,f){return bY.access(e,d,f)
},removeData:function(d,c){bY.remove(d,c)
},_data:function(e,d,f){return bZ.access(e,d,f)
},_removeData:function(d,c){bZ.remove(d,c)
}}),bv.fn.extend({data:function(i,h){var n,m,l,k=this[0],j=k&&k.attributes;
if(void 0===i){if(this.length&&(l=bY.get(k),1===k.nodeType&&!bZ.get(k,"hasDataAttrs"))){n=j.length;
while(n--){j[n]&&(m=j[n].name,0===m.indexOf("data-")&&(m=bv.camelCase(m.slice(5)),cB(k,m,l[m])))
}bZ.set(k,"hasDataAttrs",!0)
}return l
}return"object"==typeof i?this.each(function(){bY.set(this,i)
}):b2(this,function(a){var d;
if(k&&void 0===a){if(d=bY.get(k,i),void 0!==d){return d
}if(d=cB(k,i),void 0!==d){return d
}}else{this.each(function(){bY.set(this,i,a)
})
}},null,h,arguments.length>1,null,!0)
},removeData:function(b){return this.each(function(){bY.remove(this,b)
})
}}),bv.extend({queue:function(f,e,h){var g;
if(f){return e=(e||"fx")+"queue",g=bZ.get(f,e),h&&(!g||bv.isArray(h)?g=bZ.access(f,e,bv.makeArray(h)):g.push(h)),g||[]
}},dequeue:function(i,h){h=h||"fx";
var n=bv.queue(i,h),m=n.length,l=n.shift(),k=bv._queueHooks(i,h),j=function(){bv.dequeue(i,h)
};
"inprogress"===l&&(l=n.shift(),m--),l&&("fx"===h&&n.unshift("inprogress"),delete k.stop,l.call(i,j,k)),!m&&k&&k.empty.fire()
},_queueHooks:function(e,d){var f=d+"queueHooks";
return bZ.get(e,f)||bZ.access(e,f,{empty:bv.Callbacks("once memory").add(function(){bZ.remove(e,[d+"queue",f])
})})
}}),bv.fn.extend({queue:function(e,d){var f=2;
return"string"!=typeof e&&(d=e,e="fx",f--),arguments.length<f?bv.queue(this[0],e):void 0===d?this:this.each(function(){var a=bv.queue(this,e,d);
bv._queueHooks(this,e),"fx"===e&&"inprogress"!==a[0]&&bv.dequeue(this,e)
})
},dequeue:function(b){return this.each(function(){bv.dequeue(this,b)
})
},clearQueue:function(b){return this.queue(b||"fx",[])
},promise:function(j,i){var p,o=1,n=bv.Deferred(),m=this,l=this.length,k=function(){--o||n.resolveWith(m,[m])
};
"string"!=typeof j&&(i=j,j=void 0),j=j||"fx";
while(l--){p=bZ.get(m[l],j+"queueHooks"),p&&p.empty&&(o++,p.empty.add(k))
}return k(),n.promise(i)
}});
var bQ=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,cA=new RegExp("^(?:([+-])=|)("+bQ+")([a-z%]*)$","i"),cj=["Top","Right","Bottom","Left"],bK=function(d,c){return d=c||d,"none"===d.style.display||""===d.style.display&&bv.contains(d.ownerDocument,d)&&"none"===bv.css(d,"display")
},bi=function(i,h,n,m){var l,k,j={};
for(k in h){j[k]=i.style[k],i.style[k]=h[k]
}l=n.apply(i,m||[]);
for(k in h){i.style[k]=j[k]
}return l
};
function a9(v,u,t,s){var r,q=1,p=20,o=s?function(){return s.cur()
}:function(){return bv.css(v,u,"")
},n=o(),m=t&&t[3]||(bv.cssNumber[u]?"":"px"),l=(bv.cssNumber[u]||"px"!==m&&+n)&&cA.exec(bv.css(v,u));
if(l&&l[3]!==m){m=m||l[3],t=t||[],l=+n||1;
do{q=q||".5",l/=q,bv.style(v,u,l+m)
}while(q!==(q=o()/n)&&1!==q&&--p)
}return t&&(l=+l||+n||0,r=t[1]?l+(t[1]+1)*t[2]:+t[2],s&&(s.unit=m,s.start=l,s.end=r)),r
}var a2={};
function aT(g){var f,j=g.ownerDocument,i=g.nodeName,h=a2[i];
return h?h:(f=j.body.appendChild(j.createElement(i)),h=bv.css(f,"display"),f.parentNode.removeChild(f),"none"===h&&(h="block"),a2[i]=h,h)
}function aL(i,h){for(var n,m,l=[],k=0,j=i.length;
k<j;
k++){m=i[k],m.style&&(n=m.style.display,h?("none"===n&&(l[k]=bZ.get(m,"display")||null,l[k]||(m.style.display="")),""===m.style.display&&bK(m)&&(l[k]=aT(m))):"none"!==n&&(l[k]="none",bZ.set(m,"display",n)))
}for(k=0;
k<j;
k++){null!=l[k]&&(i[k].style.display=l[k])
}return i
}bv.fn.extend({show:function(){return aL(this,!0)
},hide:function(){return aL(this)
},toggle:function(b){return"boolean"==typeof b?b?this.show():this.hide():this.each(function(){bK(this)?bv(this).show():bv(this).hide()
})
}});
var aD=/^(?:checkbox|radio)$/i,av=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,am=/^$|\/(?:java|ecma)script/i,ad={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
ad.optgroup=ad.option,ad.tbody=ad.tfoot=ad.colgroup=ad.caption=ad.thead,ad.th=ad.td;
function cF(e,d){var f;
return f="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(d||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(d||"*"):[],void 0===d||d&&bv.nodeName(e,d)?bv.merge([e],f):f
}function cu(f,e){for(var h=0,g=f.length;
h<g;
h++){bZ.set(f[h],"globalEval",!e||bZ.get(e[h],"globalEval"))
}}var bU=/<|&#?\w+;/;
function bn(D,C,B,A,z){for(var y,x,w,v,u,t,s=C.createDocumentFragment(),r=[],q=0,p=D.length;
q<p;
q++){if(y=D[q],y||0===y){if("object"===bv.type(y)){bv.merge(r,y.nodeType?[y]:y)
}else{if(bU.test(y)){x=x||s.appendChild(C.createElement("div")),w=(av.exec(y)||["",""])[1].toLowerCase(),v=ad[w]||ad._default,x.innerHTML=v[1]+bv.htmlPrefilter(y)+v[2],t=v[0];
while(t--){x=x.lastChild
}bv.merge(r,x.childNodes),x=s.firstChild,x.textContent=""
}else{r.push(C.createTextNode(y))
}}}}s.textContent="",q=0;
while(y=r[q++]){if(A&&bv.inArray(y,A)>-1){z&&z.push(y)
}else{if(u=bv.contains(y.ownerDocument,y),x=cF(s.appendChild(y),"script"),u&&cu(x),B){t=0;
while(y=x[t++]){am.test(y.type||"")&&B.push(y)
}}}}return s
}!function(){var e=bM.createDocumentFragment(),d=e.appendChild(bM.createElement("div")),f=bM.createElement("input");
f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),d.appendChild(f),bz.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,d.innerHTML="<textarea>x</textarea>",bz.noCloneChecked=!!d.cloneNode(!0).lastChild.defaultValue
}();
var bf=bM.documentElement,a6=/^key/,aX=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,aP=/^([^.]*)(?:\.(.+)|)/;
function aH(){return !0
}function az(){return !1
}function aq(){try{return bM.activeElement
}catch(b){}}function ah(j,i,p,o,n,m){var l,k;
if("object"==typeof i){"string"!=typeof p&&(o=o||p,p=void 0);
for(k in i){ah(j,k,p,o,i[k],m)
}return j
}if(null==o&&null==n?(n=p,o=p=void 0):null==n&&("string"==typeof p?(n=o,o=void 0):(n=o,o=p,p=void 0)),n===!1){n=az
}else{if(!n){return j
}}return 1===m&&(l=n,n=function(b){return bv().off(b),l.apply(this,arguments)
},n.guid=l.guid||(l.guid=bv.guid++)),j.each(function(){bv.event.add(this,i,n,o,p)
})
}bv.event={global:{},add:function(H,G,F,E,D){var C,B,A,z,y,x,w,v,u,t,s,r=bZ.get(H);
if(r){F.handler&&(C=F,F=C.handler,D=C.selector),D&&bv.find.matchesSelector(bf,D),F.guid||(F.guid=bv.guid++),(z=r.events)||(z=r.events={}),(B=r.handle)||(B=r.handle=function(a){return"undefined"!=typeof bv&&bv.event.triggered!==a.type?bv.event.dispatch.apply(H,arguments):void 0
}),G=(G||"").match(cd)||[""],y=G.length;
while(y--){A=aP.exec(G[y])||[],u=s=A[1],t=(A[2]||"").split(".").sort(),u&&(w=bv.event.special[u]||{},u=(D?w.delegateType:w.bindType)||u,w=bv.event.special[u]||{},x=bv.extend({type:u,origType:s,data:E,handler:F,guid:F.guid,selector:D,needsContext:D&&bv.expr.match.needsContext.test(D),namespace:t.join(".")},C),(v=z[u])||(v=z[u]=[],v.delegateCount=0,w.setup&&w.setup.call(H,E,t,B)!==!1||H.addEventListener&&H.addEventListener(u,B)),w.add&&(w.add.call(H,x),x.handler.guid||(x.handler.guid=F.guid)),D?v.splice(v.delegateCount++,0,x):v.push(x),bv.event.global[u]=!0)
}}},remove:function(H,G,F,E,D){var C,B,A,z,y,x,w,v,u,t,s,r=bZ.hasData(H)&&bZ.get(H);
if(r&&(z=r.events)){G=(G||"").match(cd)||[""],y=G.length;
while(y--){if(A=aP.exec(G[y])||[],u=s=A[1],t=(A[2]||"").split(".").sort(),u){w=bv.event.special[u]||{},u=(E?w.delegateType:w.bindType)||u,v=z[u]||[],A=A[2]&&new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"),B=C=v.length;
while(C--){x=v[C],!D&&s!==x.origType||F&&F.guid!==x.guid||A&&!A.test(x.namespace)||E&&E!==x.selector&&("**"!==E||!x.selector)||(v.splice(C,1),x.selector&&v.delegateCount--,w.remove&&w.remove.call(H,x))
}B&&!v.length&&(w.teardown&&w.teardown.call(H,t,r.handle)!==!1||bv.removeEvent(H,u,r.handle),delete z[u])
}else{for(u in z){bv.event.remove(H,u+G[y],F,E,!0)
}}}bv.isEmptyObject(z)&&bZ.remove(H,"handle events")
}},dispatch:function(v){var u=bv.event.fix(v),t,s,r,q,p,o,n=new Array(arguments.length),m=(bZ.get(this,"events")||{})[u.type]||[],l=bv.event.special[u.type]||{};
for(n[0]=u,t=1;
t<arguments.length;
t++){n[t]=arguments[t]
}if(u.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,u)!==!1){o=bv.event.handlers.call(this,u,m),t=0;
while((q=o[t++])&&!u.isPropagationStopped()){u.currentTarget=q.elem,s=0;
while((p=q.handlers[s++])&&!u.isImmediatePropagationStopped()){u.rnamespace&&!u.rnamespace.test(p.namespace)||(u.handleObj=p,u.data=p.data,r=((bv.event.special[p.origType]||{}).handle||p.handler).apply(q.elem,n),void 0!==r&&(u.result=r)===!1&&(u.preventDefault(),u.stopPropagation()))
}}return l.postDispatch&&l.postDispatch.call(this,u),u.result
}},handlers:function(t,s){var r,q,p,o,n,m=[],l=s.delegateCount,k=t.target;
if(l&&k.nodeType&&!("click"===t.type&&t.button>=1)){for(;
k!==this;
k=k.parentNode||this){if(1===k.nodeType&&("click"!==t.type||k.disabled!==!0)){for(o=[],n={},r=0;
r<l;
r++){q=s[r],p=q.selector+" ",void 0===n[p]&&(n[p]=q.needsContext?bv(p,this).index(k)>-1:bv.find(p,this,null,[k]).length),n[p]&&o.push(q)
}o.length&&m.push({elem:k,handlers:o})
}}}return k=this,l<s.length&&m.push({elem:k,handlers:s.slice(l)}),m
},addProp:function(d,c){Object.defineProperty(bv.Event.prototype,d,{enumerable:!0,configurable:!0,get:bv.isFunction(c)?function(){if(this.originalEvent){return c(this.originalEvent)
}}:function(){if(this.originalEvent){return this.originalEvent[d]
}},set:function(a){Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:a})
}})
},fix:function(b){return b[bv.expando]?b:new bv.Event(b)
},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==aq()&&this.focus){return this.focus(),!1
}},delegateType:"focusin"},blur:{trigger:function(){if(this===aq()&&this.blur){return this.blur(),!1
}},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&bv.nodeName(this,"input")){return this.click(),!1
}},_default:function(b){return bv.nodeName(b.target,"a")
}},beforeunload:{postDispatch:function(b){void 0!==b.result&&b.originalEvent&&(b.originalEvent.returnValue=b.result)
}}}},bv.removeEvent=function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f)
},bv.Event=function(d,c){return this instanceof bv.Event?(d&&d.type?(this.originalEvent=d,this.type=d.type,this.isDefaultPrevented=d.defaultPrevented||void 0===d.defaultPrevented&&d.returnValue===!1?aH:az,this.target=d.target&&3===d.target.nodeType?d.target.parentNode:d.target,this.currentTarget=d.currentTarget,this.relatedTarget=d.relatedTarget):this.type=d,c&&bv.extend(this,c),this.timeStamp=d&&d.timeStamp||bv.now(),void (this[bv.expando]=!0)):new bv.Event(d,c)
},bv.Event.prototype={constructor:bv.Event,isDefaultPrevented:az,isPropagationStopped:az,isImmediatePropagationStopped:az,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;
this.isDefaultPrevented=aH,b&&!this.isSimulated&&b.preventDefault()
},stopPropagation:function(){var b=this.originalEvent;
this.isPropagationStopped=aH,b&&!this.isSimulated&&b.stopPropagation()
},stopImmediatePropagation:function(){var b=this.originalEvent;
this.isImmediatePropagationStopped=aH,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()
}},bv.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(d){var c=d.button;
return null==d.which&&a6.test(d.type)?null!=d.charCode?d.charCode:d.keyCode:!d.which&&void 0!==c&&aX.test(d.type)?1&c?1:2&c?3:4&c?2:0:d.which
}},bv.event.addProp),bv.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(d,c){bv.event.special[d]={delegateType:c,bindType:c,handle:function(b){var j,i=this,h=b.relatedTarget,g=b.handleObj;
return h&&(h===i||bv.contains(i,h))||(b.type=g.origType,j=g.handler.apply(this,arguments),b.type=c),j
}}
}),bv.fn.extend({on:function(f,e,h,g){return ah(this,f,e,h,g)
},one:function(f,e,h,g){return ah(this,f,e,h,g,1)
},off:function(g,f,j){var i,h;
if(g&&g.preventDefault&&g.handleObj){return i=g.handleObj,bv(g.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof g){for(h in g){this.off(h,f,g[h])
}return this
}return f!==!1&&"function"!=typeof f||(j=f,f=void 0),j===!1&&(j=az),this.each(function(){bv.event.remove(this,g,j,f)
})
}});
var cJ=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,cy=/<script|<style|<link/i,a0=/checked\s*(?:[^=]|=\s*.checked.)/i,aR=/^true\/(.*)/,aJ=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function aB(d,c){return bv.nodeName(d,"table")&&bv.nodeName(11!==c.nodeType?c:c.firstChild,"tr")?d.getElementsByTagName("tbody")[0]||d:d
}function at(b){return b.type=(null!==b.getAttribute("type"))+"/"+b.type,b
}function ak(d){var c=aR.exec(d.type);
return c?d.type=c[1]:d.removeAttribute("type"),d
}function cL(t,s){var r,q,p,o,n,m,l,k;
if(1===s.nodeType){if(bZ.hasData(t)&&(o=bZ.access(t),n=bZ.set(s,o),k=o.events)){delete n.handle,n.events={};
for(p in k){for(r=0,q=k[p].length;
r<q;
r++){bv.event.add(s,p,k[p][r])
}}}bY.hasData(t)&&(m=bY.access(t),l=bv.extend({},m),bY.set(s,l))
}}function cD(e,d){var f=d.nodeName.toLowerCase();
"input"===f&&aD.test(e.type)?d.checked=e.checked:"input"!==f&&"textarea"!==f||(d.defaultValue=e.defaultValue)
}function cs(C,B,A,z){B=bH.apply([],B);
var y,x,w,v,u,t,r=0,p=C.length,o=p-1,g=B[0],D=bv.isFunction(g);
if(D||p>1&&"string"==typeof g&&!bz.checkClone&&a0.test(g)){return C.each(function(b){var a=C.eq(b);
D&&(B[0]=g.call(this,b,a.html())),cs(a,B,A,z)
})
}if(p&&(y=bn(B,C[0].ownerDocument,!1,C,z),x=y.firstChild,1===y.childNodes.length&&(y=x),x||z)){for(w=bv.map(cF(y,"script"),at),v=w.length;
r<p;
r++){u=y,r!==o&&(u=bv.clone(u,!0,!0),v&&bv.merge(w,cF(u,"script"))),A.call(C[r],u,r)
}if(v){for(t=w[w.length-1].ownerDocument,bv.map(w,ak),r=0;
r<v;
r++){u=w[r],am.test(u.type||"")&&!bZ.access(u,"globalEval")&&bv.contains(t,u)&&(u.src?bv._evalUrl&&bv._evalUrl(u.src):by(u.textContent.replace(aJ,""),t))
}}}return C
}function bS(h,g,l){for(var k,j=g?bv.filter(g,h):h,i=0;
null!=(k=j[i]);
i++){l||1!==k.nodeType||bv.cleanData(cF(k)),k.parentNode&&(l&&bv.contains(k.ownerDocument,k)&&cu(cF(k,"script")),k.parentNode.removeChild(k))
}return h
}bv.extend({htmlPrefilter:function(b){return b.replace(cJ,"<$1></$2>")
},clone:function(r,q,p){var o,n,m,l,k=r.cloneNode(!0),j=bv.contains(r.ownerDocument,r);
if(!(bz.noCloneChecked||1!==r.nodeType&&11!==r.nodeType||bv.isXMLDoc(r))){for(l=cF(k),m=cF(r),o=0,n=m.length;
o<n;
o++){cD(m[o],l[o])
}}if(q){if(p){for(m=m||cF(r),l=l||cF(k),o=0,n=m.length;
o<n;
o++){cL(m[o],l[o])
}}else{cL(r,k)
}}return l=cF(k,"script"),l.length>0&&cu(l,!j&&cF(r,"script")),k
},cleanData:function(h){for(var g,l,k,j=bv.event.special,i=0;
void 0!==(l=h[i]);
i++){if(b1(l)){if(g=l[bZ.expando]){if(g.events){for(k in g.events){j[k]?bv.event.remove(l,k):bv.removeEvent(l,k,g.handle)
}}l[bZ.expando]=void 0
}l[bY.expando]&&(l[bY.expando]=void 0)
}}}}),bv.fn.extend({detach:function(b){return bS(this,b,!0)
},remove:function(b){return bS(this,b)
},text:function(b){return b2(this,function(c){return void 0===c?bv.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=c)
})
},null,b,arguments.length)
},append:function(){return cs(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aB(this,d);
c.appendChild(d)
}})
},prepend:function(){return cs(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aB(this,d);
c.insertBefore(d,c.firstChild)
}})
},before:function(){return cs(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this)
})
},after:function(){return cs(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this.nextSibling)
})
},empty:function(){for(var d,c=0;
null!=(d=this[c]);
c++){1===d.nodeType&&(bv.cleanData(cF(d,!1)),d.textContent="")
}return this
},clone:function(d,c){return d=null!=d&&d,c=null==c?d:c,this.map(function(){return bv.clone(this,d,c)
})
},html:function(b){return b2(this,function(g){var f=this[0]||{},j=0,i=this.length;
if(void 0===g&&1===f.nodeType){return f.innerHTML
}if("string"==typeof g&&!cy.test(g)&&!ad[(av.exec(g)||["",""])[1].toLowerCase()]){g=bv.htmlPrefilter(g);
try{for(;
j<i;
j++){f=this[j]||{},1===f.nodeType&&(bv.cleanData(cF(f,!1)),f.innerHTML=g)
}f=0
}catch(h){}}f&&this.empty().append(g)
},null,b,arguments.length)
},replaceWith:function(){var b=[];
return cs(this,arguments,function(a){var d=this.parentNode;
bv.inArray(this,b)<0&&(bv.cleanData(cF(this)),d&&d.replaceChild(a,this))
},b)
}}),bv.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){bv.fn[d]=function(b){for(var l,k=[],j=bv(b),i=j.length-1,h=0;
h<=i;
h++){l=h===i?this:this.clone(!0),bv(j[h])[c](l),bG.apply(k,l.get())
}return this.pushStack(k)
}
});
var bk=/^margin/,bd=new RegExp("^("+bQ+")(?!px)[a-z%]+$","i"),a4=function(a){var d=a.ownerDocument.defaultView;
return d&&d.opener||(d=bP),d.getComputedStyle(a)
};
!function(){function a(){if(d){d.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",d.innerHTML="",bf.appendChild(j);
var c=bP.getComputedStyle(d);
n="1%"!==c.top,k="2px"===c.marginLeft,m="4px"===c.width,d.style.marginRight="50%",l="4px"===c.marginRight,bf.removeChild(j),d=null
}}var n,m,l,k,j=bM.createElement("div"),d=bM.createElement("div");
d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",bz.clearCloneStyle="content-box"===d.style.backgroundClip,j.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.appendChild(d),bv.extend(bz,{pixelPosition:function(){return a(),n
},boxSizingReliable:function(){return a(),m
},pixelMarginRight:function(){return a(),l
},reliableMarginLeft:function(){return a(),k
}}))
}();
function aV(j,i,p){var o,n,m,l,k=j.style;
return p=p||a4(j),p&&(l=p.getPropertyValue(i)||p[i],""!==l||bv.contains(j.ownerDocument,j)||(l=bv.style(j,i)),!bz.pixelMarginRight()&&bd.test(l)&&bk.test(i)&&(o=k.width,n=k.minWidth,m=k.maxWidth,k.minWidth=k.maxWidth=k.width=l,l=p.width,k.width=o,k.minWidth=n,k.maxWidth=m)),void 0!==l?l+"":l
}function aN(d,c){return{get:function(){return d()?void delete this.get:(this.get=c).apply(this,arguments)
}}
}var aF=/^(none|table(?!-c[ea]).+)/,ax={position:"absolute",visibility:"hidden",display:"block"},ao={letterSpacing:"0",fontWeight:"400"},af=["Webkit","Moz","ms"],cH=bM.createElement("div").style;
function cw(e){if(e in cH){return e
}var d=e[0].toUpperCase()+e.slice(1),f=af.length;
while(f--){if(e=af[f]+d,e in cH){return e
}}}function b4(f,e,h){var g=cA.exec(e);
return g?Math.max(0,g[2]-(h||0))+(g[3]||"px"):e
}function bx(i,h,n,m,l){var k,j=0;
for(k=n===(m?"border":"content")?4:"width"===h?1:0;
k<4;
k+=2){"margin"===n&&(j+=bv.css(i,n+cj[k],!0,l)),m?("content"===n&&(j-=bv.css(i,"padding"+cj[k],!0,l)),"margin"!==n&&(j-=bv.css(i,"border"+cj[k]+"Width",!0,l))):(j+=bv.css(i,"padding"+cj[k],!0,l),"padding"!==n&&(j+=bv.css(i,"border"+cj[k]+"Width",!0,l)))
}return j
}function bg(i,h,n){var m,l=!0,k=a4(i),j="border-box"===bv.css(i,"boxSizing",!1,k);
if(i.getClientRects().length&&(m=i.getBoundingClientRect()[h]),m<=0||null==m){if(m=aV(i,h,k),(m<0||null==m)&&(m=i.style[h]),bd.test(m)){return m
}l=j&&(bz.boxSizingReliable()||m===i.style[h]),m=parseFloat(m)||0
}return m+bx(i,h,n||(j?"border":"content"),l,k)+"px"
}bv.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=aV(e,"opacity");
return""===f?"1":f
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(r,q,p,o){if(r&&3!==r.nodeType&&8!==r.nodeType&&r.style){var n,m,l,k=bv.camelCase(q),j=r.style;
return q=bv.cssProps[k]||(bv.cssProps[k]=cw(k)||k),l=bv.cssHooks[q]||bv.cssHooks[k],void 0===p?l&&"get" in l&&void 0!==(n=l.get(r,!1,o))?n:j[q]:(m=typeof p,"string"===m&&(n=cA.exec(p))&&n[1]&&(p=a9(r,q,n),m="number"),null!=p&&p===p&&("number"===m&&(p+=n&&n[3]||(bv.cssNumber[k]?"":"px")),bz.clearCloneStyle||""!==p||0!==q.indexOf("background")||(j[q]="inherit"),l&&"set" in l&&void 0===(p=l.set(r,p,o))||(j[q]=p)),void 0)
}},css:function(j,i,p,o){var n,m,l,k=bv.camelCase(i);
return i=bv.cssProps[k]||(bv.cssProps[k]=cw(k)||k),l=bv.cssHooks[i]||bv.cssHooks[k],l&&"get" in l&&(n=l.get(j,!0,p)),void 0===n&&(n=aV(j,i,o)),"normal"===n&&i in ao&&(n=ao[i]),""===p||p?(m=parseFloat(n),p===!0||isFinite(m)?m||0:n):n
}}),bv.each(["height","width"],function(d,c){bv.cssHooks[c]={get:function(b,f,e){if(f){return !aF.test(bv.css(b,"display"))||b.getClientRects().length&&b.getBoundingClientRect().width?bg(b,c,e):bi(b,ax,function(){return bg(b,c,e)
})
}},set:function(b,l,k){var j,i=k&&a4(b),h=k&&bx(b,c,k,"border-box"===bv.css(b,"boxSizing",!1,i),i);
return h&&(j=cA.exec(l))&&"px"!==(j[3]||"px")&&(b.style[c]=l,l=bv.css(b,c)),b4(b,l,h)
}}
}),bv.cssHooks.marginLeft=aN(bz.reliableMarginLeft,function(d,c){if(c){return(parseFloat(aV(d,"marginLeft"))||d.getBoundingClientRect().left-bi(d,{marginLeft:0},function(){return d.getBoundingClientRect().left
}))+"px"
}}),bv.each({margin:"",padding:"",border:"Width"},function(d,c){bv.cssHooks[d+c]={expand:function(h){for(var g=0,b={},a="string"==typeof h?h.split(" "):[h];
g<4;
g++){b[d+cj[g]+c]=a[g]||a[g-2]||a[0]
}return b
}},bk.test(d)||(bv.cssHooks[d+c].set=b4)
}),bv.fn.extend({css:function(d,c){return b2(this,function(i,h,n){var m,l,k={},j=0;
if(bv.isArray(h)){for(m=a4(i),l=h.length;
j<l;
j++){k[h[j]]=bv.css(i,h[j],!1,m)
}return k
}return void 0!==n?bv.style(i,h,n):bv.css(i,h)
},d,c,arguments.length>1)
}});
function a7(g,f,j,i,h){return new a7.prototype.init(g,f,j,i,h)
}bv.Tween=a7,a7.prototype={constructor:a7,init:function(h,g,l,k,j,i){this.elem=h,this.prop=l,this.easing=j||bv.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=k,this.unit=i||(bv.cssNumber[l]?"":"px")
},cur:function(){var b=a7.propHooks[this.prop];
return b&&b.get?b.get(this):a7.propHooks._default.get(this)
},run:function(e){var d,f=a7.propHooks[this.prop];
return this.options.duration?this.pos=d=bv.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=d=e,this.now=(this.end-this.start)*d+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):a7.propHooks._default.set(this),this
}},a7.prototype.init.prototype=a7.prototype,a7.propHooks={_default:{get:function(d){var c;
return 1!==d.elem.nodeType||null!=d.elem[d.prop]&&null==d.elem.style[d.prop]?d.elem[d.prop]:(c=bv.css(d.elem,d.prop,""),c&&"auto"!==c?c:0)
},set:function(b){bv.fx.step[b.prop]?bv.fx.step[b.prop](b):1!==b.elem.nodeType||null==b.elem.style[bv.cssProps[b.prop]]&&!bv.cssHooks[b.prop]?b.elem[b.prop]=b.now:bv.style(b.elem,b.prop,b.now+b.unit)
}}},a7.propHooks.scrollTop=a7.propHooks.scrollLeft={set:function(b){b.elem.nodeType&&b.elem.parentNode&&(b.elem[b.prop]=b.now)
}},bv.easing={linear:function(b){return b
},swing:function(b){return 0.5-Math.cos(b*Math.PI)/2
},_default:"swing"},bv.fx=a7.prototype.init,bv.fx.step={};
var aY,cq,ai=/^(?:toggle|show|hide)$/,cz=/queueHooks$/;
function ch(){cq&&(bP.requestAnimationFrame(ch),bv.fx.tick())
}function bI(){return bP.setTimeout(function(){aY=void 0
}),aY=bv.now()
}function bh(g,f){var j,i=0,h={height:g};
for(f=f?1:0;
i<4;
i+=2-f){j=cj[i],h["margin"+j]=h["padding"+j]=g
}return f&&(h.opacity=h.width=g),h
}function a8(i,h,n){for(var m,l=(aK.tweeners[h]||[]).concat(aK.tweeners["*"]),k=0,j=l.length;
k<j;
k++){if(m=l[k].call(n,h,i)){return m
}}}function a1(H,G,F){var E,D,C,B,A,z,y,x,w="width" in G||"height" in G,v=this,u={},t=H.style,s=H.nodeType&&bK(H),r=bZ.get(H,"fxshow");
F.queue||(B=bv._queueHooks(H,"fx"),null==B.unqueued&&(B.unqueued=0,A=B.empty.fire,B.empty.fire=function(){B.unqueued||A()
}),B.unqueued++,v.always(function(){v.always(function(){B.unqueued--,bv.queue(H,"fx").length||B.empty.fire()
})
}));
for(E in G){if(D=G[E],ai.test(D)){if(delete G[E],C=C||"toggle"===D,D===(s?"hide":"show")){if("show"!==D||!r||void 0===r[E]){continue
}s=!0
}u[E]=r&&r[E]||bv.style(H,E)
}}if(z=!bv.isEmptyObject(G),z||!bv.isEmptyObject(u)){w&&1===H.nodeType&&(F.overflow=[t.overflow,t.overflowX,t.overflowY],y=r&&r.display,null==y&&(y=bZ.get(H,"display")),x=bv.css(H,"display"),"none"===x&&(y?x=y:(aL([H],!0),y=H.style.display||y,x=bv.css(H,"display"),aL([H]))),("inline"===x||"inline-block"===x&&null!=y)&&"none"===bv.css(H,"float")&&(z||(v.done(function(){t.display=y
}),null==y&&(x=t.display,y="none"===x?"":x)),t.display="inline-block")),F.overflow&&(t.overflow="hidden",v.always(function(){t.overflow=F.overflow[0],t.overflowX=F.overflow[1],t.overflowY=F.overflow[2]
})),z=!1;
for(E in u){z||(r?"hidden" in r&&(s=r.hidden):r=bZ.access(H,"fxshow",{display:y}),C&&(r.hidden=!s),s&&aL([H],!0),v.done(function(){s||aL([H]),bZ.remove(H,"fxshow");
for(E in u){bv.style(H,E,u[E])
}})),z=a8(s?r[E]:0,E,v),E in r||(r[E]=z.start,s&&(z.end=z.start,z.start=0))
}}}function aS(i,h){var n,m,l,k,j;
for(n in i){if(m=bv.camelCase(n),l=h[m],k=i[n],bv.isArray(k)&&(l=k[1],k=i[n]=k[0]),n!==m&&(i[m]=k,delete i[n]),j=bv.cssHooks[m],j&&"expand" in j){k=j.expand(k),delete i[m];
for(n in k){n in i||(i[n]=k[n],h[n]=l)
}}else{h[m]=l
}}}function aK(v,u,t){var s,r,q=0,p=aK.prefilters.length,o=bv.Deferred().always(function(){delete n.elem
}),n=function(){if(r){return !1
}for(var a=aY||bI(),w=Math.max(0,m.startTime+m.duration-a),k=w/m.duration||0,j=1-k,h=0,e=m.tweens.length;
h<e;
h++){m.tweens[h].run(j)
}return o.notifyWith(v,[m,j,w]),j<1&&e?w:(o.resolveWith(v,[m]),!1)
},m=o.promise({elem:v,props:bv.extend({},u),opts:bv.extend(!0,{specialEasing:{},easing:bv.easing._default},t),originalProperties:u,originalOptions:t,startTime:aY||bI(),duration:t.duration,tweens:[],createTween:function(a,f){var e=bv.Tween(v,m.opts,a,f,m.opts.specialEasing[a]||m.opts.easing);
return m.tweens.push(e),e
},stop:function(a){var f=0,e=a?m.tweens.length:0;
if(r){return this
}for(r=!0;
f<e;
f++){m.tweens[f].run(1)
}return a?(o.notifyWith(v,[m,1,0]),o.resolveWith(v,[m,a])):o.rejectWith(v,[m,a]),this
}}),l=m.props;
for(aS(l,m.opts.specialEasing);
q<p;
q++){if(s=aK.prefilters[q].call(m,v,l,m.opts)){return bv.isFunction(s.stop)&&(bv._queueHooks(m.elem,m.opts.queue).stop=bv.proxy(s.stop,s)),s
}}return bv.map(l,a8,m),bv.isFunction(m.opts.start)&&m.opts.start.call(v,m),bv.fx.timer(bv.extend(n,{elem:v,anim:m,queue:m.opts.queue})),m.progress(m.opts.progress).done(m.opts.done,m.opts.complete).fail(m.opts.fail).always(m.opts.always)
}bv.Animation=bv.extend(aK,{tweeners:{"*":[function(e,d){var f=this.createTween(e,d);
return a9(f.elem,e,cA.exec(d),f),f
}]},tweener:function(g,f){bv.isFunction(g)?(f=g,g=["*"]):g=g.match(cd);
for(var j,i=0,h=g.length;
i<h;
i++){j=g[i],aK.tweeners[j]=aK.tweeners[j]||[],aK.tweeners[j].unshift(f)
}},prefilters:[a1],prefilter:function(d,c){c?aK.prefilters.unshift(d):aK.prefilters.push(d)
}}),bv.speed=function(f,d,h){var g=f&&"object"==typeof f?bv.extend({},f):{complete:h||!h&&d||bv.isFunction(f)&&f,duration:f,easing:h&&d||d&&!bv.isFunction(d)&&d};
return bv.fx.off||bM.hidden?g.duration=0:"number"!=typeof g.duration&&(g.duration in bv.fx.speeds?g.duration=bv.fx.speeds[g.duration]:g.duration=bv.fx.speeds._default),null!=g.queue&&g.queue!==!0||(g.queue="fx"),g.old=g.complete,g.complete=function(){bv.isFunction(g.old)&&g.old.call(this),g.queue&&bv.dequeue(this,g.queue)
},g
},bv.fn.extend({fadeTo:function(f,e,h,g){return this.filter(bK).css("opacity",0).show().end().animate({opacity:e},f,h,g)
},animate:function(i,h,n,m){var l=bv.isEmptyObject(i),k=bv.speed(h,n,m),j=function(){var a=aK(this,bv.extend({},i),k);
(l||bZ.get(this,"finish"))&&a.stop(!0)
};
return j.finish=j,l||k.queue===!1?this.each(j):this.queue(k.queue,j)
},stop:function(f,e,h){var g=function(d){var c=d.stop;
delete d.stop,c(h)
};
return"string"!=typeof f&&(h=e,e=f,f=void 0),e&&f!==!1&&this.queue(f||"fx",[]),this.each(function(){var a=!0,i=null!=f&&f+"queueHooks",d=bv.timers,c=bZ.get(this);
if(i){c[i]&&c[i].stop&&g(c[i])
}else{for(i in c){c[i]&&c[i].stop&&cz.test(i)&&g(c[i])
}}for(i=d.length;
i--;
){d[i].elem!==this||null!=f&&d[i].queue!==f||(d[i].anim.stop(h),a=!1,d.splice(i,1))
}!a&&h||bv.dequeue(this,f)
})
},finish:function(b){return b!==!1&&(b=b||"fx"),this.each(function(){var a,l=bZ.get(this),k=l[b+"queue"],j=l[b+"queueHooks"],i=bv.timers,h=k?k.length:0;
for(l.finish=!0,bv.queue(this,b,[]),j&&j.stop&&j.stop.call(this,!0),a=i.length;
a--;
){i[a].elem===this&&i[a].queue===b&&(i[a].anim.stop(!0),i.splice(a,1))
}for(a=0;
a<h;
a++){k[a]&&k[a].finish&&k[a].finish.call(this)
}delete l.finish
})
}}),bv.each(["toggle","show","hide"],function(e,d){var f=bv.fn[d];
bv.fn[d]=function(b,g,c){return null==b||"boolean"==typeof b?f.apply(this,arguments):this.animate(bh(d,!0),b,g,c)
}
}),bv.each({slideDown:bh("show"),slideUp:bh("hide"),slideToggle:bh("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){bv.fn[d]=function(b,f,e){return this.animate(c,b,f,e)
}
}),bv.timers=[],bv.fx.tick=function(){var e,d=0,f=bv.timers;
for(aY=bv.now();
d<f.length;
d++){e=f[d],e()||f[d]!==e||f.splice(d--,1)
}f.length||bv.fx.stop(),aY=void 0
},bv.fx.timer=function(b){bv.timers.push(b),b()?bv.fx.start():bv.timers.pop()
},bv.fx.interval=13,bv.fx.start=function(){cq||(cq=bP.requestAnimationFrame?bP.requestAnimationFrame(ch):bP.setInterval(bv.fx.tick,bv.fx.interval))
},bv.fx.stop=function(){bP.cancelAnimationFrame?bP.cancelAnimationFrame(cq):bP.clearInterval(cq),cq=null
},bv.fx.speeds={slow:600,fast:200,_default:400},bv.fn.delay=function(a,d){return a=bv.fx?bv.fx.speeds[a]||a:a,d=d||"fx",this.queue(d,function(g,f){var b=bP.setTimeout(g,a);
f.stop=function(){bP.clearTimeout(b)
}
})
},function(){var e=bM.createElement("input"),d=bM.createElement("select"),f=d.appendChild(bM.createElement("option"));
e.type="checkbox",bz.checkOn=""!==e.value,bz.optSelected=f.selected,e=bM.createElement("input"),e.value="t",e.type="radio",bz.radioValue="t"===e.value
}();
var aC,au=bv.expr.attrHandle;
bv.fn.extend({attr:function(d,c){return b2(this,bv.attr,d,c,arguments.length>1)
},removeAttr:function(b){return this.each(function(){bv.removeAttr(this,b)
})
}}),bv.extend({attr:function(h,g,l){var k,j,i=h.nodeType;
if(3!==i&&8!==i&&2!==i){return"undefined"==typeof h.getAttribute?bv.prop(h,g,l):(1===i&&bv.isXMLDoc(h)||(j=bv.attrHooks[g.toLowerCase()]||(bv.expr.match.bool.test(g)?aC:void 0)),void 0!==l?null===l?void bv.removeAttr(h,g):j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:(h.setAttribute(g,l+""),l):j&&"get" in j&&null!==(k=j.get(h,g))?k:(k=bv.find.attr(h,g),null==k?void 0:k))
}},attrHooks:{type:{set:function(e,d){if(!bz.radioValue&&"radio"===d&&bv.nodeName(e,"input")){var f=e.value;
return e.setAttribute("type",d),f&&(e.value=f),d
}}}},removeAttr:function(g,f){var j,i=0,h=f&&f.match(cd);
if(h&&1===g.nodeType){while(j=h[i++]){g.removeAttribute(j)
}}}}),aC={set:function(e,d,f){return d===!1?bv.removeAttr(e,f):e.setAttribute(f,f),f
}},bv.each(bv.expr.match.bool.source.match(/\w+/g),function(e,d){var f=au[d]||bv.find.attr;
au[d]=function(h,c,l){var k,j,i=c.toLowerCase();
return l||(j=au[i],au[i]=k,k=null!=f(h,c,l)?i:null,au[i]=j),k
}
});
var al=/^(?:input|select|textarea|button)$/i,ac=/^(?:a|area)$/i;
bv.fn.extend({prop:function(d,c){return b2(this,bv.prop,d,c,arguments.length>1)
},removeProp:function(b){return this.each(function(){delete this[bv.propFix[b]||b]
})
}}),bv.extend({prop:function(h,g,l){var k,j,i=h.nodeType;
if(3!==i&&8!==i&&2!==i){return 1===i&&bv.isXMLDoc(h)||(g=bv.propFix[g]||g,j=bv.propHooks[g]),void 0!==l?j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:h[g]=l:j&&"get" in j&&null!==(k=j.get(h,g))?k:h[g]
}},propHooks:{tabIndex:{get:function(d){var c=bv.find.attr(d,"tabindex");
return c?parseInt(c,10):al.test(d.nodeName)||ac.test(d.nodeName)&&d.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),bz.optSelected||(bv.propHooks.selected={get:function(d){var c=d.parentNode;
return c&&c.parentNode&&c.parentNode.selectedIndex,null
},set:function(d){var c=d.parentNode;
c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)
}}),bv.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bv.propFix[this.toLowerCase()]=this
});
function cE(d){var c=d.match(cd)||[];
return c.join(" ")
}function ct(b){return b.getAttribute&&b.getAttribute("class")||""
}bv.fn.extend({addClass:function(r){var q,p,o,n,m,l,k,j=0;
if(bv.isFunction(r)){return this.each(function(a){bv(this).addClass(r.call(this,a,ct(this)))
})
}if("string"==typeof r&&r){q=r.match(cd)||[];
while(p=this[j++]){if(n=ct(p),o=1===p.nodeType&&" "+cE(n)+" "){l=0;
while(m=q[l++]){o.indexOf(" "+m+" ")<0&&(o+=m+" ")
}k=cE(o),n!==k&&p.setAttribute("class",k)
}}}return this
},removeClass:function(r){var q,p,o,n,m,l,k,j=0;
if(bv.isFunction(r)){return this.each(function(a){bv(this).removeClass(r.call(this,a,ct(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof r&&r){q=r.match(cd)||[];
while(p=this[j++]){if(n=ct(p),o=1===p.nodeType&&" "+cE(n)+" "){l=0;
while(m=q[l++]){while(o.indexOf(" "+m+" ")>-1){o=o.replace(" "+m+" "," ")
}}k=cE(o),n!==k&&p.setAttribute("class",k)
}}}return this
},toggleClass:function(e,d){var f=typeof e;
return"boolean"==typeof d&&"string"===f?d?this.addClass(e):this.removeClass(e):bv.isFunction(e)?this.each(function(a){bv(this).toggleClass(e.call(this,a,ct(this),d),d)
}):this.each(function(){var a,h,g,c;
if("string"===f){h=0,g=bv(this),c=e.match(cd)||[];
while(a=c[h++]){g.hasClass(a)?g.removeClass(a):g.addClass(a)
}}else{void 0!==e&&"boolean"!==f||(a=ct(this),a&&bZ.set(this,"__className__",a),this.setAttribute&&this.setAttribute("class",a||e===!1?"":bZ.get(this,"__className__")||""))
}})
},hasClass:function(f){var e,h,g=0;
e=" "+f+" ";
while(h=this[g++]){if(1===h.nodeType&&(" "+cE(ct(h))+" ").indexOf(e)>-1){return !0
}}return !1
}});
var bT=/\r/g;
bv.fn.extend({val:function(g){var f,j,i,h=this[0];
if(arguments.length){return i=bv.isFunction(g),this.each(function(b){var a;
1===this.nodeType&&(a=i?g.call(this,b,bv(this).val()):g,null==a?a="":"number"==typeof a?a+="":bv.isArray(a)&&(a=bv.map(a,function(c){return null==c?"":c+""
})),f=bv.valHooks[this.type]||bv.valHooks[this.nodeName.toLowerCase()],f&&"set" in f&&void 0!==f.set(this,a,"value")||(this.value=a))
})
}if(h){return f=bv.valHooks[h.type]||bv.valHooks[h.nodeName.toLowerCase()],f&&"get" in f&&void 0!==(j=f.get(h,"value"))?j:(j=h.value,"string"==typeof j?j.replace(bT,""):null==j?"":j)
}}}),bv.extend({valHooks:{option:{get:function(d){var c=bv.find.attr(d,"value");
return null!=c?c:cE(bv.text(d))
}},select:{get:function(r){var q,p,o,n=r.options,m=r.selectedIndex,l="select-one"===r.type,k=l?null:[],j=l?m+1:n.length;
for(o=m<0?j:l?m:0;
o<j;
o++){if(p=n[o],(p.selected||o===m)&&!p.disabled&&(!p.parentNode.disabled||!bv.nodeName(p.parentNode,"optgroup"))){if(q=bv(p).val(),l){return q
}k.push(q)
}}return k
},set:function(i,h){var n,m,l=i.options,k=bv.makeArray(h),j=l.length;
while(j--){m=l[j],(m.selected=bv.inArray(bv.valHooks.option.get(m),k)>-1)&&(n=!0)
}return n||(i.selectedIndex=-1),k
}}}}),bv.each(["radio","checkbox"],function(){bv.valHooks[this]={set:function(d,c){if(bv.isArray(c)){return d.checked=bv.inArray(bv(d).val(),c)>-1
}}},bz.checkOn||(bv.valHooks[this].get=function(b){return null===b.getAttribute("value")?"on":b.value
})
});
var bl=/^(?:focusinfocus|focusoutblur)$/;
bv.extend(bv.event,{trigger:function(B,A,z,y){var x,w,v,u,t,s,r,l=[z||bM],d=bC.call(B,"type")?B.type:B,a=bC.call(B,"namespace")?B.namespace.split("."):[];
if(w=v=z=z||bM,3!==z.nodeType&&8!==z.nodeType&&!bl.test(d+bv.event.triggered)&&(d.indexOf(".")>-1&&(a=d.split("."),d=a.shift(),a.sort()),t=d.indexOf(":")<0&&"on"+d,B=B[bv.expando]?B:new bv.Event(d,"object"==typeof B&&B),B.isTrigger=y?2:3,B.namespace=a.join("."),B.rnamespace=B.namespace?new RegExp("(^|\\.)"+a.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,B.result=void 0,B.target||(B.target=z),A=null==A?[B]:bv.makeArray(A,[B]),r=bv.event.special[d]||{},y||!r.trigger||r.trigger.apply(z,A)!==!1)){if(!y&&!r.noBubble&&!bv.isWindow(z)){for(u=r.delegateType||d,bl.test(u+d)||(w=w.parentNode);
w;
w=w.parentNode){l.push(w),v=w
}v===(z.ownerDocument||bM)&&l.push(v.defaultView||v.parentWindow||bP)
}x=0;
while((w=l[x++])&&!B.isPropagationStopped()){B.type=x>1?u:r.bindType||d,s=(bZ.get(w,"events")||{})[B.type]&&bZ.get(w,"handle"),s&&s.apply(w,A),s=t&&w[t],s&&s.apply&&b1(w)&&(B.result=s.apply(w,A),B.result===!1&&B.preventDefault())
}return B.type=d,y||B.isDefaultPrevented()||r._default&&r._default.apply(l.pop(),A)!==!1||!b1(z)||t&&bv.isFunction(z[d])&&!bv.isWindow(z)&&(v=z[t],v&&(z[t]=null),bv.event.triggered=d,z[d](),bv.event.triggered=void 0,v&&(z[t]=v)),B.result
}},simulate:function(f,e,h){var g=bv.extend(new bv.Event,h,{type:f,isSimulated:!0});
bv.event.trigger(g,null,e)
}}),bv.fn.extend({trigger:function(d,c){return this.each(function(){bv.event.trigger(d,c,this)
})
},triggerHandler:function(e,d){var f=this[0];
if(f){return bv.event.trigger(e,d,f,!0)
}}}),bv.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,c){bv.fn[c]=function(b,e){return arguments.length>0?this.on(c,null,b,e):this.trigger(c)
}
}),bv.fn.extend({hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)
}}),bz.focusin="onfocusin" in bP,bz.focusin||bv.each({focus:"focusin",blur:"focusout"},function(e,d){var f=function(b){bv.event.simulate(d,b.target,bv.event.fix(b))
};
bv.event.special[d]={setup:function(){var b=this.ownerDocument||this,a=bZ.access(b,d);
a||b.addEventListener(e,f,!0),bZ.access(b,d,(a||0)+1)
},teardown:function(){var b=this.ownerDocument||this,a=bZ.access(b,d)-1;
a?bZ.access(b,d,a):(b.removeEventListener(e,f,!0),bZ.remove(b,d))
}}
});
var be=bP.location,a5=bv.now(),aW=/\?/;
bv.parseXML=function(a){var f;
if(!a||"string"!=typeof a){return null
}try{f=(new bP.DOMParser).parseFromString(a,"text/xml")
}catch(e){f=void 0
}return f&&!f.getElementsByTagName("parsererror").length||bv.error("Invalid XML: "+a),f
};
var aO=/\[\]$/,aG=/\r?\n/g,ay=/^(?:submit|button|image|reset|file)$/i,ap=/^(?:input|select|textarea|keygen)/i;
function ag(g,f,j,i){var h;
if(bv.isArray(f)){bv.each(f,function(a,c){j||aO.test(g)?i(g,c):ag(g+"["+("object"==typeof c&&null!=c?a:"")+"]",c,j,i)
})
}else{if(j||"object"!==bv.type(f)){i(g,f)
}else{for(h in f){ag(g+"["+h+"]",f[h],j,i)
}}}}bv.param=function(g,f){var j,i=[],h=function(e,d){var k=bv.isFunction(d)?d():d;
i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==k?"":k)
};
if(bv.isArray(g)||g.jquery&&!bv.isPlainObject(g)){bv.each(g,function(){h(this.name,this.value)
})
}else{for(j in g){ag(j,g[j],f,h)
}}return i.join("&")
},bv.fn.extend({serialize:function(){return bv.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var b=bv.prop(this,"elements");
return b?bv.makeArray(b):this
}).filter(function(){var b=this.type;
return this.name&&!bv(this).is(":disabled")&&ap.test(this.nodeName)&&!ay.test(b)&&(this.checked||!aD.test(b))
}).map(function(e,d){var f=bv(this).val();
return null==f?null:bv.isArray(f)?bv.map(f,function(b){return{name:d.name,value:b.replace(aG,"\r\n")}
}):{name:d.name,value:f.replace(aG,"\r\n")}
}).get()
}});
var cI=/%20/g,cx=/#.*$/,aZ=/([?&])_=[^&]*/,aQ=/^(.*?):[ \t]*([^\r\n]*)$/gm,aI=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,aA=/^(?:GET|HEAD)$/,ar=/^\/\//,aj={},cK={},cC="*/".concat("*"),cr=bM.createElement("a");
cr.href=be.href;
function bR(b){return function(a,j){"string"!=typeof a&&(j=a,a="*");
var i,h=0,g=a.toLowerCase().match(cd)||[];
if(bv.isFunction(j)){while(i=g[h++]){"+"===i[0]?(i=i.slice(1)||"*",(b[i]=b[i]||[]).unshift(j)):(b[i]=b[i]||[]).push(j)
}}}
}function bj(i,h,n,m){var l={},k=i===cK;
function j(b){var a;
return l[b]=!0,bv.each(i[b]||[],function(c,e){var d=e(h,n,m);
return"string"!=typeof d||k||l[d]?k?!(a=d):void 0:(h.dataTypes.unshift(d),j(d),!1)
}),a
}return j(h.dataTypes[0])||!l["*"]&&j("*")
}function bc(g,f){var j,i,h=bv.ajaxSettings.flatOptions||{};
for(j in f){void 0!==f[j]&&((h[j]?g:i||(i={}))[j]=f[j])
}return i&&bv.extend(!0,g,i),g
}function a3(r,q,p){var o,n,m,l,k=r.contents,j=r.dataTypes;
while("*"===j[0]){j.shift(),void 0===o&&(o=r.mimeType||q.getResponseHeader("Content-Type"))
}if(o){for(n in k){if(k[n]&&k[n].test(o)){j.unshift(n);
break
}}}if(j[0] in p){m=j[0]
}else{for(n in p){if(!j[0]||r.converters[n+" "+j[0]]){m=n;
break
}l||(l=n)
}m=m||l
}if(m){return m!==j[0]&&j.unshift(m),p[m]
}}function aU(x,w,v,u){var t,s,r,q,p,o={},n=x.dataTypes.slice();
if(n[1]){for(r in x.converters){o[r.toLowerCase()]=x.converters[r]
}}s=n.shift();
while(s){if(x.responseFields[s]&&(v[x.responseFields[s]]=w),!p&&u&&x.dataFilter&&(w=x.dataFilter(w,x.dataType)),p=s,s=n.shift()){if("*"===s){s=p
}else{if("*"!==p&&p!==s){if(r=o[p+" "+s]||o["* "+s],!r){for(t in o){if(q=t.split(" "),q[1]===s&&(r=o[p+" "+q[0]]||o["* "+q[0]])){r===!0?r=o[t]:o[t]!==!0&&(s=q[0],n.unshift(q[1]));
break
}}}if(r!==!0){if(r&&x["throws"]){w=r(w)
}else{try{w=r(w)
}catch(m){return{state:"parsererror",error:r?m:"No conversion from "+p+" to "+s}
}}}}}}}return{state:"success",data:w}
}bv.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:be.href,type:"GET",isLocal:aI.test(be.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":cC,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":bv.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(d,c){return c?bc(bc(d,bv.ajaxSettings),c):bc(bv.ajaxSettings,d)
},ajaxPrefilter:bR(aj),ajaxTransport:bR(cK),ajax:function(V,U){"object"==typeof V&&(U=V,V=void 0),U=U||{};
var T,S,R,Q,P,O,N,M,L,K,J=bv.ajaxSetup({},U),I=J.context||J,G=J.context&&(I.nodeType||I.jquery)?bv(I):bv.event,F=bv.Deferred(),E=bv.Callbacks("once memory"),D=J.statusCode||{},C={},B={},r="canceled",d={readyState:0,getResponseHeader:function(e){var c;
if(N){if(!Q){Q={};
while(c=aQ.exec(R)){Q[c[1].toLowerCase()]=c[2]
}}c=Q[e.toLowerCase()]
}return null==c?null:c
},getAllResponseHeaders:function(){return N?R:null
},setRequestHeader:function(e,c){return null==N&&(e=B[e.toLowerCase()]=B[e.toLowerCase()]||e,C[e]=c),this
},overrideMimeType:function(b){return null==N&&(J.mimeType=b),this
},statusCode:function(e){var c;
if(e){if(N){d.always(e[d.status])
}else{for(c in e){D[c]=[D[c],e[c]]
}}}return this
},abort:function(e){var c=e||r;
return T&&T.abort(c),H(0,c),this
}};
if(F.promise(d),J.url=((V||J.url||be.href)+"").replace(ar,be.protocol+"//"),J.type=U.method||U.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(cd)||[""],null==J.crossDomain){O=bM.createElement("a");
try{O.href=J.url,O.href=O.href,J.crossDomain=cr.protocol+"//"+cr.host!=O.protocol+"//"+O.host
}catch(a){J.crossDomain=!0
}}if(J.data&&J.processData&&"string"!=typeof J.data&&(J.data=bv.param(J.data,J.traditional)),bj(aj,J,U,d),N){return d
}M=bv.event&&J.global,M&&0===bv.active++&&bv.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!aA.test(J.type),S=J.url.replace(cx,""),J.hasContent?J.data&&J.processData&&0===(J.contentType||"").indexOf("application/x-www-form-urlencoded")&&(J.data=J.data.replace(cI,"+")):(K=J.url.slice(S.length),J.data&&(S+=(aW.test(S)?"&":"?")+J.data,delete J.data),J.cache===!1&&(S=S.replace(aZ,"$1"),K=(aW.test(S)?"&":"?")+"_="+a5+++K),J.url=S+K),J.ifModified&&(bv.lastModified[S]&&d.setRequestHeader("If-Modified-Since",bv.lastModified[S]),bv.etag[S]&&d.setRequestHeader("If-None-Match",bv.etag[S])),(J.data&&J.hasContent&&J.contentType!==!1||U.contentType)&&d.setRequestHeader("Content-Type",J.contentType),d.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+("*"!==J.dataTypes[0]?", "+cC+"; q=0.01":""):J.accepts["*"]);
for(L in J.headers){d.setRequestHeader(L,J.headers[L])
}if(J.beforeSend&&(J.beforeSend.call(I,d,J)===!1||N)){return d.abort()
}if(r="abort",E.add(J.complete),d.done(J.success),d.fail(J.error),T=bj(cK,J,U,d)){if(d.readyState=1,M&&G.trigger("ajaxSend",[d,J]),N){return d
}J.async&&J.timeout>0&&(P=bP.setTimeout(function(){d.abort("timeout")
},J.timeout));
try{N=!1,T.send(C,H)
}catch(a){if(N){throw a
}H(-1,a)
}}else{H(-1,"No Transport")
}function H(o,l,k,i){var g,f,e,s,q,p=l;
N||(N=!0,P&&bP.clearTimeout(P),T=void 0,R=i||"",d.readyState=o>0?4:0,g=o>=200&&o<300||304===o,k&&(s=a3(J,d,k)),s=aU(J,s,d,g),g?(J.ifModified&&(q=d.getResponseHeader("Last-Modified"),q&&(bv.lastModified[S]=q),q=d.getResponseHeader("etag"),q&&(bv.etag[S]=q)),204===o||"HEAD"===J.type?p="nocontent":304===o?p="notmodified":(p=s.state,f=s.data,e=s.error,g=!e)):(e=p,!o&&p||(p="error",o<0&&(o=0))),d.status=o,d.statusText=(l||p)+"",g?F.resolveWith(I,[f,p,d]):F.rejectWith(I,[d,p,e]),d.statusCode(D),D=void 0,M&&G.trigger(g?"ajaxSuccess":"ajaxError",[d,J,g?f:e]),E.fireWith(I,[d,p]),M&&(G.trigger("ajaxComplete",[d,J]),--bv.active||bv.event.trigger("ajaxStop")))
}return d
},getJSON:function(e,d,f){return bv.get(e,d,f,"json")
},getScript:function(d,c){return bv.get(d,void 0,c,"script")
}}),bv.each(["get","post"],function(d,c){bv[c]=function(b,h,g,f){return bv.isFunction(h)&&(f=f||g,g=h,h=void 0),bv.ajax(bv.extend({url:b,type:c,dataType:f,data:h,success:g},bv.isPlainObject(b)&&b))
}
}),bv._evalUrl=function(b){return bv.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})
},bv.fn.extend({wrapAll:function(d){var c;
return this[0]&&(bv.isFunction(d)&&(d=d.call(this[0])),c=bv(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;
while(b.firstElementChild){b=b.firstElementChild
}return b
}).append(this)),this
},wrapInner:function(b){return bv.isFunction(b)?this.each(function(a){bv(this).wrapInner(b.call(this,a))
}):this.each(function(){var a=bv(this),d=a.contents();
d.length?d.wrapAll(b):a.append(b)
})
},wrap:function(d){var c=bv.isFunction(d);
return this.each(function(a){bv(this).wrapAll(c?d.call(this,a):d)
})
},unwrap:function(b){return this.parent(b).not("body").each(function(){bv(this).replaceWith(this.childNodes)
}),this
}}),bv.expr.pseudos.hidden=function(b){return !bv.expr.pseudos.visible(b)
},bv.expr.pseudos.visible=function(b){return !!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)
},bv.ajaxSettings.xhr=function(){try{return new bP.XMLHttpRequest
}catch(a){}};
var aM={0:200,1223:204},aE=bv.ajaxSettings.xhr();
bz.cors=!!aE&&"withCredentials" in aE,bz.ajax=aE=!!aE,bv.ajaxTransport(function(a){var f,e;
if(bz.cors||aE&&!a.crossDomain){return{send:function(k,j){var d,c=a.xhr();
if(c.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(d in a.xhrFields){c[d]=a.xhrFields[d]
}}a.mimeType&&c.overrideMimeType&&c.overrideMimeType(a.mimeType),a.crossDomain||k["X-Requested-With"]||(k["X-Requested-With"]="XMLHttpRequest");
for(d in k){c.setRequestHeader(d,k[d])
}f=function(g){return function(){f&&(f=e=c.onload=c.onerror=c.onabort=c.onreadystatechange=null,"abort"===g?c.abort():"error"===g?"number"!=typeof c.status?j(0,"error"):j(c.status,c.statusText):j(aM[c.status]||c.status,c.statusText,"text"!==(c.responseType||"text")||"string"!=typeof c.responseText?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))
}
},c.onload=f(),e=c.onerror=f("error"),void 0!==c.onabort?c.onabort=e:c.onreadystatechange=function(){4===c.readyState&&bP.setTimeout(function(){f&&e()
})
},f=f("abort");
try{c.send(a.hasContent&&a.data||null)
}catch(b){if(f){throw b
}}},abort:function(){f&&f()
}}
}}),bv.ajaxPrefilter(function(b){b.crossDomain&&(b.contents.script=!1)
}),bv.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(b){return bv.globalEval(b),b
}}}),bv.ajaxPrefilter("script",function(b){void 0===b.cache&&(b.cache=!1),b.crossDomain&&(b.type="GET")
}),bv.ajaxTransport("script",function(e){if(e.crossDomain){var d,f;
return{send:function(b,a){d=bv("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",f=function(c){d.remove(),f=null,c&&a("error"===c.type?404:200,c.type)
}),bM.head.appendChild(d[0])
},abort:function(){f&&f()
}}
}});
var aw=[],an=/(=)\?(?=&|$)|\?\?/;
bv.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var b=aw.pop()||bv.expando+"_"+a5++;
return this[b]=!0,b
}}),bv.ajaxPrefilter("json jsonp",function(a,n,m){var l,k,j,i=a.jsonp!==!1&&(an.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(a.data)&&"data");
if(i||"jsonp"===a.dataTypes[0]){return l=a.jsonpCallback=bv.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,i?a[i]=a[i].replace(an,"$1"+l):a.jsonp!==!1&&(a.url+=(aW.test(a.url)?"&":"?")+a.jsonp+"="+l),a.converters["script json"]=function(){return j||bv.error(l+" was not called"),j[0]
},a.dataTypes[0]="json",k=bP[l],bP[l]=function(){j=arguments
},m.always(function(){void 0===k?bv(bP).removeProp(l):bP[l]=k,a[l]&&(a.jsonpCallback=n.jsonpCallback,aw.push(l)),j&&bv.isFunction(k)&&k(j[0]),j=k=void 0
}),"script"
}}),bz.createHTMLDocument=function(){var b=bM.implementation.createHTMLDocument("").body;
return b.innerHTML="<form></form><form></form>",2===b.childNodes.length
}(),bv.parseHTML=function(h,d,l){if("string"!=typeof h){return[]
}"boolean"==typeof d&&(l=d,d=!1);
var k,j,i;
return d||(bz.createHTMLDocument?(d=bM.implementation.createHTMLDocument(""),k=d.createElement("base"),k.href=bM.location.href,d.head.appendChild(k)):d=bM),j=co.exec(h),i=!l&&[],j?[d.createElement(j[1])]:(j=bn([h],d,i),i&&i.length&&bv(i).remove(),bv.merge([],j.childNodes))
},bv.fn.load=function(j,i,p){var o,n,m,l=this,k=j.indexOf(" ");
return k>-1&&(o=cE(j.slice(k)),j=j.slice(0,k)),bv.isFunction(i)?(p=i,i=void 0):i&&"object"==typeof i&&(n="POST"),l.length>0&&bv.ajax({url:j,type:n||"GET",dataType:"html",data:i}).done(function(b){m=arguments,l.html(o?bv("<div>").append(bv.parseHTML(b)).find(o):b)
}).always(p&&function(d,c){l.each(function(){p.apply(this,m||[d.responseText,c,d])
})
}),this
},bv.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,c){bv.fn[c]=function(b){return this.on(c,b)
}
}),bv.expr.pseudos.animated=function(b){return bv.grep(bv.timers,function(a){return b===a.elem
}).length
};
function ae(b){return bv.isWindow(b)?b:9===b.nodeType&&b.defaultView
}bv.offset={setOffset:function(z,y,x){var w,v,u,t,s,r,q,p=bv.css(z,"position"),o=bv(z),n={};
"static"===p&&(z.style.position="relative"),s=o.offset(),u=bv.css(z,"top"),r=bv.css(z,"left"),q=("absolute"===p||"fixed"===p)&&(u+r).indexOf("auto")>-1,q?(w=o.position(),t=w.top,v=w.left):(t=parseFloat(u)||0,v=parseFloat(r)||0),bv.isFunction(y)&&(y=y.call(z,x,bv.extend({},s))),null!=y.top&&(n.top=y.top-s.top+t),null!=y.left&&(n.left=y.left-s.left+v),"using" in y?y.using.call(z,n):o.css(n)
}},bv.fn.extend({offset:function(h){if(arguments.length){return void 0===h?this:this.each(function(a){bv.offset.setOffset(this,h,a)
})
}var g,l,k,j,i=this[0];
if(i){return i.getClientRects().length?(k=i.getBoundingClientRect(),k.width||k.height?(j=i.ownerDocument,l=ae(j),g=j.documentElement,{top:k.top+l.pageYOffset-g.clientTop,left:k.left+l.pageXOffset-g.clientLeft}):k):{top:0,left:0}
}},position:function(){if(this[0]){var f,e,h=this[0],g={top:0,left:0};
return"fixed"===bv.css(h,"position")?e=h.getBoundingClientRect():(f=this.offsetParent(),e=this.offset(),bv.nodeName(f[0],"html")||(g=f.offset()),g={top:g.top+bv.css(f[0],"borderTopWidth",!0),left:g.left+bv.css(f[0],"borderLeftWidth",!0)}),{top:e.top-g.top-bv.css(h,"marginTop",!0),left:e.left-g.left-bv.css(h,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var b=this.offsetParent;
while(b&&"static"===bv.css(b,"position")){b=b.offsetParent
}return b||bf
})
}}),bv.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,d){var f="pageYOffset"===d;
bv.fn[e]=function(a){return b2(this,function(b,h,g){var c=ae(b);
return void 0===g?c?c[d]:b[h]:void (c?c.scrollTo(f?c.pageXOffset:g,f?g:c.pageYOffset):b[h]=g)
},e,a,arguments.length)
}
}),bv.each(["top","left"],function(d,c){bv.cssHooks[c]=aN(bz.pixelPosition,function(b,e){if(e){return e=aV(b,c),bd.test(e)?bv(b).position()[c]+"px":e
}})
}),bv.each({Height:"height",Width:"width"},function(d,c){bv.each({padding:"inner"+d,content:c,"":"outer"+d},function(b,a){bv.fn[a]=function(l,k){var j=arguments.length&&(b||"boolean"!=typeof l),i=b||(l===!0||k===!0?"margin":"border");
return b2(this,function(g,n,m){var h;
return bv.isWindow(g)?0===a.indexOf("outer")?g["inner"+d]:g.document.documentElement["client"+d]:9===g.nodeType?(h=g.documentElement,Math.max(g.body["scroll"+d],h["scroll"+d],g.body["offset"+d],h["offset"+d],h["client"+d])):void 0===m?bv.css(g,n,i):bv.style(g,n,m,i)
},c,j?l:void 0,j)
}
})
}),bv.fn.extend({bind:function(e,d,f){return this.on(e,null,d,f)
},unbind:function(d,c){return this.off(d,null,c)
},delegate:function(f,e,h,g){return this.on(e,f,h,g)
},undelegate:function(e,d,f){return 1===arguments.length?this.off(e,"**"):this.off(d,e||"**",f)
}}),bv.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return bv
});
var cG=bP.jQuery,cv=bP.$;
return bv.noConflict=function(a){return bP.$===bv&&(bP.$=cv),a&&bP.jQuery===bv&&(bP.jQuery=cG),bv
},bO||(bP.jQuery=bP.$=bv),bv
});
/*! jQuery UI - v1.12.1 - 2017-12-12
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/dialog.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(l){l.ui=l.ui||{};
var j=l.ui.version="1.12.1";
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var B=0;
var A=Array.prototype.slice;
l.cleanData=(function(I){return function(J){var L,M,K;
for(K=0;
(M=J[K])!=null;
K++){try{L=l._data(M,"events");
if(L&&L.remove){l(M).triggerHandler("remove")
}}catch(N){}}I(J)
}
})(l.cleanData);
l.widget=function(I,J,Q){var O,L,P;
var K={};
var N=I.split(".")[0];
I=I.split(".")[1];
var M=N+"-"+I;
if(!Q){Q=J;
J=l.Widget
}if(l.isArray(Q)){Q=l.extend.apply(null,[{}].concat(Q))
}l.expr[":"][M.toLowerCase()]=function(R){return !!l.data(R,M)
};
l[N]=l[N]||{};
O=l[N][I];
L=l[N][I]=function(R,S){if(!this._createWidget){return new L(R,S)
}if(arguments.length){this._createWidget(R,S)
}};
l.extend(L,O,{version:Q.version,_proto:l.extend({},Q),_childConstructors:[]});
P=new J();
P.options=l.widget.extend({},P.options);
l.each(Q,function(S,R){if(!l.isFunction(R)){K[S]=R;
return
}K[S]=(function(){function T(){return J.prototype[S].apply(this,arguments)
}function U(V){return J.prototype[S].apply(this,V)
}return function(){var X=this._super;
var V=this._superApply;
var W;
this._super=T;
this._superApply=U;
W=R.apply(this,arguments);
this._super=X;
this._superApply=V;
return W
}
})()
});
L.prototype=l.widget.extend(P,{widgetEventPrefix:O?(P.widgetEventPrefix||I):I},K,{constructor:L,namespace:N,widgetName:I,widgetFullName:M});
if(O){l.each(O._childConstructors,function(S,T){var R=T.prototype;
l.widget(R.namespace+"."+R.widgetName,L,T._proto)
});
delete O._childConstructors
}else{J._childConstructors.push(L)
}l.widget.bridge(I,L);
return L
};
l.widget.extend=function(N){var J=A.call(arguments,1);
var M=0;
var I=J.length;
var K;
var L;
for(;
M<I;
M++){for(K in J[M]){L=J[M][K];
if(J[M].hasOwnProperty(K)&&L!==undefined){if(l.isPlainObject(L)){N[K]=l.isPlainObject(N[K])?l.widget.extend({},N[K],L):l.widget.extend({},L)
}else{N[K]=L
}}}}return N
};
l.widget.bridge=function(J,I){var K=I.prototype.widgetFullName||J;
l.fn[J]=function(N){var L=typeof N==="string";
var M=A.call(arguments,1);
var O=this;
if(L){if(!this.length&&N==="instance"){O=undefined
}else{this.each(function(){var Q;
var P=l.data(this,K);
if(N==="instance"){O=P;
return false
}if(!P){return l.error("cannot call methods on "+J+" prior to initialization; attempted to call method '"+N+"'")
}if(!l.isFunction(P[N])||N.charAt(0)==="_"){return l.error("no such method '"+N+"' for "+J+" widget instance")
}Q=P[N].apply(P,M);
if(Q!==P&&Q!==undefined){O=Q&&Q.jquery?O.pushStack(Q.get()):Q;
return false
}})
}}else{if(M.length){N=l.widget.extend.apply(null,[N].concat(M))
}this.each(function(){var P=l.data(this,K);
if(P){P.option(N||{});
if(P._init){P._init()
}}else{l.data(this,K,new I(N,this))
}})
}return O
}
};
l.Widget=function(){};
l.Widget._childConstructors=[];
l.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(I,J){J=l(J||this.defaultElement||this)[0];
this.element=l(J);
this.uuid=B++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=l();
this.hoverable=l();
this.focusable=l();
this.classesElementLookup={};
if(J!==this){l.data(J,this.widgetFullName,this);
this._on(true,this.element,{remove:function(K){if(K.target===J){this.destroy()
}}});
this.document=l(J.style?J.ownerDocument:J.document||J);
this.window=l(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=l.widget.extend({},this.options,this._getCreateOptions(),I);
this._create();
if(this.options.disabled){this._setOptionDisabled(this.options.disabled)
}this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:l.noop,_create:l.noop,_init:l.noop,destroy:function(){var I=this;
this._destroy();
l.each(this.classesElementLookup,function(J,K){I._removeClass(K,J)
});
this.element.off(this.eventNamespace).removeData(this.widgetFullName);
this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
this.bindings.off(this.eventNamespace)
},_destroy:l.noop,widget:function(){return this.element
},option:function(L,M){var I=L;
var N;
var K;
var J;
if(arguments.length===0){return l.widget.extend({},this.options)
}if(typeof L==="string"){I={};
N=L.split(".");
L=N.shift();
if(N.length){K=I[L]=l.widget.extend({},this.options[L]);
for(J=0;
J<N.length-1;
J++){K[N[J]]=K[N[J]]||{};
K=K[N[J]]
}L=N.pop();
if(arguments.length===1){return K[L]===undefined?null:K[L]
}K[L]=M
}else{if(arguments.length===1){return this.options[L]===undefined?null:this.options[L]
}I[L]=M
}}this._setOptions(I);
return this
},_setOptions:function(I){var J;
for(J in I){this._setOption(J,I[J])
}return this
},_setOption:function(I,J){if(I==="classes"){this._setOptionClasses(J)
}this.options[I]=J;
if(I==="disabled"){this._setOptionDisabled(J)
}return this
},_setOptionClasses:function(L){var I,K,J;
for(I in L){J=this.classesElementLookup[I];
if(L[I]===this.options.classes[I]||!J||!J.length){continue
}K=l(J.get());
this._removeClass(J,I);
K.addClass(this._classes({element:K,keys:I,classes:L,add:true}))
}},_setOptionDisabled:function(I){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!I);
if(I){this._removeClass(this.hoverable,null,"ui-state-hover");
this._removeClass(this.focusable,null,"ui-state-focus")
}},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_classes:function(I){var J=[];
var K=this;
I=l.extend({element:this.element,classes:this.options.classes||{}},I);
function L(N,P){var O,M;
for(M=0;
M<N.length;
M++){O=K.classesElementLookup[N[M]]||l();
if(I.add){O=l(l.unique(O.get().concat(I.element.get())))
}else{O=l(O.not(I.element).get())
}K.classesElementLookup[N[M]]=O;
J.push(N[M]);
if(P&&I.classes[N[M]]){J.push(I.classes[N[M]])
}}}this._on(I.element,{remove:"_untrackClassesElement"});
if(I.keys){L(I.keys.match(/\S+/g)||[],true)
}if(I.extra){L(I.extra.match(/\S+/g)||[])
}return J.join(" ")
},_untrackClassesElement:function(J){var I=this;
l.each(I.classesElementLookup,function(K,L){if(l.inArray(J.target,L)!==-1){I.classesElementLookup[K]=l(L.not(J.target).get())
}})
},_removeClass:function(J,K,I){return this._toggleClass(J,K,I,false)
},_addClass:function(J,K,I){return this._toggleClass(J,K,I,true)
},_toggleClass:function(L,M,I,N){N=(typeof N==="boolean")?N:I;
var J=(typeof L==="string"||L===null),K={extra:J?M:I,keys:J?L:M,element:J?this.element:L,add:N};
K.element.toggleClass(this._classes(K),N);
return this
},_on:function(L,K,J){var M;
var I=this;
if(typeof L!=="boolean"){J=K;
K=L;
L=false
}if(!J){J=K;
K=this.element;
M=this.widget()
}else{K=M=l(K);
this.bindings=this.bindings.add(K)
}l.each(J,function(S,R){function P(){if(!L&&(I.options.disabled===true||l(this).hasClass("ui-state-disabled"))){return
}return(typeof R==="string"?I[R]:R).apply(I,arguments)
}if(typeof R!=="string"){P.guid=R.guid=R.guid||P.guid||l.guid++
}var Q=S.match(/^([\w:-]*)\s*(.*)$/);
var O=Q[1]+I.eventNamespace;
var N=Q[2];
if(N){M.on(O,N,P)
}else{K.on(O,P)
}})
},_off:function(J,I){I=(I||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
J.off(I).off(I);
this.bindings=l(this.bindings.not(J).get());
this.focusable=l(this.focusable.not(J).get());
this.hoverable=l(this.hoverable.not(J).get())
},_delay:function(L,K){function J(){return(typeof L==="string"?I[L]:L).apply(I,arguments)
}var I=this;
return setTimeout(J,K||0)
},_hoverable:function(I){this.hoverable=this.hoverable.add(I);
this._on(I,{mouseenter:function(J){this._addClass(l(J.currentTarget),null,"ui-state-hover")
},mouseleave:function(J){this._removeClass(l(J.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(I){this.focusable=this.focusable.add(I);
this._on(I,{focusin:function(J){this._addClass(l(J.currentTarget),null,"ui-state-focus")
},focusout:function(J){this._removeClass(l(J.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(I,J,K){var N,M;
var L=this.options[I];
K=K||{};
J=l.Event(J);
J.type=(I===this.widgetEventPrefix?I:this.widgetEventPrefix+I).toLowerCase();
J.target=this.element[0];
M=J.originalEvent;
if(M){for(N in M){if(!(N in J)){J[N]=M[N]
}}}this.element.trigger(J,K);
return !(l.isFunction(L)&&L.apply(this.element[0],[J].concat(K))===false||J.isDefaultPrevented())
}};
l.each({show:"fadeIn",hide:"fadeOut"},function(J,I){l.Widget.prototype["_"+J]=function(M,L,O){if(typeof L==="string"){L={effect:L}
}var N;
var K=!L?J:L===true||typeof L==="number"?I:L.effect||I;
L=L||{};
if(typeof L==="number"){L={duration:L}
}N=!l.isEmptyObject(L);
L.complete=O;
if(L.delay){M.delay(L.delay)
}if(N&&l.effects&&l.effects.effect[K]){M[J](L)
}else{if(K!==J&&M[K]){M[K](L.duration,L.easing,O)
}else{M.queue(function(P){l(this)[J]();
if(O){O.call(M[0])
}P()
})
}}}
});
var k=l.widget;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){var P,Q=Math.max,T=Math.abs,K=/left|center|right/,N=/top|center|bottom/,I=/[\+\-]\d+(\.[\d]+)?%?/,R=/^\w+/,J=/%$/,M=l.fn.position;
function S(W,V,U){return[parseFloat(W[0])*(J.test(W[0])?V/100:1),parseFloat(W[1])*(J.test(W[1])?U/100:1)]
}function O(U,V){return parseInt(l.css(U,V),10)||0
}function L(V){var U=V[0];
if(U.nodeType===9){return{width:V.width(),height:V.height(),offset:{top:0,left:0}}
}if(l.isWindow(U)){return{width:V.width(),height:V.height(),offset:{top:V.scrollTop(),left:V.scrollLeft()}}
}if(U.preventDefault){return{width:0,height:0,offset:{top:U.pageY,left:U.pageX}}
}return{width:V.outerWidth(),height:V.outerHeight(),offset:V.offset()}
}l.position={scrollbarWidth:function(){if(P!==undefined){return P
}var V,U,X=l("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),W=X.children()[0];
l("body").append(X);
V=W.offsetWidth;
X.css("overflow","scroll");
U=W.offsetWidth;
if(V===U){U=X[0].clientWidth
}X.remove();
return(P=V-U)
},getScrollInfo:function(Y){var X=Y.isWindow||Y.isDocument?"":Y.element.css("overflow-x"),W=Y.isWindow||Y.isDocument?"":Y.element.css("overflow-y"),V=X==="scroll"||(X==="auto"&&Y.width<Y.element[0].scrollWidth),U=W==="scroll"||(W==="auto"&&Y.height<Y.element[0].scrollHeight);
return{width:U?l.position.scrollbarWidth():0,height:V?l.position.scrollbarWidth():0}
},getWithinInfo:function(W){var X=l(W||window),U=l.isWindow(X[0]),Y=!!X[0]&&X[0].nodeType===9,V=!U&&!Y;
return{element:X,isWindow:U,isDocument:Y,offset:V?l(W).offset():{left:0,top:0},scrollLeft:X.scrollLeft(),scrollTop:X.scrollTop(),width:X.outerWidth(),height:X.outerHeight()}
}};
l.fn.position=function(ae){if(!ae||!ae.of){return M.apply(this,arguments)
}ae=l.extend({},ae);
var af,ab,Z,ad,Y,U,aa=l(ae.of),X=l.position.getWithinInfo(ae.within),V=l.position.getScrollInfo(X),ac=(ae.collision||"flip").split(" "),W={};
U=L(aa);
if(aa[0].preventDefault){ae.at="left top"
}ab=U.width;
Z=U.height;
ad=U.offset;
Y=l.extend({},ad);
l.each(["my","at"],function(){var ai=(ae[this]||"").split(" "),ah,ag;
if(ai.length===1){ai=K.test(ai[0])?ai.concat(["center"]):N.test(ai[0])?["center"].concat(ai):["center","center"]
}ai[0]=K.test(ai[0])?ai[0]:"center";
ai[1]=N.test(ai[1])?ai[1]:"center";
ah=I.exec(ai[0]);
ag=I.exec(ai[1]);
W[this]=[ah?ah[0]:0,ag?ag[0]:0];
ae[this]=[R.exec(ai[0])[0],R.exec(ai[1])[0]]
});
if(ac.length===1){ac[1]=ac[0]
}if(ae.at[0]==="right"){Y.left+=ab
}else{if(ae.at[0]==="center"){Y.left+=ab/2
}}if(ae.at[1]==="bottom"){Y.top+=Z
}else{if(ae.at[1]==="center"){Y.top+=Z/2
}}af=S(W.at,ab,Z);
Y.left+=af[0];
Y.top+=af[1];
return this.each(function(){var ah,aq,aj=l(this),al=aj.outerWidth(),ai=aj.outerHeight(),ak=O(this,"marginLeft"),ag=O(this,"marginTop"),ap=al+ak+O(this,"marginRight")+V.width,ao=ai+ag+O(this,"marginBottom")+V.height,am=l.extend({},Y),an=S(W.my,aj.outerWidth(),aj.outerHeight());
if(ae.my[0]==="right"){am.left-=al
}else{if(ae.my[0]==="center"){am.left-=al/2
}}if(ae.my[1]==="bottom"){am.top-=ai
}else{if(ae.my[1]==="center"){am.top-=ai/2
}}am.left+=an[0];
am.top+=an[1];
ah={marginLeft:ak,marginTop:ag};
l.each(["left","top"],function(at,ar){if(l.ui.position[ac[at]]){l.ui.position[ac[at]][ar](am,{targetWidth:ab,targetHeight:Z,elemWidth:al,elemHeight:ai,collisionPosition:ah,collisionWidth:ap,collisionHeight:ao,offset:[af[0]+an[0],af[1]+an[1]],my:ae.my,at:ae.at,within:X,elem:aj})
}});
if(ae.using){aq=function(av){var ax=ad.left-am.left,au=ax+ab-al,aw=ad.top-am.top,at=aw+Z-ai,ar={target:{element:aa,left:ad.left,top:ad.top,width:ab,height:Z},element:{element:aj,left:am.left,top:am.top,width:al,height:ai},horizontal:au<0?"left":ax>0?"right":"center",vertical:at<0?"top":aw>0?"bottom":"middle"};
if(ab<al&&T(ax+au)<ab){ar.horizontal="center"
}if(Z<ai&&T(aw+at)<Z){ar.vertical="middle"
}if(Q(T(ax),T(au))>Q(T(aw),T(at))){ar.important="horizontal"
}else{ar.important="vertical"
}ae.using.call(this,av,ar)
}
}aj.offset(l.extend(am,{using:aq}))
})
};
l.ui.position={fit:{left:function(Y,X){var W=X.within,aa=W.isWindow?W.scrollLeft:W.offset.left,ac=W.width,Z=Y.left-X.collisionPosition.marginLeft,ab=aa-Z,V=Z+X.collisionWidth-ac-aa,U;
if(X.collisionWidth>ac){if(ab>0&&V<=0){U=Y.left+ab+X.collisionWidth-ac-aa;
Y.left+=ab-U
}else{if(V>0&&ab<=0){Y.left=aa
}else{if(ab>V){Y.left=aa+ac-X.collisionWidth
}else{Y.left=aa
}}}}else{if(ab>0){Y.left+=ab
}else{if(V>0){Y.left-=V
}else{Y.left=Q(Y.left-Z,Y.left)
}}}},top:function(X,W){var V=W.within,ab=V.isWindow?V.scrollTop:V.offset.top,ac=W.within.height,Z=X.top-W.collisionPosition.marginTop,aa=ab-Z,Y=Z+W.collisionHeight-ac-ab,U;
if(W.collisionHeight>ac){if(aa>0&&Y<=0){U=X.top+aa+W.collisionHeight-ac-ab;
X.top+=aa-U
}else{if(Y>0&&aa<=0){X.top=ab
}else{if(aa>Y){X.top=ab+ac-W.collisionHeight
}else{X.top=ab
}}}}else{if(aa>0){X.top+=aa
}else{if(Y>0){X.top-=Y
}else{X.top=Q(X.top-Z,X.top)
}}}}},flip:{left:function(aa,Z){var Y=Z.within,ae=Y.offset.left+Y.scrollLeft,ah=Y.width,W=Y.isWindow?Y.scrollLeft:Y.offset.left,ab=aa.left-Z.collisionPosition.marginLeft,af=ab-W,V=ab+Z.collisionWidth-ah-W,ad=Z.my[0]==="left"?-Z.elemWidth:Z.my[0]==="right"?Z.elemWidth:0,ag=Z.at[0]==="left"?Z.targetWidth:Z.at[0]==="right"?-Z.targetWidth:0,X=-2*Z.offset[0],U,ac;
if(af<0){U=aa.left+ad+ag+X+Z.collisionWidth-ah-ae;
if(U<0||U<T(af)){aa.left+=ad+ag+X
}}else{if(V>0){ac=aa.left-Z.collisionPosition.marginLeft+ad+ag+X-W;
if(ac>0||T(ac)<V){aa.left+=ad+ag+X
}}}},top:function(Z,Y){var X=Y.within,ag=X.offset.top+X.scrollTop,ah=X.height,U=X.isWindow?X.scrollTop:X.offset.top,ab=Z.top-Y.collisionPosition.marginTop,ad=ab-U,aa=ab+Y.collisionHeight-ah-U,ae=Y.my[1]==="top",ac=ae?-Y.elemHeight:Y.my[1]==="bottom"?Y.elemHeight:0,ai=Y.at[1]==="top"?Y.targetHeight:Y.at[1]==="bottom"?-Y.targetHeight:0,W=-2*Y.offset[1],af,V;
if(ad<0){V=Z.top+ac+ai+W+Y.collisionHeight-ah-ag;
if(V<0||V<T(ad)){Z.top+=ac+ai+W
}}else{if(aa>0){af=Z.top-Y.collisionPosition.marginTop+ac+ai+W-U;
if(af>0||T(af)<aa){Z.top+=ac+ai+W
}}}}},flipfit:{left:function(){l.ui.position.flip.left.apply(this,arguments);
l.ui.position.fit.left.apply(this,arguments)
},top:function(){l.ui.position.flip.top.apply(this,arguments);
l.ui.position.fit.top.apply(this,arguments)
}}}
})();
var G=l.ui.position;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var H=l.extend(l.expr[":"],{data:l.expr.createPseudo?l.expr.createPseudo(function(I){return function(J){return !!l.data(J,I)
}
}):function(K,J,I){return !!l.data(K,I[3])
}});
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var h=l.fn.extend({disableSelection:(function(){var I="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(I+".ui-disableSelection",function(J){J.preventDefault()
})
}
})(),enableSelection:function(){return this.off(".ui-disableSelection")
}});
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.ui.focusable=function(L,J){var O,M,K,N,I,P=L.nodeName.toLowerCase();
if("area"===P){O=L.parentNode;
M=O.name;
if(!L.href||!M||O.nodeName.toLowerCase()!=="map"){return false
}K=l("img[usemap='#"+M+"']");
return K.length>0&&K.is(":visible")
}if(/^(input|select|textarea|button|object)$/.test(P)){N=!L.disabled;
if(N){I=l(L).closest("fieldset")[0];
if(I){N=!I.disabled
}}}else{if("a"===P){N=L.href||J
}else{N=J
}}return N&&l(L).is(":visible")&&g(l(L))
};
function g(J){var I=J.css("visibility");
while(I==="inherit"){J=J.parent();
I=J.css("visibility")
}return I!=="hidden"
}l.extend(l.expr[":"],{focusable:function(I){return l.ui.focusable(I,l.attr(I,"tabindex")!=null)
}});
var v=l.ui.focusable;
var c=l.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):l(this[0].form)
};
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var b=l.ui.formResetMixin={_formResetHandler:function(){var I=l(this);
setTimeout(function(){var J=I.data("ui-form-reset-instances");
l.each(J,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){this.form=this.element.form();
if(!this.form.length){return
}var I=this.form.data("ui-form-reset-instances")||[];
if(!I.length){this.form.on("reset.ui-form-reset",this._formResetHandler)
}I.push(this);
this.form.data("ui-form-reset-instances",I)
},_unbindFormResetHandler:function(){if(!this.form.length){return
}var I=this.form.data("ui-form-reset-instances");
I.splice(l.inArray(this,I),1);
if(I.length){this.form.data("ui-form-reset-instances",I)
}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}};
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var f=l.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
var r=l.ui.escapeSelector=(function(){var I=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(J){return J.replace(I,"\\$1")
}
})();
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var y=l.fn.labels=function(){var J,I,M,L,K;
if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels)
}L=this.eq(0).parents("label");
M=this.attr("id");
if(M){J=this.eq(0).parents().last();
K=J.add(J.length?J.siblings():this.siblings());
I="label[for='"+l.ui.escapeSelector(M)+"']";
L=L.add(K.find(I).addBack(I))
}return this.pushStack(L)
};
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var u=l.fn.scrollParent=function(K){var J=this.css("position"),I=J==="absolute",L=K?/(auto|scroll|hidden)/:/(auto|scroll)/,M=this.parents().filter(function(){var N=l(this);
if(I&&N.css("position")==="static"){return false
}return L.test(N.css("overflow")+N.css("overflow-y")+N.css("overflow-x"))
}).eq(0);
return J==="fixed"||!M.length?l(this[0].ownerDocument||document):M
};
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var p=l.extend(l.expr[":"],{tabbable:function(K){var J=l.attr(K,"tabindex"),I=J!=null;
return(!I||J>=0)&&l.ui.focusable(K,I)
}});
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var q=l.fn.extend({uniqueId:(function(){var I=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++I)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){l(this).removeAttr("id")
}})
}});
var t=l.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var s=false;
l(document).on("mouseup",function(){s=false
});
var o=l.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var I=this;
this.element.on("mousedown."+this.widgetName,function(J){return I._mouseDown(J)
}).on("click."+this.widgetName,function(J){if(true===l.data(J.target,I.widgetName+".preventClickEvent")){l.removeData(J.target,I.widgetName+".preventClickEvent");
J.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.off("."+this.widgetName);
if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(K){if(s){return
}this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(K));
this._mouseDownEvent=K;
var J=this,L=(K.which===1),I=(typeof this.options.cancel==="string"&&K.target.nodeName?l(K.target).closest(this.options.cancel).length:false);
if(!L||I||!this._mouseCapture(K)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){J.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(K)&&this._mouseDelayMet(K)){this._mouseStarted=(this._mouseStart(K)!==false);
if(!this._mouseStarted){K.preventDefault();
return true
}}if(true===l.data(K.target,this.widgetName+".preventClickEvent")){l.removeData(K.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(M){return J._mouseMove(M)
};
this._mouseUpDelegate=function(M){return J._mouseUp(M)
};
this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);
K.preventDefault();
s=true;
return true
},_mouseMove:function(I){if(this._mouseMoved){if(l.ui.ie&&(!document.documentMode||document.documentMode<9)&&!I.button){return this._mouseUp(I)
}else{if(!I.which){if(I.originalEvent.altKey||I.originalEvent.ctrlKey||I.originalEvent.metaKey||I.originalEvent.shiftKey){this.ignoreMissingWhich=true
}else{if(!this.ignoreMissingWhich){return this._mouseUp(I)
}}}}}if(I.which||I.button){this._mouseMoved=true
}if(this._mouseStarted){this._mouseDrag(I);
return I.preventDefault()
}if(this._mouseDistanceMet(I)&&this._mouseDelayMet(I)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,I)!==false);
(this._mouseStarted?this._mouseDrag(I):this._mouseUp(I))
}return !this._mouseStarted
},_mouseUp:function(I){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(I.target===this._mouseDownEvent.target){l.data(I.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(I)
}if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);
delete this._mouseDelayTimer
}this.ignoreMissingWhich=false;
s=false;
I.preventDefault()
},_mouseDistanceMet:function(I){return(Math.max(Math.abs(this._mouseDownEvent.pageX-I.pageX),Math.abs(this._mouseDownEvent.pageY-I.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}});
var i=l.ui.plugin={add:function(J,K,M){var I,L=l.ui[J].prototype;
for(I in M){L.plugins[I]=L.plugins[I]||[];
L.plugins[I].push([K,M[I]])
}},call:function(I,L,K,J){var M,N=I.plugins[L];
if(!N){return
}if(!J&&(!I.element[0].parentNode||I.element[0].parentNode.nodeType===11)){return
}for(M=0;
M<N.length;
M++){if(I.options[N[M][0]]){N[M][1].apply(I.element,K)
}}}};
var n=l.ui.safeActiveElement=function(I){var K;
try{K=I.activeElement
}catch(J){K=I.body
}if(!K){K=I.body
}if(!K.nodeName){K=I.body
}return K
};
var D=l.ui.safeBlur=function(I){if(I&&I.nodeName.toLowerCase()!=="body"){l(I).trigger("blur")
}};
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.draggable",l.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()
}if(this.options.addClasses){this._addClass("ui-draggable")
}this._setHandleClassName();
this._mouseInit()
},_setOption:function(I,J){this._super(I,J);
if(I==="handle"){this._removeHandleClassName();
this._setHandleClassName()
}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;
return
}this._removeHandleClassName();
this._mouseDestroy()
},_mouseCapture:function(I){var J=this.options;
if(this.helper||J.disabled||l(I.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(I);
if(!this.handle){return false
}this._blurActiveElement(I);
this._blockFrames(J.iframeFix===true?"iframe":J.iframeFix);
return true
},_blockFrames:function(I){this.iframeBlocks=this.document.find(I).map(function(){var J=l(this);
return l("<div>").css("position","absolute").appendTo(J.parent()).outerWidth(J.outerWidth()).outerHeight(J.outerHeight()).offset(J.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_blurActiveElement:function(J){var I=l.ui.safeActiveElement(this.document[0]),K=l(J.target);
if(K.closest(I).length){return
}l.ui.safeBlur(I)
},_mouseStart:function(I){var J=this.options;
this.helper=this._createHelper(I);
this._addClass(this.helper,"ui-draggable-dragging");
this._cacheHelperProportions();
if(l.ui.ddmanager){l.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){return l(this).css("position")==="fixed"
}).length>0;
this.positionAbs=this.element.offset();
this._refreshOffsets(I);
this.originalPosition=this.position=this._generatePosition(I,false);
this.originalPageX=I.pageX;
this.originalPageY=I.pageY;
(J.cursorAt&&this._adjustOffsetFromHelper(J.cursorAt));
this._setContainment();
if(this._trigger("start",I)===false){this._clear();
return false
}this._cacheHelperProportions();
if(l.ui.ddmanager&&!J.dropBehaviour){l.ui.ddmanager.prepareOffsets(this,I)
}this._mouseDrag(I,true);
if(l.ui.ddmanager){l.ui.ddmanager.dragStart(this,I)
}return true
},_refreshOffsets:function(I){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};
this.offset.click={left:I.pageX-this.offset.left,top:I.pageY-this.offset.top}
},_mouseDrag:function(I,K){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(I,true);
this.positionAbs=this._convertPositionTo("absolute");
if(!K){var J=this._uiHash();
if(this._trigger("drag",I,J)===false){this._mouseUp(new l.Event("mouseup",I));
return false
}this.position=J.position
}this.helper[0].style.left=this.position.left+"px";
this.helper[0].style.top=this.position.top+"px";
if(l.ui.ddmanager){l.ui.ddmanager.drag(this,I)
}return false
},_mouseStop:function(J){var I=this,K=false;
if(l.ui.ddmanager&&!this.options.dropBehaviour){K=l.ui.ddmanager.drop(this,J)
}if(this.dropped){K=this.dropped;
this.dropped=false
}if((this.options.revert==="invalid"&&!K)||(this.options.revert==="valid"&&K)||this.options.revert===true||(l.isFunction(this.options.revert)&&this.options.revert.call(this.element,K))){l(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(I._trigger("stop",J)!==false){I._clear()
}})
}else{if(this._trigger("stop",J)!==false){this._clear()
}}return false
},_mouseUp:function(I){this._unblockFrames();
if(l.ui.ddmanager){l.ui.ddmanager.dragStop(this,I)
}if(this.handleElement.is(I.target)){this.element.trigger("focus")
}return l.ui.mouse.prototype._mouseUp.call(this,I)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new l.Event("mouseup",{target:this.element[0]}))
}else{this._clear()
}return this
},_getHandle:function(I){return this.options.handle?!!l(I.target).closest(this.element.find(this.options.handle)).length:true
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;
this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(J){var L=this.options,K=l.isFunction(L.helper),I=K?l(L.helper.apply(this.element[0],[J])):(L.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!I.parents("body").length){I.appendTo((L.appendTo==="parent"?this.element[0].parentNode:L.appendTo))
}if(K&&I[0]===this.element[0]){this._setPositionRelative()
}if(I[0]!==this.element[0]&&!(/(fixed|absolute)/).test(I.css("position"))){I.css("position","absolute")
}return I
},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}},_adjustOffsetFromHelper:function(I){if(typeof I==="string"){I=I.split(" ")
}if(l.isArray(I)){I={left:+I[0],top:+I[1]||0}
}if("left" in I){this.offset.click.left=I.left+this.margins.left
}if("right" in I){this.offset.click.left=this.helperProportions.width-I.right+this.margins.left
}if("top" in I){this.offset.click.top=I.top+this.margins.top
}if("bottom" in I){this.offset.click.top=this.helperProportions.height-I.bottom+this.margins.top
}},_isRootNode:function(I){return(/(html|body)/i).test(I.tagName)||I===this.document[0]
},_getParentOffset:function(){var J=this.offsetParent.offset(),I=this.document[0];
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==I&&l.contains(this.scrollParent[0],this.offsetParent[0])){J.left+=this.scrollParent.scrollLeft();
J.top+=this.scrollParent.scrollTop()
}if(this._isRootNode(this.offsetParent[0])){J={top:0,left:0}
}return{top:J.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:J.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}
}var I=this.element.position(),J=this._isRootNode(this.scrollParent[0]);
return{top:I.top-(parseInt(this.helper.css("top"),10)||0)+(!J?this.scrollParent.scrollTop():0),left:I.left-(parseInt(this.helper.css("left"),10)||0)+(!J?this.scrollParent.scrollLeft():0)}
},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var J,M,K,L=this.options,I=this.document[0];
this.relativeContainer=null;
if(!L.containment){this.containment=null;
return
}if(L.containment==="window"){this.containment=[l(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,l(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,l(window).scrollLeft()+l(window).width()-this.helperProportions.width-this.margins.left,l(window).scrollTop()+(l(window).height()||I.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(L.containment==="document"){this.containment=[0,0,l(I).width()-this.helperProportions.width-this.margins.left,(l(I).height()||I.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(L.containment.constructor===Array){this.containment=L.containment;
return
}if(L.containment==="parent"){L.containment=this.helper[0].parentNode
}M=l(L.containment);
K=M[0];
if(!K){return
}J=/(scroll|auto)/.test(M.css("overflow"));
this.containment=[(parseInt(M.css("borderLeftWidth"),10)||0)+(parseInt(M.css("paddingLeft"),10)||0),(parseInt(M.css("borderTopWidth"),10)||0)+(parseInt(M.css("paddingTop"),10)||0),(J?Math.max(K.scrollWidth,K.offsetWidth):K.offsetWidth)-(parseInt(M.css("borderRightWidth"),10)||0)-(parseInt(M.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(J?Math.max(K.scrollHeight,K.offsetHeight):K.offsetHeight)-(parseInt(M.css("borderBottomWidth"),10)||0)-(parseInt(M.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relativeContainer=M
},_convertPositionTo:function(J,L){if(!L){L=this.position
}var I=J==="absolute"?1:-1,K=this._isRootNode(this.scrollParent[0]);
return{top:(L.top+this.offset.relative.top*I+this.offset.parent.top*I-((this.cssPosition==="fixed"?-this.offset.scroll.top:(K?0:this.offset.scroll.top))*I)),left:(L.left+this.offset.relative.left*I+this.offset.parent.left*I-((this.cssPosition==="fixed"?-this.offset.scroll.left:(K?0:this.offset.scroll.left))*I))}
},_generatePosition:function(J,P){var I,Q,R,L,K=this.options,O=this._isRootNode(this.scrollParent[0]),N=J.pageX,M=J.pageY;
if(!O||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}
}if(P){if(this.containment){if(this.relativeContainer){Q=this.relativeContainer.offset();
I=[this.containment[0]+Q.left,this.containment[1]+Q.top,this.containment[2]+Q.left,this.containment[3]+Q.top]
}else{I=this.containment
}if(J.pageX-this.offset.click.left<I[0]){N=I[0]+this.offset.click.left
}if(J.pageY-this.offset.click.top<I[1]){M=I[1]+this.offset.click.top
}if(J.pageX-this.offset.click.left>I[2]){N=I[2]+this.offset.click.left
}if(J.pageY-this.offset.click.top>I[3]){M=I[3]+this.offset.click.top
}}if(K.grid){R=K.grid[1]?this.originalPageY+Math.round((M-this.originalPageY)/K.grid[1])*K.grid[1]:this.originalPageY;
M=I?((R-this.offset.click.top>=I[1]||R-this.offset.click.top>I[3])?R:((R-this.offset.click.top>=I[1])?R-K.grid[1]:R+K.grid[1])):R;
L=K.grid[0]?this.originalPageX+Math.round((N-this.originalPageX)/K.grid[0])*K.grid[0]:this.originalPageX;
N=I?((L-this.offset.click.left>=I[0]||L-this.offset.click.left>I[2])?L:((L-this.offset.click.left>=I[0])?L-K.grid[0]:L+K.grid[0])):L
}if(K.axis==="y"){N=this.originalPageX
}if(K.axis==="x"){M=this.originalPageY
}}return{top:(M-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(O?0:this.offset.scroll.top))),left:(N-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(O?0:this.offset.scroll.left)))}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){this.destroy()
}},_trigger:function(I,J,K){K=K||this._uiHash();
l.ui.plugin.call(this,I,[J,K,this],true);
if(/^(drag|start|stop)/.test(I)){this.positionAbs=this._convertPositionTo("absolute");
K.offset=this.positionAbs
}return l.Widget.prototype._trigger.call(this,I,J,K)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
l.ui.plugin.add("draggable","connectToSortable",{start:function(K,L,I){var J=l.extend({},L,{item:I.element});
I.sortables=[];
l(I.options.connectToSortable).each(function(){var M=l(this).sortable("instance");
if(M&&!M.options.disabled){I.sortables.push(M);
M.refreshPositions();
M._trigger("activate",K,J)
}})
},stop:function(K,L,I){var J=l.extend({},L,{item:I.element});
I.cancelHelperRemoval=false;
l.each(I.sortables,function(){var M=this;
if(M.isOver){M.isOver=0;
I.cancelHelperRemoval=true;
M.cancelHelperRemoval=false;
M._storedCSS={position:M.placeholder.css("position"),top:M.placeholder.css("top"),left:M.placeholder.css("left")};
M._mouseStop(K);
M.options.helper=M.options._helper
}else{M.cancelHelperRemoval=true;
M._trigger("deactivate",K,J)
}})
},drag:function(J,K,I){l.each(I.sortables,function(){var L=false,M=this;
M.positionAbs=I.positionAbs;
M.helperProportions=I.helperProportions;
M.offset.click=I.offset.click;
if(M._intersectsWith(M.containerCache)){L=true;
l.each(I.sortables,function(){this.positionAbs=I.positionAbs;
this.helperProportions=I.helperProportions;
this.offset.click=I.offset.click;
if(this!==M&&this._intersectsWith(this.containerCache)&&l.contains(M.element[0],this.element[0])){L=false
}return L
})
}if(L){if(!M.isOver){M.isOver=1;
I._parent=K.helper.parent();
M.currentItem=K.helper.appendTo(M.element).data("ui-sortable-item",true);
M.options._helper=M.options.helper;
M.options.helper=function(){return K.helper[0]
};
J.target=M.currentItem[0];
M._mouseCapture(J,true);
M._mouseStart(J,true,true);
M.offset.click.top=I.offset.click.top;
M.offset.click.left=I.offset.click.left;
M.offset.parent.left-=I.offset.parent.left-M.offset.parent.left;
M.offset.parent.top-=I.offset.parent.top-M.offset.parent.top;
I._trigger("toSortable",J);
I.dropped=M.element;
l.each(I.sortables,function(){this.refreshPositions()
});
I.currentItem=I.element;
M.fromOutside=I
}if(M.currentItem){M._mouseDrag(J);
K.position=M.position
}}else{if(M.isOver){M.isOver=0;
M.cancelHelperRemoval=true;
M.options._revert=M.options.revert;
M.options.revert=false;
M._trigger("out",J,M._uiHash(M));
M._mouseStop(J,true);
M.options.revert=M.options._revert;
M.options.helper=M.options._helper;
if(M.placeholder){M.placeholder.remove()
}K.helper.appendTo(I._parent);
I._refreshOffsets(J);
K.position=I._generatePosition(J,true);
I._trigger("fromSortable",J);
I.dropped=false;
l.each(I.sortables,function(){this.refreshPositions()
})
}}})
}});
l.ui.plugin.add("draggable","cursor",{start:function(K,L,I){var J=l("body"),M=I.options;
if(J.css("cursor")){M._cursor=J.css("cursor")
}J.css("cursor",M.cursor)
},stop:function(J,K,I){var L=I.options;
if(L._cursor){l("body").css("cursor",L._cursor)
}}});
l.ui.plugin.add("draggable","opacity",{start:function(K,L,I){var J=l(L.helper),M=I.options;
if(J.css("opacity")){M._opacity=J.css("opacity")
}J.css("opacity",M.opacity)
},stop:function(J,K,I){var L=I.options;
if(L._opacity){l(K.helper).css("opacity",L._opacity)
}}});
l.ui.plugin.add("draggable","scroll",{start:function(J,K,I){if(!I.scrollParentNotHidden){I.scrollParentNotHidden=I.helper.scrollParent(false)
}if(I.scrollParentNotHidden[0]!==I.document[0]&&I.scrollParentNotHidden[0].tagName!=="HTML"){I.overflowOffset=I.scrollParentNotHidden.offset()
}},drag:function(L,M,K){var N=K.options,J=false,O=K.scrollParentNotHidden[0],I=K.document[0];
if(O!==I&&O.tagName!=="HTML"){if(!N.axis||N.axis!=="x"){if((K.overflowOffset.top+O.offsetHeight)-L.pageY<N.scrollSensitivity){O.scrollTop=J=O.scrollTop+N.scrollSpeed
}else{if(L.pageY-K.overflowOffset.top<N.scrollSensitivity){O.scrollTop=J=O.scrollTop-N.scrollSpeed
}}}if(!N.axis||N.axis!=="y"){if((K.overflowOffset.left+O.offsetWidth)-L.pageX<N.scrollSensitivity){O.scrollLeft=J=O.scrollLeft+N.scrollSpeed
}else{if(L.pageX-K.overflowOffset.left<N.scrollSensitivity){O.scrollLeft=J=O.scrollLeft-N.scrollSpeed
}}}}else{if(!N.axis||N.axis!=="x"){if(L.pageY-l(I).scrollTop()<N.scrollSensitivity){J=l(I).scrollTop(l(I).scrollTop()-N.scrollSpeed)
}else{if(l(window).height()-(L.pageY-l(I).scrollTop())<N.scrollSensitivity){J=l(I).scrollTop(l(I).scrollTop()+N.scrollSpeed)
}}}if(!N.axis||N.axis!=="y"){if(L.pageX-l(I).scrollLeft()<N.scrollSensitivity){J=l(I).scrollLeft(l(I).scrollLeft()-N.scrollSpeed)
}else{if(l(window).width()-(L.pageX-l(I).scrollLeft())<N.scrollSensitivity){J=l(I).scrollLeft(l(I).scrollLeft()+N.scrollSpeed)
}}}}if(J!==false&&l.ui.ddmanager&&!N.dropBehaviour){l.ui.ddmanager.prepareOffsets(K,L)
}}});
l.ui.plugin.add("draggable","snap",{start:function(J,K,I){var L=I.options;
I.snapElements=[];
l(L.snap.constructor!==String?(L.snap.items||":data(ui-draggable)"):L.snap).each(function(){var N=l(this),M=N.offset();
if(this!==I.element[0]){I.snapElements.push({item:this,width:N.outerWidth(),height:N.outerHeight(),top:M.top,left:M.left})
}})
},drag:function(U,R,L){var I,Z,N,O,T,Q,P,aa,V,M,S=L.options,Y=S.snapTolerance,X=R.offset.left,W=X+L.helperProportions.width,K=R.offset.top,J=K+L.helperProportions.height;
for(V=L.snapElements.length-1;
V>=0;
V--){T=L.snapElements[V].left-L.margins.left;
Q=T+L.snapElements[V].width;
P=L.snapElements[V].top-L.margins.top;
aa=P+L.snapElements[V].height;
if(W<T-Y||X>Q+Y||J<P-Y||K>aa+Y||!l.contains(L.snapElements[V].item.ownerDocument,L.snapElements[V].item)){if(L.snapElements[V].snapping){(L.options.snap.release&&L.options.snap.release.call(L.element,U,l.extend(L._uiHash(),{snapItem:L.snapElements[V].item})))
}L.snapElements[V].snapping=false;
continue
}if(S.snapMode!=="inner"){I=Math.abs(P-J)<=Y;
Z=Math.abs(aa-K)<=Y;
N=Math.abs(T-W)<=Y;
O=Math.abs(Q-X)<=Y;
if(I){R.position.top=L._convertPositionTo("relative",{top:P-L.helperProportions.height,left:0}).top
}if(Z){R.position.top=L._convertPositionTo("relative",{top:aa,left:0}).top
}if(N){R.position.left=L._convertPositionTo("relative",{top:0,left:T-L.helperProportions.width}).left
}if(O){R.position.left=L._convertPositionTo("relative",{top:0,left:Q}).left
}}M=(I||Z||N||O);
if(S.snapMode!=="outer"){I=Math.abs(P-K)<=Y;
Z=Math.abs(aa-J)<=Y;
N=Math.abs(T-X)<=Y;
O=Math.abs(Q-W)<=Y;
if(I){R.position.top=L._convertPositionTo("relative",{top:P,left:0}).top
}if(Z){R.position.top=L._convertPositionTo("relative",{top:aa-L.helperProportions.height,left:0}).top
}if(N){R.position.left=L._convertPositionTo("relative",{top:0,left:T}).left
}if(O){R.position.left=L._convertPositionTo("relative",{top:0,left:Q-L.helperProportions.width}).left
}}if(!L.snapElements[V].snapping&&(I||Z||N||O||M)){(L.options.snap.snap&&L.options.snap.snap.call(L.element,U,l.extend(L._uiHash(),{snapItem:L.snapElements[V].item})))
}L.snapElements[V].snapping=(I||Z||N||O||M)
}}});
l.ui.plugin.add("draggable","stack",{start:function(K,L,I){var J,N=I.options,M=l.makeArray(l(N.stack)).sort(function(P,O){return(parseInt(l(P).css("zIndex"),10)||0)-(parseInt(l(O).css("zIndex"),10)||0)
});
if(!M.length){return
}J=parseInt(l(M[0]).css("zIndex"),10)||0;
l(M).each(function(O){l(this).css("zIndex",J+O)
});
this.css("zIndex",(J+M.length))
}});
l.ui.plugin.add("draggable","zIndex",{start:function(K,L,I){var J=l(L.helper),M=I.options;
if(J.css("zIndex")){M._zIndex=J.css("zIndex")
}J.css("zIndex",M.zIndex)
},stop:function(J,K,I){var L=I.options;
if(L._zIndex){l(K.helper).css("zIndex",L._zIndex)
}}});
var C=l.ui.draggable;
/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var J,K=this.options,I=K.accept;
this.isover=false;
this.isout=true;
this.accept=l.isFunction(I)?I:function(L){return L.is(I)
};
this.proportions=function(){if(arguments.length){J=arguments[0]
}else{return J?J:J={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
this._addToManager(K.scope);
K.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(I){l.ui.ddmanager.droppables[I]=l.ui.ddmanager.droppables[I]||[];
l.ui.ddmanager.droppables[I].push(this)
},_splice:function(I){var J=0;
for(;
J<I.length;
J++){if(I[J]===this){I.splice(J,1)
}}},_destroy:function(){var I=l.ui.ddmanager.droppables[this.options.scope];
this._splice(I)
},_setOption:function(J,K){if(J==="accept"){this.accept=l.isFunction(K)?K:function(L){return L.is(K)
}
}else{if(J==="scope"){var I=l.ui.ddmanager.droppables[this.options.scope];
this._splice(I);
this._addToManager(K)
}}this._super(J,K)
},_activate:function(J){var I=l.ui.ddmanager.current;
this._addActiveClass();
if(I){this._trigger("activate",J,this.ui(I))
}},_deactivate:function(J){var I=l.ui.ddmanager.current;
this._removeActiveClass();
if(I){this._trigger("deactivate",J,this.ui(I))
}},_over:function(J){var I=l.ui.ddmanager.current;
if(!I||(I.currentItem||I.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(I.currentItem||I.element))){this._addHoverClass();
this._trigger("over",J,this.ui(I))
}},_out:function(J){var I=l.ui.ddmanager.current;
if(!I||(I.currentItem||I.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(I.currentItem||I.element))){this._removeHoverClass();
this._trigger("out",J,this.ui(I))
}},_drop:function(J,K){var I=K||l.ui.ddmanager.current,L=false;
if(!I||(I.currentItem||I.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var M=l(this).droppable("instance");
if(M.options.greedy&&!M.options.disabled&&M.options.scope===I.options.scope&&M.accept.call(M.element[0],(I.currentItem||I.element))&&x(I,l.extend(M,{offset:M.element.offset()}),M.options.tolerance,J)){L=true;
return false
}});
if(L){return false
}if(this.accept.call(this.element[0],(I.currentItem||I.element))){this._removeActiveClass();
this._removeHoverClass();
this._trigger("drop",J,this.ui(I));
return this.element
}return false
},ui:function(I){return{draggable:(I.currentItem||I.element),helper:I.helper,position:I.position,offset:I.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var x=l.ui.intersect=(function(){function I(K,J,L){return(K>=J)&&(K<(J+L))
}return function(U,O,S,K){if(!O.offset){return false
}var M=(U.positionAbs||U.position.absolute).left+U.margins.left,R=(U.positionAbs||U.position.absolute).top+U.margins.top,L=M+U.helperProportions.width,Q=R+U.helperProportions.height,N=O.offset.left,T=O.offset.top,J=N+O.proportions().width,P=T+O.proportions().height;
switch(S){case"fit":return(N<=M&&L<=J&&T<=R&&Q<=P);
case"intersect":return(N<M+(U.helperProportions.width/2)&&L-(U.helperProportions.width/2)<J&&T<R+(U.helperProportions.height/2)&&Q-(U.helperProportions.height/2)<P);
case"pointer":return I(K.pageY,T,O.proportions().height)&&I(K.pageX,N,O.proportions().width);
case"touch":return((R>=T&&R<=P)||(Q>=T&&Q<=P)||(R<T&&Q>P))&&((M>=N&&M<=J)||(L>=N&&L<=J)||(M<N&&L>J));
default:return false
}}
})();
l.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(L,N){var K,J,I=l.ui.ddmanager.droppables[L.options.scope]||[],M=N?N.type:null,O=(L.currentItem||L.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(K=0;
K<I.length;
K++){if(I[K].options.disabled||(L&&!I[K].accept.call(I[K].element[0],(L.currentItem||L.element)))){continue
}for(J=0;
J<O.length;
J++){if(O[J]===I[K].element[0]){I[K].proportions().height=0;
continue droppablesLoop
}}I[K].visible=I[K].element.css("display")!=="none";
if(!I[K].visible){continue
}if(M==="mousedown"){I[K]._activate.call(I[K],N)
}I[K].offset=I[K].element.offset();
I[K].proportions({width:I[K].element[0].offsetWidth,height:I[K].element[0].offsetHeight})
}},drop:function(I,J){var K=false;
l.each((l.ui.ddmanager.droppables[I.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&x(I,this,this.options.tolerance,J)){K=this._drop.call(this,J)||K
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(I.currentItem||I.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,J)
}});
return K
},dragStart:function(I,J){I.element.parentsUntil("body").on("scroll.droppable",function(){if(!I.options.refreshPositions){l.ui.ddmanager.prepareOffsets(I,J)
}})
},drag:function(I,J){if(I.options.refreshPositions){l.ui.ddmanager.prepareOffsets(I,J)
}l.each(l.ui.ddmanager.droppables[I.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var N,L,K,M=x(I,this,this.options.tolerance,J),O=!M&&this.isover?"isout":(M&&!this.isover?"isover":null);
if(!O){return
}if(this.options.greedy){L=this.options.scope;
K=this.element.parents(":data(ui-droppable)").filter(function(){return l(this).droppable("instance").options.scope===L
});
if(K.length){N=l(K[0]).droppable("instance");
N.greedyChild=(O==="isover")
}}if(N&&O==="isover"){N.isover=false;
N.isout=true;
N._out.call(N,J)
}this[O]=true;
this[O==="isout"?"isover":"isout"]=false;
this[O==="isover"?"_over":"_out"].call(this,J);
if(N&&O==="isout"){N.isout=false;
N.isover=true;
N._over.call(N,J)
}})
},dragStop:function(I,J){I.element.parentsUntil("body").off("scroll.droppable");
if(!I.options.refreshPositions){l.ui.ddmanager.prepareOffsets(I,J)
}}};
if(l.uiBackCompat!==false){l.widget("ui.droppable",l.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){this._super();
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}},_removeActiveClass:function(){this._super();
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}},_addHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}},_removeHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}}})
}var m=l.ui.droppable;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.resizable",l.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(I){return parseFloat(I)||0
},_isNumber:function(I){return !isNaN(parseFloat(I))
},_hasScroll:function(L,J){if(l(L).css("overflow")==="hidden"){return false
}var I=(J&&J==="left")?"scrollLeft":"scrollTop",K=false;
if(L[I]>0){return true
}L[I]=1;
K=(L[I]>0);
L[I]=0;
return K
},_create:function(){var J,K=this.options,I=this;
this._addClass("ui-resizable");
l.extend(this,{_aspectRatio:!!(K.aspectRatio),aspectRatio:K.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:K.helper||K.ghost||K.animate?K.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(l("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));
this.elementIsWrapper=true;
J={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};
this.element.css(J);
this.originalElement.css("margin",0);
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css(J);
this._proportionallyResize()
}this._setupHandles();
if(K.autoHide){l(this.element).on("mouseenter",function(){if(K.disabled){return
}I._removeClass("ui-resizable-autohide");
I._handles.show()
}).on("mouseleave",function(){if(K.disabled){return
}if(!I.resizing){I._addClass("ui-resizable-autohide");
I._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var J,I=function(K){l(K).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){I(this.element);
J=this.element;
this.originalElement.css({position:J.css("position"),width:J.outerWidth(),height:J.outerHeight(),top:J.css("top"),left:J.css("left")}).insertAfter(J);
J.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
I(this.originalElement);
return this
},_setOption:function(I,J){this._super(I,J);
switch(I){case"handles":this._removeHandles();
this._setupHandles();
break;
default:break
}},_setupHandles:function(){var N=this.options,M,J,O,I,K,L=this;
this.handles=N.handles||(!l(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
this._handles=l();
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}O=this.handles.split(",");
this.handles={};
for(J=0;
J<O.length;
J++){M=l.trim(O[J]);
I="ui-resizable-"+M;
K=l("<div>");
this._addClass(K,"ui-resizable-handle "+I);
K.css({zIndex:N.zIndex});
this.handles[M]=".ui-resizable-"+M;
this.element.append(K)
}}this._renderAxis=function(T){var Q,R,P,S;
T=T||this.element;
for(Q in this.handles){if(this.handles[Q].constructor===String){this.handles[Q]=this.element.children(this.handles[Q]).first().show()
}else{if(this.handles[Q].jquery||this.handles[Q].nodeType){this.handles[Q]=l(this.handles[Q]);
this._on(this.handles[Q],{mousedown:L._mouseDown})
}}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){R=l(this.handles[Q],this.element);
S=/sw|ne|nw|se|n|s/.test(Q)?R.outerHeight():R.outerWidth();
P=["padding",/ne|nw|n/.test(Q)?"Top":/se|sw|s/.test(Q)?"Bottom":/^e$/.test(Q)?"Right":"Left"].join("");
T.css(P,S);
this._proportionallyResize()
}this._handles=this._handles.add(this.handles[Q])
}};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.on("mouseover",function(){if(!L.resizing){if(this.className){K=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}L.axis=K&&K[1]?K[1]:"se"
}});
if(N.autoHide){this._handles.hide();
this._addClass("ui-resizable-autohide")
}},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(K){var J,L,I=false;
for(J in this.handles){L=l(this.handles[J])[0];
if(L===K.target||l.contains(L,K.target)){I=true
}}return !this.options.disabled&&I
},_mouseStart:function(J){var N,K,M,L=this.options,I=this.element;
this.resizing=true;
this._renderProxy();
N=this._num(this.helper.css("left"));
K=this._num(this.helper.css("top"));
if(L.containment){N+=l(L.containment).scrollLeft()||0;
K+=l(L.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:N,top:K};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:I.width(),height:I.height()};
this.originalSize=this._helper?{width:I.outerWidth(),height:I.outerHeight()}:{width:I.width(),height:I.height()};
this.sizeDiff={width:I.outerWidth()-I.width(),height:I.outerHeight()-I.height()};
this.originalPosition={left:N,top:K};
this.originalMousePosition={left:J.pageX,top:J.pageY};
this.aspectRatio=(typeof L.aspectRatio==="number")?L.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
M=l(".ui-resizable-"+this.axis).css("cursor");
l("body").css("cursor",M==="auto"?this.axis+"-resize":M);
this._addClass("ui-resizable-resizing");
this._propagate("start",J);
return true
},_mouseDrag:function(N){var O,M,P=this.originalMousePosition,J=this.axis,K=(N.pageX-P.left)||0,I=(N.pageY-P.top)||0,L=this._change[J];
this._updatePrevProperties();
if(!L){return false
}O=L.apply(this,[N,K,I]);
this._updateVirtualBoundaries(N.shiftKey);
if(this._aspectRatio||N.shiftKey){O=this._updateRatio(O,N)
}O=this._respectSize(O,N);
this._updateCache(O);
this._propagate("resize",N);
M=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!l.isEmptyObject(M)){this._updatePrevProperties();
this._trigger("resize",N,this.ui());
this._applyChanges()
}return false
},_mouseStop:function(L){this.resizing=false;
var K,I,J,O,R,N,Q,M=this.options,P=this;
if(this._helper){K=this._proportionallyResizeElements;
I=K.length&&(/textarea/i).test(K[0].nodeName);
J=I&&this._hasScroll(K[0],"left")?0:P.sizeDiff.height;
O=I?0:P.sizeDiff.width;
R={width:(P.helper.width()-O),height:(P.helper.height()-J)};
N=(parseFloat(P.element.css("left"))+(P.position.left-P.originalPosition.left))||null;
Q=(parseFloat(P.element.css("top"))+(P.position.top-P.originalPosition.top))||null;
if(!M.animate){this.element.css(l.extend(R,{top:Q,left:N}))
}P.helper.height(P.size.height);
P.helper.width(P.size.width);
if(this._helper&&!M.animate){this._proportionallyResize()
}}l("body").css("cursor","auto");
this._removeClass("ui-resizable-resizing");
this._propagate("stop",L);
if(this._helper){this.helper.remove()
}return false
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};
this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var I={};
if(this.position.top!==this.prevPosition.top){I.top=this.position.top+"px"
}if(this.position.left!==this.prevPosition.left){I.left=this.position.left+"px"
}if(this.size.width!==this.prevSize.width){I.width=this.size.width+"px"
}if(this.size.height!==this.prevSize.height){I.height=this.size.height+"px"
}this.helper.css(I);
return I
},_updateVirtualBoundaries:function(K){var M,L,J,O,I,N=this.options;
I={minWidth:this._isNumber(N.minWidth)?N.minWidth:0,maxWidth:this._isNumber(N.maxWidth)?N.maxWidth:Infinity,minHeight:this._isNumber(N.minHeight)?N.minHeight:0,maxHeight:this._isNumber(N.maxHeight)?N.maxHeight:Infinity};
if(this._aspectRatio||K){M=I.minHeight*this.aspectRatio;
J=I.minWidth/this.aspectRatio;
L=I.maxHeight*this.aspectRatio;
O=I.maxWidth/this.aspectRatio;
if(M>I.minWidth){I.minWidth=M
}if(J>I.minHeight){I.minHeight=J
}if(L<I.maxWidth){I.maxWidth=L
}if(O<I.maxHeight){I.maxHeight=O
}}this._vBoundaries=I
},_updateCache:function(I){this.offset=this.helper.offset();
if(this._isNumber(I.left)){this.position.left=I.left
}if(this._isNumber(I.top)){this.position.top=I.top
}if(this._isNumber(I.height)){this.size.height=I.height
}if(this._isNumber(I.width)){this.size.width=I.width
}},_updateRatio:function(K){var L=this.position,J=this.size,I=this.axis;
if(this._isNumber(K.height)){K.width=(K.height*this.aspectRatio)
}else{if(this._isNumber(K.width)){K.height=(K.width/this.aspectRatio)
}}if(I==="sw"){K.left=L.left+(J.width-K.width);
K.top=null
}if(I==="nw"){K.top=L.top+(J.height-K.height);
K.left=L.left+(J.width-K.width)
}return K
},_respectSize:function(N){var K=this._vBoundaries,Q=this.axis,S=this._isNumber(N.width)&&K.maxWidth&&(K.maxWidth<N.width),O=this._isNumber(N.height)&&K.maxHeight&&(K.maxHeight<N.height),L=this._isNumber(N.width)&&K.minWidth&&(K.minWidth>N.width),R=this._isNumber(N.height)&&K.minHeight&&(K.minHeight>N.height),J=this.originalPosition.left+this.originalSize.width,P=this.originalPosition.top+this.originalSize.height,M=/sw|nw|w/.test(Q),I=/nw|ne|n/.test(Q);
if(L){N.width=K.minWidth
}if(R){N.height=K.minHeight
}if(S){N.width=K.maxWidth
}if(O){N.height=K.maxHeight
}if(L&&M){N.left=J-K.minWidth
}if(S&&M){N.left=J-K.maxWidth
}if(R&&I){N.top=P-K.minHeight
}if(O&&I){N.top=P-K.maxHeight
}if(!N.width&&!N.height&&!N.left&&N.top){N.top=null
}else{if(!N.width&&!N.height&&!N.top&&N.left){N.left=null
}}return N
},_getPaddingPlusBorderDimensions:function(K){var J=0,L=[],M=[K.css("borderTopWidth"),K.css("borderRightWidth"),K.css("borderBottomWidth"),K.css("borderLeftWidth")],I=[K.css("paddingTop"),K.css("paddingRight"),K.css("paddingBottom"),K.css("paddingLeft")];
for(;
J<4;
J++){L[J]=(parseFloat(M[J])||0);
L[J]+=(parseFloat(I[J])||0)
}return{height:L[0]+L[2],width:L[1]+L[3]}
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var K,J=0,I=this.helper||this.element;
for(;
J<this._proportionallyResizeElements.length;
J++){K=this._proportionallyResizeElements[J];
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(K)
}K.css({height:(I.height()-this.outerDimensions.height)||0,width:(I.width()-this.outerDimensions.width)||0})
}},_renderProxy:function(){var I=this.element,J=this.options;
this.elementOffset=I.offset();
if(this._helper){this.helper=this.helper||l("<div style='overflow:hidden;'></div>");
this._addClass(this.helper,this._helper);
this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++J.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(J,I){return{width:this.originalSize.width+I}
},w:function(K,I){var J=this.originalSize,L=this.originalPosition;
return{left:L.left+I,width:J.width-I}
},n:function(L,J,I){var K=this.originalSize,M=this.originalPosition;
return{top:M.top+I,height:K.height-I}
},s:function(K,J,I){return{height:this.originalSize.height+I}
},se:function(K,J,I){return l.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[K,J,I]))
},sw:function(K,J,I){return l.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[K,J,I]))
},ne:function(K,J,I){return l.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[K,J,I]))
},nw:function(K,J,I){return l.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[K,J,I]))
}},_propagate:function(J,I){l.ui.plugin.call(this,J,[I,this.ui()]);
(J!=="resize"&&this._trigger(J,I,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
l.ui.plugin.add("resizable","animate",{stop:function(L){var Q=l(this).resizable("instance"),N=Q.options,K=Q._proportionallyResizeElements,I=K.length&&(/textarea/i).test(K[0].nodeName),J=I&&Q._hasScroll(K[0],"left")?0:Q.sizeDiff.height,P=I?0:Q.sizeDiff.width,M={width:(Q.size.width-P),height:(Q.size.height-J)},O=(parseFloat(Q.element.css("left"))+(Q.position.left-Q.originalPosition.left))||null,R=(parseFloat(Q.element.css("top"))+(Q.position.top-Q.originalPosition.top))||null;
Q.element.animate(l.extend(M,R&&O?{top:R,left:O}:{}),{duration:N.animateDuration,easing:N.animateEasing,step:function(){var S={width:parseFloat(Q.element.css("width")),height:parseFloat(Q.element.css("height")),top:parseFloat(Q.element.css("top")),left:parseFloat(Q.element.css("left"))};
if(K&&K.length){l(K[0]).css({width:S.width,height:S.height})
}Q._updateCache(S);
Q._propagate("resize",L)
}})
}});
l.ui.plugin.add("resizable","containment",{start:function(){var Q,K,S,I,P,L,T,R=l(this).resizable("instance"),O=R.options,N=R.element,J=O.containment,M=(J instanceof l)?J.get(0):(/parent/.test(J))?N.parent().get(0):J;
if(!M){return
}R.containerElement=l(M);
if(/document/.test(J)||J===document){R.containerOffset={left:0,top:0};
R.containerPosition={left:0,top:0};
R.parentData={element:l(document),left:0,top:0,width:l(document).width(),height:l(document).height()||document.body.parentNode.scrollHeight}
}else{Q=l(M);
K=[];
l(["Top","Right","Left","Bottom"]).each(function(V,U){K[V]=R._num(Q.css("padding"+U))
});
R.containerOffset=Q.offset();
R.containerPosition=Q.position();
R.containerSize={height:(Q.innerHeight()-K[3]),width:(Q.innerWidth()-K[1])};
S=R.containerOffset;
I=R.containerSize.height;
P=R.containerSize.width;
L=(R._hasScroll(M,"left")?M.scrollWidth:P);
T=(R._hasScroll(M)?M.scrollHeight:I);
R.parentData={element:M,left:S.left,top:S.top,width:L,height:T}
}},resize:function(J){var P,U,O,M,Q=l(this).resizable("instance"),L=Q.options,S=Q.containerOffset,R=Q.position,T=Q._aspectRatio||J.shiftKey,I={top:0,left:0},K=Q.containerElement,N=true;
if(K[0]!==document&&(/static/).test(K.css("position"))){I=S
}if(R.left<(Q._helper?S.left:0)){Q.size.width=Q.size.width+(Q._helper?(Q.position.left-S.left):(Q.position.left-I.left));
if(T){Q.size.height=Q.size.width/Q.aspectRatio;
N=false
}Q.position.left=L.helper?S.left:0
}if(R.top<(Q._helper?S.top:0)){Q.size.height=Q.size.height+(Q._helper?(Q.position.top-S.top):Q.position.top);
if(T){Q.size.width=Q.size.height*Q.aspectRatio;
N=false
}Q.position.top=Q._helper?S.top:0
}O=Q.containerElement.get(0)===Q.element.parent().get(0);
M=/relative|absolute/.test(Q.containerElement.css("position"));
if(O&&M){Q.offset.left=Q.parentData.left+Q.position.left;
Q.offset.top=Q.parentData.top+Q.position.top
}else{Q.offset.left=Q.element.offset().left;
Q.offset.top=Q.element.offset().top
}P=Math.abs(Q.sizeDiff.width+(Q._helper?Q.offset.left-I.left:(Q.offset.left-S.left)));
U=Math.abs(Q.sizeDiff.height+(Q._helper?Q.offset.top-I.top:(Q.offset.top-S.top)));
if(P+Q.size.width>=Q.parentData.width){Q.size.width=Q.parentData.width-P;
if(T){Q.size.height=Q.size.width/Q.aspectRatio;
N=false
}}if(U+Q.size.height>=Q.parentData.height){Q.size.height=Q.parentData.height-U;
if(T){Q.size.width=Q.size.height*Q.aspectRatio;
N=false
}}if(!N){Q.position.left=Q.prevPosition.left;
Q.position.top=Q.prevPosition.top;
Q.size.width=Q.prevSize.width;
Q.size.height=Q.prevSize.height
}},stop:function(){var N=l(this).resizable("instance"),J=N.options,O=N.containerOffset,I=N.containerPosition,K=N.containerElement,L=l(N.helper),Q=L.offset(),P=L.outerWidth()-N.sizeDiff.width,M=L.outerHeight()-N.sizeDiff.height;
if(N._helper&&!J.animate&&(/relative/).test(K.css("position"))){l(this).css({left:Q.left-I.left-O.left,width:P,height:M})
}if(N._helper&&!J.animate&&(/static/).test(K.css("position"))){l(this).css({left:Q.left-I.left-O.left,width:P,height:M})
}}});
l.ui.plugin.add("resizable","alsoResize",{start:function(){var I=l(this).resizable("instance"),J=I.options;
l(J.alsoResize).each(function(){var K=l(this);
K.data("ui-resizable-alsoresize",{width:parseFloat(K.width()),height:parseFloat(K.height()),left:parseFloat(K.css("left")),top:parseFloat(K.css("top"))})
})
},resize:function(J,L){var I=l(this).resizable("instance"),M=I.options,K=I.originalSize,O=I.originalPosition,N={height:(I.size.height-K.height)||0,width:(I.size.width-K.width)||0,top:(I.position.top-O.top)||0,left:(I.position.left-O.left)||0};
l(M.alsoResize).each(function(){var R=l(this),S=l(this).data("ui-resizable-alsoresize"),Q={},P=R.parents(L.originalElement[0]).length?["width","height"]:["width","height","top","left"];
l.each(P,function(T,V){var U=(S[V]||0)+(N[V]||0);
if(U&&U>=0){Q[V]=U||null
}});
R.css(Q)
})
},stop:function(){l(this).removeData("ui-resizable-alsoresize")
}});
l.ui.plugin.add("resizable","ghost",{start:function(){var J=l(this).resizable("instance"),I=J.size;
J.ghost=J.originalElement.clone();
J.ghost.css({opacity:0.25,display:"block",position:"relative",height:I.height,width:I.width,margin:0,left:0,top:0});
J._addClass(J.ghost,"ui-resizable-ghost");
if(l.uiBackCompat!==false&&typeof J.options.ghost==="string"){J.ghost.addClass(this.options.ghost)
}J.ghost.appendTo(J.helper)
},resize:function(){var I=l(this).resizable("instance");
if(I.ghost){I.ghost.css({position:"relative",height:I.size.height,width:I.size.width})
}},stop:function(){var I=l(this).resizable("instance");
if(I.ghost&&I.helper){I.helper.get(0).removeChild(I.ghost.get(0))
}}});
l.ui.plugin.add("resizable","grid",{resize:function(){var L,Q=l(this).resizable("instance"),U=Q.options,O=Q.size,P=Q.originalSize,R=Q.originalPosition,Z=Q.axis,I=typeof U.grid==="number"?[U.grid,U.grid]:U.grid,X=(I[0]||1),W=(I[1]||1),N=Math.round((O.width-P.width)/X)*X,M=Math.round((O.height-P.height)/W)*W,S=P.width+N,V=P.height+M,K=U.maxWidth&&(U.maxWidth<S),T=U.maxHeight&&(U.maxHeight<V),Y=U.minWidth&&(U.minWidth>S),J=U.minHeight&&(U.minHeight>V);
U.grid=I;
if(Y){S+=X
}if(J){V+=W
}if(K){S-=X
}if(T){V-=W
}if(/^(se|s|e)$/.test(Z)){Q.size.width=S;
Q.size.height=V
}else{if(/^(ne)$/.test(Z)){Q.size.width=S;
Q.size.height=V;
Q.position.top=R.top-M
}else{if(/^(sw)$/.test(Z)){Q.size.width=S;
Q.size.height=V;
Q.position.left=R.left-N
}else{if(V-W<=0||S-X<=0){L=Q._getPaddingPlusBorderDimensions(this)
}if(V-W>0){Q.size.height=V;
Q.position.top=R.top-M
}else{V=W-L.height;
Q.size.height=V;
Q.position.top=R.top+P.height-V
}if(S-X>0){Q.size.width=S;
Q.position.left=R.left-N
}else{S=X-L.width;
Q.size.width=S;
Q.position.left=R.left+P.width-S
}}}}}});
var a=l.ui.resizable;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var F=/ui-corner-([a-z]){2,6}/g;
var E=l.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar");
this.refresh()
},_destroy:function(){this._callChildMethod("destroy");
this.childWidgets.removeData("ui-controlgroup-data");
this.element.removeAttr("role");
if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
}},_initWidgets:function(){var J=this,I=[];
l.each(this.options.items,function(M,K){var N;
var L={};
if(!K){return
}if(M==="controlgroupLabel"){N=J.element.find(K);
N.each(function(){var O=l(this);
if(O.children(".ui-controlgroup-label-contents").length){return
}O.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
});
J._addClass(N,null,"ui-widget ui-widget-content ui-state-default");
I=I.concat(N.get());
return
}if(!l.fn[M]){return
}if(J["_"+M+"Options"]){L=J["_"+M+"Options"]("middle")
}else{L={classes:{}}
}J.element.find(K).each(function(){var P=l(this);
var O=P[M]("instance");
var Q=l.widget.extend({},L);
if(M==="button"&&P.parent(".ui-spinner").length){return
}if(!O){O=P[M]()[M]("instance")
}if(O){Q.classes=J._resolveClassesValues(Q.classes,O)
}P[M](Q);
var R=P[M]("widget");
l.data(R[0],"ui-controlgroup-data",O?O:P[M]("instance"));
I.push(R[0])
})
});
this.childWidgets=l(l.unique(I));
this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(I){this.childWidgets.each(function(){var J=l(this),K=J.data("ui-controlgroup-data");
if(K&&K[I]){K[I]()
}})
},_updateCornerClass:function(K,J){var I="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
var L=this._buildSimpleOptions(J,"label").classes.label;
this._removeClass(K,null,I);
this._addClass(K,null,L)
},_buildSimpleOptions:function(J,K){var L=this.options.direction==="vertical";
var I={classes:{}};
I.classes[K]={middle:"",first:"ui-corner-"+(L?"top":"left"),last:"ui-corner-"+(L?"bottom":"right"),only:"ui-corner-all"}[J];
return I
},_spinnerOptions:function(I){var J=this._buildSimpleOptions(I,"ui-spinner");
J.classes["ui-spinner-up"]="";
J.classes["ui-spinner-down"]="";
return J
},_buttonOptions:function(I){return this._buildSimpleOptions(I,"ui-button")
},_checkboxradioOptions:function(I){return this._buildSimpleOptions(I,"ui-checkboxradio-label")
},_selectmenuOptions:function(I){var J=this.options.direction==="vertical";
return{width:J?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(J?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(J?"top":"left")},last:{"ui-selectmenu-button-open":J?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(J?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[I]}
},_resolveClassesValues:function(K,J){var I={};
l.each(K,function(L){var M=J.options.classes[L]||"";
M=l.trim(M.replace(F,""));
I[L]=(M+" "+K[L]).replace(/\s+/g," ")
});
return I
},_setOption:function(I,J){if(I==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction)
}this._super(I,J);
if(I==="disabled"){this._callChildMethod(J?"disable":"enable");
return
}this.refresh()
},refresh:function(){var I,J=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);
if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix")
}this._initWidgets();
I=this.childWidgets;
if(this.options.onlyVisible){I=I.filter(":visible")
}if(I.length){l.each(["first","last"],function(M,N){var K=I[N]().data("ui-controlgroup-data");
if(K&&J["_"+K.widgetName+"Options"]){var L=J["_"+K.widgetName+"Options"](I.length===1?"only":N);
L.classes=J._resolveClassesValues(L.classes,K);
K.element[K.widgetName](L)
}else{J._updateCornerClass(I[N](),N)
}});
this._callChildMethod("refresh")
}}});
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.checkboxradio",[l.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var J,L;
var K=this;
var I=this._super()||{};
this._readType();
L=this.element.labels();
this.label=l(L[L.length-1]);
if(!this.label.length){l.error("No label found for checkboxradio widget")
}this.originalLabel="";
this.label.contents().not(this.element[0]).each(function(){K.originalLabel+=this.nodeType===3?l(this).text():this.outerHTML
});
if(this.originalLabel){I.label=this.originalLabel
}J=this.element[0].disabled;
if(J!=null){I.disabled=J
}return I
},_create:function(){var I=this.element[0].checked;
this._bindFormResetHandler();
if(this.options.disabled==null){this.options.disabled=this.element[0].disabled
}this._setOption("disabled",this.options.disabled);
this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");
this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");
if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label")
}if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel()
}else{if(this.originalLabel){this.options.label=this.originalLabel
}}this._enhance();
if(I){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");
if(this.icon){this._addClass(this.icon,null,"ui-state-hover")
}}this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var I=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type;
if(I!=="input"||!/radio|checkbox/.test(this.type)){l.error("Can't create checkboxradio on element.nodeName="+I+" and element.type="+this.type)
}},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var K;
var I=this.element[0].name;
var J="input[name='"+l.ui.escapeSelector(I)+"']";
if(!I){return l([])
}if(this.form.length){K=l(this.form[0].elements).filter(J)
}else{K=l(J).filter(function(){return l(this).form().length===0
})
}return K.not(this.element)
},_toggleClasses:function(){var I=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",I);
if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",I)._toggleClass(this.icon,null,"ui-icon-blank",!I)
}if(this.type==="radio"){this._getRadioGroup().each(function(){var J=l(this).checkboxradio("instance");
if(J){J._removeClass(J.label,"ui-checkboxradio-checked","ui-state-active")
}})
}},_destroy:function(){this._unbindFormResetHandler();
if(this.icon){this.icon.remove();
this.iconSpace.remove()
}},_setOption:function(I,J){if(I==="label"&&!J){return
}this._super(I,J);
if(I==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",J);
this.element[0].disabled=J;
return
}this.refresh()
},_updateIcon:function(J){var I="ui-icon ui-icon-background ";
if(this.options.icon){if(!this.icon){this.icon=l("<span>");
this.iconSpace=l("<span> </span>");
this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")
}if(this.type==="checkbox"){I+=J?"ui-icon-check ui-state-checked":"ui-icon-blank";
this._removeClass(this.icon,null,J?"ui-icon-blank":"ui-icon-check")
}else{I+="ui-icon-blank"
}this._addClass(this.icon,"ui-checkboxradio-icon",I);
if(!J){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked")
}this.icon.prependTo(this.label).after(this.iconSpace)
}else{if(this.icon!==undefined){this.icon.remove();
this.iconSpace.remove();
delete this.icon
}}},_updateLabel:function(){var I=this.label.contents().not(this.element[0]);
if(this.icon){I=I.not(this.icon[0])
}if(this.iconSpace){I=I.not(this.iconSpace[0])
}I.remove();
this.label.append(this.options.label)
},refresh:function(){var J=this.element[0].checked,I=this.element[0].disabled;
this._updateIcon(J);
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",J);
if(this.options.label!==null){this._updateLabel()
}if(I!==this.options.disabled){this._setOptions({disabled:I})
}}}]);
var e=l.ui.checkboxradio;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function(){var J,I=this._super()||{};
this.isInput=this.element.is("input");
J=this.element[0].disabled;
if(J!=null){I.disabled=J
}this.originalLabel=this.isInput?this.element.val():this.element.html();
if(this.originalLabel){I.label=this.originalLabel
}return I
},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true
}if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false
}this.hasTitle=!!this.element.attr("title");
if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label)
}else{this.element.html(this.options.label)
}}this._addClass("ui-button","ui-widget");
this._setOption("disabled",this.options.disabled);
this._enhance();
if(this.element.is("a")){this._on({keyup:function(I){if(I.keyCode===l.ui.keyCode.SPACE){I.preventDefault();
if(this.element[0].click){this.element[0].click()
}else{this.element.trigger("click")
}}}})
}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button")
}if(this.options.icon){this._updateIcon("icon",this.options.icon);
this._updateTooltip()
}},_updateTooltip:function(){this.title=this.element.attr("title");
if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label)
}},_updateIcon:function(K,M){var J=K!=="iconPosition",I=J?this.options.iconPosition:M,L=I==="top"||I==="bottom";
if(!this.icon){this.icon=l("<span>");
this._addClass(this.icon,"ui-button-icon","ui-icon");
if(!this.options.showLabel){this._addClass("ui-button-icon-only")
}}else{if(J){this._removeClass(this.icon,null,this.options.icon)
}}if(J){this._addClass(this.icon,null,M)
}this._attachIcon(I);
if(L){this._addClass(this.icon,null,"ui-widget-icon-block");
if(this.iconSpace){this.iconSpace.remove()
}}else{if(!this.iconSpace){this.iconSpace=l("<span> </span>");
this._addClass(this.iconSpace,"ui-button-icon-space")
}this._removeClass(this.icon,null,"ui-wiget-icon-block");
this._attachIconSpace(I)
}},_destroy:function(){this.element.removeAttr("role");
if(this.icon){this.icon.remove()
}if(this.iconSpace){this.iconSpace.remove()
}if(!this.hasTitle){this.element.removeAttr("title")
}},_attachIconSpace:function(I){this.icon[/^(?:end|bottom)/.test(I)?"before":"after"](this.iconSpace)
},_attachIcon:function(I){this.element[/^(?:end|bottom)/.test(I)?"append":"prepend"](this.icon)
},_setOptions:function(J){var K=J.showLabel===undefined?this.options.showLabel:J.showLabel,I=J.icon===undefined?this.options.icon:J.icon;
if(!K&&!I){J.showLabel=true
}this._super(J)
},_setOption:function(I,J){if(I==="icon"){if(J){this._updateIcon(I,J)
}else{if(this.icon){this.icon.remove();
if(this.iconSpace){this.iconSpace.remove()
}}}}if(I==="iconPosition"){this._updateIcon(I,J)
}if(I==="showLabel"){this._toggleClass("ui-button-icon-only",null,!J);
this._updateTooltip()
}if(I==="label"){if(this.isInput){this.element.val(J)
}else{this.element.html(J);
if(this.icon){this._attachIcon(this.options.iconPosition);
this._attachIconSpace(this.options.iconPosition)
}}}this._super(I,J);
if(I==="disabled"){this._toggleClass(null,"ui-state-disabled",J);
this.element[0].disabled=J;
if(J){this.element.blur()
}}},refresh:function(){var I=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
if(I!==this.options.disabled){this._setOptions({disabled:I})
}this._updateTooltip()
}});
if(l.uiBackCompat!==false){l.widget("ui.button",l.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text
}if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel
}if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary
}else{this.options.icon=this.options.icons.secondary;
this.options.iconPosition="end"
}}else{if(this.options.icon){this.options.icons.primary=this.options.icon
}}this._super()
},_setOption:function(I,J){if(I==="text"){this._super("showLabel",J);
return
}if(I==="showLabel"){this.options.text=J
}if(I==="icon"){this.options.icons.primary=J
}if(I==="icons"){if(J.primary){this._super("icon",J.primary);
this._super("iconPosition","beginning")
}else{if(J.secondary){this._super("icon",J.secondary);
this._super("iconPosition","end")
}}}this._superApply(arguments)
}});
l.fn.button=(function(I){return function(){if(!this.length||(this.length&&this[0].tagName!=="INPUT")||(this.length&&this[0].tagName==="INPUT"&&(this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"))){return I.apply(this,arguments)
}if(!l.ui.checkboxradio){l.error("Checkboxradio widget missing")
}if(arguments.length===0){return this.checkboxradio({icon:false})
}return this.checkboxradio.apply(this,arguments)
}
})(l.fn.button);
l.fn.buttonset=function(){if(!l.ui.controlgroup){l.error("Controlgroup widget missing")
}if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]])
}if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"])
}if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items}
}return this.controlgroup.apply(this,arguments)
}
}var d=l.ui.button;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
l.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(J){var I=l(this).css(J).offset().top;
if(I<0){l(this).css("top",J.top-I)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle
}if(this.options.disabled){this.options.disabled=false
}this._createWrapper();
this.element.show().removeAttr("title").appendTo(this.uiDialog);
this._addClass("ui-dialog-content","ui-widget-content");
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&l.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&l.fn.resizable){this._makeResizable()
}this._isOpen=false;
this._trackFocus()
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var I=this.options.appendTo;
if(I&&(I.jquery||I.nodeType)){return l(I)
}return this.document.find(I||"body").eq(0)
},_destroy:function(){var J,I=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element.removeUniqueId().css(this.originalCss).detach();
this.uiDialog.remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}J=I.parent.children().eq(I.index);
if(J.length&&J[0]!==this.element[0]){J.before(this.element)
}else{I.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:l.noop,enable:l.noop,close:function(J){var I=this;
if(!this._isOpen||this._trigger("beforeClose",J)===false){return
}this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").trigger("focus").length){l.ui.safeBlur(l.ui.safeActiveElement(this.document[0]))
}this._hide(this.uiDialog,this.options.hide,function(){I._trigger("close",J)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(M,I){var L=false,K=this.uiDialog.siblings(".ui-front:visible").map(function(){return +l(this).css("z-index")
}).get(),J=Math.max.apply(null,K);
if(J>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",J+1);
L=true
}if(L&&!I){this._trigger("focus",M)
}return L
},open:function(){var I=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=l(l.ui.safeActiveElement(this.document[0]));
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)
}this._show(this.uiDialog,this.options.show,function(){I._focusTabbable();
I._trigger("focus")
});
this._makeFocusTarget();
this._trigger("open")
},_focusTabbable:function(){var I=this._focusedElement;
if(!I){I=this.element.find("[autofocus]")
}if(!I.length){I=this.element.find(":tabbable")
}if(!I.length){I=this.uiDialogButtonPane.find(":tabbable")
}if(!I.length){I=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!I.length){I=this.uiDialog
}I.eq(0).trigger("focus")
},_keepFocus:function(I){function J(){var L=l.ui.safeActiveElement(this.document[0]),K=this.uiDialog[0]===L||l.contains(this.uiDialog[0],L);
if(!K){this._focusTabbable()
}}I.preventDefault();
J.call(this);
this._delay(J)
},_createWrapper:function(){this.uiDialog=l("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");
this._on(this.uiDialog,{keydown:function(K){if(this.options.closeOnEscape&&!K.isDefaultPrevented()&&K.keyCode&&K.keyCode===l.ui.keyCode.ESCAPE){K.preventDefault();
this.close(K);
return
}if(K.keyCode!==l.ui.keyCode.TAB||K.isDefaultPrevented()){return
}var J=this.uiDialog.find(":tabbable"),L=J.filter(":first"),I=J.filter(":last");
if((K.target===I[0]||K.target===this.uiDialog[0])&&!K.shiftKey){this._delay(function(){L.trigger("focus")
});
K.preventDefault()
}else{if((K.target===L[0]||K.target===this.uiDialog[0])&&K.shiftKey){this._delay(function(){I.trigger("focus")
});
K.preventDefault()
}}},mousedown:function(I){if(this._moveToTop(I)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var I;
this.uiDialogTitlebar=l("<div>");
this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");
this._on(this.uiDialogTitlebar,{mousedown:function(J){if(!l(J.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus")
}}});
this.uiDialogTitlebarClose=l("<button type='button'></button>").button({label:l("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);
this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");
this._on(this.uiDialogTitlebarClose,{click:function(J){J.preventDefault();
this.close(J)
}});
I=l("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
this._addClass(I,"ui-dialog-title");
this._title(I);
this.uiDialogTitlebar.prependTo(this.uiDialog);
this.uiDialog.attr({"aria-labelledby":I.attr("id")})
},_title:function(I){if(this.options.title){I.text(this.options.title)
}else{I.html("&#160;")
}},_createButtonPane:function(){this.uiDialogButtonPane=l("<div>");
this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");
this.uiButtonSet=l("<div>").appendTo(this.uiDialogButtonPane);
this._addClass(this.uiButtonSet,"ui-dialog-buttonset");
this._createButtons()
},_createButtons:function(){var J=this,I=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(l.isEmptyObject(I)||(l.isArray(I)&&!I.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");
return
}l.each(I,function(K,L){var M,N;
L=l.isFunction(L)?{click:L,text:K}:L;
L=l.extend({type:"button"},L);
M=L.click;
N={icon:L.icon,iconPosition:L.iconPosition,showLabel:L.showLabel,icons:L.icons,text:L.text};
delete L.click;
delete L.icon;
delete L.iconPosition;
delete L.showLabel;
delete L.icons;
if(typeof L.text==="boolean"){delete L.text
}l("<button></button>",L).button(N).appendTo(J.uiButtonSet).on("click",function(){M.apply(J.element[0],arguments)
})
});
this._addClass(this.uiDialog,"ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var K=this,J=this.options;
function I(L){return{position:L.position,offset:L.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(L,M){K._addClass(l(this),"ui-dialog-dragging");
K._blockFrames();
K._trigger("dragStart",L,I(M))
},drag:function(L,M){K._trigger("drag",L,I(M))
},stop:function(L,M){var O=M.offset.left-K.document.scrollLeft(),N=M.offset.top-K.document.scrollTop();
J.position={my:"left top",at:"left"+(O>=0?"+":"")+O+" top"+(N>=0?"+":"")+N,of:K.window};
K._removeClass(l(this),"ui-dialog-dragging");
K._unblockFrames();
K._trigger("dragStop",L,I(M))
}})
},_makeResizable:function(){var N=this,L=this.options,M=L.resizable,I=this.uiDialog.css("position"),K=typeof M==="string"?M:"n,e,s,w,se,sw,ne,nw";
function J(O){return{originalPosition:O.originalPosition,originalSize:O.originalSize,position:O.position,size:O.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:L.maxWidth,maxHeight:L.maxHeight,minWidth:L.minWidth,minHeight:this._minHeight(),handles:K,start:function(O,P){N._addClass(l(this),"ui-dialog-resizing");
N._blockFrames();
N._trigger("resizeStart",O,J(P))
},resize:function(O,P){N._trigger("resize",O,J(P))
},stop:function(O,P){var S=N.uiDialog.offset(),R=S.left-N.document.scrollLeft(),Q=S.top-N.document.scrollTop();
L.height=N.uiDialog.height();
L.width=N.uiDialog.width();
L.position={my:"left top",at:"left"+(R>=0?"+":"")+R+" top"+(Q>=0?"+":"")+Q,of:N.window};
N._removeClass(l(this),"ui-dialog-resizing");
N._unblockFrames();
N._trigger("resizeStop",O,J(P))
}}).css("position",I)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(I){this._makeFocusTarget();
this._focusedElement=l(I.target)
}})
},_makeFocusTarget:function(){this._untrackInstance();
this._trackingInstances().unshift(this)
},_untrackInstance:function(){var J=this._trackingInstances(),I=l.inArray(this,J);
if(I!==-1){J.splice(I,1)
}},_trackingInstances:function(){var I=this.document.data("ui-dialog-instances");
if(!I){I=[];
this.document.data("ui-dialog-instances",I)
}return I
},_minHeight:function(){var I=this.options;
return I.height==="auto"?I.minHeight:Math.min(I.minHeight,I.height)
},_position:function(){var I=this.uiDialog.is(":visible");
if(!I){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!I){this.uiDialog.hide()
}},_setOptions:function(K){var L=this,J=false,I={};
l.each(K,function(M,N){L._setOption(M,N);
if(M in L.sizeRelatedOptions){J=true
}if(M in L.resizableRelatedOptions){I[M]=N
}});
if(J){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",I)
}},_setOption:function(K,L){var J,M,I=this.uiDialog;
if(K==="disabled"){return
}this._super(K,L);
if(K==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(K==="buttons"){this._createButtons()
}if(K==="closeText"){this.uiDialogTitlebarClose.button({label:l("<a>").text(""+this.options.closeText).html()})
}if(K==="draggable"){J=I.is(":data(ui-draggable)");
if(J&&!L){I.draggable("destroy")
}if(!J&&L){this._makeDraggable()
}}if(K==="position"){this._position()
}if(K==="resizable"){M=I.is(":data(ui-resizable)");
if(M&&!L){I.resizable("destroy")
}if(M&&typeof L==="string"){I.resizable("option","handles",L)
}if(!M&&L!==false){this._makeResizable()
}}if(K==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var I,K,L,J=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(J.minWidth>J.width){J.width=J.minWidth
}I=this.uiDialog.css({height:"auto",width:J.width}).outerHeight();
K=Math.max(0,J.minHeight-I);
L=typeof J.maxHeight==="number"?Math.max(0,J.maxHeight-I):"none";
if(J.height==="auto"){this.element.css({minHeight:K,maxHeight:L,height:"auto"})
}else{this.element.height(Math.max(0,J.height-I))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var I=l(this);
return l("<div>").css({position:"absolute",width:I.outerWidth(),height:I.outerHeight()}).appendTo(I.parent()).offset(I.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(I){if(l(I.target).closest(".ui-dialog").length){return true
}return !!l(I.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var I=true;
this._delay(function(){I=false
});
if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(J){if(I){return
}if(!this._allowInteraction(J)){J.preventDefault();
this._trackingInstances()[0]._focusTabbable()
}}})
}this.overlay=l("<div>").appendTo(this._appendTo());
this._addClass(this.overlay,null,"ui-widget-overlay ui-front");
this._on(this.overlay,{mousedown:"_keepFocus"});
this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){var I=this.document.data("ui-dialog-overlays")-1;
if(!I){this._off(this.document,"focusin");
this.document.removeData("ui-dialog-overlays")
}else{this.document.data("ui-dialog-overlays",I)
}this.overlay.remove();
this.overlay=null
}}});
if(l.uiBackCompat!==false){l.widget("ui.dialog",l.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();
this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(I,J){if(I==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(J)
}this._superApply(arguments)
}})
}var z=l.ui.dialog;
/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var w=l.widget("ui.slider",l.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");
this._refresh();
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var L,I,J=this.options,N=this.element.find(".ui-slider-handle"),M="<span tabindex='0'></span>",K=[];
I=(J.values&&J.values.length)||1;
if(N.length>I){N.slice(I).remove();
N=N.slice(0,I)
}for(L=N.length;
L<I;
L++){K.push(M)
}this.handles=N.add(l(K.join("")).appendTo(this.element));
this._addClass(this.handles,"ui-slider-handle","ui-state-default");
this.handle=this.handles.eq(0);
this.handles.each(function(O){l(this).data("ui-slider-handle-index",O).attr("tabIndex",0)
})
},_createRange:function(){var I=this.options;
if(I.range){if(I.range===true){if(!I.values){I.values=[this._valueMin(),this._valueMin()]
}else{if(I.values.length&&I.values.length!==2){I.values=[I.values[0],I.values[0]]
}else{if(l.isArray(I.values)){I.values=I.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=l("<div>").appendTo(this.element);
this._addClass(this.range,"ui-slider-range")
}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");
this.range.css({left:"",bottom:""})
}if(I.range==="min"||I.range==="max"){this._addClass(this.range,"ui-slider-range-"+I.range)
}}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){this._off(this.handles);
this._on(this.handles,this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this._mouseDestroy()
},_mouseCapture:function(K){var O,R,J,M,Q,S,N,I,P=this,L=this.options;
if(L.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
O={x:K.pageX,y:K.pageY};
R=this._normValueFromMouse(O);
J=this._valueMax()-this._valueMin()+1;
this.handles.each(function(T){var U=Math.abs(R-P.values(T));
if((J>U)||(J===U&&(T===P._lastChangedValue||P.values(T)===L.min))){J=U;
M=l(this);
Q=T
}});
S=this._start(K,Q);
if(S===false){return false
}this._mouseSliding=true;
this._handleIndex=Q;
this._addClass(M,null,"ui-state-active");
M.trigger("focus");
N=M.offset();
I=!l(K.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=I?{left:0,top:0}:{left:K.pageX-N.left-(M.width()/2),top:K.pageY-N.top-(M.height()/2)-(parseInt(M.css("borderTopWidth"),10)||0)-(parseInt(M.css("borderBottomWidth"),10)||0)+(parseInt(M.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(K,Q,R)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(K){var I={x:K.pageX,y:K.pageY},J=this._normValueFromMouse(I);
this._slide(K,this._handleIndex,J);
return false
},_mouseStop:function(I){this._removeClass(this.handles,null,"ui-state-active");
this._mouseSliding=false;
this._stop(I,this._handleIndex);
this._change(I,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(J){var I,M,L,K,N;
if(this.orientation==="horizontal"){I=this.elementSize.width;
M=J.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{I=this.elementSize.height;
M=J.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}L=(M/I);
if(L>1){L=1
}if(L<0){L=0
}if(this.orientation==="vertical"){L=1-L
}K=this._valueMax()-this._valueMin();
N=this._valueMin()+L*K;
return this._trimAlignValue(N)
},_uiHash:function(K,L,I){var J={handle:this.handles[K],handleIndex:K,value:L!==undefined?L:this.value()};
if(this._hasMultipleValues()){J.value=L!==undefined?L:this.values(K);
J.values=I||this.values()
}return J
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(J,I){return this._trigger("start",J,this._uiHash(I))
},_slide:function(N,L,K){var O,I,M=this.value(),J=this.values();
if(this._hasMultipleValues()){I=this.values(L?0:1);
M=this.values(L);
if(this.options.values.length===2&&this.options.range===true){K=L===0?Math.min(I,K):Math.max(I,K)
}J[L]=K
}if(K===M){return
}O=this._trigger("slide",N,this._uiHash(L,K,J));
if(O===false){return
}if(this._hasMultipleValues()){this.values(L,K)
}else{this.value(K)
}},_stop:function(J,I){this._trigger("stop",J,this._uiHash(I))
},_change:function(J,I){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=I;
this._trigger("change",J,this._uiHash(I))
}},value:function(I){if(arguments.length){this.options.value=this._trimAlignValue(I);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(J,M){var L,I,K;
if(arguments.length>1){this.options.values[J]=this._trimAlignValue(M);
this._refreshValue();
this._change(null,J);
return
}if(arguments.length){if(l.isArray(arguments[0])){L=this.options.values;
I=arguments[0];
for(K=0;
K<L.length;
K+=1){L[K]=this._trimAlignValue(I[K]);
this._change(null,K)
}this._refreshValue()
}else{if(this._hasMultipleValues()){return this._values(J)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(J,K){var I,L=0;
if(J==="range"&&this.options.range===true){if(K==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(K==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(l.isArray(this.options.values)){L=this.options.values.length
}this._super(J,K);
switch(J){case"orientation":this._detectOrientation();
this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);
this._refreshValue();
if(this.options.range){this._refreshRange(K)
}this.handles.css(K==="horizontal"?"bottom":"left","");
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(I=L-1;
I>=0;
I--){this._change(null,I)
}this._animateOff=false;
break;
case"step":case"min":case"max":this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_setOptionDisabled:function(I){this._super(I);
this._toggleClass(null,"ui-state-disabled",!!I)
},_value:function(){var I=this.options.value;
I=this._trimAlignValue(I);
return I
},_values:function(I){var L,K,J;
if(arguments.length){L=this.options.values[I];
L=this._trimAlignValue(L);
return L
}else{if(this._hasMultipleValues()){K=this.options.values.slice();
for(J=0;
J<K.length;
J+=1){K[J]=this._trimAlignValue(K[J])
}return K
}else{return[]
}}},_trimAlignValue:function(L){if(L<=this._valueMin()){return this._valueMin()
}if(L>=this._valueMax()){return this._valueMax()
}var I=(this.options.step>0)?this.options.step:1,K=(L-this._valueMin())%I,J=L-K;
if(Math.abs(K)*2>=I){J+=(K>0)?I:(-I)
}return parseFloat(J.toFixed(5))
},_calculateNewMax:function(){var I=this.options.max,J=this._valueMin(),K=this.options.step,L=Math.round((I-J)/K)*K;
I=L+J;
if(I>this.options.max){I-=K
}this.max=parseFloat(I.toFixed(this._precision()))
},_precision:function(){var I=this._precisionOf(this.options.step);
if(this.options.min!==null){I=Math.max(I,this._precisionOf(this.options.min))
}return I
},_precisionOf:function(J){var K=J.toString(),I=K.indexOf(".");
return I===-1?0:K.length-I-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(I){if(I==="vertical"){this.range.css({width:"",left:""})
}if(I==="horizontal"){this.range.css({height:"",bottom:""})
}},_refreshValue:function(){var N,M,Q,O,R,L=this.options.range,K=this.options,P=this,J=(!this._animateOff)?K.animate:false,I={};
if(this._hasMultipleValues()){this.handles.each(function(S){M=(P.values(S)-P._valueMin())/(P._valueMax()-P._valueMin())*100;
I[P.orientation==="horizontal"?"left":"bottom"]=M+"%";
l(this).stop(1,1)[J?"animate":"css"](I,K.animate);
if(P.options.range===true){if(P.orientation==="horizontal"){if(S===0){P.range.stop(1,1)[J?"animate":"css"]({left:M+"%"},K.animate)
}if(S===1){P.range[J?"animate":"css"]({width:(M-N)+"%"},{queue:false,duration:K.animate})
}}else{if(S===0){P.range.stop(1,1)[J?"animate":"css"]({bottom:(M)+"%"},K.animate)
}if(S===1){P.range[J?"animate":"css"]({height:(M-N)+"%"},{queue:false,duration:K.animate})
}}}N=M
})
}else{Q=this.value();
O=this._valueMin();
R=this._valueMax();
M=(R!==O)?(Q-O)/(R-O)*100:0;
I[this.orientation==="horizontal"?"left":"bottom"]=M+"%";
this.handle.stop(1,1)[J?"animate":"css"](I,K.animate);
if(L==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[J?"animate":"css"]({width:M+"%"},K.animate)
}if(L==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[J?"animate":"css"]({width:(100-M)+"%"},K.animate)
}if(L==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[J?"animate":"css"]({height:M+"%"},K.animate)
}if(L==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[J?"animate":"css"]({height:(100-M)+"%"},K.animate)
}}},_handleEvents:{keydown:function(M){var N,K,J,L,I=l(M.target).data("ui-slider-handle-index");
switch(M.keyCode){case l.ui.keyCode.HOME:case l.ui.keyCode.END:case l.ui.keyCode.PAGE_UP:case l.ui.keyCode.PAGE_DOWN:case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:M.preventDefault();
if(!this._keySliding){this._keySliding=true;
this._addClass(l(M.target),null,"ui-state-active");
N=this._start(M,I);
if(N===false){return
}}break
}L=this.options.step;
if(this._hasMultipleValues()){K=J=this.values(I)
}else{K=J=this.value()
}switch(M.keyCode){case l.ui.keyCode.HOME:J=this._valueMin();
break;
case l.ui.keyCode.END:J=this._valueMax();
break;
case l.ui.keyCode.PAGE_UP:J=this._trimAlignValue(K+((this._valueMax()-this._valueMin())/this.numPages));
break;
case l.ui.keyCode.PAGE_DOWN:J=this._trimAlignValue(K-((this._valueMax()-this._valueMin())/this.numPages));
break;
case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:if(K===this._valueMax()){return
}J=this._trimAlignValue(K+L);
break;
case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(K===this._valueMin()){return
}J=this._trimAlignValue(K-L);
break
}this._slide(M,I,J)
},keyup:function(J){var I=l(J.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(J,I);
this._change(J,I);
this._removeClass(l(J.target),null,"ui-state-active")
}}}})
}));
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
;
!function(h){function i(f,e){if(!(f.originalEvent.touches.length>1)){f.preventDefault();
var n=f.originalEvent.changedTouches[0],m=document.createEvent("MouseEvents");
m.initMouseEvent(e,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),f.target.dispatchEvent(m)
}}if(h.support.touch="ontouchend" in document,h.support.touch){var j,g=h.ui.mouse.prototype,l=g._mouseInit,k=g._mouseDestroy;
g._touchStart=function(d){var c=this;
!j&&c._mouseCapture(d.originalEvent.changedTouches[0])&&(j=!0,c._touchMoved=!1,i(d,"mouseover"),i(d,"mousemove"),i(d,"mousedown"))
},g._touchMove=function(b){j&&(this._touchMoved=!0,i(b,"mousemove"))
},g._touchEnd=function(b){j&&(i(b,"mouseup"),i(b,"mouseout"),this._touchMoved||i(b,"click"),j=!1)
},g._mouseInit=function(){var a=this;
a.element.bind({touchstart:h.proxy(a,"_touchStart"),touchmove:h.proxy(a,"_touchMove"),touchend:h.proxy(a,"_touchEnd")}),l.call(a)
},g._mouseDestroy=function(){var a=this;
a.element.unbind({touchstart:h.proxy(a,"_touchStart"),touchmove:h.proxy(a,"_touchMove"),touchend:h.proxy(a,"_touchEnd")}),k.call(a)
}
}}(jQuery);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"&&typeof require==="function"){a(require("jquery"))
}else{a(jQuery)
}}}(function(d){var a=(function(){return{escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},createNode:function(e){var f=document.createElement("div");
f.className=e;
f.style.display="none";
return f
}}
}()),c={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};
function b(f,e){var h=function(){},g=this,i={ajaxSettings:{},autoSelectFirst:false,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:false,onSearchStart:h,onSearchComplete:h,onSearchError:h,preserveInput:false,containerClass:"autocomplete-suggestions",suggestionsWrapperClass:"autocomplete-suggestions-wrapper",tabDisabled:false,dataType:"text",currentRequest:null,triggerSelectOnValidInput:true,preventBadQueries:true,lookupFilter:function(k,j,l){return k.value.toLowerCase().indexOf(l)!==-1
},paramName:"query",transformResult:function(j){return typeof j==="string"?d.parseJSON(j):j
},showNoSuggestionNotice:false,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:false};
g.element=f;
g.el=d(f);
g.suggestions=[];
g.badQueries=[];
g.selectedIndex=-1;
g.currentValue=g.element.value;
g.intervalId=0;
g.cachedResponse={};
g.onChangeInterval=null;
g.onChange=null;
g.isLocal=false;
g.suggestionsContainer=null;
g.noSuggestionsContainer=null;
g.options=d.extend({},i,e);
g.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"};
g.hint=null;
g.hintValue="";
g.selection=null;
g.initialize();
g.setOptions(e)
}b.utils=a;
d.Autocomplete=b;
b.formatResult=function(e,f){var h=e.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
var g="("+a.escapeRegExChars(f)+")";
return h.replace(new RegExp(g,"gi"),"<strong>$1</strong>")
};
b.prototype={killerFn:null,initialize:function(){var i=this,j="."+i.classes.suggestion,g=i.classes.selected,f=i.options,e;
i.element.setAttribute("autocomplete","off");
i.killerFn=function(k){if(d(k.target).closest("."+i.options.containerClass).length===0){i.killSuggestions();
i.disableKillerFn()
}};
i.noSuggestionsContainer=d('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0);
i.suggestionsContainer=b.utils.createNode(f.containerClass);
e=d(i.suggestionsContainer);
var h=d("."+f.suggestionsWrapperClass);
e.appendTo(h);
if(f.width!=="auto"){e.width(f.width)
}e.on("mouseover.autocomplete",j,function(){i.activate(d(this).data("index"))
});
e.on("mouseout.autocomplete",function(){i.selectedIndex=-1;
e.children("."+g).removeClass(g)
});
e.on("click.autocomplete",j,function(){i.select(d(this).data("index"))
});
i.fixPositionCapture=function(){if(i.visible){i.fixPosition()
}};
d(window).on("resize.autocomplete",i.fixPositionCapture);
i.el.on("keydown.autocomplete",function(k){i.onKeyPress(k)
});
i.el.on("keyup.autocomplete",function(k){i.onKeyUp(k)
});
i.el.on("blur.autocomplete",function(){i.onBlur()
});
i.el.on("focus.autocomplete",function(){i.onFocus()
});
i.el.on("change.autocomplete",function(k){i.onKeyUp(k)
});
i.el.on("input.autocomplete",function(k){i.onKeyUp(k)
})
},onFocus:function(){var e=this;
e.fixPosition();
if(e.options.minChars<=e.el.val().length){e.onValueChange()
}},onBlur:function(){this.enableKillerFn()
},setOptions:function(g){var f=this,e=f.options;
d.extend(e,g);
f.isLocal=d.isArray(e.lookup);
if(f.isLocal){e.lookup=f.verifySuggestionsFormat(e.lookup)
}e.orientation=f.validateOrientation(e.orientation,"bottom")
},clearCache:function(){this.cachedResponse={};
this.badQueries=[]
},clear:function(){this.clearCache();
this.currentValue="";
this.suggestions=[]
},disable:function(){var e=this;
e.disabled=true;
clearInterval(e.onChangeInterval);
if(e.currentRequest){e.currentRequest.abort()
}},enable:function(){this.disabled=false
},fixPosition:function(){},enableKillerFn:function(){var e=this;
d(document).on("click.autocomplete",e.killerFn)
},disableKillerFn:function(){var e=this;
d(document).off("click.autocomplete",e.killerFn)
},killSuggestions:function(){var e=this;
e.stopKillSuggestions();
e.intervalId=window.setInterval(function(){e.hide();
e.stopKillSuggestions()
},50)
},stopKillSuggestions:function(){window.clearInterval(this.intervalId)
},isCursorAtEnd:function(){var g=this,f=g.el.val().length,h=g.element.selectionStart,e;
if(typeof h==="number"){return h===f
}if(document.selection){e=document.selection.createRange();
e.moveStart("character",-f);
return f===e.text.length
}return true
},onKeyPress:function(g){var f=this;
if(!f.disabled&&!f.visible&&g.which===c.DOWN&&f.currentValue){f.suggest();
return
}if(f.disabled||!f.visible){return
}switch(g.which){case c.ESC:f.el.val(f.currentValue);
f.hide();
break;
case c.RIGHT:if(f.hint&&f.options.onHint&&f.isCursorAtEnd()){f.selectHint();
break
}return;
case c.TAB:if(f.hint&&f.options.onHint){f.selectHint();
return
}if(f.selectedIndex===-1){f.hide();
return
}f.select(f.selectedIndex);
if(f.options.tabDisabled===false){return
}break;
case c.RETURN:if(f.selectedIndex===-1){f.hide();
return
}f.select(f.selectedIndex);
break;
case c.UP:f.moveUp();
break;
case c.DOWN:f.moveDown();
break;
default:return
}g.stopImmediatePropagation();
g.preventDefault()
},onKeyUp:function(g){var f=this;
if(f.disabled){return
}switch(g.which){case c.UP:case c.DOWN:return
}clearInterval(f.onChangeInterval);
if(f.currentValue!==f.el.val()){f.findBestHint();
if(f.options.deferRequestBy>0){f.onChangeInterval=setInterval(function(){f.onValueChange()
},f.options.deferRequestBy)
}else{f.onValueChange()
}}},onValueChange:function(){var g=this,f=g.options,i=g.el.val(),h=g.getQuery(i),e;
if(g.selection&&g.currentValue!==h){g.selection=null;
(f.onInvalidateSelection||d.noop).call(g.element)
}clearInterval(g.onChangeInterval);
g.currentValue=i;
g.selectedIndex=-1;
if(f.triggerSelectOnValidInput){e=g.findSuggestionIndex(h);
if(e!==-1){g.select(e);
return
}}if(h.length<f.minChars){g.hide()
}else{g.getSuggestions(h)
}},findSuggestionIndex:function(h){var g=this,f=-1,e=h.toLowerCase();
d.each(g.suggestions,function(k,j){if(j.value.toLowerCase()===e){f=k;
return false
}});
return f
},getQuery:function(f){var e=this.options.delimiter,g;
if(!e){return f
}g=f.split(e);
return d.trim(g[g.length-1])
},getSuggestionsLocal:function(k){var i=this,g=i.options,f=k.toLowerCase(),h=g.lookupFilter,e=parseInt(g.lookupLimit,10),j;
j={suggestions:d.grep(g.lookup,function(l){return h(l,k,f)
})};
if(e&&j.suggestions.length>e){j.suggestions=j.suggestions.slice(0,e)
}return j
},getSuggestions:function(i){var e,g=this,f=g.options,j=f.serviceUrl,l,k,h;
f.params[f.paramName]=i;
l=f.ignoreParams?null:f.params;
if(f.onSearchStart.call(g.element,f.params)===false){return
}if(d.isFunction(f.lookup)){f.lookup(i,function(m){g.suggestions=m.suggestions;
g.suggest();
f.onSearchComplete.call(g.element,i,m.suggestions)
});
return
}if(g.isLocal){e=g.getSuggestionsLocal(i)
}else{if(d.isFunction(j)){j=j.call(g.element,i)
}k=j+"?"+d.param(l||{});
e=g.cachedResponse[k]
}if(e&&d.isArray(e.suggestions)){g.suggestions=e.suggestions;
g.suggest();
f.onSearchComplete.call(g.element,i,e.suggestions)
}else{if(!g.isBadQuery(i)){if(g.currentRequest){g.currentRequest.abort()
}h={url:j,data:l,type:f.type,dataType:f.dataType};
d.extend(h,f.ajaxSettings);
g.currentRequest=d.ajax(h).done(function(n){var m;
g.currentRequest=null;
m=f.transformResult(n);
g.processResponse(m,i,k);
f.onSearchComplete.call(g.element,i,m.suggestions)
}).fail(function(m,o,n){f.onSearchError.call(g.element,i,m,o,n)
})
}else{f.onSearchComplete.call(g.element,i,[])
}}},isBadQuery:function(f){if(!this.options.preventBadQueries){return false
}var g=this.badQueries,e=g.length;
while(e--){if(f.indexOf(g[e])===0){return true
}}return false
},hide:function(){var f=this,e=d(f.suggestionsContainer);
if(d.isFunction(f.options.onHide)&&f.visible){f.options.onHide.call(f.element,e)
}f.visible=false;
f.selectedIndex=-1;
clearInterval(f.onChangeInterval);
d(f.suggestionsContainer).hide();
f.signalHint(null)
},suggest:function(){if(this.suggestions.length===0){if(this.options.showNoSuggestionNotice){this.noSuggestions()
}else{this.hide()
}return
}var l=this,r=l.options,p=r.groupBy,n=r.formatResult,o=l.getQuery(l.currentValue),m=l.classes.suggestion,g=l.classes.selected,e=d(l.suggestionsContainer),j=d(l.noSuggestionsContainer),q=r.beforeRender,i="",f,h=function(t,u){var s=t.data[p];
if(f===s){return""
}f=s;
return'<div class="autocomplete-group"><strong>'+f+"</strong></div>"
},k;
if(r.triggerSelectOnValidInput){k=l.findSuggestionIndex(o);
if(k!==-1){l.select(k);
return
}}d.each(l.suggestions,function(t,s){if(p){i+=h(s,o,t)
}i+='<div class="'+m+'" data-index="'+t+'">'+n(s,o)+"</div>"
});
this.adjustContainerWidth();
j.detach();
e.html(i);
if(d.isFunction(q)){q.call(l.element,e)
}l.fixPosition();
e.show();
e.closest("."+r.suggestionsWrapperClass).show();
if(r.autoSelectFirst){l.selectedIndex=0;
e.scrollTop(0);
e.children("."+m).first().addClass(g)
}l.visible=true;
l.findBestHint()
},noSuggestions:function(){var g=this,e=d(g.suggestionsContainer),f=d(g.noSuggestionsContainer);
this.adjustContainerWidth();
f.detach();
e.empty();
e.append(f);
g.fixPosition();
e.show();
g.visible=true;
e.closest("."+g.options.suggestionsWrapperClass).hide()
},adjustContainerWidth:function(){},findBestHint:function(){var f=this,g=f.el.val().toLowerCase(),e=null;
if(!g){return
}d.each(f.suggestions,function(j,h){var k=h.value.toLowerCase().indexOf(g)===0;
if(k){e=h
}return !k
});
f.signalHint(e)
},signalHint:function(f){var e="",g=this;
if(f){e=g.currentValue+f.value.substr(g.currentValue.length)
}if(g.hintValue!==e){g.hintValue=e;
g.hint=f;
(this.options.onHint||d.noop)(e)
}},verifySuggestionsFormat:function(e){if(e.length&&typeof e[0]==="string"){return d.map(e,function(f){return{value:f,data:null}
})
}return e
},validateOrientation:function(e,f){e=d.trim(e||"").toLowerCase();
if(d.inArray(e,["auto","bottom","top"])===-1){e=f
}return e
},processResponse:function(e,f,i){var h=this,g=h.options;
e.suggestions=h.verifySuggestionsFormat(e.suggestions);
if(!g.noCache){h.cachedResponse[i]=e;
if(g.preventBadQueries&&e.suggestions.length===0){h.badQueries.push(f)
}}if(f!==h.getQuery(h.currentValue)){return
}h.suggestions=e.suggestions;
h.suggest()
},activate:function(f){var i=this,j,h=i.classes.selected,e=d(i.suggestionsContainer),g=e.find("."+i.classes.suggestion);
e.find("."+h).removeClass(h);
i.selectedIndex=f;
if(i.selectedIndex!==-1&&g.length>i.selectedIndex){j=g.get(i.selectedIndex);
d(j).addClass(h);
return j
}return null
},selectHint:function(){var f=this,e=d.inArray(f.hint,f.suggestions);
f.select(e)
},select:function(e){var f=this;
f.hide();
f.onSelect(e)
},moveUp:function(){var e=this;
if(e.selectedIndex===-1){return
}if(e.selectedIndex===0){d(e.suggestionsContainer).children().first().removeClass(e.classes.selected);
e.selectedIndex=-1;
e.el.val(e.currentValue);
e.findBestHint();
return
}e.adjustScroll(e.selectedIndex-1)
},moveDown:function(){var e=this;
if(e.selectedIndex===(e.suggestions.length-1)){return
}e.adjustScroll(e.selectedIndex+1)
},adjustScroll:function(e){var g=this,k=g.activate(e);
if(!k){return
}var f,i,j,h=d(k).outerHeight();
f=k.offsetTop;
i=d(g.suggestionsContainer).scrollTop();
j=i+g.options.maxHeight-h;
if(f<i){d(g.suggestionsContainer).scrollTop(f)
}else{if(f>j){d(g.suggestionsContainer).scrollTop(f-g.options.maxHeight+h)
}}if(!g.options.preserveInput){g.el.val(g.getValue(g.suggestions[e].value))
}g.signalHint(null)
},onSelect:function(f){var h=this,g=h.options.onSelect,e=h.suggestions[f];
h.currentValue=h.getValue(e.value);
if(h.currentValue!==h.el.val()&&!h.options.preserveInput){h.el.val(h.currentValue)
}h.signalHint(null);
h.suggestions=[];
h.selection=e;
if(d.isFunction(g)){g.call(h.element,e)
}},getValue:function(h){var g=this,e=g.options.delimiter,f,i;
if(!e){return h
}f=g.currentValue;
i=f.split(e);
if(i.length===1){return h
}return f.substr(0,f.length-i[i.length-1].length)+h
},dispose:function(){var e=this;
e.el.off(".autocomplete").removeData("autocomplete");
e.disableKillerFn();
d(window).off("resize.autocomplete",e.fixPositionCapture);
d(e.suggestionsContainer).remove()
}};
d.fn.autocomplete=d.fn.devbridgeAutocomplete=function(f,e){var g="autocomplete";
if(arguments.length===0){return this.first().data(g)
}return this.each(function(){var i=d(this),h=i.data(g);
if(typeof f==="string"){if(h&&typeof h[f]==="function"){h[f](e)
}}else{if(h&&h.dispose){h.dispose()
}h=new b(this,f);
i.data(g,h)
}})
}
}));
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(j,i,b,c,d){return jQuery.easing[jQuery.easing.def](j,i,b,c,d)
},easeInQuad:function(j,i,b,c,d){return c*(i/=d)*i+b
},easeOutQuad:function(j,i,b,c,d){return -c*(i/=d)*(i-2)+b
},easeInOutQuad:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b
}return -c/2*((--i)*(i-2)-1)+b
},easeInCubic:function(j,i,b,c,d){return c*(i/=d)*i*i+b
},easeOutCubic:function(j,i,b,c,d){return c*((i=i/d-1)*i*i+1)+b
},easeInOutCubic:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i+b
}return c/2*((i-=2)*i*i+2)+b
},easeInQuart:function(j,i,b,c,d){return c*(i/=d)*i*i*i+b
},easeOutQuart:function(j,i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b
},easeInOutQuart:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i+b
}return -c/2*((i-=2)*i*i*i-2)+b
},easeInQuint:function(j,i,b,c,d){return c*(i/=d)*i*i*i*i+b
},easeOutQuint:function(j,i,b,c,d){return c*((i=i/d-1)*i*i*i*i+1)+b
},easeInOutQuint:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i*i+b
}return c/2*((i-=2)*i*i*i*i+2)+b
},easeInSine:function(j,i,b,c,d){return -c*Math.cos(i/d*(Math.PI/2))+c+b
},easeOutSine:function(j,i,b,c,d){return c*Math.sin(i/d*(Math.PI/2))+b
},easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b
},easeInExpo:function(j,i,b,c,d){return(i==0)?b:c*Math.pow(2,10*(i/d-1))+b
},easeOutExpo:function(j,i,b,c,d){return(i==d)?b+c:c*(-Math.pow(2,-10*i/d)+1)+b
},easeInOutExpo:function(j,i,b,c,d){if(i==0){return b
}if(i==d){return b+c
}if((i/=d/2)<1){return c/2*Math.pow(2,10*(i-1))+b
}return c/2*(-Math.pow(2,-10*--i)+2)+b
},easeInCirc:function(j,i,b,c,d){return -c*(Math.sqrt(1-(i/=d)*i)-1)+b
},easeOutCirc:function(j,i,b,c,d){return c*Math.sqrt(1-(i=i/d-1)*i)+b
},easeInOutCirc:function(j,i,b,c,d){if((i/=d/2)<1){return -c/2*(Math.sqrt(1-i*i)-1)+b
}return c/2*(Math.sqrt(1-(i-=2)*i)+1)+b
},easeInElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b)==1){return p+a
}if(!c){c=b*0.3
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}return -(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p
},easeOutElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b)==1){return p+a
}if(!c){c=b*0.3
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}return n*Math.pow(2,-10*m)*Math.sin((m*b-d)*(2*Math.PI)/c)+a+p
},easeInOutElastic:function(o,m,p,a,b){var d=1.70158;
var c=0;
var n=a;
if(m==0){return p
}if((m/=b/2)==2){return p+a
}if(!c){c=b*(0.3*1.5)
}if(n<Math.abs(a)){n=a;
var d=c/4
}else{var d=c/(2*Math.PI)*Math.asin(a/n)
}if(m<1){return -0.5*(n*Math.pow(2,10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c))+p
}return n*Math.pow(2,-10*(m-=1))*Math.sin((m*b-d)*(2*Math.PI)/c)*0.5+a+p
},easeInBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*(k/=d)*k*((j+1)*k-j)+b
},easeOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*((k=k/d-1)*k*((j+1)*k+j)+1)+b
},easeInOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}if((k/=d/2)<1){return c/2*(k*k*(((j*=(1.525))+1)*k-j))+b
}return c/2*((k-=2)*k*(((j*=(1.525))+1)*k+j)+2)+b
},easeInBounce:function(j,i,b,c,d){return c-jQuery.easing.easeOutBounce(j,d-i,0,c,d)+b
},easeOutBounce:function(j,i,b,c,d){if((i/=d)<(1/2.75)){return c*(7.5625*i*i)+b
}else{if(i<(2/2.75)){return c*(7.5625*(i-=(1.5/2.75))*i+0.75)+b
}else{if(i<(2.5/2.75)){return c*(7.5625*(i-=(2.25/2.75))*i+0.9375)+b
}else{return c*(7.5625*(i-=(2.625/2.75))*i+0.984375)+b
}}}},easeInOutBounce:function(j,i,b,c,d){if(i<d/2){return jQuery.easing.easeInBounce(j,i*2,0,c,d)*0.5+b
}return jQuery.easing.easeOutBounce(j,i*2-d,0,c,d)*0.5+c*0.5+b
}});
$(function(){var b=window.location.href.replace(/\.html[\S]*/,"")+".eprivacy.html";
function a(){var d=$(".if6_eprivacy:visible");
if(d&&d.length>0){var c=d.find(".overlay").height();
if(d.hasClass("initial")){$("body").addClass("eprivacy_initial_visible").animate({borderTopWidth:c+"px"},100);
$(".if6_contact>a, .if6_navigation>a, .if6_contact>div, .if6_navigation>div").each(function(){if("fixed"===$(this).css("position")){$(this).css({marginTop:c+"px"})
}else{$(this).css({marginTop:""})
}})
}else{d.height(c);
$(".if6_contact>div, .if6_navigation>div").each(function(){if("fixed"===$(this).css("position")){$(this).css({borderBottomWidth:c+"px"})
}else{$(this).css({borderBottomWidth:""})
}})
}}else{$("body").removeClass("eprivacy_initial_visible eprivacy_reminder_visible").css({borderTopWidth:""});
$(".if6_contact>a, .if6_navigation>a, .if6_contact>div, .if6_navigation>div").each(function(){$(this).css({marginTop:"",borderBottomWidth:""})
})
}}$(window).resize(a);
a();
$(".if6_eprivacy a.primary").click(function(c){c.preventDefault();
$.ajax({type:"GET",url:b,data:{eprivacy_accepted:"true"},timeout:1000,error:function(){window.location=$(".if6_eprivacy a.primary").attr("href")
},success:function(){if($(".eprivacy_auswahl_form").length){location.reload(true)
}}});
$(".if6_eprivacy").hide();
a();
$(window).resize()
});
$(".if6_eprivacy .close-icon").click(function(c){c.preventDefault();
$.ajax({type:"GET",url:b,data:{eprivacy_closed:"true"},timeout:1000});
$(".if6_eprivacy").hide();
a();
$(window).resize()
});
$('.eprivacy_auswahl input[type="submit"]').attr("disabled","disabled").parent().addClass("disabled");
$(".eprivacy_auswahl #eprivacy_accepted").change(function(c){if(this.value==="invalid"){$('.eprivacy_auswahl input[type="submit"]').attr("disabled","disabled").parent().addClass("disabled")
}else{$('.eprivacy_auswahl input[type="submit"]').removeAttr("disabled").parent().removeClass("disabled")
}})
});
$(document).on("if6_page_ready",function(){$(".cbox-pslose").not(function(){var a=this.paging_added;
this.paging_added=true;
return a
}).each(function(){var b=this;
function a(d){var c=parseInt($(b).find(".count>span:first-child").html(),10);
c+=d;
$(b).find(".count>span:first-child").html(c);
c+=$(b).find(".data:visible table").length-1;
$(b).find(".count>span:first-child+span").html(c)
}$(this).find(".left").click(function(){$(b).find(".data:visible").hide().prev(".data").show();
a(-3);
$(b).find(".right").css({display:"inline-block"});
if($(b).find(".data:visible").prev(".data").length<=0){$(b).find(".left").hide()
}return false
});
$(this).find(".right").click(function(){$(b).find(".data:visible").hide().next(".data").show();
a(3);
$(b).find(".left").css({display:"inline-block"});
if($(b).find(".data:visible").next(".data").length<=0){$(b).find(".right").hide()
}return false
})
})
});
$(function(){$(".searchresult-item a").click(function(){$.ajax({url:$(this).attr("href").replace(/(?:\.html)?(?:\?\S*)?$/,"")+".searchresultclick.json",cache:false,data:{resultType:"explizit",queryId:$(this).closest("ul.searchresult-items").attr("data-queryId")},timeout:500,async:false,dataType:"json"})
})
});
(function(a,b){if(typeof define==="function"&&define.amd){define(b)
}else{if(typeof module==="object"&&module.exports){module.exports=b()
}else{a.SLURI=b()
}}}(this,function(){var e=1,d="",c="Failed to construct 'URL': Invalid URL";
function f(i){return encodeURI(i).replace(/%5B/g,"[").replace(/%5D/g,"]")
}function a(i){return encodeURIComponent(i).replace(/[!'()*]/g,function(j){return"%"+j.charCodeAt(0).toString(16)
})
}function g(j){var l,n,m=[];
if(j){l=(d+j).replace("?","");
n=l.split("&");
for(var i=0;
i<n.length;
i++){var k=n[i].split("=");
m.push({key:k[0],value:k[1]||d})
}}this.toString=function(){var p=[];
for(var o=0;
o<m.length;
o++){p.push(a(m[o].key)+"="+a(m[o].value))
}return p.length>0?p.join("&"):d
};
this.toLocaleString=function(){return this.toString()
};
this.has=function(p){for(var o=0;
o<m.length;
o++){if(m[o].key===p){return true
}}return false
};
this.get=function(p){for(var o=0;
o<m.length;
o++){if(m[o].key===p){return m[o].value
}}return null
};
this.getAll=function(q){var p=[];
for(var o=0;
o<m.length;
o++){if(m[o].key===q){p.push(m[o].value)
}}return p
};
this.sluriDelete=function(p){for(var o=0;
o<m.length;
o++){if(m[o].key===p){m.splice(o,1)
}}};
this.append=function(o,p){m.push({key:o,value:p})
};
this.set=function(p,r){var q=0;
for(var o=0;
o<m.length;
o++){if(m[o].key===p){if(!q){m[o].value=r
}else{m.splice(o,1)
}q++
}}if(q===0){this.append(p,r)
}};
this.keys=function(){var p=[];
for(var o=0;
o<m.length;
o++){p.push(m[o].key)
}return p
};
this.values=function(){var p=[];
for(var o=0;
o<m.length;
o++){p.push(m[o].value)
}return p
}
}function b(j){var i=[];
if(j){i=j.split(".")
}this.toString=function(){return f(i.join("."))
};
this.toLocaleString=function(){return this.toString()
};
this.has=function(k){return i.indexOf(k)!==-1
};
this.append=function(k){i.push(k)
};
this.sluriDelete=function(k){var l=i.indexOf(k);
if(l!==-1){i.splice(l,1)
}};
this.values=function(){return i
}
}var h=function(z,C){var n=this,o,B,t,q,y,j,l,w,p,u,v,A;
if(!(this instanceof h)){throw new TypeError("Failed to construct 'SLURI': Please use the 'new' operator, this DOM object constructor cannot be called as a function.")
}if(arguments.length<e){throw new TypeError("Failed to construct 'URL': "+e+" argument required, but only "+arguments.length+" present.")
}function x(E){return/^[a-zA-Z][a-zA-Z0-9+\.-]+:\/\//.test(E)
}function k(E){return E instanceof h||(typeof Location!=="undefined"&&E instanceof Location)||(typeof HTMLAnchorElement!=="undefined"&&E instanceof HTMLAnchorElement)||(typeof URL!=="undefined"&&E instanceof URL)
}function s(E){var G=E%256;
for(var F=3;
F>0;
F--){E=Math.floor(E/256);
G=E%256+"."+G
}return G
}function D(E){var F,I="/",J="/",G="",K="",H="";
if(E){E=""+E;
if(E.indexOf("/")!==0){E="/"+E
}F=E.split(".");
J=F[0];
G=F.slice(1,F.length-1).join(".");
K=F[F.length-1].split("/")[0];
if(F.length>=2){H=F[F.length-1].split("/").slice(1).join("/");
H=H?"/"+H:"";
I=J+"."+(G&&(G+"."))+K
}else{F=E.split("/");
I=F.length>2?F[1]:E
}}return{pathname:I,resourcePath:J,selectorString:G,extension:K,suffix:H}
}function m(G){var K,J,M,P,I,N,L,E,O,Q,H,F;
K=new RegExp(/^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/);
J=K.exec(G);
M=J[1]||"";
P=J[2]||"";
I=J[3]||"";
N=J[4]||"";
L=J[6]||"";
E=J[7]||"";
O=J[8]||"";
Q=J[9]||"";
H=J[10]||"";
F=D(O);
return{protocol:P,username:I,password:N,hostname:L,port:E,origin:M,pathname:F.pathname,resourcePath:F.resourcePath,selectorString:F.selectorString,extension:F.extension,suffix:F.suffix,search:Q,hash:H}
}function r(E){n.protocol=E.protocol;
n.username=E.username;
n.password=E.password;
n.hostname=E.hostname;
n.port=E.port;
l=f(E.resourcePath);
n.selectorString=E.selectorString;
p=f(E.extension);
n.suffix=E.suffix;
n.search=E.search;
n.hash=E.hash
}function i(){var E,F;
if(typeof z==="string"){if(z.indexOf("/")===0){if(C){if(k(C)){E=C.origin
}else{F=m(C);
E=F.hostname&&F.origin
}if(E){z=E+z;
o=m(z)
}}}else{if(x(z)){o=m(z)
}}}else{if(k(z)){o=m(z.href)
}}if(!o){throw new TypeError(c)
}}Object.defineProperties(this,{protocol:{enumerable:true,configurable:true,get:function(){return B||d
},set:function(E){if(E&&/^[a-zA-Z][a-zA-Z0-9+\.-]+:?$/.test(E)){B=E.substr(-1)===":"?E:E+":"
}}},username:{enumerable:true,configurable:true,get:function(){return t||d
},set:function(E){t=f(d+E)
}},password:{enumerable:true,configurable:true,get:function(){return q||d
},set:function(E){q=f(d+E)
}},hostname:{enumerable:true,configurable:true,get:function(){return y||d
},set:function(E){if(E){if(!isNaN(E)){y=s(E)
}else{y=f(E.split(":")[0])
}}}},host:{enumerable:true,configurable:true,get:function(){var E=y||d;
if(j){E+=":"+j
}return E
},set:function(E){if(E){var F=E.split(":"),H=F[0],G=F[1];
this.hostname=H;
if(G){this.port=G
}}}},port:{enumerable:true,configurable:true,get:function(){return j||d
},set:function(E){if(E!==null&&E!==undefined){if(E===d){j=E
}else{if(typeof E==="number"||/^\d+(\.\d+)?$/.test(E)){j=d+parseInt(E,10)
}}}}},origin:{enumerable:true,configurable:true,get:function(){return this.protocol+"//"+this.host
},set:function(){}},pathname:{enumerable:true,configurable:true,get:function(){var E;
if(l&&l!=="/"){E=l;
if(this.selectorString){E+="."+this.selectorString
}if(p){E+="."+p
}}return E||"/"
},set:function(F){var E;
if(!null&&!undefined){E=D(F);
l=f(E.resourcePath);
p=f(E.extension);
this.selectorString=E.selectorString
}}},resourcePath:{enumerable:true,configurable:true,get:function(){return l
},set:function(E){if(E!==null&&E!==undefined){l=f(E)
}}},selectorString:{enumerable:true,configurable:true,get:function(){return this.selectors.toString()
},set:function(E){if(E!==null&&E!==undefined){this.selectors=new b(E)
}}},selectors:{enumerable:true,configurable:true,get:function(){return w
},set:function(E){if(E instanceof b){w=E
}}},extension:{enumerable:true,configurable:true,get:function(){return p||""
},set:function(E){if(p&&E){p=f(E)
}}},suffix:{enumerable:true,configurable:true,get:function(){return u
},set:function(E){if(E!==null&&E!==undefined){u=f(E)
}}},search:{enumerable:true,configurable:true,get:function(){var E=v.toString();
return E?"?"+E:d
},set:function(E){if(E!==null&&E!==undefined){v=new g(E)
}}},searchParams:{enumerable:true,configurable:true,get:function(){return v
},set:function(E){if(E instanceof g){v=E
}}},hash:{enumerable:true,configurable:true,get:function(){return A||d
},set:function(E){if(E){A=E.indexOf("#")===0?E:"#"+E
}else{A=d
}}},href:{enumerable:true,configurable:true,get:function(){var E=[];
E.push(this.protocol+"//");
E.push(this.username);
E.push(this.password&&":"+this.password);
E.push((this.username||this.password)&&"@");
E.push(this.host);
E.push(this.pathname);
E.push(this.suffix);
E.push(this.search);
E.push(this.hash);
return E.join("")
},set:function(E){if(E){o=m(E);
r(o)
}}}});
i();
r(o)
};
h.prototype.toString=function(){return this.href
};
h.prototype.toLocaleString=function(){return this.href
};
return h
}));
var IF6={focus_obj:null,last_window_width:0,lightbox_fragments:[],last_scroll_pos:0};
IF6.statistics={config:{pagenav:{delay:10000},timeout:10000},state:{pagenav:{scroll:{}}},event:function(b,a){if(IF6.statistics.config.url){$.ajax({url:IF6.statistics.config.url,async:!a,type:"GET",dataType:"html",data:$.extend({type:"jslog",url:location.href},b),timeout:IF6.statistics.config.timeout})
}}};
$(document).ready(function(){var a=$("body");
IF6.statistics.config.url=a.data("statistics-url")
});
$(window).resize(function(){if(IF6.last_window_width!==window.innerWidth){var a=$("body");
if(a.hasClass("navigation_visible")){IF6.statistics.event({stref:"hnav-auto"})
}if(a.hasClass("contact_visible")){IF6.statistics.event({stref:"kontakt-auto"});
$(document).trigger("contact-auto")
}a.removeClass("navigation_visible contact_visible pagenav_visible");
$('.if6_navigation>a,.if6_contact>a[href="#"]').attr("aria-expanded","false");
$(".if6_navigation div div").removeClass("navvisible");
$(".if6_navigation li").removeClass("focus anim hold");
$(document).trigger("hide-bcontent",true);
IF6.last_window_width=window.innerWidth
}$(".if6_lightbox>.if6_inner").scroll()
}).on("load",function(){$(window).resize()
});
$("html").addClass("js");
if("ontouchstart" in document.documentElement){$("html").removeClass("no-touch")
}document.createElement("section");
document.createElement("header");
document.createElement("footer");
document.createElement("nav");
$(window).on("load",function(){if(IF6.focus_obj){IF6.focus_obj.focus()
}});
$(function(){$(".if6_header .header-login").append("<span class=\"close-icon\" onclick=\"$('body').removeClass('login_visible');\"></span>");
$(".if6_header .secselect").click(function(){$(this).toggleClass("secselect_visible")
});
$(".if6_navigation>a,.if6_contact>a,.loginlogout .background").on("touchmove",function(){return false
});
$(".if6_section").each(function(){$(this).attr("role","main");
var a=$(this).find(".if6_inner>h6").html();
if(a){$(this).attr("aria-label",a)
}});
$(".if6_navigation").attr("role","navigation").attr("aria-label",$(".if6_navigation>a").attr("title"));
$(".if6_block>.micronav").attr("role","navigation");
$(".if6_contact").attr("role","complementary").attr("aria-label",$(".if6_contact>a:first-child").attr("title"));
$(".if6_header .search").attr("role","search");
$(".iconbar_overlay").click(function(){if(IF6.page){if(IF6.page.navigation){IF6.page.navigation.close()
}if(IF6.page.contact){IF6.page.contact.close()
}}return false
});
$(document).trigger("if6_page_ready");
if(window.location.search&&window.location.search.indexOf("stref=fkp-plogin")>=0){$(".loginlogout>span:visible").click()
}});
$(document).on("if6_page_ready",function(){$(".h1").parent().addClass("contains-h1");
$(".h2").parent().addClass("contains-h2");
$(".h3").parent().addClass("contains-h3")
});
$(document).on("if6_page_ready",function(){$('.if6_header input[type="text"],.if6_header input[type="password"],.login input[type="text"],.login input[type="password"]').not(function(){var a=this.placeholdersim_added;
this.placeholdersim_added=true;
return a
}).on("keyup",function(){this.className=(this.value||this.in_focus)?"nonempty":""
}).on("paste",function(){var a=$(this);
window.setTimeout(function(){a.trigger("keyup")
},30)
}).on("click",function(){this.className="nonempty";
this.in_focus=true
}).on("blur",function(){this.in_focus=false;
$(this).trigger("keyup")
}).trigger("keyup")
});
$(document).on("if6_page_ready",function(){$(".bline").not(function(){return($(this).find("input,.ficon,.helptxt,select,textarea,.bslider,.bgauge,.fininst .blzbic,.bselect-list,.finaccount").length>0||$(this).is(".bmessage, .with-separator"))
}).addClass("btext-only");
$(".bpulldown>span").not(function(){var a=this.click_added;
this.click_added=true;
return a
}).click(function(){$(this).closest(".bpulldown").toggleClass("pulldown_visible")
});
$(".bpager div.active").each(function(){$(this.nextSibling).addClass("next");
$(this.previousSibling).addClass("prev")
});
$("div.ficon>input,.buttonline input,.loginlogout .login input,.loginlogout .logout input").not(function(){var a=this.focus_added;
this.focus_added=true;
return a
}).focus(function(){$(this.parentNode).addClass("focus")
}).blur(function(){$(this.parentNode).removeClass("focus")
});
$(".buttonline>.bgroup1>div").not(function(){var a=this.click_added;
this.click_added=true;
return a
}).on("click",function(a){if(a.target.tagName==="DIV"){$(this.firstChild).click()
}});
$(".btableblock table.row-clickable tr.tablerowodd:not(.textbutton-column),.btableblock table.row-clickable tr.tableroweven:not(.textbutton-column)").not(this.click_added).each(function(){this.click_added=true;
var a=$(this).find("td a:not([target]), td .ficon input");
if(a.length>0){$(this).addClass("clickable hoverable").attr("title",$(this).find("td a").first().attr("title")).on("click",function(b){if(b&&b.target){switch(b.target.tagName){case"A":case"INPUT":break;
case"SPAN":if(!$(b.target).hasClass("checkbox")&&!$(b.target).hasClass("radio")){a.last().get(0).click();
return false
}break;
default:a.last().get(0).click();
return false
}}})
}else{$(this).addClass("not-hoverable")
}})
});
$(document).on("if6_page_ready",function(){$('.if6_main input[type="checkbox"]').not(function(){if($(this.nextSibling).hasClass("checkbox")){return true
}return($(this).closest(".no-if6-changes").length>0)
}).after('<span class="checkbox"></span>').on("click blur",function(){if(this.checked){$(this.nextSibling).addClass("checked")
}else{$(this.nextSibling).removeClass("checked")
}});
$("span.checkbox").each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}else{$(this).removeClass("checked")
}}).not(function(){var a=this.click_added;
this.click_added=true;
return a
}).click(function(){if(!this.previousSibling.disabled){$(this.previousSibling).click()
}})
});
$(document).on("if6_page_ready",function(){$('.if6_main input[type="radio"]').not(function(){if($(this.nextSibling).hasClass("radio")){return true
}return($(this).closest(".no-if6-changes").length>0)
}).after('<span class="radio"></span>').click(function(){$('input[name="'+this.name+'"]+span.radio').each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}else{$(this).removeClass("checked")
}})
}).each(function(){var a=this.getAttribute("id");
if(typeof a==="string"){$(this).parents(".bline").find('input[type="text"],input[type="submit"],select').on("click change keypress",function(){document.getElementById(a).checked=true;
$("#"+a).click()
})
}});
$("span.radio").each(function(){if(this.previousSibling.checked){$(this).addClass("checked")
}else{$(this).removeClass("checked")
}}).not(function(){var a=this.click_added;
this.click_added=true;
return a
}).click(function(){if(!this.previousSibling.disabled){this.previousSibling.checked=true;
$(this.previousSibling).click()
}})
});
$(document).on("if6_page_ready",function(){$("select").not(function(){return($(this).closest(".no-if6-changes").length>0)
}).each(function(){if(this.multiple){return
}if($(this).hasClass("hide-following-submit")){var d=$(this).next(".ficon");
if(d&&d.length>0){if($(this).data("json")){$(this).data("following-submit",d)
}else{$(this).on("change",function(){if(d.is("a")){d.click()
}else{d.find("input").click()
}return false
})
}d.addClass("js-hide");
$(this).removeClass("followed-by-icon")
}}if(!$(this.nextSibling).hasClass("select")){var b=$(this).attr("class");
if(b){b+=" "
}else{b=""
}$(this).wrap('<div class="'+b+'select-wrap"></div>');
$(this).after('<span class="select">&nbsp;</span>');
$(this).removeClass("followed-by-icon")
}var a=Math.round($(this).height());
var c=Math.round($(this.nextSibling).height());
$(this).addClass("select-modified");
if(a===c+1){$(this).addClass("select-reduce-by-one")
}if(a===c+2){$(this).addClass("select-reduce-by-two")
}if(a===c+3){$(this).addClass("select-reduce-by-three")
}if(a===c+4){$(this).addClass("select-reduce-by-four")
}if(a===c+5){$(this).addClass("select-reduce-by-five")
}})
});
$(function(){$(".if6_main").on("click",function(a){if(a&&a.target&&$(a.target).closest("div.helptxt.visible, .helpovly>a.visible").length<=0){$("div.helptxt.visible, .helpovly>.visible").removeClass("visible")
}}).on("click","div.helptxt, .helpovly>a",function(){var e=$(this).is("a");
if(!e){if($(this).closest(".no-if6-changes").length<=0&&$(this).children().length<=0){var f=this.getAttribute("title");
if(f){$(this).html('<div title=""><div>'+f+"</div></div>")
}}if($(this).children().length<=0){return
}}var d=$(this).hasClass("visible");
$("div.helptxt.visible, .helpovly>a").removeClass("visible");
$(".helpovly>a").attr("aria-expanded","false");
if(!d){$(this).addClass("visible");
if(e){$(this).attr("aria-expanded","true")
}var i=$(this).closest(".if6_contact>div>div");
if(i&&i.length<=0){i=$(this).closest(".if6_inner")
}var a=i.offset().left+i.innerWidth();
var b;
if($(this).hasClass("helptxt")){b=$(this).find("div div")
}else{b=$(this).parent().find(">div>div")
}if(b&&b.length>0){b.css({width:"",left:""});
var g=b.innerWidth();
var h=b.innerHeight();
if(h>g){b.css({width:i.innerWidth()})
}var c=b.offset().left+b.innerWidth();
if(c>a){b.css({left:(a-c)})
}}}$(this).blur();
return false
})
});
$(document).on("if6_page_ready",function(){$(".helpovly>a").attr("aria-expanded","false")
});
function getQueryParamValue(b,a){var d=b.split("?")[1];
if(d!==undefined){var e=d.split("&");
var c,f;
for(c=0;
c<e.length;
c++){f=e[c].split("=");
if(f[0]===a){return f[1]
}}}return false
}var IF6_lightbox_closeicon_text;
function overlayShow(h){var a=h.getAttribute("href");
if(a.charAt(0)!=="/"){return false
}var i=getQueryParamValue(a,"lightbox");
i=decodeURIComponent(i);
var g=i.split("?")[1];
i=i.split("?")[0];
var b=i.replace(/\//g,"_");
if(g){b+="_"+g.replace(/[&=+ .,;]/g,"-")
}var e;
if($("#"+b).length<=0){var f=a.split("?")[0];
var c=f.indexOf(".webview.html")>-1?".webview":"";
var d=a.indexOf("isVP=true")===-1?"/jcr:content/section/section":"";
jQuery.ajax({url:i+d+c+".html"+(g?("?"+g):""),timeout:20000}).done(function(j){IF6.lightbox_fragments[i]=j;
e='<div id="'+b+'" class="if6_outer if6_lightbox lightbox-visible"><div class="if6_inner"><a href="#" title="'+IF6_lightbox_closeicon_text+'" class="close-icon" onclick="return overlayClose(this);">'+IF6_lightbox_closeicon_text+"</a>"+IF6.lightbox_fragments[i]+"</div></div>";
$(".if6_main").append(e);
$("#"+b).data("lightboxPreviousFocus",h);
$("body").addClass("lightbox_visible");
$(document).trigger("if6_page_ready")
}).fail(function(){window.location.href=a
})
}else{$("#"+b).addClass("lightbox-visible").data("lightboxPreviousFocus",h);
$("body").addClass("lightbox_visible");
$(document).trigger("if6_page_ready")
}return false
}$(document).on("if6_page_ready",function(){$("a").not(function(){if($(this).hasClass("blightbox-link")){return true
}return this.lightbox_checked
}).each(function(){this.lightbox_checked=true;
var a=this.getAttribute("href");
if(!a||a.charAt(0)!=="/"){return
}var b=a.indexOf("lightbox=");
if(b<=0||("?"!==a.charAt(b-1)&&"&"!==a.charAt(b-1))||$("body").hasClass("templ-searchresultpage")){return
}$(this).click(function(){return overlayShow(this)
})
});
$(".if6_lightbox>.if6_inner").not(function(){var a=this.closeIconPosition;
this.closeIconPosition=true;
return a
}).scroll(function(){var b=$(this).scrollTop();
$(this).children(".close-icon").css({marginTop:b});
var a=$(this).height();
$(this).find(".cbox-banking .btopbuttonline>div").css({marginTop:b});
$(this).find(".cbox-banking .bbottombuttonline>div").each(function(){$(this).css({bottom:"auto",top:b+a-parseInt($(this).css("height"),10)})
});
$(this).find('.cbox-banking input[type="text"]:visible, .cbox-banking textarea:visible').last().each(function(){var c=$(this).closest(".if6_lightbox .if6_inner").offset().left;
if(c<20){var d=$(this).position().top+$(this).height();
var f=$(this).closest(".cbox-banking").height();
var e=d+300-f;
if(e>0){$(this).closest(".cbox-banking").css({paddingBottom:e+"px"})
}}else{$(this).closest(".cbox-banking").css({paddingBottom:""})
}})
}).scroll();
$(".if6_lightbox").not(function(){var a=this.click_added;
this.click_added=true;
return a
}).on("click",function(a){if($(this).hasClass("lightbox-visible")&&a&&a.target&&a.target===this){$(this).find(".if6_inner>a.close-icon").click()
}});
if($(".lightbox-visible").length>0){$(".if6_outer").each(function(){if($(this).hasClass("lightbox-visible")){$(this).attr("aria-hidden","false");
$(this).find(".if6_inner>a.close-icon").focus()
}else{if($(this).hasClass("if6_header")){$(this).attr("aria-hidden","false")
}else{$(this).attr("aria-hidden","true")
}}})
}else{$(".if6_outer").each(function(){if($(this).hasClass("if6_lightbox")){$(this).attr("aria-hidden","true")
}else{$(this).attr("aria-hidden","false")
}})
}});
function overlayClose(a){$(a).parents(".if6_lightbox").removeClass("lightbox-visible").attr("aria-hidden","true");
var b=$(a).parents(".if6_lightbox").data("lightboxPreviousFocus");
$(a).parents(".if6_lightbox").data("lightboxPreviousFocus",null);
$(".if6_outer").each(function(){if($(this).hasClass("if6_lightbox")){$(this).attr("aria-hidden","true")
}else{$(this).attr("aria-hidden","false")
}});
$("body").removeClass("lightbox_visible");
if(b){if($(b).hasClass("blightbox-link")){$(a).parents("if6_lightbox").remove()
}b.focus()
}return false
}$(window).scroll(function(){var b=$(".if6_iconbar");
if(!b||!b.length){return
}var a=window.pageYOffset;
if(a<b.offset().top){b.removeClass("iconbar-fixed")
}else{b.addClass("iconbar-fixed")
}});
$(document).on("if6_page_ready",function(){$(".iconbar-added").removeClass("iconbar-added");
$(".iconbarbuttons").remove();
var b=$(".if6_section").not(function(){return $(this).hasClass("ajstep-replace")
}).find("a[data-iconbar],input[data-iconbar]").toArray();
function a(e){var d,f,h,c,g;
for(d=0;
d<b.length;
++d){if($(b[d]).data("iconbar")===e){break
}}if(d<b.length&&$(b[d]).data("iconbar")===e){if("INPUT"===b[d].tagName){h=b[d].value;
g=b[d].getAttribute("title")||"";
c=b[d].parentNode.getAttribute("class")
}else{h=b[d].innerHTML;
g=b[d].getAttribute("title")||"";
c=b[d].getAttribute("class")
}if(c){c=c.match(/icon-[A-Za-z0-9_\-]*/);
if(c){c+=" "
}else{c=""
}}else{c=""
}f='<a href="#" class="'+c+e+'" title="'+g+'">'+h+"</a>";
$(".iconbarbuttons div").append(f);
if(e==="micronavback"){$(".iconbarbuttons .micronavback").click(function(){$(document).trigger("hide-bcontent");
return false
})
}else{$(".iconbarbuttons ."+e).click(function(){b[d].click();
return false
})
}$(b[d]).addClass("iconbar-added");
return
}}if(b.length>0){$(".if6_iconbar .if6_inner").append('<div class="iconbarbuttons"><div></div></div>');
if($(".iconbarbuttons").length<=0){return
}a("micronavback");
a("back");
a("right2");
a("right1")
}});
$(window).scroll(function(){if(IF6.last_scroll_pos!==window.pageYOffset){if($("body").hasClass("navigation_visible")||$("body").hasClass("contact_visible")||$(".lightbox-visible").length>0){$("html,body").scrollTop(IF6.last_scroll_pos)
}else{IF6.last_scroll_pos=window.pageYOffset
}}}).on("load",function(){$(window).scroll()
});
$(document).on("if6_page_ready",function(){$('input[type="date"]').not(function(){return($(this).closest(".no-if6-changes").length>0)
}).each(function(){if(this.type!=="date"){var a=/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec(this.value);
if(a){this.value=a[3]+"."+a[2]+"."+a[1]
}}else{$(this).addClass("working-date")
}})
});
$(function(){function a(e){var b,c=0,d;
for(b=0;
b<e.length;
++b){d=Math.abs(parseInt($(e[b]).css("left"),10));
if(d>0&&(0===c||d<c)){c=d
}}return c
}$(".carousel,.if6_openerstage").on("swiperight",function(){$(this).trigger("carousel-prev",false)
}).on("swipeleft",function(){$(this).trigger("carousel-next",false)
}).on("carousel-next",function(j,l){if(this.animated){return
}this.animated=(j!==null)||true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var h=this,k=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var g,c,b=a(k),e,f;
$(this).find(".carousel_play li.active").removeClass("active");
var d=function(){$(h).find(c).addClass("active");
h.animated=false
};
for(g=k.length-1;
g>=0;
--g){f=parseInt($(k[g]).css("left"),10);
if(f<0){f+=k.length*b;
$(k[g]).css({left:f+"px"})
}e=f-b;
if(e>=0&&e<b){e=0
}if(0===e){c=".carousel_play li:nth-child("+(g+1)+")";
$(k[g]).animate({left:e+"px"},500,"easeInOutExpo",d)
}else{$(k[g]).animate({left:e+"px"},500,"easeInOutExpo")
}}if(l){this.carouseltimer=window.setTimeout(function(){$(h).trigger("carousel-auto-next")
},10000)
}}).on("carousel-prev",function(j,l){if(this.animated){return
}this.animated=(j!==null)||true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var h=this,k=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var g,c,b=a(k),e,f;
$(this).find(".carousel_play li.active").removeClass("active");
var d=function(){$(h).find(c).addClass("active");
h.animated=false
};
for(g=0;
g<k.length;
++g){f=parseInt($(k[g]).css("left"),10);
e=f+b;
if(e>(k.length-1)*b){$(k[g]).css({left:(-b)+"px"});
e=0
}if(0===e){c=".carousel_play li:nth-child("+(g+1)+")";
$(k[g]).animate({left:e+"px"},500,"easeInOutExpo",d)
}else{$(k[g]).animate({left:e+"px"},500,"easeInOutExpo")
}}if(l){this.carouseltimer=window.setTimeout(function(){$(h).trigger("carousel-auto-prev")
},10000)
}}).on("carousel-auto-next",function(){if(!$("body").hasClass("cq-wcm-edit")){$(this).trigger("carousel-next",true)
}}).on("carousel-auto-prev",function(){if(!$("body").hasClass("cq-wcm-edit")){$(this).trigger("carousel-prev",true)
}}).on("carousel-select",function(j,m){if(this.animated){return
}this.animated=(j!==null)||true;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}var h=this,l=$(this).find(".cbox:visible,.if6_opener:visible").toArray();
var g,c,b=a(l),e,f;
$(this).find(".carousel_play li.active").removeClass("active");
if(isNaN(m)||m<0||m>=l.length){return
}for(g=0;
g<l.length-1;
++g){if(0===parseInt($(l[g]).css("left"),10)){c=g;
break
}}for(g=0;
g<c;
++g){f=parseInt($(l[g]).css("left"),10);
if(f>0){e=f-l.length*b;
$(l[g]).css({left:e+"px"})
}}for(g=c+1;
g<l.length;
++g){f=parseInt($(l[g]).css("left"),10);
if(f<0){e=f+l.length*b;
$(l[g]).css({left:e+"px"})
}}var k=parseInt($(l[m]).css("left"),10);
var d=function(){$(h).find(c).addClass("active");
h.animated=false
};
for(g=0;
g<l.length;
++g){f=parseInt($(l[g]).css("left"),10);
e=f-k;
if(0===e){c=".carousel_play li:nth-child("+(g+1)+")";
$(l[g]).animate({left:e+"px"},500,"easeInOutExpo",d)
}else{$(l[g]).animate({left:e+"px"},500,"easeInOutExpo")
}}})
});
(function(a){if(!(a.hasOwnProperty("chat"))){a.chat={}
}a.chat.popupOptions="width=375,height=655,scrollbars=yes,resizable=yes,toolbar=no,status=no,menubar=no";
a.chat.openPopup=function(b){var e=window.innerWidth;
var c="wide";
if(e<650){c="small"
}else{if(e<1080){c="medium"
}}var i=b.split("?");
var m=i[0];
var l=i[1];
if(l===undefined){l=["device",c].join("=")
}else{var f=l.split("#");
var k=f[1];
var g=f[0].split("&");
var j;
var h;
for(j=g.length;
j>0;
j--){h=g[j-1].split("=");
if(h[0]==="device"){h[1]=c;
g[j-1]=h.join("=");
break
}}if(j===0){g[g.length]=["device",c].join("=")
}l=g.join("&");
if(k!==undefined){l=[l,k].join("#")
}}b=[m,l].join("?");
var d=function(){var n=window.open(b,"chat",a.chat.popupOptions);
$(document).trigger("chat-open");
return n
};
if(!(a.chat.hasOwnProperty("popupHandle"))){a.chat.popupHandle=d()
}else{if(a.chat.popupHandle.closed){a.chat.popupHandle=d()
}}if(a.chat.popupHandle){a.chat.popupHandle.focus()
}};
$(document).on("if6_page_ready",function(){$("a.chatlink").not(function(){if($(this).closest(".no-if6-changes").length>0){return true
}var b=this.click_added;
this.click_added=true;
return b
}).click(function(){if(this.href&&this.target){a.chat.openPopup(this.href,this.target);
return false
}return true
})
})
}(IF6));
$(document).on("if6_page_ready",function(){$(".im+.ficon,.il+.ficon,.ixl+.ficon,.ixxl+.ficon,.im+.helptxt,.il+.helptxt,.ixl+.helptxt,.ixxl+.helptxt,.im+.helptxt,.il+.helpovly,.ixl+.helpovly,.ixxl+.helpovly,.bsearch input+.ficon").prev().not(function(){return $(this).hasClass("hide-following-submit")
}).addClass("followed-by-icon").each(function(){if(this.tagName!=="INPUT"){return
}if("text"!==this.type&&"password"!==this.type){return
}var d=$(this),a=d.next(":visible");
if(a.length<=0){return
}d.css({marginRight:0});
var c=d.position().left+parseInt(d.css("width"),10);
var b=a.position().left;
if(b>c+10){d.css({marginRight:""});
return
}if(b>c){d.css({marginRight:(c-b)+"px"})
}d.addClass("has-inline-icon");
a.addClass("moved-icon");
d.removeClass("followed-by-icon")
})
});
$(document).on("if6_page_ready",function(){$(".bline input[data-sayt]").not(function(){return this.previousSibling&&$(this.previousSibling).hasClass("bsayt")
}).on("keyup",function(){if(!this.previousSibling||!$(this.previousSibling).hasClass("bsayt")){return
}if(this.previousSibling.closeTimeout){window.clearTimeout(this.previousSibling.closeTimeout);
this.previousSibling.closeTimeout=null
}else{$(this.previousSibling).hide();
if(this.value.length<3){return
}var d=IF[this.getAttribute("data-sayt")];
var a,c="",b=this.value.toLowerCase();
for(a=0;
a<d.length;
++a){if(d[a].cmp.indexOf(b)<0){continue
}c+="<li><h3>"+d[a].value+"</h3>";
if(d[a].add){c+="<p>"+d[a].add+"</p>"
}c+='<div><input type="submit" name="'+d[a].name+'" value="'+d[a].value+'" /></div></li>'
}if(""===c){return
}$(this.previousSibling).html('<div onscroll="if (this.parentNode.closeTimeout){$(this.parentNode.nextSibling).focus();}return true;"><ul>'+c+"</ul></div>").css({display:"inline-block"})
}}).before(function(){var b,c,a=this.getAttribute("data-sayt");
if(!a||!a.length||!IF[a]||!IF[a].length){return
}c=IF[a];
for(b=0;
b<c.length;
++b){c[b].cmp=c[b].value.toLowerCase()
}return'<div class="bsayt '+this.getAttribute("class")+'"></div>'
}).on("blur",function(){if(!this.previousSibling||!$(this.previousSibling).hasClass("bsayt")){return
}var a=this.previousSibling;
var b=$(a);
a.closeTimeout=window.setTimeout(function(){b.hide()
},300)
}).on("focus",function(){$(this).trigger("keyup")
})
});
$(document).on("if6_page_ready",function(){$("table.has-action-column").not(function(){var a=this.bpulldown_added;
this.bpulldown_added=true;
return a
}).each(function(){$(this).find("td:last-child").each(function(){if($(this).find(".ficon.rank5").length){return
}var b=$(this).find(".ficon.rank3,.ficon.rank4").clone();
if(1===b.length){$(this).find(".ficon.rank3,.ficon.rank4").removeClass("rank3 rank4")
}else{if(b.length>1){var a='<div class="bpulldown baction"><span class="ficon icon-if5_i_aktionen"></span><div><div><ul></ul></div></div></div>';
$(this).append(a);
$(this).find(".bpulldown div div ul").append(b);
$(this).find(".bpulldown div div ul .ficon").wrap("<li></li>");
$(this).find(".bpulldown>span").not(function(){var c=this.click_added;
this.click_added=true;
return c
}).click(function(){var c=$(this).closest(".bpulldown").hasClass("pulldown_visible");
$(".bpulldown").removeClass("pulldown_visible");
if(!c){$(this).closest(".bpulldown").addClass("pulldown_visible")
}})
}}})
})
});
$(document).on("if6_page_ready",function(){$(".cbox-banking form").not(function(){var a=this.msgerror_checked;
this.msgerror_checked=true;
return a
}).each(function(){var g=$(this).find(".blineover .msgerror li:visible").first();
if(g&&g.length>0){var e=$(this).attr("data-msg-hinweisvorhanden"),f=$(this).attr("data-msg-hinweislink");
if(e&&f){$(this).prepend('<div class="msglink">'+e+'<div class="textbutton"><a href="#">'+f+"</a></div></div>");
var b=false;
var d;
var a;
if(g.closest(".if6_lightbox").length>0){b=true;
d=g.closest(".if6_inner");
a=parseInt(d.find(".cbox-banking .btopbuttonline>div").css("height"),10)||0
}else{d=$("html,body");
a=($(".if6_iconbar .iconbar").css("display")!=="none")?$(".if6_iconbar .iconbar").height():$(".if6_pagenav").height()
}$(this).find(".msglink a").click(function(){var h=b?g.position().top:g.offset().top;
d.animate({scrollTop:h-a},750,"easeInOutExpo");
$(this).blur();
return false
});
var c=$(this).find(".msglink:visible");
if(c.length>0){window.setTimeout(function(){var i=b?c.position().top:c.offset().top;
var h=d.scrollTop();
if(h>i-a){d.scrollTop(i-a)
}},500)
}}}})
});
var setSessionTimeout;
var getQueryParamValue;
function focusBankingFormularElement(a){if(!a||a.length<=0){return
}var d=false,b,c=a.find("a:visible, select:visible, textarea:visible, input:visible").toArray();
for(b=0;
!d&&b<c.length;
++b){if(c[b].disabled){continue
}if(c[b].tagName==="INPUT"&&(c[b].type==="hidden"||c[b].type==="submit")){continue
}c[b].focus();
if(c[b].tagName==="A"){c[b].blur()
}d=true
}}$(document).on("if6_page_ready",function(){function d(g){var h=g.indexOf("if6_outer");
if(h>0){g=g.substr(0,h)+g.substr(h+9)
}h=g.indexOf("if6_inner");
if(h>0){g=g.substr(0,h)+g.substr(h+9)
}return g
}function a(h,g){var i;
if(h&&g){i=h.indexOf("?");
if(i>0){h=h.substr(0,i)
}i=g.indexOf("?");
if(i>0){g=g.substr(0,i)
}return h===g
}return false
}function c(g){g.find("form").each(function(){var h=$(this).attr("action");
if(h){h=h.replace(/\.(ajstep|contactonly)/,"");
$(this).attr("action",h)
}});
g.find("a").each(function(){var h=$(this).attr("href");
if(h){h=h.replace(/\.(ajstep|contactonly)/,"");
$(this).attr("href",h)
}})
}function e(m,k,g,n,h){function j(q){if("current"===h){return
}if("top"===h){q.scrollTop(0)
}}m.find("[id]").attr("id",null);
m.attr("aria-hidden","true");
var o=$(k).insertAfter(m);
var p=m.closest(".if6_lightbox");
if(p.length>0){if(p.find(".lightbox-autoclose").length>0){var l=p.find(".lightbox-autoclose").siblings(".buttonline").find('input[type="submit"]').get(0);
if(l){$(document).trigger("if6_page_ready");
window.setTimeout(function(){l.click()
},100);
return
}}j(p.find(">.if6_inner"));
focusBankingFormularElement(o)
}else{j($("html,body"))
}c(o);
if(n){var i=o.find(".bcontainer-content .cbox-banking").first();
if(i.length>0){i.prepend(n)
}else{i=o.find(".cbox-banking").first();
if(i.length>0){i.prepend(n)
}else{o.prepend(n)
}}}$(".if6_section").each(function(){$(this).attr("role","main");
var q=$(this).find(".if6_inner>h6").html();
if(q){$(this).attr("aria-label",q)
}});
m.addClass("ajstep-replace").fadeOut(400,function(){m.remove()
});
$(document).trigger("if6_page_ready");
if(typeof setSessionTimeout==="function"){setSessionTimeout()
}if(g){$(document).trigger(g)
}}function b(h,g){if(h.indexOf(".webview.")>0){return h.replace(/\.webview\./,"."+g+".webview.")
}if(h.indexOf(".html")>0){return h.replace(/\.html/,"."+g+".html")
}if(h.indexOf("?")>0){return h.replace(/\?/,"."+g+".html?")
}return h+"."+g+".html"
}function f(g,h,i,k,j,l){$.ajax({method:"GET",url:b(g,"ajstep"),timeout:0}).done(function(n){n=d(n);
if(!h){n='<div class="if6_outer if6_lightbox lightbox-visible"'+(i?' data-ajstep-parent-url="'+i+'"':"")+'><div class="if6_inner">'+n+"</div></div>";
var m=$(n).appendTo(".if6_main").data("ajstep-parent-section",k);
c(m);
$("body").addClass("lightbox_visible");
if(l){m.data("lightboxPreviousFocus",l)
}focusBankingFormularElement(m);
$(document).trigger("if6_page_ready");
if(typeof setSessionTimeout==="function"){setSessionTimeout()
}if(j){$(document).trigger(j)
}}else{e(k,n,j,null,"top")
}}).fail(function(){window.location.href=g
})
}$('form[data-ajstep] input[type="submit"], form[data-ajstep] input[type="image"], form[data-ajstep] a').not(function(){var g=this.ajstep_added;
this.ajstep_added=true;
if(this.target||$(this).data("ajstep-disabled")||(this.href&&this.href.indexOf("javascript:")===0)){return true
}return g
}).on("click",function(){var o="ajstep";
if($("body").hasClass("cq-wcm-edit")){return true
}if($(this).data("ajstep-disabled")){return true
}var v=this,j,g,q="",t=false;
if(this.form){var r,l=this.form,p=false,m=[];
j=$(l).attr("action");
g=this.form.method;
t="application/x-www-form-urlencoded; charset=UTF-8";
for(r=0;
r<l.elements.length;
++r){switch(l.elements[r].type){case"image":case"submit":break;
case"checkbox":case"radio":if(l.elements[r].checked){q+=l.elements[r].name+"="+encodeURIComponent(l.elements[r].value)+"&"
}break;
case"file":p=true;
if(l.elements[r].files){if(l.elements[r].files.length===0&&!l.elements[r].disabled){l.elements[r].disabled=true;
m.push(l.elements[r])
}}break;
default:q+=l.elements[r].name+"="+encodeURIComponent(l.elements[r].value)+"&";
break
}}if(p){q=new FormData(l);
q.append(this.name,this.value);
t=false;
for(r=0;
r<m.length;
++r){m[r].disabled=false
}}else{q+=this.name+"="+encodeURIComponent(this.value)
}}else{j=$(this).attr("href");
g="GET"
}if(!j||"#"===j){return true
}var u=$(this).data("ajstep-anim")||"none";
var k=$(this).data("ajstep-scrollpos")||$(this).closest("form").data("ajstep-scrollpos")||"top";
var s=$(this).closest(".if6_section");
if(s.length<=0){s=$(this).closest(".if6_contact>div>div");
o="contactonly"
}s.addClass("ajstep-start anim-"+u);
var n=false;
if(s.closest(".if6_lightbox").length>0){n=true
}var h=$(this).data("ajstep-complete-event");
$.ajax({method:g,url:b(j,o),timeout:0,processData:false,contentType:t,data:q}).done(function(A){var z=false,x=false,w;
if(A.indexOf("<section")<0&&A.indexOf("<div")<0){var B=A.indexOf("AJSTEP_LOCATION=");
if(B>=0){x=true;
w=A.substr(B+16)
}else{B=A.indexOf("REDIRECT_LOCATION=");
if(B>=0){x=true;
w=A.substr(B+18)
}else{B=A.indexOf("AJSTEP_LIGHTBOX_LOCATION=");
if(B>=0){z=true;
w=A.substr(B+25)
}}}}if(x){if(n&&a(w,s.closest(".if6_lightbox").data("ajstep-parent-url"))){var i=s.closest(".if6_lightbox").data("ajstep-parent-section");
var y=null;
if(s.find(".lightbox-autoclose").length>0){y=s.find(".success-msg, .failure-msg").clone()
}$("body").removeClass("lightbox_visible");
s.closest(".if6_lightbox").remove();
$.ajax({method:"GET",url:b(w,o),timeout:0}).done(function(C){e(i,C,h,y,"current")
}).fail(function(){window.location.href=w
})
}else{window.location.href=w;
s.removeClass("ajstep-start anim-"+u)
}}else{if(z){f(w,n,j,s,h,null)
}else{if(n){A=d(A)
}e(s,A,h,null,k)
}}}).fail(function(){s.removeClass("ajstep-start anim-"+u);
$(v).data("ajstep-disabled","true");
window.setTimeout(function(){v.click()
},100)
});
return false
});
$("a").not(function(){if(!$(this).hasClass("blightbox-link")){return true
}return this.lightbox_checked
}).each(function(){this.lightbox_checked=true;
var h=this.getAttribute("href");
if(!h||h.charAt(0)!=="/"){return
}var i=h.indexOf("lightbox=");
if(i<=0||("?"!==h.charAt(i-1)&&"&"!==h.charAt(i-1))||$("body").hasClass("templ-searchresultpage")){return
}var g=getQueryParamValue(h,"lightbox");
g=decodeURIComponent(g);
i=g.indexOf("?");
if(i>0){g=g.substr(0,i)+".html?n=true&"+g.substr(i+1)
}else{g+=".html?n=true"
}$(this).click(function(){f(g,false,null,null,null,this);
return false
})
})
});
var MutationObserver;
$(document).on("if6_page_ready",function(){function f(h){var i=$("body").data("btableCondition")||{};
var g=h.attr("class");
i[g]={};
var j=[];
h.find("tr.tableroweven, tr.tablerowodd, tr.tableheader").not(".tablecampaign").each(function(k){var l="";
if($(this).is(".opened")){l+=" opened"
}if($(this).is(".closed")){l+=" closed"
}if($(this).is(".invisible")){l+=" invisible"
}if($(this).is(".visible")){l+=" visible"
}if($(this).is(".depot-opened")){l+=" depot-opened"
}j[k]=l
});
i[g]={rowConditions:j};
$("body").data("btableCondition",i)
}function a(j){var h=j.attr("class");
var l=$("body").data("btableCondition");
if(l&&l[h]){var g=j.find("tr.tableroweven, tr.tablerowodd, tr.tableheader").not(".tablecampaign");
var m=l[h].rowConditions;
var k;
for(k=0;
k<m.length;
k++){$(g[k]).addClass(m[k])
}}}$(".btable.selfRestoringTableCondition").not(function(){return $(this).closest(".ajstep-replace").length>0
}).each(function(){a($(this));
var g={attributes:true,attributeFilter:["class"]};
var i=function(j){j.forEach(function(l){if(l.type==="attributes"&&l.attributeName==="class"){var k=$(l.target).closest(".btable");
f(k)
}})
};
var h=new MutationObserver(i);
$(this).find("tr.tableroweven, tr.tablerowodd, tr.tableheader").not(".tablecampaign").each(function(){h.observe(this,g)
})
});
function e(g){g.find("td").each(function(){if($(this).find(".ficon").length>0){if($(this).find(".icon-if5_symbol_down, .icon-if5_symbol_up").length>0){$(this).addClass("td-clickable")
}}else{$(this).addClass("td-clickable")
}})
}function b(h){var g;
if(h.hasClass("tablerowodd")){g=h.prevUntil("tr:not(.tablerowodd)").last()
}else{if(h.hasClass("tableroweven")){g=h.prevUntil("tr:not(.tableroweven)").last()
}}return g
}function d(){$(".btable.row-clickable-except tr.tr-clickable").each(function(){$(this).removeClass("openRow goToInfo openMainRow");
if(($(this).hasClass("tablerowodd")&&$(this).prev("tr").hasClass("tablerowodd"))||($(this).hasClass("tableroweven")&&$(this).prev("tr").hasClass("tableroweven"))){var g=b($(this));
if(g.hasClass("openRow")){$(this).addClass("openMainRow")
}else{if($(this).find(".icon-if5_symbol_banking_6:visible").length>0){$(this).addClass("goToInfo")
}}if(g.hasClass("goToInfo")&&$(this).find(".icon-if5_symbol_banking_6:visible").length>0){$(this).addClass("goToInfo")
}}else{if($(this).find(".icon-if5_symbol_down:visible, .icon-if5_symbol_up:visible").length>0){$(this).addClass("openRow")
}else{if($(this).find(".icon-if5_symbol_banking_6:visible").length>0){$(this).addClass("goToInfo")
}}}})
}var c=$(".btable.row-clickable-except tr.tablerowodd, .btable.row-clickable-except tr.tableroweven");
e(c);
c.addClass("tr-clickable").not(function(){var g=this.clickHandlerAdded;
this.clickHandlerAdded=true;
return g
}).on("click","td.td-clickable",function(j){switch(j.target.tagName){case"INPUT":break;
case"SPAN":if(!$(j.target).hasClass("checkbox")&&!$(j.target).hasClass("radio")){return true
}break;
default:var k=$(this).closest(".goToInfo");
if(k.length>0){var i=k.find(".ficon.icon-if5_symbol_banking_6 input:visible, a.ficon.icon-if5_symbol_banking_6:visible")[0];
i.click();
return false
}if($(j.target).is(".ficon.icon-if5_symbol_down, .ficon.icon-if5_symbol_up")){return true
}var h=$(this).closest(".openMainRow");
if(h.length>0){var l=b(h);
l.find(".ficon.icon-if5_symbol_down:visible, .ficon.icon-if5_symbol_up:visible").click();
return false
}var g=$(this).closest(".openRow");
if(g.length>0){g.find(".ficon.icon-if5_symbol_down:visible, .ficon.icon-if5_symbol_up:visible").click();
return false
}break
}});
d();
$(window).resize(function(){d()
})
});
$(document).on("if6_tablecampaign",function(){$(".cbox-banking .campaign").each(function(){var d=$(this);
$(this).find(".campaign-top").not(function(){var e=this.click_added;
this.click_added=true;
return e
}).on("click",function(){d.toggleClass("campaign-visible");
if(d.hasClass("campaign-visible")){d.attr("aria-expanded","true")
}else{d.attr("aria-expanded","false")
}$(this).blur();
return false
});
d.attr("aria-expanded","false");
var a=$(this).attr("data-campref");
var b=$(this).attr("data-camprefcol");
if(!a){return
}var c=new RegExp("\\b"+a.replace(/\*/g,"\\*")+"\\b");
$(this).closest(".cbox-banking").find(".btableblock .btable").each(function(){if(isNaN(b)){return
}var f,h=0,e,g,j;
for(f=0;
f<this.rows.length;
++f){g=false;
if(this.rows[f].cells.length>h){h=this.rows[f].cells.length
}if(this.rows[f].cells.lenght<=b){continue
}if(c.test(this.rows[f].cells[b].innerHTML)){g=true
}else{j=$(this.rows[f].cells[b]).find(".iban").text();
if(j){if(j===a){g=true
}else{j=j.replace(/ /g,"");
if(j===a){g=true
}else{if(j.substr(-10)===String("000000000"+a).substr(-10)){g=true
}}}}}if(g){e=this.insertRow(f+1);
if(e){$(e).addClass("tablecampaign").html('<td colspan="'+h+'"></td>');
$(e).find("td").append(d.detach())
}b=null;
break
}}})
})
});
$(document).on("if6_page_ready",function(){$(document).trigger("if6_tablecampaign")
});
$(document).on("if6_page_ready",function(){function a(k){var f=k.children().first();
f.css({width:"100%"});
var d=f.width();
var l=f.find(".bcontent:visible");
if(l.css("minWidth")&&parseInt(l.css("minWidth"),10)!==0){var m=parseInt(l.css("minWidth"),10);
var j=parseInt(d/m,10);
var h=l.length;
if(h<j){j=h
}var i=d/j;
l.add(".bcontent.error").css({width:i})
}else{var e=parseFloat(l.css("width"));
var g=Math.floor(d/e,10);
var n=g*e;
k.children().first().css({width:n});
k.addClass("width_reduced")
}}function c(h){var f=h.find(".carousel_play .left");
var l=h.find(".carousel_play .right");
var i=h.find(".bcontent:visible");
var d=h.children().first().width();
if(i.length>0){var e=i.length*parseFloat(i.css("width"));
var k=h.children().first().scrollLeft();
if(k<1){f.addClass("disabled")
}else{f.removeClass("disabled")
}if(k>=(Math.floor(e,10)-Math.ceil(d))){l.addClass("disabled")
}else{l.removeClass("disabled")
}}else{f.addClass("disabled");
l.addClass("disabled")
}if(h.has("width_reduced")){var g=h.width();
var j=(g-d)/2;
f.css({paddingLeft:j+"px"});
l.css({paddingRight:j+"px"})
}}function b(d){$(".bcarousel").each(function(){if(this.windowWidth&&this.windowWidth===window.innerWidth){return
}this.windowWidth=window.innerWidth;
a($(this));
if(d===true){var f=$(this).find(".carousel_play");
if(f&&f.length<=0){var e='<div class="carousel_play"><span class="left" onclick="$(this).closest(\'.bcarousel\').trigger(\'carousel-prev\');"></span><span class="right" onclick="$(this).closest(\'.bcarousel\').trigger(\'carousel-next\');"></span></div>';
$(this).append(e)
}}$(this).children().first().animate({scrollLeft:0},0,"easeInOutExpo");
c($(this))
})
}$(".bcarousel").not(function(){var d=this.handlerAttached;
this.handlerAttached=true;
return d
}).on("swiperight",function(){$(this).trigger("carousel-prev")
}).on("swipeleft",function(){$(this).trigger("carousel-next")
}).on("carousel-next",function(){var d=$(this);
var f=d.children().first();
var e=f.scrollLeft()+Math.round(f.width());
f.animate({scrollLeft:e},{easing:"easeInOutExpo",duration:500,complete:function(){c(d)
}})
}).on("carousel-prev",function(){var d=$(this);
var f=d.children().first();
var e=f.scrollLeft()-Math.round(f.width());
f.animate({scrollLeft:e},{easing:"easeInOutExpo",duration:500,complete:function(){c(d)
}})
}).on("reorganize-elements",function(){$(this).find(".bcontent.error").removeClass("visible");
$(this).children().first().animate({scrollLeft:0},0,"easeInOutExpo");
var d=$(this).find(".bcontent:visible").length;
if(d===0){$(this).find(".bcontent.error").addClass("visible")
}c($(this))
});
b(true);
$(window).not(function(){var d=this.bcarouselAttached;
this.bcarouselAttached=true;
return d
}).on("resize",b)
});
$(document).on("if6_page_ready",function(){$("select[data-json]").not(function(){var a=this.multiline_added;
this.multiline_added=true;
return a
}).each(function(){var f=$(this);
var k=f.get(0);
var d=f.parent();
var i=null;
function h(){var q=k.value;
var p=f.data("json");
var o="";
if(q&&q!==""){i.html(d.find('div[data-value="'+q+'"]>*:first-child').clone())
}if(q&&q!==""&&p&&p.entries[q]&&p.entries[q].details){o=p.entries[q].details
}d.find(".bselected-details").remove();
if(o!==""){d.append('<div class="bselected-details">'+o+"</div>")
}}f.on("refresh-selectbox",function(){var o=f.data("json");
d.find("div[data-value]").each(function(){var p="",q=$(this).data("value");
if(o.entries[q]){p=o.entries[q].content;
if(o.entries[q].onselectUrl){p+='<a tabindex="-1" href="'+o.entries[q].onselectUrl+'"></a>'
}}if(p&&p!==""){$(this).html(p)
}});
h();
f.find("option").each(function(){var p=d.find('div[data-value="'+this.value+'"]').parent();
if(this.disabled){p.addClass("disabled").attr("aria-disabled","true")
}else{p.removeClass("disabled").removeAttr("aria-disabled")
}if($(this).css("display")==="none"){p.addClass("hide")
}else{p.removeClass("hide")
}});
if(f.is("[disabled]")){i.attr("tabindex","-1").attr("aria-disabled","true")
}else{i.attr("tabindex","0").removeAttr("aria-disabled")
}$(document).trigger("if6_page_ready");
if(o.onloadUrl){$.ajax({method:"GET",url:o.onloadUrl,timeout:20000}).done(function(p){f.data("json",p);
f.trigger("refresh-selectbox")
})
}});
var g=f.data("json");
if(!g.type||!g.type.match(/^select-/)||!g.entries||!k.options.length){return
}var b=false;
function m(p,o){var s,t="",v,u,q;
for(s=0;
s<p.length;
++s){u=p.eq(s);
v=u.get(0);
if("OPTION"===v.tagName){b=b||v.selected;
t+='<li id="'+o+"-"+s+'" role="option"><div data-value="'+v.value+'"><span class="default">'+u.html()+"</span></div></li>"
}else{if("OPTGROUP"===v.tagName){t+="<li>";
q=u.attr("label");
if(q&&q!==""){t+='<span class="group">'+u.attr("label")+"</span>"
}t+="<ul>";
t+=m(u.children(),o+"-"+s);
t+="</ul></li>"
}}}return t
}var n="bsml"+Date.now();
var a,c=null;
if(f.attr("id")){var j=d.siblings("[for="+f.attr("id")+"]");
if(j&&j.length>0){if(!j.attr("id")){j.attr("id",f.attr("id")+"lbl")
}c=j.attr("id");
j.on("click",function(){i.focus();
return false
})
}}a='<div class="bselect-list"><div role="button" class="active" aria-haspopup="listbox" id="'+n+'-button" aria-labelledby="'+(c?c+" ":"")+n+'-button"></div>';
a+='<ul role="listbox" tabindex="-1"'+(c?' aria-labelledby="'+c+'"':"")+' class="'+f.attr("class")+'">';
a+=m(f.children(),n);
a+="</ul></div>";
d.addClass("bselect-multiline").addClass(g.type).append(a);
i=d.find(".bselect-list>.active");
function l(){d.find("li.preselected").each(function(){var r=d.find(".active+ul").scrollTop();
var p=d.find(".active+ul").height();
var q=$(this).position().top;
q+=parseInt($(this).css("borderTopWidth"),10);
var o=$(this).height();
if(0===q){$(this).parent().parent("li").each(function(){q+=$(this).position().top
})
}if(q<0){r+=q;
d.find(".active+ul").scrollTop(r)
}else{if(q+o>p){r+=q+o-p;
d.find(".active+ul").scrollTop(r)
}}})
}d.find("li>div").on("click",function(q){if(q&&q.target&&"A"===q.target.tagName){return true
}var p,o=$(this).attr("data-value");
for(p=0;
p<k.options.length;
++p){if(k.options[p].value===o){if(p!==k.selectedIndex){k.selectedIndex=p;
f.trigger("change")
}break
}}d.removeClass("visible");
i.removeAttr("aria-expanded").focus();
return false
}).on("mouseenter",function(){if(d.hasClass("visible")){d.find("li.preselected").removeClass("preselected").removeAttr("aria-selected");
$(this).closest("li").addClass("preselected").attr("aria-selected","true");
l()
}});
f.on("change",function(){var p=d.find('div[data-value="'+this.value+'"]').eq(0),o;
if(p&&p.length){d.removeClass("visible");
i.removeAttr("aria-expanded");
h();
o=p.find("a").get(0);
if(o){window.setTimeout(function(){o.click()
},100)
}else{var q=$(this).data("following-submit");
if(q){if(q.is("a")){q.click()
}else{q.find("input").click()
}return false
}}}});
function e(){$(".bselect-multiline").removeClass("visible").find(".bselect-list>.active").removeAttr("aria-expanded");
d.find("li").removeClass("preselected").removeAttr("aria-selected");
var o=d.find('div[data-value="'+k.value+'"]').eq(0);
o.parent().addClass("preselected").attr("aria-selected","true");
d.addClass("visible");
d.find(".active+ul").attr("aria-activedescendant",o.parent().attr("id")).focus();
i.attr("aria-expanded","true");
l()
}i.on("click",function(){if(d.hasClass("visible")){d.removeClass("visible");
i.removeAttr("aria-expanded")
}else{e()
}return false
});
d.find(".active+ul").on("blur",function(){if(!k.blur_timeout){k.blur_timeout=window.setTimeout(function(){d.removeClass("visible");
i.removeAttr("aria-expanded");
k.blur_timeout=null
},300)
}}).on("focus",function(){if(k.blur_timeout){window.clearTimeout(k.blur_timeout);
k.blur_timeout=null
}});
d.find(".active, .active+ul").on("keydown",function(p){var o,q=d.find("div[data-value]").not(function(){return $(this).parent().hasClass("disabled")
});
switch(p.which){case 9:case 10:case 13:case 27:if(d.hasClass("visible")){d.find("li.preselected>div").click()
}return(p.which===9);
case 32:if(!d.hasClass("visible")){e()
}return false;
case 38:if(d.hasClass("visible")){for(o=1;
o<q.length;
++o){if(q.eq(o).parent().hasClass("preselected")){q.eq(o).parent().removeClass("preselected").removeAttr("aria-selected");
q.eq(o-1).parent().addClass("preselected").attr("aria-selected","true");
d.find(".active+ul").attr("aria-activedescendant",q.eq(o-1).parent().attr("id"));
i.html(q.eq(o-1).find(">*:first-child").clone());
l();
break
}}}else{e()
}return false;
case 40:if(d.hasClass("visible")){for(o=0;
o<q.length-1;
++o){if(q.eq(o).parent().hasClass("preselected")){q.eq(o).parent().removeClass("preselected").removeAttr("aria-selected");
q.eq(o+1).parent().addClass("preselected").attr("aria-selected","true");
d.find(".active+ul").attr("aria-activedescendant",q.eq(o+1).parent().attr("id"));
i.html(q.eq(o+1).find(">*:first-child").clone());
l();
break
}}}else{e()
}return false
}return true
});
f.trigger("refresh-selectbox");
f.attr("tabindex","-1");
f.attr("aria-hidden","true")
})
});
$(document).on("if6_page_ready",function(){$(".textarea-count").not(function(){var a=this.textcount_added;
this.textcount_added=true;
return a
}).each(function(){var h=$(this),b=h.find("span"),d=h.closest(".bline"),g=d.find("textarea"),a=d.find("label"),f=parseInt(b.text(),10),e=g.data("counter-visible-chars"),c=(e!==undefined);
g.attr("rows","2");
g.on("keyup change",function(){var k=[g,h,a],m,l;
l=f-g.val().length;
for(m=0;
m<k.length;
m++){k[m].toggleClass("error",(g.val().length>f))
}b.text(l);
if(c){h.toggleClass("not-visible",(l>e))
}function n(i){var o=parseInt(g.css("maxHeight"),10);
if(i>=o){g.css({height:o}).addClass("overflow")
}else{g.css({height:i}).removeClass("overflow")
}}g.css("height","auto");
var j=g.prop("scrollHeight");
if(j!==0){n(j)
}else{setTimeout(function(){var i=g.prop("scrollHeight");
if(i!==0){n(i)
}},500)
}}).trigger("change")
})
});
$(document).on("if6_page_ready",function(){$("input[data-json]").not(function(){var a=this.updatecheck_added;
this.updatecheck_added=true;
return a
}).each(function(){var b=$(this);
var a=b.data("json");
if(!a.type||a.type!=="button-updatecheck"){return
}b.on("refresh-updatecheckbutton",function(){var d=b.data("json");
var c=d.updateUrl;
if(d.timeout!==undefined){window.setTimeout(function(){if(b.closest("body, .ajstep-start").length<=0){return
}if(c){$.ajax({method:"GET",url:c,timeout:20000}).done(function(e){b.data("json",e);
b.trigger("refresh-updatecheckbutton")
})
}else{b.click()
}},d.timeout)
}});
b.trigger("refresh-updatecheckbutton")
})
});
IF6.findButton=function(b){var a=$(b);
if(a.is("input")){if(a.parent().hasClass("ficon")||a.closest(".buttonline").length>0){return a.parent()
}}return a
};
IF6.hideButton=function(a){IF6.findButton(a).hide()
};
IF6.showButton=function(a){IF6.findButton(a).show()
};
IF6.disableButton=function(a){$(a).attr("disabled","disabled");
IF6.findButton(a).addClass("disabled")
};
IF6.enableButton=function(a){$(a).attr("disabled",null);
IF6.findButton(a).removeClass("disabled")
};
var SLURI;
IF6.urlutil={webviewSelector:"webview",resetWorkflowParameter:"n",isExternal:function(a){return(typeof a==="string")&&(a.indexOf(":/")>-1)
},isInternal:function(a){return(typeof a==="string")&&!this.isExternal(a)
},endsWith:function(b,a){return(b.length>=a.length)&&(b.indexOf(a,b.length-a.length)!==-1)
},convertUrl:function(b){var c;
var e=new SLURI(window.location.href);
var a=this.isInternal(b);
if(a){if((typeof window.location.href==="string")){if(window.location.href.indexOf("http://localhost")!==0&&window.location.href.indexOf("https://localhost")!==0){if((typeof CQ!=="undefined")||(window.location.href.indexOf(".cqa.")>=0)){if(b.indexOf("/cqa")!==0){b="/cqa"+b
}}}}var d=new SLURI(b,window.location.href);
if(e.selectors.has(this.webviewSelector)&&!d.selectors.has(this.webviewSelector)){d.selectors.append(this.webviewSelector)
}if((d.extension==="html")&&!d.searchParams.has(this.resetWorkflowParameter)){d.searchParams.set(this.resetWorkflowParameter,"true")
}c=d.toString()
}else{c=b
}return c
}};
var getQueryParamValue;
$(document).on("if6_page_ready",function(){if(!$("html").hasClass("webview")){return
}var e=false;
var b=false;
var c=null;
var a=window.location.search;
var d=getQueryParamValue(a,"wstart")==="true";
if($(".templ-bankingpage, .templ-bankingstartpage").length>0){$(".bgroup2 > *").each(function(){if(!$(this).closest(".if6_section").hasClass("ajstep-replace")){if($(this).find("input").data("iconbar")==="micronavback"){e=true
}if($(this).find("input").data("iconbar")==="back"){b=true
}c=$(this).get(0)
}});
if((c&&!d)||e||b){$("body").addClass("backbutton_visible");
if(e||b){$("body").addClass("webview-micronav")
}if(c.tagName==="DIV"&&c.firstChild&&c.firstChild.tagName==="INPUT"){c=c.firstChild
}else{if(c.tagName!=="A"){c=null
}}$(".back-button a").data("webview-button",c);
if(c){$(".back-button a").not(function(){var f=this.clickHandlerAdded;
this.clickHandlerAdded=true;
return f
}).click(function(){var f=$(this).data("webview-button");
if(!f){return true
}if($(f).data("iconbar")==="micronavback"){$(document).trigger("hide-bcontent");
return false
}$(f).click();
return false
})
}}else{if(getQueryParamValue(a,"n")==="true"&&history.length>1&&!d){$("body").addClass("backbutton_visible")
}}}else{if(history.length>1&&!d){$("body").addClass("backbutton_visible")
}}});
var IF6_lightbox_closeicon_text;
$(function(){var a=0;
$("body").on("if6_bannercampaign",function(){$(".if6_main .smartphonebanner .smartphone-banner_outer").each(function(){var e=this;
a++;
var g=$(e).closest(".smartphonebanner");
var b=$(e).detach();
$(".if6_main").append(b);
var d;
d='<div id="lightbox_smartphonebanner'+a+'" class="if6_outer if6_lightbox"><div class="if6_inner"><a href="#" title="'+IF6_lightbox_closeicon_text+'" class="close-icon" onclick="return overlayClose(this);">'+IF6_lightbox_closeicon_text+"</a></div></div>";
$(".if6_main").append(d);
var f=g.find(".cbox-bannerbox").detach();
$("#lightbox_smartphonebanner"+a+" .if6_inner").append(f);
g.not(function(){return $(this).children().length>0
}).remove();
var i=$(e).find(".smartphone-banner_inner").attr("data-kampagne");
if(i){$("#lightbox_smartphonebanner"+a+" .if6_inner").attr("data-kampagne",i)
}i=$(e).find(".smartphone-banner_inner").attr("data-mdi");
if(i){$("#lightbox_smartphonebanner"+a+" .if6_inner").attr("data-mdi",i)
}$(document).trigger("if6_page_ready");
var h=true;
var c=($(".cbox-medium.cbox-banking, .cbox-large.cbox-banking").filter(":visible").length>0);
var j=0;
if(c){$(window).not(this.awaitingScroll).each(function(){this.awaitingScroll=true
}).scroll(function(){if(j>4){var k=($(".if6_outer.if6_lightbox .cbox-eyecatcher").filter(":visible").length>0);
if(h&&!k){var l=$(".cbox-medium.cbox-banking, .cbox-large.cbox-banking").filter(":visible").eq(-1).offset().top;
var n=$(window).height();
var m=$(window).scrollTop();
if(l<(n+m)){h=false;
$(e).find(".smartphone-banner_inner").animate({bottom:"-80px"},3000,"easeInOutExpo",function(){$(e).hide()
})
}}}j++
})
}$(e).find(".smartphone-banner_inner a").not(this.awaitingClick).each(function(){this.awaitingClick=true
}).click(function(){h=false;
$("#lightbox_smartphonebanner"+a).addClass("lightbox-visible");
$("body").addClass("lightbox_visible");
$(document).trigger("if6_page_ready");
$(e).find(".smartphone-banner_inner").hide();
return false
})
})
});
$("body").trigger("if6_bannercampaign")
});
$(document).on("imageoptimize",function(){$(".img-optimize").each(function(){var f=$(this).attr("data-imgsrc"),e=$(this).attr("data-imgtitle")||"",d=$(this).attr("data-imgalt")||"";
var b=window.devicePixelRatio||1;
var c=window.innerWidth*b;
var a="";
if(!f){return
}if(c<=768){a="res768"
}else{if(c<=1280){a="res1280"
}else{if(c<=1920){a="res1920"
}else{a="res2400"
}}}f=f.replace(/(\.img\.|\.epimgref\.)/,"$1"+a+".");
$(this).html('<img onload="this.loaded=true;$(window).resize();" src="'+f+'" alt="'+d+'" title="'+e+'" />');
$(this).removeClass("img-optimize")
})
}).on("ready if6_page_ready",function(){$(this).trigger("imageoptimize")
});
var focusBankingFormularElement;
function moveBContent(){$(".banking-container .bcontainer-content").css({marginTop:""});
var b=$(".banking-container .bcontainer-content").offset().top;
var a=$(".banking-container .bcontainer-content").closest(".if6_section").offset().top;
$(".banking-container .bcontainer-content").css({marginTop:(a-b)+"px"})
}$(document).on("if6_page_ready",function(){$(".tgroup-toggle+ul").attr("aria-expanded","false");
$(".tgroup-toggle>a").not(function(){var b=this.click_added;
this.click_added=true;
return b
}).attr("data-ajstep-disabled","true").click(function(){if(!$(this).hasClass("disabled")){var e=$(this).closest(".tgroup");
var d=e.find(".tgroup-toggle+ul");
var c=false;
if(e.hasClass("visible")){e.removeClass("visible");
d.attr("aria-expanded","false")
}else{e.addClass("visible");
c=true;
d.attr("aria-expanded","true")
}var b=this.tabIndex;
this.tabIndex=-1;
this.blur();
$(this).siblings().each(function(){this.tabIndex=b;
if(c){this.focus()
}else{this.blur()
}})
}return false
});
$(".if6_main").not(function(){var b=this.tgroup_close_added;
this.tgroup_close_added=true;
return b
}).on("click",function(b){if(b&&b.target&&($(b.target).closest(".tgroup").length<=0||$(b.target).hasClass("tgroup"))){$(".tgroup").removeClass("visible");
$(".tgroup-toggle+ul").attr("aria-expanded","false")
}});
$(".tgroup").each(function(){var b=$(this).find(".ficon[data-tgroup-mode],.ficon>input[data-tgroup-mode]");
if(b&&b.length>0){b.closest(".cbox-banking").each(function(){var d=$(this);
function c(){var e=d.find('.btableblock td input[type="checkbox"]:checked').length;
d.find(".ficon[data-tgroup-mode],.ficon>input[data-tgroup-mode]").each(function(){var i=$(this).data("tgroup-mode");
var h=$(this).closest(".ficon");
switch(i){case 1:if(1===e){h.removeClass("disabled");
h.find("input").removeAttr("disabled")
}else{h.addClass("disabled");
h.find("input").attr("disabled","disabled")
}break;
case 2:if(e>=1){h.removeClass("disabled");
h.find("input").removeAttr("disabled")
}else{h.addClass("disabled");
h.find("input").attr("disabled","disabled")
}break;
default:break
}var g=$(this).closest("ul").siblings(".tgroup-toggle");
if(g.length>0){if($(this).closest("ul").find(".ficon").length===$(this).closest("ul").find(".ficon.disabled").length){g.find(".ficon").addClass("disabled").attr("tabindex","-1");
g.closest(".tgroup").removeClass("visible")
}else{g.find(".ficon").removeClass("disabled").removeAttr("tabindex")
}}});
var f=d.find(".tgroup");
if(f.find(".ficon:visible").length>f.find(".ficon.disabled:visible").length){f.addClass("usable")
}else{f.removeClass("usable")
}return true
}c();
$(this).find('.btableblock td input[type="checkbox"]').not(function(){var e=this.tgroup_check_added;
this.tgroup_check_added=true;
return e
}).on("click blur",c)
})
}else{$(this).addClass("usable")
}});
$(".micronav li a").attr("data-ajstep-complete-event","show-bcontent");
if($(".lightbox-visible").length<=0){var a=$(".show-bcontent-completed .bcontainer-content");
if(a&&a.length>0){focusBankingFormularElement(a)
}else{focusBankingFormularElement($(".bcontainer-micronav"))
}}if($("body").hasClass("show-bcontent")){moveBContent()
}$(".block.success-msg, .block.failure-msg").each(function(){var b=$(this);
var c=b.closest(".if6_lightbox>.if6_inner");
if(b.closest(".bcontainer-content").css("position")==="absolute"){$(".if6_section").not(".ajstep-replace").first().find(".parsys").prepend(b.detach())
}$("html,body").animate({scrollTop:0},750,"easeInOutExpo");
if(b.hasClass("autohide")){window.setTimeout(function(){var e=b.find(".bline");
var d=e.css("height");
e.animate({marginTop:"-"+d},800,"swing",function(){b.remove();
c.scroll()
})
},4000)
}})
});
$(document).on("show-bcontent",function(){if($(".banking-container .bcontainer-content").css("position")!=="absolute"){return
}moveBContent();
$("body").addClass("show-bcontent");
$(".bcontainer-content,.iconbarbuttons>div").animate({left:0},1500,"easeInOutExpo",function(){$("body").addClass("show-bcontent-completed");
focusBankingFormularElement($(".bcontainer-content"))
});
var b=$(".banking-container .bcontainer-content").closest(".if6_section").offset().top;
var a=b-$(".if6_iconbar").height()+10;
if(window.pageYOffset>a){$("html,body").animate({scrollTop:a},750,"easeInOutExpo")
}});
$(document).on("hide-bcontent",function(b,a){$("body").removeClass("show-bcontent show-bcontent-completed");
if(a||!b){$(".banking-container .bcontainer-content, .iconbarbuttons>div").css({marginTop:"",left:""})
}else{$(".bcontainer-content, .iconbarbuttons>div").animate({left:"110%"},1500,"easeInOutExpo")
}});
$(document).on("if6_page_ready",function(){function n(o){var r=false;
var p=o.find($("tr.tablerowodd, tr.tableroweven"));
var q=p.find($("td:nth-child(4):visible"));
if(q.length>0){r=true
}return r
}function l(q){var r,o;
if(q.hasClass("tableheader")){r=q;
o=q.closest(".btable")
}else{if(q.hasClass("btable")){r=q.find("tr.tableheader");
o=q
}else{return
}}var p=Math.floor(o.width());
r.each(function(){var s;
var u;
var t=$(this).find("td:nth-child(2)");
t.each(function(){$(this).css({width:"auto"});
u=Math.ceil(parseFloat($(this).css("width")))
});
s=Math.floor(p-u);
$(this).find("td:first-child").css({width:s})
})
}function j(o){var q=o.find("tr.tablerowodd, tr.tableroweven");
if(n(o)){q.find("td:first-child").each(function(){$(this).css("width","");
$(this).find(".finaccount").css("width","")
});
o.find("tr.tableheader td:first-child").css("width","")
}else{var u=q.find("td:first-child");
var t=q.find("td:nth-child(2)");
var s=0;
o.find("tr.tableheader td:first-child").css({width:"auto"});
u.each(function(){$(this).css({width:"auto"}).find(".finaccount").css({width:""})
});
t.each(function(){$(this).css({width:"auto"});
var v=Math.ceil(parseFloat($(this).css("width")));
if(v>s){s=v
}});
var r=Math.floor(o.width());
var p=Math.floor(r-s);
u.each(function(){$(this).css({width:p});
var v=$(this).width();
$(this).find(".finaccount").css({width:v})
});
t.each(function(){$(this).css({width:s})
})
}}function g(o){var p="aria"+Date.now();
o.find("tr.tableheader").each(function(s){var v=$(this);
var q=p+"-"+s;
var u=v.find("td:nth-child(2) .ficon.icon-if5_symbol_up input, td:nth-child(2) .ficon.icon-if5_symbol_down input, td:nth-child(2) a.icon-if5_symbol_down, td:nth-child(2) a.icon-if5_symbol_up");
v.attr({role:"heading","aria-level":"2",id:q});
var t=v.find("td:first-child");
var w=q+"-td";
t.attr("id",w);
v.find("td:nth-child(2) .ficon input, td:nth-child(2) a.ficon").attr("aria-labelledby",w);
var r="";
v.nextUntil("tr.tableheader").not("tr.tablefooter.tablerowmarked").each(function(y){var x=q+"-"+y;
r+=x+" ";
$(this).attr({role:"region",id:x,"aria-labelledby":w,"aria-level":"3"})
});
if(u.length){u.attr({"aria-expanded":"true","aria-controls":r})
}})
}function d(p){var o=p.nextUntil(".tableheader").filter(".tablefooter").not(".tablefooter.tablerowmarked");
if(p.hasClass("closed")){o.addClass("invisible");
p.nextAll(".tableheader").first().find("td").addClass("additionalSpace")
}else{if(p.hasClass("opened")){o.removeClass("invisible");
p.nextAll(".tableheader").first().find("td").removeClass("additionalSpace")
}}}function k(p){var o;
if(p){if(p.is("tr.tableroweven, tr.tablerowodd, .btable")){o=p.find(".bmessage")
}else{if(p.is("tr.tableheader")){o=p.closest(".btable").find(".bmessage")
}}}else{o=$(".bmessage")
}if(o){o.each(function(){$(this).removeClass("multiline");
if($(this).height()>(parseInt($(this).css("minHeight"),10)+5)){$(this).addClass("multiline")
}})
}}function e(q){var o=q.attr("class");
var p=$("body").data("btableCondition")||{};
p[o]={};
var s=q.find(".tableheader");
s.each(function(){var w=$.trim($(this).find("td:first-child").text().replace(/\*+/,""));
var u;
if($(this).is(".tablerowmarked:not(.opened)")||$(this).is(".closed")){u=true
}else{u=false
}var x=$(this).nextUntil(".tablefooter, .tableheader").not(".tablecampaign");
var v=x.length;
var t=[];
x.each(function(y){var z=true;
if($(this).is(".tablerowmarked:not(.opened)")||$(this).is(".closed")){z=true
}else{z=false
}t[y]=z
});
p[o][w]={headerClosed:u,numberOfRows:v,rowsClosed:t}
});
var r=$("body");
r.data("btableCondition",p)
}function h(p,q){var o=p.closest(".btable");
p.each(function(){var s=$(this);
s.removeClass("closed").addClass("opened").nextUntil(".tablefooter, .tableheader").removeClass("invisible");
s.find(".icon-if5_symbol_down input, .icon-if5_symbol_up input, a.icon-if5_symbol_down, a.icon-if5_symbol_up").attr("aria-expanded","true");
if(q){var r=p.find(".icon-if5_symbol_up:visible input");
r.focus()
}if(o.hasClass("mbf-finanzstatus-table")){d(p)
}})
}function c(q,r){q.removeClass("opened").addClass("closed").nextUntil(".tablefooter, .tableheader").addClass("invisible");
q.find(".icon-if5_symbol_down input, .icon-if5_symbol_up input, a.icon-if5_symbol_down, a.icon-if5_symbol_up").attr("aria-expanded","false");
if(r){var p=q.find(".icon-if5_symbol_down:visible input");
p.focus()
}var o=q.closest(".btable");
if(o.hasClass("mbf-finanzstatus-table")){d(q)
}}$(".btable.groupOpenCloseable tr.tableheader").not(function(){var o=this.tableheaderOpenCloseableAttached;
this.tableheaderOpenCloseableAttached=true;
return o
}).hover(function(){$(this).addClass("hover")
},function(){$(this).removeClass("hover")
}).click(function(q){if(q&&q.target){switch(q.target.tagName){case"A":case"INPUT":break;
default:var o=$(this).find("td a:visible");
var p=$(this).find("td input:visible");
if(o.length>0){o.get(0).click();
return false
}if(p.length>0){p.get(0).click();
return false
}}}});
function a(o){var p=o.attr("class");
var r=$("body").data("btableCondition");
var s=r[p];
if(s){var q=o.find(".tableheader");
q.each(function(){var B=$.trim($(this).find("td:first-child").text().replace(/\*+/,""));
var z=s[B];
if(z){var u=s[B].headerClosed;
if(u){if($(this).is(".opened")||!$(this).is(".closed")||!$(this).is(".tablerowmarked")){c($(this),false)
}}else{if($(this).is(".closed")||$(this).is(".tablerowmarked:not(.opened)")){h($(this),false)
}}var v=$(this).nextUntil(".tablefooter, .tableheader");
var C=s[B].rowsClosed;
var t=s[B].numberOfRows>0&&s[B].numberOfRows===$(this).nextUntil(".tablefooter, .tableheader").length;
var x;
var D;
for(x=0;
x<C.length;
x++){D=$(v[x]);
if(t){if(C[x]===true){D.addClass("closed");
D.removeClass("opened")
}else{if(C[x]===false){D.removeClass("closed");
D.addClass("opened")
}}}else{D.removeClass("opened closed");
if(D.hasClass("tablerowmarked")){D.addClass("closed")
}else{D.addClass("opened")
}}}}else{if($(this).is(".tablerowmarked")){c($(this),false)
}var y=$(this).nextUntil(".tablefooter, .tableheader");
var w;
var A;
for(w=0;
w<y.length;
w++){A=$(y[w]);
if(A.is(".tablerowmarked")){A.addClass("closed")
}else{A.addClass("opened")
}}}})
}}function f(o){if(!$("body").data("btableCondition")||!$("body").data("btableCondition")[o.attr("class")]){e(o)
}h(o.find("tr.tableheader"),false);
o.find("tr.tableroweven, tr.tablerowodd").removeClass("opened closed");
j(o);
k(o);
a(o);
l(o)
}var b=$(".mbf-finanzstatus-table");
var m=b.not(function(){return $(this).closest(".ajstep-replace").length>0
});
if(m.length<1){return false
}var i=m.find("tr.tableheader");
f(m);
g(m);
m.find("tr.tableroweven, tr.tablerowodd").not(function(){var o=this.openTablerowFinaccountAttached;
this.openTablerowFinaccountAttached=true;
return o
}).addClass("hoverable").click(function(q){if(q&&q.target){var o=$(q.target);
var p=$(this).find("td:first-child a, td:first-child input, td:nth-child(2) a, td:nth-child(2) input");
if(p.length>0){switch(q.target.tagName){case"A":case"INPUT":return true;
default:p.get(0).click();
return false
}}if(o.is("td:last-child div.ficon")||o.is("td:last-child a")||o.is("td:last-child input")){return true
}if($(this).hasClass("opened")){$(this).removeClass("opened");
$(this).addClass("closed")
}else{if($(this).hasClass("closed")){$(this).removeClass("closed");
$(this).addClass("opened")
}}e($(this).closest(".mbf-finanzstatus-table"));
return false
}});
i.find(".icon-if5_symbol_down").not(function(){var o=this.openHeaderFintableAttached;
this.openHeaderFintableAttached=true;
return o
}).data("ajstep-disabled","true").click(function(){var o=$(this).closest(".tableheader");
h(o,true);
l(o);
e(o.closest(".mbf-finanzstatus-table"));
return false
});
i.find(".icon-if5_symbol_up").not(function(){var o=this.closeHeaderFintableAttached;
this.closeHeaderFintableAttached=true;
return o
}).data("ajstep-disabled","true").click(function(){var o=$(this).closest(".tableheader");
c(o,true);
l(o);
e($(this).closest(".mbf-finanzstatus-table"));
return false
});
m.data("lastWindowWidth",$(window).width());
$(window).not(function(){var o=this.resizeFinaccountAttached;
this.resizeFinaccountAttached=true;
return o
}).resize(function(){window.clearTimeout(window.finaccountTimerId);
window.finaccountTimerId=window.setTimeout(function(){var p=$(window).width();
var o=m.data("lastWindowWidth");
if(o!==p){f(m)
}m.data("lastWindowWidth",p)
},500)
})
});
$(function(){$("body").on("if6_kmmstat",function(){var a=$(".cbox.cbox-campaign.cbox-small.kmm .description").attr("data-kampagne");
if(a){$(".cbox.cbox-campaign.cbox-small.kmm").attr("data-kampagne",a);
$(".cbox.cbox-campaign.cbox-small.kmm .description").removeAttr("data-kampagne")
}a=$(".cbox-campaign.cbox.cbox-large.kmm .image").attr("data-kampagne");
if(a){$(".cbox-campaign.cbox.cbox-large.kmm").attr("data-kampagne",a);
$(".cbox-campaign.cbox.cbox-large.kmm .image").removeAttr("data-kampagne")
}$(".cbox-campaign.cbox.cbox-small.mdi").each(function(){a=$(this).find(".description").attr("data-mdi");
if(a){$(this).attr("data-mdi",a);
$(this).find(".description").removeAttr("data-mdi")
}});
$(".cbox-campaign.cbox.cbox-large.mdi").each(function(){a=$(this).find(".image").attr("data-mdi");
if(a){$(this).attr("data-mdi",a);
$(this).find(".image").removeAttr("data-mdi")
}})
});
$("body").trigger("if6_kmmstat")
});
IF6.refreshSessions=function(){var a=$("#tdgpixel");
if(a.length>0){var b=a.attr("data-src-orig");
if(!b){b=a.attr("src");
a.attr("data-src-orig",b)
}a.attr("src",b+"&refresh="+$.now())
}if(typeof setSessionTimeout==="function"){setSessionTimeout()
}};
function editTeaserRef(a){var b=jQuery(a.el.dom).children("div").eq(0).attr("ref");
if(b!=="."){b=b.replace(/\/jcr:content$/,"");
window.location.href=encodeURI((b+".html?origin="+window.location.href))
}}$(function(){if($(".cbox-market").length>0){var a={".GDAXI":[1,"DAX"],".MDAXI":[2,"MDAX"],".DJI":[3,"Dow Jones"]};
$.ajax({url:$(".market-table").data("url"),cache:false,timeout:1500,async:false,dataType:"json"}).done(function(j){var k,g,n,o,b,p,f,e,d,h,c,l,q;
function m(i){return !(i||i==="0"||i===0)
}if(j){if(j.antworten){l=true;
for(k=0;
k<3;
++k){e=j.antworten.antwort_12[k];
if(e!==null){g=e.STD_Symbol;
q=a[g];
if(q!==null){b=q[0];
n=q[1];
o=e.STD_Price;
p=e.STD_DiffP;
f=e.STD_PriceTimeDateFull;
if(m(n)||m(o)||m(p)||m(f)){l=false
}else{if(p.length>0){d=p.charAt(0)
}h=null;
if(d==="+"){h="plus"
}if(d==="-"){h="minus"
}if(f.length>0){f=f.substr(0,e.STD_PriceTimeDateFull.lastIndexOf(":"))+" Uhr";
f=f.replace(/\.20/,".")
}c=".market_entry"+b;
$(".market_label",c).text(n);
$(".market_val",c).text(o);
$(".market_tend span",c).text(p);
if(h!==null){$(".market_tend span",c).addClass(h)
}$(".market_time",c).text(f)
}}else{l=false
}}}if(l){$(".market-table").not(".market-editmode").parent().addClass("data-loaded")
}else{$(".market-table").parent().find(".market-invalid-author").show()
}}}})
}});
$(function(){if($("#head_ftsearch").length&&$("#search").length){var a={minChars:3,saytResultsClass:".sayt-results",sinvestorResultsClass:".sinvestor-results"};
var c=function(){jQuery(a.saytResultsClass).hide();
jQuery(a.sinvestorResultsClass).hide()
};
var b=function(){if($(a.saytResultsClass).children().length>0){jQuery(a.saytResultsClass).show()
}if($(a.sinvestorResultsClass).children().length>0){jQuery(a.sinvestorResultsClass).show()
}};
var d={serviceUrl:window.location.pathname.replace(/(?:\.external)?\.[a-z]+$/i,"")+".autosuggest.json",paramName:"q",forceFixPosition:true,minChars:a.minChars,appendTo:".autocomplete-suggestions-wrapper",maxHeight:400,zIndex:2100,triggerSelectOnValidInput:false,containerClass:"autocomplete-suggestions",showNoSuggestionNotice:false,formatResult:function(e){return e.data
},deferRequestBy:200,params:{autosuggest_count:jQuery("#head_ftsearch").attr("data-autosuggest_count"),_charset_:"UTF-8"},noCache:false,onSearchStart:function(e){e.q=$.trim(e.q);
if($.trim(e.q).length<a.minChars){return false
}},onSelect:function(){var e=$(this).closest("form");
if(e.find(".srcIsAutosuggest").length===0){e.append("<input type='hidden' name='src_auto' class='srcIsAutosuggest' value='true'/>")
}e.submit()
},onHide:function(e){c();
e.parent().hide()
},beforeRender:function(e){b()
}};
jQuery("#search").devbridgeAutocomplete(d);
c();
jQuery("#search").instantResults();
$(".if6_main").on("click",function(f){if($(f.target).parents("#head_ftsearch").length===0){c();
if(jQuery("#search").devbridgeAutocomplete()!==undefined){jQuery("#search").devbridgeAutocomplete().hide()
}}})
}});
(function(a){a.instantResults=function(g,r){var j=this;
j.onChangeInterval2=null;
var l=a("#head_ftsearch");
var d={visibilityIndicatorClass:"sayt-display-detect",containerClass:"sayt-container",containerId:"sayt-container",resultsClass:"sayt-results",resultsHeadline:l.attr("data-instantresults_resultsHeadline"),instantresultsCount:l.attr("data-instantresults_count"),instantresultsShowAllResults:l.attr("data-instantresults_showAllResults"),sinvestorInstId:(l.attr("data-sinvestor_instid")!==undefined)?l.attr("data-sinvestor_instid"):"",sinvestorInstantresultsCount:l.attr("data-sinvestor_instantresults_count"),sinvestorLinkDekaFonds:l.attr("data-sinvestor_link_deka_fonds"),sinvestorLinkDekaZertifikate:l.attr("data-sinvestor_link_deka_zertifikate"),sinvestorUrl:l.attr("data-sinvestor_url"),sinvestorResultsClass:"sinvestor-results",sinvestorShowAllResults:l.attr("data-sinvestor_showAllResults"),sinvestorNameshares:l.attr("data-sinvestor_name_shares"),sinvestorNamebonds:l.attr("data-sinvestor_name_bonds"),sinvestorNamefunds:l.attr("data-sinvestor_name_funds"),sinvestorNamecerts:l.attr("data-sinvestor_name_certs"),minChars:3,deferRequestBy:200};
var i=this;
i.settings={};
var o=a(g);
var q=0;
var k="";
var p=function(t){return String(t).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
};
i.reset=function(){k=""
};
var n=function(s,t){jQuery.ajax({url:window.location.pathname.replace(/(?:\.external)?\.[a-z]+$/i,"")+".sayt.json",dataType:"json",data:{q:s.val(),seq:++q,instantresults_count:i.settings.instantresultsCount,_charset_:"UTF-8"},timeout:1000,success:function(z){if((z.seq!==undefined)&&(z.seq===q)){var x="";
if((z.results!==undefined)&&Array.isArray(z.results)&&(z.results.length>0)){var u=[];
a.each(z.results,function(A,C){var B='<li class="searchresult-item" id="sayt-'+p(A)+'">';
if(C.url){if(C.title){B+="<h3>"+p(C.title)+"</h3>"
}if(C.descr){B+="<p>"+p(C.descr)+"</p>"
}B+='<a href="'+p(C.url)+'"';
if(C.target){B+=' target="'+p(C.target)+'"'
}if(C.elevated){B+=' data-elevated="'+p(C.elevated)+'"'
}if(C.url){B+=' data-externalizedUrl="'+p(C.externalizedUrl)+'"'
}if(C.externalId){B+=' data-externalId="'+p(C.externalId)+'"'
}B+=">";
B+="</a>"
}B+="</li>";
u.push(B)
});
var w=a("<div/>").text(z.q).html();
x+="<h3>"+i.settings.resultsHeadline.replace(/\%/,w)+"</h3>";
x+='<ul class="sayt-resultlist">'+u.join("")+"</ul>";
x+='<div class="sayt-all"><a href="#" onclick="$(this).closest(\'form\').submit();return false;">'+i.settings.instantresultsShowAllResults+"</a></div>"
}if(x!==""){a("."+i.settings.resultsClass,t).html(x).show()
}else{a("."+i.settings.resultsClass,t).html("").hide()
}var v=[];
var y;
a(".sayt-resultlist a",t).each(function(){y={externalId:this.getAttribute("data-externalId"),externalizedUrl:this.getAttribute("data-externalizedUrl"),elevated:this.getAttribute("data-elevated")};
v.push(y)
});
a(".sayt-resultlist a",t).click(function(){a.ajax({url:a(this).attr("href").replace(/(?:\.html)?(?:\?[\S ]*)?$/,"")+".searchresultclick.json",cache:false,data:{resultType:"SAYT",numResults:a(".sayt-resultlist a").length,results:JSON.stringify(v),queryId:a(this).closest("ul.searchresult-items").attr("data-queryId"),q:s.val(),_charset_:"UTF-8"},timeout:500,async:false,dataType:"json"})
})
}},error:function(){a("."+i.settings.resultsClass,t).html("").hide()
}})
};
var m=["shares","bonds","funds","certs"];
var f=function(t){var s=0;
if(t!==undefined){a.each(m,function(u,v){if((t[v]!==undefined)&&Array.isArray(t[v].entries)){s+=t[v].entries.length
}})
}return s
};
var b=function(w,y,z){var s="";
var x;
var u;
var v;
var t;
s+='<li><h3><a href="'+p(w[y].categoryLink)+'" target="_blank">'+p(z)+"</a></h3><ul>";
a.each(w[y].entries,function(A,B){v=B.link;
x="_blank";
if(B.deka){u="";
if(y==="funds"){u=i.settings.sinvestorLinkDekaFonds
}else{if(y==="certs"){u=i.settings.sinvestorLinkDekaZertifikate
}}if((u!==undefined)&&(u!=="")){t=new SLURI(IF6.urlutil.convertUrl(u));
if(B.isin){t.searchParams.set("isin",B.isin)
}v=t.toString();
x="_top"
}}if(v&&B.name){s+='<li class="searchresult-item">';
s+='<a href="'+p(v)+'" target="'+x+'">'+p(B.name);
if(B.isin){s+=" ("+p(B.isin)+")"
}s+="</a>";
s+="</li>"
}});
s+="</ul></li>";
return s
};
var e=function(u,v,t){var s=0;
if(!t.is(":visible")){s=1
}jQuery.ajax({url:i.settings.sinvestorUrl,dataType:"json",data:{INST_ID:i.settings.sinvestorInstId,searchfor:u.val(),maxitems:i.settings.sinvestorInstantresultsCount,mobile:s,dekafonds:1},timeout:1000,success:function(z,B,y){if(z===undefined){z={error:{code:999}}
}if(z.error===undefined){z.error={code:0}
}var w=f(z);
var x="";
var A="";
if((z.error.code===0)&&(w>0)){x+='<ul class="sinvestor-resultlist">';
a.each(m,function(C,D){if((z[D]!==undefined)&&Array.isArray(z[D].entries)&&z[D].entries.length>0){A=i.settings["sinvestorName"+D];
x+=b(z,D,A)
}});
x+="</ul>"
}if((undefined!==z.linkAllStocks)&&(((z.error.code===0)&&(w>0))||(z.error.code>0))){x+='<div class="sinvestor-all">';
x+='<a href="'+p(z.linkAllStocks)+'" target="_blank">'+p(i.settings.sinvestorShowAllResults)+"</a>";
x+="</div>"
}if(x!==""){a("."+i.settings.sinvestorResultsClass,v).html(x).show()
}else{a("."+i.settings.sinvestorResultsClass,v).html("").hide()
}},error:function(){a("."+i.settings.sinvestorResultsClass,v).html("").hide()
}})
};
var c=function(s,u){clearInterval(j.onChangeInterval2);
var t=a("."+i.settings.visibilityIndicatorClass,u);
if((i.settings.instantresultsCount>0)&&t.is(":visible")){n(s,u)
}else{a("."+i.settings.resultsClass,u).html("").hide()
}if((i.settings.sinvestorInstId.length>0)&&(i.settings.sinvestorInstantresultsCount>0)){e(s,u,t)
}else{a("."+i.settings.sinvestorResultsClass,u).html("").hide()
}};
var h=function(){o.on("input propertychange keyup focus",function(v){if(v.type==="keyup"){var t=v.keyCode||v.which;
if(t===13||t===27){return
}}var s=a(this);
var u=s.parent();
if(s.val().length>=i.settings.minChars){if(k!==s.val()){clearInterval(j.onChangeInterval2);
if(i.settings.deferRequestBy>0){j.onChangeInterval2=setInterval(function(){c(s,u)
},i.settings.deferRequestBy)
}else{c(s,u)
}}}else{a("."+i.settings.resultsClass,u).html("").hide();
a("."+i.settings.sinvestorResultsClass,u).html("").hide()
}k=s.val()
})
};
i.init=function(){i.settings=a.extend({},d,r);
h()
};
i.init()
};
a.fn.instantResults=function(b){this.each(function(){if(undefined===a(this).data("instantResults")){var c=new a.instantResults(this,b);
a(this).data("instantResults",c)
}});
return this
}
}(jQuery));
$(function(){$("#head_ftsearch").on("submit",function(){var a=$("#search",$(this));
a.val(a.val().trim());
if(a.val()===""){return false
}})
});
$(function(){$(".if6_opener .ty1 .overlay>a").not(function(){return $(this).hasClass("linktext")
}).click(function(){return false
})
});
$(window).resize(function(){var v=$(".if6_openerstage").get(0);
var w=$(".if6_opener:visible .opener_image");
var h=$(".if6_opener:visible");
var o,p,n,c=w.css("position"),b,a;
var u=w.toArray(),q;
var d=h.toArray();
var f,m,l,t,j,g;
var s=function(){$(v).trigger("carousel-auto-next")
};
for(o=0;
o<3;
++o){b=false;
n=$(u[0]).find("img[src]").height()||0;
for(p=0;
p<u.length;
++p){q=$(u[p]).find("img[src]").height()||0;
f=$(u[p]).find("img[src]").get(0);
if(f&&f.loaded){b=true;
f.loaded=false
}if(q>=50&&q<n){n=q
}}a=$(d[0]).width();
if(v){if(a!==v.opener_width){b=true;
v.opener_width=a
}if(v.windowWidth&&v.windowWidth===window.innerWidth&&!b){return
}v.windowWidth=window.innerWidth;
if(v.carouseltimer){window.clearTimeout(v.carouseltimer);
v.carouseltimer=null
}}if(!n){n=null
}for(p=0;
p<u.length;
++p){if(c!=="relative"){$(d[p]).height(n);
$(u[p]).height("auto")
}else{$(d[p]).height("auto");
$(u[p]).height(n)
}}if(d.length>1){l='<div class="carousel_play"><div><span class="left" onclick="$(this).trigger(\'carousel-prev\',false);"></span><ul><li class="active" onclick="$(this).trigger(\'carousel-select\',0);"></li>';
n=0;
$(d[0]).css({left:0});
for(p=1;
p<d.length;
++p){m=$(d[p-1]).height();
if(m>n){n=m
}l+="<li onclick=\"$(this).trigger('carousel-select',"+p+');"></li>';
$(d[p]).css({left:(p*a)+"px",marginTop:-m+"px"});
$(d[p-1]).css({height:m+"px"})
}m=$(d[d.length-1]).height();
if(m>n){n=m
}l+='</ul><span class="right" onclick="$(this).trigger(\'carousel-next\',false);"></span></div></div>';
$(".if6_openerstage .if6_inner").height(n);
if($(d[0]).width()!==a){continue
}t=$(".if6_openerstage .carousel_play");
if(t.length>0){t.replaceWith(l)
}else{$(d[d.length-1]).after(l)
}if(v&&v.carouseltimer){window.clearTimeout(v.carouseltimer)
}v.carouseltimer=window.setTimeout(s,10000);
if(c==="relative"){j=$(d[0]).find(".opener_image").height();
g=j-$(".if6_openerstage .carousel_play").height();
$(".if6_openerstage .carousel_play").css({top:g+"px"})
}else{$(".if6_openerstage .carousel_play").css({top:"auto"})
}if($(".if6_openerstage .carousel_play .left").css("position")==="absolute"){var e=(n/2)*(-1);
$(".if6_openerstage .carousel_play .left,.if6_openerstage .carousel_play .right").css({top:e+"px"})
}}o=3
}});
IF6.page=IF6.page||{};
IF6.page.navigation={close:function(){var a=$("body");
if(a.hasClass("navigation_visible")){$("body").removeClass("navigation_visible");
$(".if6_navigation>a").attr("aria-expanded","false");
IF6.statistics.event({stref:"hnav-zu"})
}}};
$(function(){$("body").on("initNavigation",function(){var a=$(".if6_navigation li.active>div").length;
if(a>3){a=3
}$(".if6_navigation>div>div").css("left",-a*$(".if6_navigation>div>div").width());
$(".hnav .if6_navigation li>a").not(function(){var b=this.focus_added;
this.focus_added=true;
return b
}).focus(function(){if(this.blur_timeout){window.clearTimeout(this.blur_timeout);
this.blur_timeout=null
}$(this.parentNode).siblings(".focus").removeClass("focus hover").find(".focus").removeClass("focus");
$(this.parentNode).addClass("focus");
if($(this.parentNode.parentNode).closest("li").length<=0){$(this.parentNode).addClass("hover");
if($(this.parentNode).children("div").length>0){$("body").addClass("hnav_visible")
}else{$("body").removeClass("hnav_visible")
}}}).blur(function(){var b=this.parentNode;
this.blur_timeout=window.setTimeout(function(){var c=$(":focus");
if(!c||c.length<=0||c.closest(".if6_navigation").length<=0){$("body").removeClass("hnav_visible");
$(".if6_navigation li").removeClass("focus hover hold")
}else{if($(b).find(".focus").length<=0){$(b).removeClass("focus hover hold")
}}},200)
});
$(".hnav .if6_navigation>div>div>ul>li>div>.h2,.hnav .if6_navigation>div>div>ul>li>div ul").click(function(){$("body").removeClass("hnav_visible");
$(".if6_navigation li").removeClass("focus hover hold")
});
$(".no-touch .hnav .if6_navigation>div>div>ul>li").not(function(){var b=this.hover_added;
this.over_added=true;
return b
}).hover(function(){var b=this;
if($("body").hasClass("hnav")&&$(".iconbar").is(":hidden")){window.clearTimeout(this.hnav_timeout);
$(this).addClass("hover");
if($(".if6_navigation>div>div>ul>li.focus").length>0){this.hnav_timeout=window.setTimeout(function(){$(b).children("a").focus()
},300)
}else{this.hnav_timeout=window.setTimeout(function(){$(b).children("a").focus()
},500)
}}},function(){window.clearTimeout(this.hnav_timeout);
$(this).removeClass("hover")
});
$(".no-touch .hnav .if6_navigation>div>div>ul").not(function(){var b=this.hover_added;
this.hover_added=true;
return b
}).hover(function(){window.clearTimeout(window.hnav_timeout)
},function(c){var b=this;
window.hnav_timeout=window.setTimeout(function(){var g=$(b).offset();
var f=$(b).width();
var d=$(b).height();
if(c.pageX>=g.left&&c.pageY>=g.top&&c.pageX<=g.left+f&&c.pageY<=g.top+d){return
}$(".if6_navigation li").removeClass("focus hover hold");
$("body").removeClass("hnav_visible");
var e=$(":focus");
if(e&&e.length>0&&e.closest(".if6_navigation").length>0){e.blur()
}},300)
});
$(".no-touch .hnav .if6_navigation>div>div>ul ul>li").not(function(){var b=this.hover_added;
this.hover_added=true;
return b
}).hover(function(){if($("body").hasClass("hnav")&&$(".iconbar").is(":hidden")){if($(this).siblings(".hold").length<=0){$(this).siblings(".focus").removeClass("focus").find(".focus").removeClass("focus");
$(this).addClass("focus");
if($(this).children("div").length>0){$(this).addClass("hold")
}if($(this).siblings().children("a:focus").length>0){$(this.parentNode).closest("li").children("a").focus()
}}return false
}},function(d){var e=$(this).offset();
var c=$(this).width();
var b=$(this).height();
if(d.pageX>=e.left&&d.pageY>=e.top&&d.pageX<=e.left+c&&d.pageY<=e.top+b){return false
}if($("body").hasClass("hnav")&&$(".iconbar").is(":hidden")){if(!$(this).hasClass("hold")){$(this).removeClass("focus")
}}});
$(".no-touch .hnav .if6_navigation>div>div>ul ul").mousemove(function(e){if($("body").hasClass("hnav")&&$(".iconbar").is(":hidden")){var g,h,d,b,f=$(this).children(".hold");
if(f&&f.length>0){h=f.offset();
d=f.width();
b=f.height();
if(e.pageX>=h.left&&e.pageY>=h.top&&e.pageX<=h.left+d&&e.pageY<=h.top+b){this.hnav_startpos=[e.pageX,e.pageY];
return false
}if(this.hnav_startpos&&e.pageX>this.hnav_startpos[0]){if(!this.hnav_lastpos||e.pageX>=this.hnav_lastpos[0]){this.hnav_lastpos=[e.pageX,e.pageY];
if(e.pageY===this.hnav_startpos[1]){return false
}if(e.pageY<this.hnav_startpos[1]){g=f.find(">div>ul>li:first-child").offset();
if(e.pageY>=(this.hnav_startpos[1]+(e.pageX-this.hnav_startpos[0])*(g.top-this.hnav_startpos[1])/(g.left-this.hnav_startpos[0]))){return false
}}else{g=f.find(">div>ul>li:last-child").offset();
g.top+=b;
if(e.pageY<=(this.hnav_startpos[1]+(e.pageX-this.hnav_startpos[0])*(g.top-this.hnav_startpos[1])/(g.left-this.hnav_startpos[0]))){return false
}}}}f.removeClass("hold");
this.hnav_startpos=null;
this.hnav_lastpos=null;
if(e.pageX<h.left){f.mouseleave()
}else{if(e.pageX<=h.left+d){if(e.pageY<h.top){f.removeClass("focus");
f.prev().mouseenter()
}else{f.removeClass("focus");
f.next().mouseenter()
}}}}else{var c=$(this).children(".focus");
if(c&&c.length>0){h=c.offset();
d=c.width();
b=c.height();
if(e.pageX>=h.left&&e.pageX<=h.left+d){if(e.pageY<h.top){c.removeClass("focus");
c.prev().mouseenter()
}}}}return false
}});
$(".if6_navigation>a").click(function(){var b=$("body").hasClass("navigation_visible");
if(!b){$(".if6_navigation>div").scrollTop(0);
$(".if6_navigation div div div").removeClass("navvisible");
$(".if6_navigation li.active>div").addClass("navvisible");
var c=$(".if6_navigation li.active>div").length;
if(c>3){c=3
}$(".if6_navigation>div>div").css("left",-c*$(".if6_navigation>div>div").width());
$(this).attr("aria-expanded","true");
IF6.statistics.event({stref:"hnav-auf"})
}else{$(this).attr("aria-expanded","false");
IF6.statistics.event({stref:"hnav-zu"})
}$("body").toggleClass("navigation_visible");
return false
});
$(".if6_navigation .close-icon").click(function(){IF6.page.navigation.close();
return false
});
$("body").on("swipeleft",function(){IF6.page.navigation.close()
});
$(".if6_navigation li a+div").remove("li li li li a+div").prevAll().click(function(){$(this.parentNode).siblings().removeClass("focus").children("div").removeClass("navvisible");
if($("body").hasClass("hnav")&&$(".iconbar").is(":hidden")){$(this).focus();
return false
}$(this.parentNode).children("div").addClass("navvisible");
var b=$(".if6_navigation>div>div").offset().left;
b-=$(".if6_navigation>div>div").width();
$(".if6_navigation>div>div").css("left",b);
$(".if6_navigation>div").scrollTop(0);
return false
});
$(".if6_navigation .navtop").click(function(){$(".if6_navigation>div>div").css("left",0);
$(".if6_navigation>div").scrollTop(0);
return false
});
$(".if6_navigation a.navback").click(function(){var b=$(".if6_navigation>div>div").offset().left;
b+=$(".if6_navigation>div>div").width();
$(".if6_navigation>div>div").css("left",b);
$(".if6_navigation>div").scrollTop(0);
return false
})
});
$("body").trigger("initNavigation")
});
$(function(){$(".if6_langselect>div>span").on("click",function(){$("body").toggleClass("langselect_visible")
})
});
$(function(){$("[data-myif-async-campaign]").each(function(){var b=$(this);
if(b.is(":visible")){var a=b.data("url");
if(a.indexOf("?")===-1){a+="?t="+(new Date()).getTime()
}else{a+="&t="+(new Date()).getTime()
}$.get(a).done(function(c){if(!c.match(/\sdata-myif-async-campaign/)){if(c!==undefined){b.replaceWith(c);
window.setTimeout(function(){$(window).resize()
},1000);
$(document).trigger("if6_tablecampaign");
$("body").trigger("if6_bannercampaign");
$("body").trigger("if6_kmmstat")
}}})
}})
});
IF6.page=IF6.page||{};
IF6.page.contact={close:function(){var a=$("body");
if(a.hasClass("contact_visible")){$("body").removeClass("contact_visible");
$('.if6_contact>a[href="#"]').attr("aria-expanded","false");
IF6.statistics.event({stref:"kontakt-zu"});
$(document).trigger("contact-close")
}}};
$(function(){$('.if6_contact>a[href="#"]').click(function(){$("body").toggleClass("contact_visible");
if($("body").hasClass("contact_visible")){$('.if6_contact>a[href="#"]').attr("aria-expanded","true");
IF6.statistics.event({stref:"kontakt-auf"});
$(document).trigger("contact-open")
}else{$('.if6_contact>a[href="#"]').attr("aria-expanded","false");
IF6.statistics.event({stref:"kontakt-zu"});
$(document).trigger("contact-close")
}return false
});
$(".if6_contact .close-icon").click(function(){IF6.page.contact.close();
return false
});
$("body").on("swiperight",function(){IF6.page.contact.close()
})
});
function pagenav_statistics_send(a,c){var b=a.prevAll().length;
var d=$(".if6_section:visible .if6_inner>h6").eq(b).html();
IF6.statistics.event({stref:c,pos:b+1,titel:d})
}function pagenav_statistics(b,c){if(IF6.statistics.state.pagenav.timeout){window.clearTimeout(IF6.statistics.state.pagenav.timeout)
}if(!c||c.length===0){c=$(".if6_pagenav .pagenav li.active")
}if(c.length>0){var a=c.prevAll().length;
if(!IF6.statistics.state.pagenav.scroll["i"+a]){if(b>0){IF6.statistics.state.pagenav.timeout=window.setTimeout(pagenav_statistics,b)
}else{IF6.statistics.state.pagenav.scroll["i"+a]=Date.now();
pagenav_statistics_send(c,"iNav-view")
}}}}$(window).resize(function(){var b,c,d,a=$(".if6_section:visible .if6_inner>h6").toArray();
$(".if6_pagenav").remove();
$("body").removeClass("with-pagenav");
$(".pagenavcurrent").remove();
if(a.length<2){return
}c='<div class="if6_outer if6_pagenav"><div class="if6_inner"><ul class="pagenav'+(a.length>4?" pagenav-five":"")+'">';
for(b=0;
b<a.length&&b<5;
++b){c+="<li><div><div>"+a[b].innerHTML+"</div></div></li>"
}c+="</ul></div></div>";
d=$(".if6_breadcrumb");
if(!d||!d.length){d=$(".if6_section:visible").first()
}if(d&&d.length){d.before(c);
$("body").addClass("with-pagenav")
}$(".iconbar").append('<div class="pagenavcurrent"></div>');
$(".iconbar .pagenavcurrent").click(function(){if(!$("body").hasClass("pagenav_visible")){$(".if6_pagenav").removeClass("more-left");
var e=$(".if6_pagenav .pagenav");
e.scrollLeft(0);
e=e.get(0);
if(e){if(e.clientWidth<e.scrollWidth){$(".if6_pagenav").addClass("more-right")
}else{$(".if6_pagenav").removeClass("more-right")
}}}$("body").toggleClass("pagenav_visible")
});
$(".if6_pagenav .pagenav").scroll(function(){var e=this;
if(e.if6_pagenavScrollTimeout){window.clearTimeout(e.if6_pagenavScrollTimeout)
}e.if6_pagenavScrollTimeout=window.setTimeout(function(){var f=$(e).scrollLeft();
if(f>0){$(".if6_pagenav").addClass("more-left")
}else{$(".if6_pagenav").removeClass("more-left")
}if(f+e.clientWidth<e.scrollWidth){$(".if6_pagenav").addClass("more-right")
}else{$(".if6_pagenav").removeClass("more-right")
}},200)
});
$(window).scroll();
$(".if6_pagenav .pagenav li").click(function(){var g=$(this);
var h=g.prevAll().length;
var f=$(".if6_section:visible .if6_inner>h6").parent().parent().toArray();
var e=($(".if6_iconbar .iconbar").css("display")!=="none")?$(".if6_iconbar .iconbar").height():$(".if6_pagenav").height();
var j=Math.ceil($(f[h]).offset().top-e+parseInt($(f[h]).css("marginTop"),10)+3);
$("html,body").animate({scrollTop:j},750,"easeInOutExpo");
$("body").removeClass("pagenav_visible");
pagenav_statistics_send(g,"iNav")
})
});
function pagenav_scroll(f){var b=$(".if6_pagenav");
if(!b||!b.length){return
}var j=window.pageYOffset;
var h=$(".if6_iconbar .iconbar").css("display")!=="none";
if(h){if($(".if6_iconbar").hasClass("iconbar-fixed")){b.addClass("nav-fixed")
}else{b.removeClass("nav-fixed")
}}else{if(j<b.offset().top){b.removeClass("nav-fixed")
}else{b.addClass("nav-fixed")
}}if(j<b.offset().top){$(".if6_pagenav .pagenav li,.iconbar .pagenavcurrent").removeClass("active");
$(".iconbar .pagenavcurrent").html($(".if6_section:visible .if6_inner>h6").first().html())
}else{var d,e=$(".if6_section:visible .if6_inner>h6").parent().parent().toArray();
if(h){j+=$(".if6_iconbar .iconbar").height()
}else{j+=b.height()
}var k,m,g;
for(d=0;
d<e.length;
++d){k=$(e[d]).offset().top;
m=$(e[d]).height()+(d+1<e.length?2*parseInt($(e[d+1]).css("marginTop"),10):0);
if(!d&&$(".if6_section:visible:first-child .if6_inner h6").length){g=$(".if6_breadcrumb");
if(g&&g.length){k-=g.height();
m+=g.height()
}}if(j>=k&&j<k+m){break
}}if(d<e.length){d++;
var a=$(".if6_pagenav .pagenav li:nth-child("+d+")");
if(!a.hasClass("active")){var c=$(".iconbar .pagenavcurrent");
var l=$(".if6_section:visible .if6_inner>h6").eq(d-1).html();
$(".if6_pagenav .pagenav li").removeClass("active");
$.merge(a,c).addClass("active");
c.html(l);
if(f){pagenav_statistics(f)
}}}else{$(".if6_pagenav .pagenav li, .iconbar .pagenavcurrent").removeClass("active");
$(".iconbar .pagenavcurrent").html($(".if6_section:visible .if6_inner>h6").first().html())
}}}function pagenav_scroll_window(){pagenav_scroll(IF6.statistics.config.pagenav.delay)
}$(window).scroll(function(){pagenav_scroll_window();
if(IF6.pagenavScrollTimeout){window.clearTimeout(IF6.pagenavScrollTimeout)
}IF6.pagenavScrollTimeout=window.setTimeout(pagenav_scroll_window,200)
});
$(function(){$(".if6_buttonline .buttonline_inner").each(function(){var a,b=$(this).find(".contactsel:first");
if(b&&b.length>0){a=b.clone();
$(this).append(a);
b.addClass("hide050");
a.addClass("show050")
}$(this).find(".contactsel>a").attr("aria-expanded","false").on("click",function(){$(this.parentNode).toggleClass("visible");
if($(this.parentNode).hasClass("visible")){$(this).attr("aria-expanded","true")
}else{$(this).attr("aria-expanded","false")
}$(this).blur();
return false
})
})
});
$(window).on("resize",function(){var a,c;
a=$(".templ-bankingstartpage .cbox-small:visible").toArray();
if(a&&a.length>0){var d=$(a[0]).prevAll(".cbox-medium:visible").last();
if(d&&d.length>0){var f=$(a[0]).position();
if(f.left-d.position().left<30){$(".cbox-small").css({marginTop:""})
}else{$(a[0]).css({marginTop:d.position().top-f.top-parseInt($(a[0]).css("borderTopWidth"),10)});
var b,e;
for(c=1;
c<a.length;
++c){e=$(a[c]).position();
if(f.left!==e.left){break
}b=parseInt($(a[c-1]).css("height"),10);
f.top+=parseInt($(a[c-1]).css("marginTop"),10);
f.top+=parseInt($(a[c-1]).css("marginBottom"),10);
if(e.top<=f.top+b){break
}$(a[c]).css({marginTop:f.top+b-e.top-parseInt($(a[c]).css("borderTopWidth"),10)});
f=e
}}}}$(".if6_section,.if6_homepagearea").each(function(){var n,l,k,g,q,o,m,p,h,r;
$(this).addClass("resizing");
n=$(this).find(".cbox:visible, .if6_teaserarea .if6_teaser:visible").not(".carousel .cbox-large:visible").toArray();
for(l=0;
l<n.length;
++l){$(n[l]).height("auto")
}for(l=0;
l<n.length;
++l){g=l;
q=true;
o=parseInt($(n[g]).css("height"),10);
r=$(n[g]).hasClass("cbox-banking")&&$(n[g]).hasClass("cbox-medium");
if($(n[g]).hasClass("cbox-large")){continue
}while(q){q=false;
m=$(n[g]).offset().top;
for(k=g+1;
k<n.length;
++k){p=$(n[k]).offset().top;
if(p>m){l=k-1;
break
}h=parseInt($(n[k]).css("height"),10);
if(h>o){o=h;
r=$(n[k]).hasClass("cbox-banking")&&$(n[k]).hasClass("cbox-medium");
q=true;
break
}if(r){continue
}if(g===k-1){$(n[g]).css("height",o)
}$(n[k]).css("height",o)
}}}$(this).removeClass("resizing")
})
});
$(document).on("if6_page_ready",function(){function b(i){var k,j;
if(i.tagName==="TH"){k=i.innerHTML;
k=k.replace(/&nbsp;/g," ");
k=k.replace(/&shy;/g,"");
k=k.replace(/<div class="ficon.*div>/g,"");
k=k.replace(/<wbr><u class="wbr"><\/u>/g,"");
k=k.replace(/<\/?em>/g,"");
k=k.replace(/\n/g,"");
k=k.replace(/^\s*/,"");
k=k.replace(/\s*$/,"");
k=k.replace(/\s*<br *\/?>\s*$/,"");
k=k.replace(/\s*<br *\/?>\s*/g,"\x0A");
j=k.split("\x0A").length;
return{header:k,cnt:j}
}return null
}var f,d,c,e=$(".table table,table.kkivergleich,table.autoheader").toArray(),g,h,a;
for(f=0;
f<e.length;
++f){if(!e[f].rows||!e[f].rows[0]){continue
}g=[];
h=$(e[f]).hasClass("autoheader");
a=$(e[f]).hasClass("has-checkbox-column");
for(d=0;
d<e[f].rows[0].cells.length;
++d){g[d]=b(e[f].rows[0].cells[d])
}for(c=1;
c<e[f].rows.length;
++c){for(d=0;
d<e[f].rows[c].cells.length;
++d){if(0===d&&a){continue
}if(h&&e[f].rows[c].cells[d].tagName==="TH"){g[d]=b(e[f].rows[c].cells[d])
}else{if(e[f].rows[c].cells[d].tagName==="TD"&&d<g.length&&g[d]){e[f].rows[c].cells[d].setAttribute("data-header",g[d].header);
if(g[d].cnt>1){$(e[f].rows[c].cells[d]).addClass("lines-"+g[d].cnt)
}}}}}}});
$(document).on("if6_page_ready",function(){$("a.use_cbox_hover").not(function(){var a=this.box_ready;
this.box_ready=true;
return a
}).each(function(){var a=this;
var b=$(this).closest("div.cbox");
b.mousemove(function(i){var h=parseInt(b.css("borderRightWidth"),10);
var g=parseInt(b.css("borderTopWidth"),10);
var d=b.outerWidth();
var f=b.outerHeight();
var e=b.offset();
var c=i.pageX-e.left;
var j=i.pageY-e.top;
if((c>0&&(j>g))&&((c<(d-h))&&(j<f))){b.addClass("cbox_hover")
}else{b.removeClass("cbox_hover")
}});
b.on("click",function(d){var c=$(d.target);
if(!b.hasClass("cbox_hover")){return false
}if(c.closest("a, input, select, textarea, label[for], span.radio, span.checkbox, button").length<=0){a.click();
return false
}})
})
});
$(window).on("resize",function(){$(".if6_contactstage .cs-phone,.if6_contactstage .cs-link").removeClass("with-separator");
var b,a=$(".if6_contactstage .cs-phone:visible,.if6_contactstage .cs-link:visible").toArray();
for(b=1;
b<a.length;
++b){if($(a[b]).offset().top===$(a[b-1]).offset().top){$(a[b]).addClass("with-separator")
}}});
$(window).resize(function(){$(".carousel").each(function(){if(this.windowWidth&&this.windowWidth===window.innerWidth){return
}this.windowWidth=window.innerWidth;
if(this.carouseltimer){window.clearTimeout(this.carouseltimer);
this.carouseltimer=null
}$(this).find(".cbox:visible").height("auto");
var b=$(this).find(".cbox:visible").toArray();
if(b.length>0){$(this).removeClass("carousel-empty");
var d,c=0;
var a,e=parseInt($(b[0]).css("width"),10),g='<div class="carousel_play"><div><span class="left" onclick="$(this).trigger(\'carousel-prev\',false);"></span><ul><li class="active" onclick="$(this).trigger(\'carousel-select\',0);"></li>';
var f=this;
for(d=0;
d<b.length;
++d){a=parseInt($(b[d]).css("height"),10);
if(a>c){c=a
}}$(b[0]).css({left:0,marginTop:0});
for(d=1;
d<b.length;
++d){g+="<li onclick=\"$(this).trigger('carousel-select',"+d+');"></li>';
$(b[d]).css({left:(d*e)+"px",marginTop:-(c+parseInt($(b[d]).css("marginBottom"),10))+"px"})
}g+='</ul><span class="right" onclick="$(this).trigger(\'carousel-next\',false);"></span></div></div>';
$(this).find(".cbox:visible").css({height:c+"px"});
var h=$(this).find(".carousel_play");
if(b.length>1){if(h&&h.length>0){h.replaceWith(g)
}else{$(b[b.length-1]).after(g)
}h=$(this).find(".carousel_play");
$(this).height(c+parseInt($(h).css("height"),10));
this.carouseltimer=window.setTimeout(function(){$(f).trigger("carousel-auto-next")
},10000)
}else{if(h){h.remove()
}$(this).height(c)
}}else{$(this).find(".carousel_play").remove();
$(this).height("auto");
$(this).addClass("carousel-empty")
}})
});
$(document).on("if6_page_ready",function(){$(".accordion .accordion-head.initial-open").not(".initial-invisible").addClass("open").removeClass("initial-open").next(".parsys").fadeIn(0);
$(".accordion .accordion-head").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).toggleClass("open");
if($(this).hasClass("open")){$(this).nextAll(".parsys").fadeIn("slow");
$(window).resize()
}else{$(this).nextAll(".parsys").fadeOut("slow")
}return false
});
$(".accordion .showall").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head").not(".open").click();
$(this).closest(".accordion").find(".showmore").click();
return false
});
$(".accordion .hideall").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head.open").click();
return false
});
$(".accordion .showmore").not(function(){var a=this.accordion_added;
this.accordion_added=true;
return a
}).click(function(){$(this).closest(".accordion").find(".accordion-head.initial-invisible").fadeIn("slow");
$(this).closest(".accordion").find(".accordion-head.initial-invisible.initial-open").addClass("open").removeClass("initial-open").next(".parsys").fadeIn("slow");
$(this).closest(".accordion").find(".accordion-head.initial-invisible").removeClass("initial-invisible");
$(this).remove();
return false
})
});
$(window).on("load",function(){IF6.iconsFixedUsage={};
IF6.iconsVariableUsage={};
IF6.iconsVariableUsageList=[];
IF6.iconsPathPrefix="internetfiliale";
IF6.iconsRuleWritten={};
$(document).trigger("check-iconfont");
if(IF6.refreshIconfontRules){$(document).on("if6_page_ready",function(){$(document).trigger("check-iconfont")
})
}});
$(document).on("check-iconfont",function(){function a(i){if(i.content){var l=i.content;
if(l.charAt(0)==='"'||l.charAt(0)==="'"){l=l.substr(1,l.length-2)
}if(0===l.length){return -1
}if(1===l.length){return l.charCodeAt(0)
}if("\\"===l.charAt(0)){return parseInt(l.substr(1),16)
}}return -1
}function d(l){if(l.font){var i=/^(\d+)px.*Pictos/.exec(l.font);
if(i){return parseInt(i[1],10)
}}return -1
}function k(m){if(m.color){var i=m.color;
if(i==="red"){i="#f00"
}var l=/rgb\((\d+), *(\d+), *(\d+)\)/.exec(i);
if(l){i="000000"+Number((parseInt(l[1],10)*256+parseInt(l[2],10))*256+parseInt(l[3],10)).toString(16);
i=i.substr(i.length-6)
}else{if("#"===i.charAt(0)){if(4===i.length){i=""+i.charAt(1)+i.charAt(1)+i.charAt(2)+i.charAt(2)+i.charAt(3)+i.charAt(3)
}else{i=i.substr(1)
}}else{i="000000"
}}return i.toLowerCase()
}return null
}function j(n,i,t,q,l,v,p,m){var o,x,s,r,w="";
if(p>0&&m>=0){o=-(p*(m%16));
var y=[2,3,4,6,7,13,3872,3873,3874,3875,3876,3877,3878,3936,3937,3938,3939,3940,3941,3942,3943,3952,3953,3954,3955,3956,3957,3958,3959,3960,3961,3962,3963,3964,3965];
for(s=0;
s<y.length;
++s){if(y[s]===Math.floor(m/16)){x=-(s*p);
x+=p/50;
break
}}if(s>=y.length){return
}w+="background-position:"+o+"px "+x+"px;"
}r=k(l);
if(r){w+="background-image:url("+IF6.iconsPathPrefix+"/fonts/pictos-if-"+r+".png);"
}if(v>0){w+="background-size:"+(16*v)+"px auto;";
w+="background-repeat:no-repeat;";
w+='content:"\\a0" !important;';
if(!l.height){w+="height:"+p+"px;"
}if(!l.width){w+="width:"+p+"px;"
}}if(IF6.iconsRuleWritten[n+q]){return
}IF6.iconsRuleWritten[n+q]=true;
if(i.insertRule){try{i.insertRule(q+"{"+w+"}",t<0||t>i.cssRules.length?i.cssRules.length:t)
}catch(u){}}else{if(i.addRule){try{i.addRule(q,w,t<0||t>i.cssRules.length?i.cssRules.length:t)
}catch(u){}}}}function b(i,m){var q,p,v,o,s,n,t,l,r,u;
v=i.cssRules||i.rules;
for(q=0;
q<v.length;
++q){if(v[q].type===4){b(v[q],v[q].media.mediaText||"media");
continue
}if(!v[q].style){continue
}if(!v[q].selectorText){continue
}o=v[q].selectorText.split(",");
for(p=0;
p<o.length;
++p){if(o[p].indexOf(".no-iconfont")>=0||o[p].indexOf(".iconfonttest")>=0){continue
}u="";
n=o[p];
if(n.match(/:before$/)){u=":before"
}else{if(n.match(/:after$/)){u=":after"
}}n=n.replace(/:+(before|after)$/,"");
n=n.replace(/^\s+/,"");
r=".no-iconfont";
if(n.indexOf(".js.no-touch")>=0){n=n.replace(/.js.no-touch /,"")
}else{if(n.indexOf(".no-touch.js")>=0){n=n.replace(/.no-touch.js /,"")
}else{if(n.indexOf(".no-touch")>=0){n=n.replace(/.no-touch /,"")
}else{if(n.indexOf(".js")>=0){n=n.replace(/.js /,"")
}else{r+=" "
}}}}if(n.indexOf(":hover")>=0){n=n.replace(/:+hover/,"");
if(IF6.iconsFixedUsage[n+u]||!isNaN(IF6.iconsVariableUsage[n+u])){j(m,i,q+1,r+(o[p].replace(/^\s+/,"")),v[q].style,-1,-1,-1);
continue
}}t=d(v[q].style);
l=a(v[q].style);
if(t<0){continue
}if(l<0&&IF6.iconsFixedUsage[n+u]){l=a(IF6.iconsFixedUsage[n+u])
}if(l<0){if(!IF6.iconsVariableUsage[n+u+m]){IF6.iconsVariableUsage[n+u+m]=IF6.iconsVariableUsageList.length;
IF6.iconsVariableUsageList.push({fontsize:t,media:m,stylesheet:i,sel:n})
}}else{if(!IF6.iconsFixedUsage[n+u]){IF6.iconsFixedUsage[n+u]=v[q].style
}}j(m,i,q+1,r+(o[p].replace(/^\s+/,"")),v[q].style,t,t,l)
}}}function c(){var t,s,q,o,w,p,u,n,r,v,l;
for(t=0;
t<document.styleSheets.length;
++t){b(document.styleSheets[t],"")
}for(t=0;
t<document.styleSheets.length;
++t){w=document.styleSheets[t].cssRules||document.styleSheets[t].rules;
for(s=0;
s<w.length;
++s){if(!w[s].style){continue
}if(!w[s].selectorText){continue
}p=w[s].selectorText.split(",");
for(q=0;
q<p.length;
++q){if(0!==p[q].indexOf(".icon-")){continue
}l=a(w[s].style);
if(l>=0){r=p[q];
r=r.replace(/:+(before|after)$/,"");
r=r.replace(/^(\s+)/,"");
if($(r).length<=0){continue
}for(o=0;
o<IF6.iconsVariableUsageList.length;
++o){n=r;
if(".actioniconLink"===IF6.iconsVariableUsageList[o].sel){n=IF6.iconsVariableUsageList[o].sel
}else{if(IF6.iconsVariableUsageList[o].fontsize===IF6.iconsVariableUsageList[IF6.iconsVariableUsage[".actioniconLink:before"]].fontsize){continue
}}if(n===IF6.iconsVariableUsageList[o].sel){n=".no-iconfont "+p[q]
}else{if($(IF6.iconsVariableUsageList[o].sel+r).length<=0){continue
}n=".no-iconfont "+IF6.iconsVariableUsageList[o].sel+p[q]
}j(IF6.iconsVariableUsageList[o].media,IF6.iconsVariableUsageList[o].stylesheet,""===IF6.iconsVariableUsageList[o].media?s+1:-1,n,w[s].style,-1,IF6.iconsVariableUsageList[o].fontsize,l)
}}}}}}function h(m){var n,l,i,o;
o=m.cssRules||m.rules;
n=/^(.*\/)81%(.*Pictos.*)$/;
for(i=0;
i<o.length;
++i){if(o[i].type===4){h(o[i]);
continue
}if(!o[i].style){continue
}if(!o[i].selectorText){continue
}if(!o[i].style.font){continue
}if(o[i].selectorText.indexOf(":before")<0&&o[i].selectorText.indexOf("after")<0){continue
}l=n.exec(o[i].style.font);
if(l){o[i].style.font=l[1]+"65%"+l[2]
}}}if(IF6.refreshIconfontRules){c();
return
}var g=$(".iconfonttest span+span").width();
if(g>0&&g<20){c();
$("html").addClass("no-iconfont");
IF6.refreshIconfontRules=true
}else{var e,f=$(".iconfonttest").children().toArray();
if(2===f.length){if($(f[0]).height()!==$(f[1]).height()){for(e=0;
e<document.styleSheets.length;
++e){h(document.styleSheets[e])
}}}}$(".iconfonttest").remove()
});
$(function(){$("body,.swipe-horizontal").on("touchstart",function(b){if($(this).hasClass("swipe-horizontal")||$(this).hasClass("navigation_visible")||$(this).hasClass("contact_visible")){var a=b.originalEvent||b;
this.firstEvent={ts:Date.now(),x:a.touches[0].pageX,y:a.touches[0].pageY,velocity:0};
this.lastEvent=this.firstEvent
}else{this.lastEvent=null
}}).on("touchmove",function(f){if(!this.lastEvent){return
}var e=f.originalEvent||f;
e={x:e.touches[0].pageX,y:e.touches[0].pageY};
var b=Math.abs(this.firstEvent.x-e.x),g=Math.abs(this.firstEvent.y-e.y);
if((b>9||g>9)&&b<=g){this.lastEvent=null;
return
}var c=Date.now();
var d;
var a=c-this.lastEvent.ts;
if(a>50||!this.lastEvent.velocity){d=Math.abs(this.lastEvent.x-e.x)/a||0
}else{d=this.lastEvent.velocity
}this.lastEvent=e;
this.lastEvent.ts=c;
this.lastEvent.velocity=d;
f.preventDefault()
}).on("touchend",function(){if(!this.lastEvent){return
}if(this.lastEvent.velocity<0.3){return
}var a=this.firstEvent.x-this.lastEvent.x;
if(a<-50){$(this).trigger("swiperight")
}else{if(a>50){$(this).trigger("swipeleft")
}}})
});